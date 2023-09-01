import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {useModalRef} from '../modal';
import View from '../core/View';
import Text from '../core/Text';

import {Arrow} from './icons';
import type {Option} from './options';
import {Options} from './options';

import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';

export interface SelectProps {
  value?: string | number;
  label?: string;
  disabled?: boolean;
  error?: string;
  options?: Option[];
  onSelect?: (value: string | number) => void;
  placeholder?: string;
}

export const Select = (props: SelectProps) => {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = 'select...',
    disabled = false,
    onSelect,
  } = props;
  const optionsRef = useModalRef();
  const open = React.useCallback(
    () => optionsRef.current?.present(),
    [optionsRef],
  );
  const close = React.useCallback(
    () => optionsRef.current?.dismiss({duration: 500}),
    [optionsRef],
  );
  const {colors, dark} = useTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors, dark, error);
  const onSelectOption = React.useCallback(
    (option: Option) => {
      onSelect?.(option.value);
      close();
    },
    [close, onSelect],
  );

  const textValue =
    value !== undefined
      ? options.filter((t) => t.value === value)[0]?.label ?? placeholder
      : placeholder;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          // className={`flex-row items-center justify-center border-[1px] py-3 px-2  ${borderColor} rounded-md ${bgColor} text-[16px]`}
          style={styles.touchableContainer}
          disabled={disabled}
          onPress={open}
        >
          <View style={styles.textValueContainer}>
            <Text style={styles.textValue}>{textValue}</Text>
          </View>
          <Arrow color={colors.primaryText} />
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <Options ref={optionsRef} options={options} onSelect={onSelectOption} />
    </>
  );
};

const generateStyles = (
  isRTL: boolean,
  colors: ExtendedThemeType['colors'],
  dark: boolean,
  error?: string,
) =>
  StyleSheet.create({
    container: {marginBottom: SIZES.medium},
    touchableContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      borderWidth: 1,
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.small,
      borderRadius: SIZES.medium,
      backgroundColor: error
        ? colors.alert
        : dark
        ? colors.gray
        : colors.lightGray,
      borderColor: dark ? undefined : colors.gray,
    },
    textValueContainer: {flex: 1},
    textValue: {color: error ? colors.alert : undefined},
    errorText: {color: colors.alert},
  });
