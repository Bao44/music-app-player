import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Lyrics from "./Lyrics";
import { HandleEventModals } from "../events/HandleEvent";
import ProgressBarModal from "./ProgressBar";
import ContentOther from "./ContentOtherInModalSong";
import { theme } from "../constants/theme";

const Modals = ({
  modalVisible,
  setModalVisible,
  currentTrack,
  sound,
  isPlaying,
  onPlaybackStatusUpdate,
  togglePlayPause,
  playPreviousSong,
  playNextSong,
  toggleShuffle,
  isShuffle,
}) => {
  return (
    <View>
      <Modal
        visible={modalVisible}
        onHardwareBackPress={() => {
          setModalVisible(false);
        }}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.viewModal}>
            {/* Header Modal */}
            <View style={styles.viewHeaderModal}>
              <TouchableOpacity
                style={[{ width: 45, height: 40 }, styles.iconDown]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Entypo name="chevron-small-down" size={45} color="white" />
              </TouchableOpacity>
              <Text style={styles.textHeaderModalTitle}>
                PLAYING FROM THE ARTIST
              </Text>
              <Text style={styles.textHeaderModalArtist}>
                {currentTrack?.artist}
              </Text>
              <TouchableOpacity style={styles.iconDots}>
                <Entypo name="dots-three-horizontal" size={30} color="white" />
              </TouchableOpacity>
            </View>
            {/* Ảnh */}
            <TouchableOpacity>
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.artwork_Modal}
              />
            </TouchableOpacity>
            {/* Tên bài hát và tác giả + ProgressBar*/}
            <ProgressBarModal
              currentTrack={currentTrack}
              playbackObject={sound}
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            />
            {/* Event */}
            <HandleEventModals
              isPlaying={isPlaying}
              onPress={togglePlayPause}
              onPressPrev={playPreviousSong}
              onPressNext={playNextSong}
              onPressShuffle={toggleShuffle} // Gọi hàm toggleShuffle khi nhấn nút random
              isShuffle={isShuffle} // Truyền trạng thái ngẫu nhiên để đổi màu biểu tượng
            />
            {/* Lời bài hát */}
            <Lyrics currentTrack={currentTrack} />
            {/* Khám phá */}
            <ContentOther currentTrack={currentTrack} />
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    width: "100%",
    backgroundColor: theme.colors.primaryDark,
  },
  viewModal: {
    height: "100%",
    width: "100%",
    marginTop: 65,
    paddingHorizontal: 15,
  },
  viewHeaderModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  iconDown: {
    position: "absolute",
    top: -65,
    left: 0,
  },
  textHeaderModalTitle: {
    position: "absolute",
    top: -40,
    fontSize: 16,
    color: "white",
  },
  textHeaderModalArtist: {
    position: "absolute",
    top: -10,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  iconDots: {
    position: "absolute",
    top: -60,
    right: 0,
  },
  artwork_Modal: {
    marginTop: 40,
    width: 380,
    height: 380,
    borderRadius: 15,
    alignSelf: "center",
  },
});
