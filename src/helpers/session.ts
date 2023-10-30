import AsyncStorage from '@react-native-async-storage/async-storage';

const SESSION = 'sessionz';

const getSession = async () => {
  const rawData = await AsyncStorage.getItem(SESSION);
  const data = rawData ? JSON.parse(rawData) : null;
  return data;
};

const saveSession = async (data: string) => {
  const value = JSON.stringify(data);
  const resp = await AsyncStorage.setItem(SESSION, value);
  return resp;
};

const clearSession = async () => {
  const resp = await AsyncStorage.removeItem(SESSION);
  return resp;
};
export {getSession, saveSession, clearSession};
