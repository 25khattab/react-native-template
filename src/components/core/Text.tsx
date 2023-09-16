import {Text as RNText, TextProps as RNTextProps} from 'react-native';

import {useLayout} from '@/features';
import {useSelectedTheme} from '@/hooks/use-selected-theme';

export const Text = (props: RNTextProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const {colors} = useSelectedTheme();

  return (
    <RNText
      {...props}
      style={[
        {
          textAlign: isRTL ? 'right' : 'left',
          color: colors.text,
        },
        props.style,
      ]}
    />
  );
};
