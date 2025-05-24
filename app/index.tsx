import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import icon from "../assets/images/iced-coffee.png";
import "../global.css";

const App = () => {
  return (
    <View className="flex items-center justify-center">
      <ImageBackground
        resizeMode="cover"
        className="w-full h-full justify-center"
        source={icon}
      >
        <View className="flex justify-center items-center">
          <Text className="text-white text-6xl text-center bg-black mb-10">
            Coffee App
          </Text>
          <Link href="/contact" asChild>
            <Pressable className="w-32 h-12 bg-black flex justify-center items-center rounded-full">
              <Text className="text-white">Explore</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
