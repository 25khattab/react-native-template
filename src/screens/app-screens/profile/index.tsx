import {useNavigation, useTheme} from '@react-navigation/native';
import {Button, StyleSheet} from 'react-native';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';

export const Profile = () => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const isRTL = useLayout((s) => s.RTL);
  const styles = generateStyles(isRTL, colors);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="navigate to home"
        onPress={() => navigate('Home')}
      />
    </View>
  );
};

const generateStyles = (isRTL: boolean, color: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
    },
  });
