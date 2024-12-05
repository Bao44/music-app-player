import React from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FloatingPlayer from "./FloatingPlayer";

import Modal from "./ModalSong";
import useMusicPlayer from "../events/EventListSong";
import ListSong from "./ListSong";

const TracksList = ({ musicData }) => {

  const {
    sound,
    searchQuery,
    setSearchQuery,
    handleSearch,
    filteredMusic,
    setFilteredMusic,
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
  } = useMusicPlayer(musicData);
  
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="#eaeaea"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for music..."
          placeholderTextColor="white"
          value={searchQuery}
          onChangeText={(text) =>
            handleSearch({
              setSearchQuery,
              query: text,
              musicData,
              setFilteredMusic,
            })
          }
        />
      </View>
      <ListSong playSong={playSong} filteredMusic={filteredMusic} />
      <FloatingPlayer
        currentTrack={currentTrack}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        playPreviousSong={playPreviousSong}
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        playNextSong={playNextSong}
      />
      <Modal
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130c1c",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1b26",
    opacity: 0.8,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#ccc",
  },
  heartIcon: {
    marginLeft: 10,
  },
});

export default TracksList;
