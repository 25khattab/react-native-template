import type {BottomSheetModalProps} from '@gorhom/bottom-sheet';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import * as React from 'react';

import {View} from '../core';

import {useSelectedTheme} from '@/hooks/use-selected-theme';
import {renderBackdrop} from './modal-backdrop';
import {ModalHeader} from './modal-header';
import type {ModalProps, ModalRef} from './types';
import {SIZES} from '@/constants/spacing';

export const useModalRef = () => {
  const ref = React.useRef<BottomSheetModal>(null);
  return ref;
};

export const Modal = React.forwardRef(
  (
    {
      snapPoints: _snapPoints = ['60%'],
      title,
      detached = false,
      ...props
    }: ModalProps,
    ref: ModalRef,
  ) => {
    const detachedProps = React.useMemo(
      () => getDetachedProps(detached),
      [detached],
    );
    const bottomSheetRef = useModalRef();
    const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);
    const {isDark,colors} = useSelectedTheme();
    const dismiss = React.useCallback(() => {
      bottomSheetRef.current?.dismiss();
    }, [bottomSheetRef]);

    React.useImperativeHandle(
      ref,
      () => (bottomSheetRef.current as BottomSheetModal) || null,
    );

    const renderHandleComponent = React.useCallback(
      () => (
        <>
          <View
            style={{
              alignSelf: 'center',
              height: 2,
              width: '30%',
              marginTop: SIZES.xSmall,
              backgroundColor: colors.backgroundTertiary,
              borderRadius: SIZES.xxLarge,
            }}
          />
          <ModalHeader title={title} dismiss={dismiss} />
        </>
      ),
      [title, dismiss],
    );

    return (
      <BottomSheetModal
        {...props}
        {...detachedProps}
        backgroundStyle={{
          backgroundColor: isDark ? colors.darkGray2 : colors.white,
        }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={props.backdropComponent || renderBackdrop}
        handleComponent={renderHandleComponent}
      />
    );
  },
);

const getDetachedProps = (detached: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: {marginHorizontal: 16, overflow: 'hidden'},
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
};
