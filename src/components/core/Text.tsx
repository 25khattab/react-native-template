import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {useLayout} from '@/features';

const Text = (props: RNTextProps) => {
  const isRTL = useLayout((state) => state.RTL);
  const {colors} = useTheme();

  return (
    <RNText
      {...props}
      style={[
        {
          textAlign: isRTL ? 'right' : 'left',
          color: colors.text,
          writingDirection: isRTL ? 'rtl' : 'ltr',
        },
        props.style,
      ]}
    />
  );
};
export default Text;
