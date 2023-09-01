import {Button, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import Text from '@/components/core/Text';
import View from '@/components/core/View';
import {useAuth} from '@/features';

export const Login = () => {
  const login = useAuth((state) => state.signIn);
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('routes.Login')}</Text>
      <Button
        title="login"
        onPress={() => login({access: 'asdad', refresh: 'asdad'})}
      />
    </View>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
