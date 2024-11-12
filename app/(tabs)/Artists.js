import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useMemo } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { hp, wp } from "../../helpers/common";
import musicData from "../../assets/data/library";

const Artists = ({ navigation }) => {
  // Hàm để gộp các artist giống nhau
  const uniqueArtists = useMemo(() => {
    const groupedArtists = {};

    musicData.forEach((item) => {
      if (!groupedArtists[item.artist]) {
        groupedArtists[item.artist] = [];
      }
      groupedArtists[item.artist].push(item);
    });

    return Object.keys(groupedArtists).map((artist) => ({
      artist,
      songs: groupedArtists[artist],
      artwork: groupedArtists[artist][0].rating,
    }));
  }, [musicData]);

  const handleArtistPress = (artist, songs, artwork) => {
    // Điều hướng đến màn hình ArtistsDetails với thông tin Artists và danh sách bài hát
    navigation.navigate("ArtistDetail", { artist, songs, artwork });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.viewSongArtist}
      onPress={() => handleArtistPress(item.artist, item.songs, item.artwork)}
    >
      <View>
        <Text style={styles.textArtist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper bg="#130c1c">
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={styles.text}>Artists</Text>
      </View>
      <FlatList
        data={uniqueArtists}
        renderItem={renderItem}
        keyExtractor={(item) => item.artist}
        style={{ margin: wp(4) }}
      />
    </ScreenWrapper>
  );
};

export default Artists;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: wp(4),
    color: "white",
    fontSize: hp(3.2),
    fontWeight: "bold",
    marginTop: -5,
  },
  viewSongArtist: {
    padding: wp(6),
    backgroundColor: "#1e1b26",
    opacity: 0.8,
    marginVertical: hp(1),
    borderRadius: 20,
  },
  textArtist: {
    color: "white",
    fontSize: hp(2.5),
  },
});
