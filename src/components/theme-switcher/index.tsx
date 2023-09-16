import {StyleSheet, TouchableOpacity} from 'react-native';
import {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {Text} from '../core';
import {useModalRef} from '../modal';
import {Option, Options} from '../select';

import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';
import {ThemeType} from '@/features/layout/utils';
import {useSelectedTheme} from '@/hooks/use-selected-theme';

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const {t} = useTranslation();
  const {colors} = useSelectedTheme();
  const selectedTheme = useLayout((state) => state.theme);
  const setSelectedTheme = useLayout((state) => state.setTheme);
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const optionsRef = useModalRef();
  const open = useCallback(
    () => optionsRef.current?.present({duration: 500}),
    [optionsRef],
  );
  const themes = useMemo(
    () => [
      {label: `Dark 🌙`, value: 'dark'},
      {label: `Light 🌞`, value: 'light'},
      {label: `System ⚙️`, value: 'system'},
    ],
    [],
  );
  const onSelect = useCallback(
    (option: Option) => {
      setSelectedTheme(option.value.toString() as ThemeType);
      optionsRef.current?.dismiss();
    },
    [setSelectedTheme, optionsRef],
  );
  const theme = useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes],
  );
  return (
    <>
      <TouchableOpacity onPress={() => open()} style={styles.pressable}>
        {/* <View style={styles.pressableIcon}>
          <MaterialIcons name="language" size={24} color={COLORS.secondary} />
        </View> */}

        <Text style={{flex: 1}}>Theme</Text>
      </TouchableOpacity>

      <Options
        ref={optionsRef}
        options={themes}
        value={theme?.value}
        onSelect={onSelect}
      />
    </>
  );
};

const generateStyles = (isRTL: boolean, colors: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    pressable: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      width: '100%',
    },
    pressableText: {
      fontSize: SIZES.medium,
    },
  });
