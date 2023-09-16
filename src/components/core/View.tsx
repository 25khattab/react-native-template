import {
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
} from 'react-native';

import {useSelectedTheme} from '@/hooks/use-selected-theme';

export const View = (props: RNViewProps) => {
  const {colors} = useSelectedTheme();
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
