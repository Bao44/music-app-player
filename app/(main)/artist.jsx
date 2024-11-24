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
import { theme } from "../../constants/theme";

const ArtistScreen = () => {
  const router = useRouter();
  const uniqueArtists = Array.from(new Set(tracks.map((item) => item.artist)));

  const handleArtistPress = (artist) => {
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
        style={{ paddingHorizontal: 10 }}
        data={uniqueArtists}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => handleArtistPress(item)}
          >
            <View>
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
  container: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: theme.colors.darkLight,
    borderRadius: 20,
  },
  artistName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
