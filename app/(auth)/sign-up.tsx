import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import AuthPageLayout from "@/components/layouts/AuthPageLayout";
import styles from "@/styles/styles";
import AuthStyledBtn from "@/components/AuthStyledBtn";
import My_Images from "@/assets/images";
import { Link } from "expo-router";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    Alert.alert("Sign In", "Please try later");
  };

  const handleOAuthLogin = () => {
    Alert.alert("Google OAuth Login", "Not yet implemented. Please try later");
  };
  return (
    <AuthPageLayout>
      <View className="flex-1 p-3">
        <View className="flex-1 rounded-xl w-full py-12 space-y-5">
          <Text style={styles.auth_title} className="">
            Sign Up
          </Text>
          <View className="gap-2">
            <Text className="text-grey_400">Name</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Email"
              style={styles.auth_input}
              placeholderTextColor={styles.placeholder_text_color.color}
              autoComplete="off"
            />
          </View>
          <View className="gap-2">
            <Text className="text-grey_400">Email</Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={styles.auth_input}
              placeholderTextColor={styles.placeholder_text_color.color}
              autoComplete="off"
            />
          </View>
          <View className="gap-2">
            <Text className="text-grey_400">Password</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              style={styles.auth_input}
              placeholderTextColor={styles.placeholder_text_color.color}
              secureTextEntry={true}
              autoComplete="off"
            />
          </View>
          <View>
            <AuthStyledBtn title="Sign Up" handlePress={handleSignIn} />
          </View>
          <View className="flex-row items-center gap-2">
            <View className="flex-1 h-[2px] bg-gray-700" />
            <Text className="text-grey_400">Or Sign up with</Text>
            <View className="flex-1 h-[2px] bg-gray-700" />
          </View>
          <TouchableOpacity
            className="bg-grey_900 py-4 rounded-2xl flex-row justify-center items-center space-x-2"
            onPress={handleOAuthLogin}
          >
            <Image
              source={My_Images.googleIcon}
              resizeMode="cover"
              className="h-5 w-5 mb-1"
            />
            <Text className="text-grey_400 font-psemibold">Google</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-grey_400 text-center">
          Already have an account?{" "}
          <Link href={`/sign-in`}>
            <Text className="text-sky_400">Sign In</Text>
          </Link>
        </Text>
      </View>
    </AuthPageLayout>
  );
};

export default SignUpScreen;
