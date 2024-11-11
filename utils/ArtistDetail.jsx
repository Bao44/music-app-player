import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native"; // Giả sử bạn dùng react-navigation
import TracksList from "./TracksList";
import ScreenWrapper from "../components/ScreenWrapper";
import { hp, wp } from "../helpers/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import ListSong from "./ListSong";
import useMusicPlayer from "../events/EventListSong";
import Modal from "../utils/ModalSong";
import FloatingPlayer from "./FloatingPlayer";

const ArtistDetail = ({ navigation }) => {
  const route = useRoute();
  const { artist, songs, artwork } = route.params; // Lấy artists và danh sách bài hát từ tham số
  const {
    sound,
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
  } = useMusicPlayer(songs);

  return (
    <ScreenWrapper bg="#130c1c">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => navigation.navigate("Main")}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.playlistTitle}>{artist}</Text>
      </View>

      {/*  */}
      <View>
        {/* <Image
          source={{ uri: artwork }}
          style={{ width: 380, height: 380 }}
        /> */}
        <Text style={{color: 'white'}}>{artwork}</Text>
      </View>
      {/*  */}

      <ListSong playSong={playSong} filteredMusic={filteredMusic} />

      <FloatingPlayer musicData={songs}
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
    </ScreenWrapper>
  );
};

const styles = {
  playlistTitle: {
    marginHorizontal: wp(4),
    color: "white",
    fontSize: hp(3.2),
    fontWeight: "bold",
    marginVertical: hp(1),
  },
};

export default ArtistDetail;
