import { useEffect, useRef } from "react";
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

const OtpInput = ({
  otp,
  cb,
}: {
  otp: string[];
  cb: (value: string[]) => void;
}) => {
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    // a regular expression that matches a single digit (0-9) or ""
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      cb(newOtp);

      // Move to next input if not the last input
      if (value && index < 7) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const { key } = e.nativeEvent; // Accessing the key from nativeEvent
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="mt-2 w-full space-y-1">
      <Text className="text-foreground">Code</Text>
      <View className="flex flex-row w-full items-center justify-between">
        {otp.map((value: string, index) => {
          return (
            <TextInput
              key={index}
              maxLength={1}
              value={value}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              keyboardType="numeric"
              onKeyPress={(e) => handleKeyDown(e, index)}
              onChangeText={(e) => handleChange(e, index)}
              className="flex h-[48px] w-[46px] items-center justify-center rounded-md border border-grey_700 px-4 text-lg text-foreground shadow-sm"
            />
          );
        })}
      </View>
    </View>
  );
};

export default OtpInput;
