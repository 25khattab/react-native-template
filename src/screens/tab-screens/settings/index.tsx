import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet} from 'react-native';

import Text from '@/components/core/Text';
import View from '@/components/core/View';

export const Settings = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Settings</Text>
      <Button title="navigate to Home" onPress={() => navigate('Home')} />
    </View>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
