import styles from "@/styles/styles";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.container} className="pt-10 px-3">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthPageLayout;
