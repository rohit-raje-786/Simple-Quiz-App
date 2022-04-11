import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;

  const imgUrl =
    score > 20
      ? 'https://img.freepik.com/free-vector/vector-gold-luxury-winner-cup-with-diamond-illustration-award-victory-with-gem_172107-1473.jpg?w=2000'
      : 'https://cdni.iconscout.com/illustration/free/preview/concept-about-business-failure-1862195-1580189.png?w=0&h=700';
  return (
    <View style={styles.container}>
      <Title title="Result" />
      <View>
        <Text style={styles.scoreText}>{JSON.stringify(score)}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

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
    marginVertical: 15,
    backgroundColor: '#5DB7DE',
    paddingHorizontal: 16,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  scoreText: {
    paddingVertical: 20,
    fontSize: 28,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
