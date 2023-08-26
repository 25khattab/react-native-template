import {
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const View = (props: RNViewProps) => {
  const {colors} = useTheme();

  return (
    <RNView
      {...props}
      style={[
        {
          backgroundColor: colors.background,
        },
        props.style,
      ]}
    />
  );
};
export default View;
