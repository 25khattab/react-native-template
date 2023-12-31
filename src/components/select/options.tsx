import type {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  type PressableProps,
  Dimensions,
} from 'react-native';

import {Text} from '../core';
import {Modal} from '../modal';

import {Check} from './icons';

import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';
import {useSelectedTheme} from '@/hooks/use-selected-theme';
import {ExtendedThemeType} from '@/constants/colors';

export type Option = {label: string; value: string | number};

type OptionsProps = {
  options: Option[];
  onSelect: (option: Option) => void;
  value?: string | number;
};

function keyExtractor(item: Option) {
  return `select-item-${item.value}`;
}

export const Options = React.forwardRef<BottomSheetModal, OptionsProps>(
  ({options, onSelect, value}, ref) => {
    const height = options.length * 70 + 100;
    const snapPoints = React.useMemo(() => {
      const screenHeight = Dimensions.get('window').height;
      if (screenHeight * 0.9 >= height) {
        const prec = Math.trunc((height / screenHeight) * 100);
        return [`${prec}%`];
      } else return ['90%'];
    }, [height]);
    const renderSelectItem = ({item}: {item: Option}) => (
      <OptionsItem
        key={`select-item-${item.value}`}
        label={item.label}
        selected={value === item.value}
        onPress={() => onSelect(item)}
      />
    );

    return (
      <Modal ref={ref} index={0} snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
        />
      </Modal>
    );
  },
);

const OptionsItem = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
  }) => {
    const isRTL = useLayout((state) => state.RTL);

    const {isDark, colors} = useSelectedTheme();
    const styles = React.useMemo(
      () => generateOptionItemsStyles(isRTL, colors),
      [isRTL, colors],
    );
    return (
      <Pressable style={styles.container} {...props}>
        <Text style={styles.labelText}>{label}</Text>
        {selected && <Check fill={colors.backgroundTertiary} />}
      </Pressable>
    );
  },
);

const generateOptionItemsStyles = (
  isRTL: boolean,
  colors: ExtendedThemeType['colors'],
) =>
  StyleSheet.create({
    container: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      paddingHorizontal: SIZES.medium,
      paddingVertical: SIZES.small,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: colors.border,
      backgroundColor: 'transparent',
    },
    svg: {
      width: SIZES.xLarge,
      height: SIZES.xLarge,
    },
    labelText: {
      flex: 1,
      //   textAlign: 'center',
      fontSize: SIZES.medium,
      // fontWeight: 'bold',
    },
  });
