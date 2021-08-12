import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {IconTypes, Route} from 'src/constants';
import {UserFormDataTemplate} from 'src/models';
import {userThunkSelector} from 'src/redux/user/UserSlice';
import palette from 'src/styles/palette';
import {
  Container,
  CustomButton,
  HeaderBar,
  Message,
  SectionHeader,
} from 'src/components/common';
import SettingsInput from 'src/components/settings/SettingsInput';

interface Props {
  onSubmit: () => void;
  headerText: string;
  data: UserFormDataTemplate[];
}

const UserFormTemplate: React.FC<Props> = ({headerText, data, onSubmit}) => {
  const {navigate} = useNavigation();
  const {error, loading} = useSelector(userThunkSelector);
  const {t} = useTranslation('common');
  const redirectToSettings = () => navigate(Route.SETTINGS);

  const leftIcon = {
    name: 'arrow-back-ios',
    type: IconTypes.MATERIAL,
    onPressFunction: redirectToSettings,
  };

  return (
    <Container flexStart>
      <HeaderBar leftIcon={leftIcon} />
      <SectionHeader text={headerText} color={palette.white} center />
      {data.map(item => (
        <SettingsInput
          label={item.label}
          initialValue={item.initialValue}
          onChange={item.onChange}
          error={item.error}
          secureTextEntry={item.secure}
          key={item.label}
        />
      ))}
      <CustomButton
        variant="primary"
        label={t('save')}
        onPress={onSubmit}
        width="medium"
        loading={loading}
      />
      {!!error && <Message label={error} />}
    </Container>
  );
};

export default UserFormTemplate;