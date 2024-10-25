import MediaHeader from "@/components/headers/MediaHeader";
import HorizontalMoviesAndTvShows from "@/components/HorizontalMoviesAndTvShows";
import queryList from "@/graphql/query/queryList";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Refetch = () => void;

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [refetchFunctions, setRefetchFunctions] = useState<Refetch[]>([]);

  const handleRefetchAvailable = useCallback((refetch: Refetch) => {
    setRefetchFunctions((prevRefetches) => [...prevRefetches, refetch]);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all(refetchFunctions.map((refetch) => refetch()));
    setRefreshing(false);
  }, [refetchFunctions]);

  return (
    <SafeAreaView className="flex-1 bg-background text-foreground">
      <FlatList
        data={queryList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HorizontalMoviesAndTvShows
            item={item}
            onRefetchAvailable={handleRefetchAvailable}
          />
        )}
        ListHeaderComponent={<MediaHeader />}
        ListFooterComponent={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text className="text-foreground">
              Edit app/index.tsx to edit this screen.
            </Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
            <Link href="/verify-signup">Verify Signup</Link>
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
