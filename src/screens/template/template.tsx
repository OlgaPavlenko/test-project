import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Screen } from '@components/icon/screen';
import { TemplateStyles } from './template.styles';

export const Template = () => {
  return (
    <Screen isCentered background="black">
      <TemplateStyles.ImageWrapper>
        <Text style={styles.head_white}>Codempire</Text>
        <Text style={styles.white}>Cafe</Text>
      </TemplateStyles.ImageWrapper>
    </Screen>
  );
};

const styles = StyleSheet.create({
  head_white: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  white: {
    color: 'white',
    fontSize: 40,
  },
});
