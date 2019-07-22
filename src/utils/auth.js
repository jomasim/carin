import AsyncStorage from '@react-native-community/async-storage';

export async function storeToken(token) {
  console.log('saved token', token);
  try {
    await AsyncStorage.setItem('accessToken', token);
  } catch (e) {
    console.log('something happened', e);
  }
}

export async function getToken() {
  console.log('retrieved', await AsyncStorage.getItem('accessToken'));
  return await AsyncStorage.getItem('accessToken');
}
