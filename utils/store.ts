import * as SecureStore from "expo-secure-store";

export const getStore = async (key: string) => {
  const get = await SecureStore.getItemAsync(key);
  return get;
};

export const setStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};
