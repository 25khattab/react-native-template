import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';

import { ControlledInput, Text, View } from '@/components';
import { useAuth } from '@/features';
import { useSelectedTheme, useSoftKeyboardEffect } from '@/hooks';
import React from 'react';

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
  const {t} = useTranslation();
  const {handleSubmit, control} = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data: FormType) => {
    console.log(data);
    login({access: 'asss', refresh: 'ooslslslsl'});
  };
  useSoftKeyboardEffect();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            borderColor: colors.border,
            alignSelf: 'stretch',
            rowGap: 20,
            borderWidth: 1,
            padding: 10,
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
            label="Password"
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
      {/* <Animated.View style={[buttonContainerAnimatedStyle]}>
        
      </Animated.View> */}
    </SafeAreaView>
  );
};

const styles = (isRTL: boolean) => StyleSheet.create({});
