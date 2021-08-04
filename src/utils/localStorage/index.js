/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
/*ex key itu user:{} dokter:[],age:'' objek itu {}
values daleman nya yang lebih detail user:{ nama:'budi',gender:'lk',}
tapi konteks disini biar bisa kebaca rubah ke string maka makeJSON.stringfy
*/
//ini buat register form isi kalo alternative kalo make Firebase
export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };


export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
            // balikin nilai tadi buat nampilin
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
    }
  };
