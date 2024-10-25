import { getStore } from "@/utils/store";
import { Redirect, router } from "expo-router";
import { useEffect, useState } from "react";

const useAuthCheck = () => {
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getStore("user");
      setIsTokenPresent(!!token);
    })();
  }, []);

  if (!isTokenPresent) {
    return <Redirect href={`/sign-in`} />;
  }

  return isTokenPresent;
};

export default useAuthCheck;
