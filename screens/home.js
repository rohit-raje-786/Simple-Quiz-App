import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Title title="Home" />
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/customer-survey-3428393-2910850.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#5DB7DE',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
