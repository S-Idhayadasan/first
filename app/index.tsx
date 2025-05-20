import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import "../global.css";
import icon from "../assets/images/cup-of-drink.png";

const app = () => {
  return (
    <View className="bg-slate-900 h-full">
      <View className="">
        <ImageBackground
          resizeMode="cover"
          className="w-full h-full justify-center"
          source={icon}
        >
          <Text className="text-slate-800 text-6xl text-center">app</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default app;
