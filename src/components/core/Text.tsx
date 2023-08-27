import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {useAppSelector} from '@/hooks/redux-hooks';

const Text = (props: RNTextProps) => {
  const isRTL = useAppSelector((state) => state.layout.RTL);
  const {colors} = useTheme();

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
export default Text;
