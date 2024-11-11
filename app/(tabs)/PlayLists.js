import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { hp, wp } from "../../helpers/common";
import musicData from "../../assets/data/library";

const PlayLists = ({ navigation }) => {
  // Hàm để gộp các playlist giống nhau
  const uniquePlaylists = useMemo(() => {
    const groupedPlaylists = {};

    musicData.forEach((item) => {
      if (!groupedPlaylists[item.playlist]) {
        groupedPlaylists[item.playlist] = [];
      }
      groupedPlaylists[item.playlist].push(item);
    });

    return Object.keys(groupedPlaylists).map((playlist) => ({
      playlist,
      songs: groupedPlaylists[playlist],
    }));
  }, [musicData]);

  const handlePlaylistPress = (playlist, songs) => {
    // Điều hướng đến màn hình PlaylistDetails với thông tin playlist và danh sách bài hát
    navigation.navigate("PlayListDetail", { playlist, songs });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.viewSongPlaylist}
      onPress={() => handlePlaylistPress(item.playlist, item.songs)}
    >
      <View>
        <Text style={styles.text}>{item.playlist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper bg="#130c1c">
      <Text style={styles.headerText}>Playlist</Text>
      <FlatList
        data={uniquePlaylists}
        renderItem={renderItem}
        keyExtractor={(item) => item.playlist}
        style={{ margin: wp(4) }}
      />
    </ScreenWrapper>
  );
};

export default PlayLists;

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: wp(4),
    color: "white",
    fontSize: hp(3.2),
    fontWeight: "bold",
  },
  viewSongPlaylist: {
    padding: wp(6),
    backgroundColor: "#1e1b26",
    opacity: 0.8,
    marginVertical: hp(1),
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: hp(2.5),
  },
});
