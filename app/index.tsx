import icon from "@/assets/images/iced-coffee.png";
import "@/global.css";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex items-center justify-center">
      <ImageBackground
        resizeMode="cover"
        className="w-full h-full justify-center"
        source={icon}
      >
        <View className="flex justify-center items-center">
          <Text className="text-white text-6xl text-center bg-black mb-10 rounded-3xl p-2">
            Coffee App
          </Text>
          <View className="flex flex-col gap-5">
            <Link href="/menu" asChild>
              <Pressable className="w-32 h-12 bg-black flex justify-center items-center rounded-full">
                <Text className="text-white">Menu</Text>
              </Pressable>
            </Link>
            <Link href="/contact" asChild>
              <Pressable className="w-32 h-12 bg-black flex justify-center items-center rounded-full">
                <Text className="text-white">Contact Us</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
