import * as SecureStore from 'expo-secure-store';

export async function getItem<T>(key: string): Promise<T | null> {
  try {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) || null : null;
  } catch (error) {
    console.log('error in getting ', key);
    return null;
  }
}

export async function setItem<T>(key: string, value: T) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (error) {
    console.log('error in setting ', key);
  }
}

export async function removeItem(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('error in removing ', key);
  }
}
