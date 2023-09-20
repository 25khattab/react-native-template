import {
  View as RNView,
  ViewProps as RNViewProps,
} from 'react-native';

import {useSelectedTheme} from '@/hooks/use-selected-theme';

export const View = (props: RNViewProps) => {
  const {colors} = useSelectedTheme();
  return (
    <RNView
      {...props}
    />
  );
};
