import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  container: {
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
