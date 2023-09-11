import {Button, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useForm} from 'react-hook-form';

import {useAuth} from '@/features';
import {useSelectedTheme, useSoftKeyboardEffect} from '@/hooks';
import {ControlledInput, Input, Text, View} from '@/components';
import {SIZES} from '@/constants/spacing';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export const Login = () => {
  const login = useAuth((state) => state.signIn);
  const {colors} = useSelectedTheme();
  useSoftKeyboardEffect();
  const {t} = useTranslation();
  const {handleSubmit, control} = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data: FormType) => {
    console.log(data);
    login({access: 'asss', refresh: 'ooslslslsl'});
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          padding: SIZES.medium,
          gap: 70,
          flex: 1,
        }}
      >
        <Text>{t('routes.Login')}</Text>
        <Text>Write any values</Text>
        <ControlledInput
          control={control}
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          label="Email"
        />
        <ControlledInput
          control={control}
          name="password"
          // label="Password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <Button
          title="login"
          testID="login-button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
