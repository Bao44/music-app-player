import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import ScreenWrapper from "../../components/ScreenWrapper";

const ArtistScreen = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header title="Artist"/>
      </View>
    </ScreenWrapper>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({});
