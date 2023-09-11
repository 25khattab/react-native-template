import * as React from 'react';
import type {TextInput, TextInputProps} from 'react-native';
import {StyleSheet, TextInput as NTextInput} from 'react-native';

import {View} from '../View';
import {Text} from '../Text';

import {ExtendedThemeType} from '@/constants/colors';
import {useLayout} from '@/features';
import {SIZES} from '@/constants/spacing';
import { useSelectedTheme } from '@/hooks/use-selected-theme';

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {label, error, ...inputProps} = props;
  const {colors, isDark} = useSelectedTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors, isDark, error);
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.textValue}>{label}</Text>}
      <NTextInput
        ref={ref}
        placeholderTextColor={colors.lighterText}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
        style={styles.textInputContainer}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
});

const generateStyles = (
  isRTL: boolean,
  colors: ExtendedThemeType['colors'],
  dark: boolean,
  error?: string,
) =>
  StyleSheet.create({
    container: {marginBottom: SIZES.medium, rowGap: SIZES.xxSmall,},
    textInputContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      borderWidth: 1,
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.small,
      borderRadius: SIZES.medium,
      backgroundColor: colors.background,
      borderColor: error ? colors.alert : colors.border,
      writingDirection: isRTL ? 'rtl' : 'ltr',
      fontSize: SIZES.medium,
      color: colors.text,
    },
    textValueContainer: {flex: 1},
    textValue: {color: error ? colors.alert : colors.text},
    errorText: {color: colors.alert},
  });
