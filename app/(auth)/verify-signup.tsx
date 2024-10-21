import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthPageLayout from "@/components/layouts/AuthPageLayout";
import styles from "@/styles/styles";
import OtpInput from "@/components/OtpInput";

const VerifySignUp = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  return (
    <AuthPageLayout>
      <View className="p-3 pb-10">
        <View className="flex-1 rounded-xl w-full py-12 space-y-5">
          <Text style={styles.auth_title} className="">
            Verification
          </Text>
          <Text className="text-foreground">
            Enter the 6 digits code that you received on email
          </Text>
          <View>
            <OtpInput otp={otp} cb={(value: string[]) => setOtp(value)} />
          </View>
        </View>
        <Text className="text-foreground text-center mt-5">
          Didn't receive the OTP?{" "}
          <Text className="text-sky_400">Resend OTP</Text>
        </Text>
      </View>
    </AuthPageLayout>
  );
};

export default VerifySignUp;
