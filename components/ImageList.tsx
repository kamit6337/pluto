import useFixedQuery from "@/hooks/query/fixed/useFixedQuery";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import { BlurView } from "expo-blur";

const ImageList = ({ item, id }) => {
  const { schema, dataQuery } = item;
  const { data: fixed } = useFixedQuery();
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = (2.2 * screenWidth) / 5; // Divide screen width by number of columns

  const [selectedImage, setSelectedImage] = useState<null | string>(null); // State for selected image
  const [isModalVisible, setModalVisible] = useState(false); // State for modal visibility

  const { loading, error, data } = useQuery(schema, {
    variables: { id: Number(id) },
  });

  if (loading) {
    return <ActivityIndicator className="h-32 justify-center items-center" />;
  }

  if (error?.message) {
    return (
      <View className="h-32 justify-center items-center">
        <Text className="text-foreground">{error.message}</Text>
      </View>
    );
  }

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const images = data[dataQuery];

  return (
    <View className="p-2 flex-row flex-wrap justify-evenly items-center">
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item, index }) => {
          const { ratio, path } = item;
          const photoUrl = `${fixed.imageDetail.secure_base_url}w300${path}`;

          const betterQualityPhotoUrl = `${fixed.imageDetail.secure_base_url}w780${path}`;

          const imageHeight = imageWidth / ratio;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => openImageModal(betterQualityPhotoUrl)}
            >
              <Image
                source={{ uri: photoUrl }}
                resizeMode="cover"
                className="rounded"
                style={{ width: imageWidth, height: imageHeight, margin: 5 }}
              />
            </TouchableOpacity>
          );
        }}
      />

      {selectedImage && (
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeImageModal}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* Blurred Background */}
            <BlurView
              intensity={100}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
            {/* Grey Overlay for Darkening */}
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Greyish overlay with 40% opacity
              }}
            />

            {/* Fullscreen Image */}
            <TouchableOpacity
              onPress={closeImageModal}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <Image
                source={{ uri: selectedImage }}
                style={{
                  width: screenWidth,
                  height: (screenWidth * 9) / 16, // Maintain aspect ratio
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ImageList;
