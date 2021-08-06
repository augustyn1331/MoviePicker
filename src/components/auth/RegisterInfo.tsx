import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import palette from 'src/styles/palette';

interface Props {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const RegisterInfo: React.FC<Props> = ({onPress}) => {
  const {t} = useTranslation('common');
  return (
    <View style={styles.registerBox}>
      <Text style={styles.text}>{t('registerSuggestion')}</Text>
      <TouchableOpacity>
        <Text onPress={onPress} style={[styles.text, styles.register]}>
          {t('register')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterInfo;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: palette.white,
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 3,
  },
  register: {
    color: palette.primary,
    fontWeight: 'bold',
  },
  registerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
