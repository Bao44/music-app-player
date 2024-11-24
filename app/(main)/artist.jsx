import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import ScreenWrapper from "../../components/ScreenWrapper";
import tracks from "../../assets/data/library.json";
import { useRouter } from "expo-router";

const ArtistScreen = () => {
  const router = useRouter();
  const uniqueArtists = Array.from(new Set(tracks.map((item) => item.artist)));

  const handleArtistPress = (artist) => {
    // Lưu artist trong route params
    router.push({
      pathname: "artistDetails",
      params: { artist },
    });
  };

  return (
    <ScreenWrapper bg={"white"}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header title="Artist" />
      </View>
      <FlatList
        data={uniqueArtists}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleArtistPress(item)}>
            <View style={{ padding: 10 }}>
              <Text style={styles.artistName}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({
  artistName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
