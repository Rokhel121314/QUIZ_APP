import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

const useStoreApiToken = () => {
  //
  const [sessionToken, setSessionToken] = useState('');
  const [newSessionToken, setNewSessionToken] = useState('');

  // setting up questions
  // 1. GENERATE QUIZ TOKEN TO PREVENT GIVING SAME QUESTION TWICE
  // 2. STORE QUIZ TOKEN
  // 3. GET TOKEN ON STORAGE
  // 4. GET QUIZDATA //GET RESPONSE CODE // API + TOKEN
  // 5. IF RESPONSE CODE === 4 RUN GENERATE QUIZTOKEN THEN STORE NEW QUIZ TOKEN

  // GENERATING QUIZ TOKEN
  const generateQuizToken = async () => {
    try {
      const {data} = await Axios.get(
        'https://opentdb.com/api_token.php?command=request',
      );
      return data.token;
    } catch (error) {
      console.log('error', error);
    }
  };
  //  STORING QUIZ TOKEN TO ASYNC STORAGE
  const saveApiToken = async () => {
    try {
      const apiToken = await generateQuizToken();
      await AsyncStorage.setItem('apiToken', apiToken);
      setNewSessionToken(apiToken);
    } catch (error) {
      console.log('error', error);
    }
  };
  // GETTING QUIZ TOKEN FROM ASYNC STORAGE
  const getApiToken = async () => {
    try {
      const apiToken = await AsyncStorage.getItem('apiToken');
      if (apiToken !== null) {
        setSessionToken(apiToken);
        return apiToken;
      } else {
        saveApiToken();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const removeApiToken = async () => {
    try {
      await AsyncStorage.removeItem('apiToken');
    } catch (e) {
      // remove error
    }
  };
  return {
    sessionToken,
    newSessionToken,
    getApiToken,
    saveApiToken,
    removeApiToken,
  };
};

export default useStoreApiToken;
