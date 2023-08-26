import {Button, StyleSheet} from 'react-native';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {useAuth} from '@/features';

export const Login = () => {
  const login = useAuth((s) => s.signIn);
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="login"
        onPress={() => login({access: 'asdad', refresh: 'asdad'})}
      />
    </View>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
