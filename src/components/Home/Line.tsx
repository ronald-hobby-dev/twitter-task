import React from 'react';
import {StyleSheet, View} from 'react-native';

const LineComponent: React.FC<LineComponentProps> = props => {
  return <View style={[styles.line]} />;
};

const styles = StyleSheet.create({
  line: {
    height: 11,
    width:10,
    color: 'red',
  },
});

export default LineComponent;
