import {FormikErrors} from 'formik';
import * as React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Animated, {AnimatedLayout, StretchInX} from 'react-native-reanimated';
import colors from '../../assets/theme/colors';
import {RegisterForm} from '../../models';
import {Container, CustomButton, Input, Message} from '../common';

interface IProps {
  //type from useFormik handleChange
  onChange: {
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onSubmit: () => void;
  form: RegisterForm;
  errors: FormikErrors<RegisterForm>;
  serverError: string;
  loading: boolean;
}

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  serverError,
  errors,
  loading,
}: IProps) => {
  const {t} = useTranslation();
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const handleHide = () => setHiddenPassword(!hiddenPassword);
  return (
    <Container withKeyboard withPadding>
      <AnimatedLayout>
        <Animated.View entering={StretchInX.springify()}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
          />
        </Animated.View>

        <View>
          <Text style={styles.title}>{t('common:welcomeMessage')}</Text>
          <View style={styles.form}>
            <Input
              label={t('common:userName')}
              value={form.username}
              onChangeText={onChange('username')}
              error={errors.username}
              autoCapitalize="words"
            />
            <Input
              label={t('common:email')}
              value={form.email}
              onChangeText={onChange('email')}
              error={errors.email}
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <Input
              label={t('common:password')}
              value={form.password}
              onChangeText={onChange('password')}
              secureTextEntry={hiddenPassword}
              error={errors.password}
              right={
                <TextInput.Icon
                  name="eye"
                  color={colors.grey}
                  onPress={handleHide}
                />
              }
            />
            <CustomButton
              onPress={onSubmit}
              label={t('common:register')}
              width="medium"
              variant="primary"
              loading={loading}
            />
            {serverError ? <Message label={serverError} /> : null}
          </View>
        </View>
      </AnimatedLayout>
    </Container>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  logoImage: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 10,
    color: colors.white,
  },
  form: {
    paddingTop: 20,
  },
});
