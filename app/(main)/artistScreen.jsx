import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import ScreenWrapper from "../../components/ScreenWrapper";
import tracks from "../../assets/data/library.json";

const ArtistScreen = () => {
  const [selectedArtist, setSelectedArtist] = useState(null); // Nghệ sĩ được chọn
  const [artistTracks, setArtistTracks] = useState([]); // Danh sách bài hát của nghệ sĩ

  const uniqueArtists = Array.from(new Set(tracks.map((item) => item.artist)));

  const handleArtistPress = (artist) => {
    setSelectedArtist(artist);
    const filteredTracks = tracks.filter((track) => track.artist === artist);
    setArtistTracks(filteredTracks);
  };

  return (
    <ScreenWrapper bg={"white"}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header title="Artist" />
      </View>
      {/* Danh sách nghệ sĩ */}
      {!selectedArtist ? (
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
      ) : (
        // Danh sách bài hát của nghệ sĩ
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => setSelectedArtist(null)}>
            <Text style={styles.goBack}>{"← Back to Artists"}</Text>
          </TouchableOpacity>
          <Text style={styles.artistTitle}>{selectedArtist}'s Songs</Text>
          <FlatList
            data={artistTracks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Text style={styles.trackName}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      )}
    </ScreenWrapper>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({
  artistName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  goBack: {
    fontSize: 16,
    color: "blue",
    marginVertical: 10,
  },
  artistTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  trackName: {
    fontSize: 16,
  },
});
