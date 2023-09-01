import type {BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import * as React from 'react';
import {Pressable, StyleSheet, type PressableProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Modal} from '../modal';
import Text from '../core/Text';

import {Check} from './icons';

import {useLayout} from '@/features';
import {SIZES} from '@/constants/spacing';

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
    const snapPoints = React.useMemo(() => [height], [height]);
    const {colors} = useTheme();
    const renderSelectItem = React.useCallback(
      ({item}: {item: Option}) => (
        <Option
          key={`select-item-${item.value}`}
          label={item.label}
          selected={value === item.value}
          onPress={() => onSelect(item)}
        />
      ),
      [onSelect, value],
    );

    return (
      <Modal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: colors.background,
        }}
      >
        <BottomSheetFlatList
          data={options}
          keyExtractor={keyExtractor}
          renderItem={renderSelectItem}
        />
      </Modal>
    );
  },
);

const Option = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
  }) => {
    const isRTL = useLayout((state) => state.RTL);
    const {colors} = useTheme();
    const styles = StyleSheet.create({
      container: {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.primaryText,
        backgroundColor: colors.background,
      },
      svg: {
        width: SIZES.xLarge,
        height: SIZES.xLarge,
      },
      labelText: {
        flex: 1,
        //   textAlign: 'center',
        //   fontSize: SIZES.large,
        //   fontWeight: 'bold',
      },
    });
    return (
      <Pressable style={styles.container} {...props}>
        <Text style={styles.labelText}>{label}</Text>
        {selected && <Check fill={colors.primaryText} />}
      </Pressable>
    );
  },
);
