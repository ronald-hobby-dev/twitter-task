import {Method, fetchData} from './NetworkManager';
import {api} from './Environment';
import {StatusCode} from '../constants/statusCode';
import { Alert } from 'react-native';

export const getTweets = async () => {
  const result = await fetchData(api.getTwitterPosts, Method.GET);
  if (result && result.status == StatusCode.SUCCESS) {
    return result;
  } else {
    Alert.alert(JSON.stringify(result?.message));
    return null;
  }
};
