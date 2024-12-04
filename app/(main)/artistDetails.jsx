import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import Header from "../../components/Header";
import { useLocalSearchParams } from "expo-router";
import tracks from "../../assets/data/library.json";
import useMusicPlayer from "../../events/EventListSong";
import FloatingPlayer from "../../utils/FloatingPlayer";
import Modals from "../../utils/ModalSong";
import { Image } from "react-native";
import { theme } from "../../constants/theme";
import Icon from "../../assets/icons";
import { hp } from "../../helpers/common";

const ArtistDetails = () => {
  const { artist } = useLocalSearchParams();
  const artistTracks = tracks.filter((track) => track.artist === artist);
  const {
    sound,
    isPlaying,
    currentTrack,
    modalVisible,
    setModalVisible,
    togglePlayPause,
    playSong,
    playNextSong,
    playPreviousSong,
    onPlaybackStatusUpdate,
    toggleShuffle,
    isShuffle,
  } = useMusicPlayer(artistTracks);

  const handleTrackPress = (track) => {
    playSong(track);
  };

  return (
    <ScreenWrapper bg={"white"}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header title={artist} />
        <Image
          source={{ uri: artistTracks[0]?.artwork }}
          style={styles.artwork_Modal}
        />
        <FlatList
          scrollEnabled={false}
          data={artistTracks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTrackPress(item)}>
              <View style={styles.container}>
                <View>
                  <Text style={styles.trackName}>{item.title}</Text>
                  <Text style={{ fontSize: 16 }}>{item.artist}</Text>
                </View>
                <Icon
                  name="threeDotsHorizontal"
                  size={hp(3.4)}
                  strokeWidth={3}
                  color={theme.colors.text}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.musicControl}>
        <FloatingPlayer
          currentTrack={currentTrack}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          playPreviousSong={playPreviousSong}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
          playNextSong={playNextSong}
        />
        <Modals
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          currentTrack={currentTrack}
          sound={sound}
          isPlaying={isPlaying}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          togglePlayPause={togglePlayPause}
          playPreviousSong={playPreviousSong}
          playNextSong={playNextSong}
          toggleShuffle={toggleShuffle}
          isShuffle={isShuffle}
        />
      </View>
    </ScreenWrapper>
  );
};

export default ArtistDetails;

const styles = StyleSheet.create({
  container: {
    padding: 18,
    marginHorizontal: 20,
    marginVertical: 8,
    backgroundColor: theme.colors.darkLight,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  trackName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  musicControl: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#1f1f1f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  artwork_Modal: {
    marginTop: 10,
    width: 380,
    height: 380,
    borderRadius: 500,
    alignSelf: "center",
    marginBottom: 30,
  },
});