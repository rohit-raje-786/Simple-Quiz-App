import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../components/title';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    try {
      const url = 'https://opentdb.com/api.php?amount=10&encode=url3986';
      const res = await fetch(url);
      const data = await res.json();
      setQuestions(data.results);
      setOptions(generateOptionsandShuffle(data.results[0]));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const generateOptionsandShuffle = _questions => {
    const options = [
      _questions.correct_answer,
      ..._questions.incorrect_answers,
    ];
    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = option => {
    if (option === decodeURIComponent(questions[ques].correct_answer)) {
      setScore(prev => prev + 10);
    }
    if (ques != 9) {
      setQues(ques => ques + 1);
      setOptions(generateOptionsandShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      navigation.navigate('Result', {
        score: score,
      });
    }
  };

  const handleSkip = () => {
    setQues(ques => ques + 1);
    setOptions(generateOptionsandShuffle(questions[ques + 1]));
  };
  return (
    <>
      {loading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <>
          <Title title="Quiz" />
          <View>
            {questions && (
              <View>
                <View style={styles.container}>
                  <View style={styles.top}>
                    <Text style={styles.question}>
                      Q.{decodeURIComponent(questions[ques].question)}
                    </Text>
                  </View>
                  <View style={styles.options}>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() =>
                        handleSelectedOption(decodeURIComponent(options[0]))
                      }>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[0])}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() =>
                        handleSelectedOption(decodeURIComponent(options[1]))
                      }>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[1])}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() =>
                        handleSelectedOption(decodeURIComponent(options[2]))
                      }>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[2])}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.optionButton}
                      onPress={() =>
                        handleSelectedOption(decodeURIComponent(options[3]))
                      }>
                      <Text style={styles.option}>
                        {decodeURIComponent(options[3])}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bottom}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleSkip}>
                      <Text style={styles.buttonText}>Skip</Text>
                    </TouchableOpacity>

                    {ques === 9 && (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          //console.log(score);
                          navigation.navigate('Result', {
                            score: score,
                          });
                        }}>
                        <Text style={styles.buttonText}>Show Results</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            )}
          </View>
        </>
      )}
    </>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
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
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#4895EF',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  loadingText: {
    fontSize: 32,
    fontWeight: '700',
  },
});
