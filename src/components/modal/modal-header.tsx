import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {Text, View} from '../core';

import {XClose} from './x-close';

import {useLayout} from '@/features';
import {SIZES} from '@/constants/spacing';
import {useSelectedTheme} from '@/hooks/use-selected-theme';

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const ModalHeader = React.memo(({title, dismiss}: ModalHeaderProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const {isDark, colors} = useSelectedTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      paddingHorizontal: SIZES.medium,
      paddingVertical: SIZES.small,
      backgroundColor: 'transparent',
    },
    svg: {
      width: SIZES.xLarge,
      height: SIZES.xLarge,
      backgroundColor: 'transparent',
    },
    textContainer: {flex: 1, backgroundColor: 'transparent'},
    titleText: {textAlign: 'center', fontSize: SIZES.large, fontWeight: 'bold'},
  });
  return (
    <View style={styles.container}>
      <View style={styles.svg} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>asd</Text>
      </View>
      <CloseButton close={dismiss} />
    </View>
  );
});

const CloseButton = ({close}: {close: () => void}) => {
  const {colors} = useSelectedTheme();

  return (
    <Pressable
      onPress={close}
      style={{
        width: SIZES.xLarge,
        height: SIZES.xLarge,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal"
    >
      <XClose fill={colors.text} />
    </Pressable>
  );
};
