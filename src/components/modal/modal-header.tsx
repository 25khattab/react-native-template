import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import View from '../core/View';
import Text from '../core/Text';

import {XClose} from './x-close';

import {useLayout} from '@/features';
import {SIZES} from '@/constants/spacing';

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const ModalHeader = React.memo(({title, dismiss}: ModalHeaderProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const styles = StyleSheet.create({
    container: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      paddingHorizontal: SIZES.medium,
      paddingVertical: SIZES.small,
    },
    svg: {
      width: SIZES.xLarge,
      height: SIZES.xLarge,
    },
    titleText: {textAlign: 'center', fontSize: SIZES.large, fontWeight: 'bold'},
  });
  return (
    <View style={styles.container}>
      <View style={styles.svg} />
      <View style={{flex: 1}}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <CloseButton close={dismiss} />
    </View>
  );
});

const CloseButton = ({close}: {close: () => void}) => {
  const {colors} = useTheme();
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
      <XClose fill={colors.primaryText} />
    </Pressable>
  );
};
