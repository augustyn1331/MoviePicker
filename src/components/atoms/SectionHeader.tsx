import React from 'react';
import {Text, StyleSheet} from 'react-native';

// We can use this component as a header for our screens

interface ISectionHeaderProps {
  text: string;
  color?: string;
  size?: number;
}

const SectionHeader = ({text, color, size}: ISectionHeaderProps) => (
  <Text style={[styles.sectionHeader, {color: color, fontSize: size}]}>
    {text}
  </Text>
);

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 36,
    fontWeight: '300',
  },
});
export default SectionHeader;
