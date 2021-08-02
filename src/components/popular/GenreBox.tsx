import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import palette from 'src/styles/palette';

interface Props {
  name: string;
}

const GenreBox: React.FC<Props> = ({name}) => (
  <View key={name} style={styles.categoryContainer}>
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  categoryContainer: {
    marginRight: 6,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: palette.white,
  },
  categoryText: {
    color: palette.black,
    fontWeight: '600',
    fontSize: 13,
  },
});

export default GenreBox;