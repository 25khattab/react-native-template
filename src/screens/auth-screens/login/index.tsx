import {Button, StyleSheet} from 'react-native';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {useAppDispatch} from '@/hooks/redux-hooks';
import {setCredentials} from '@/features/auth';

export const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>
      <Button
        title="login"
        onPress={() =>
          dispatch(setCredentials({access: 'asdad', refresh: 'asdad'}))
        }
      />
    </View>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
