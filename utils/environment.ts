import Constants from "expo-constants";

type Variables = {
  SERVER_URL: string;
};

const { SERVER_URL } = Constants.expoConfig?.extra as Variables;

const environment = {
  SERVER_URL: process.env.SERVER_URL || SERVER_URL,
};

export default environment;
