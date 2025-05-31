import { MenuImages } from "@/constants/MenuImages";
import { coffeeMenu } from "@/constants/MenuItemList";
import React from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const menu = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const Itemseparator = () => (
    <View className="h-2 mx-auto my-4 rounded-3xl bg-white w-6/12 "></View>
  );
  return (
    <Container className="m-4">
      <FlatList
        data={coffeeMenu}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Itemseparator}
        ListEmptyComponent={<View>No Item Found</View>}
        ListFooterComponent={
          <Text className="text-white text-center mt-10">End Of List</Text>
        }
        renderItem={({ item }) => (
          <View className="flex flex-row w-60 h-36 rounded-3xl">
            <View className="">
              <Text className="text-white">{item.name}</Text>
              <Text className="text-white">{item.description}</Text>
            </View>
            <Image
              resizeMode="cover"
              className="w-60 h-36 rounded-lg"
              source={MenuImages[item.id - 1]}
            />
          </View>
        )}
      ></FlatList>
    </Container>
  );
};

export default menu;
