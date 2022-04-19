import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Screen } from '@components/screen';
import { TemplateStyles } from './template.styles';

export const Template = () => {
  return (
    <Screen isCentered background="black">
      <TemplateStyles.ImageWrapper>
        <Text style={styles.white}>Codempire</Text>
        <Text style={styles.white}>Cafe</Text>
      </TemplateStyles.ImageWrapper>
    </Screen>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
});
