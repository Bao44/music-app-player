import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const FloatingPlayer = ({
  currentTrack,
  setModalVisible,
  modalVisible,
  playPreviousSong,
  togglePlayPause,
  isPlaying,
  playNextSong,
}) => {
  return (
    <View>
      {currentTrack && (
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.musicControl}
        >
          <View style={styles.trackInfo}>
            <Image
              source={{
                uri: currentTrack?.artwork || " ",
              }}
              style={styles.currentTrackArtwork}
            />
            <View style={styles.trackTextContainer}>
              <Text style={styles.currentTrackText} numberOfLines={2}>
                {currentTrack?.title} - {currentTrack?.artist}
              </Text>
            </View>
          </View>
          <View style={styles.controlButtons}>
            <TouchableOpacity onPress={playPreviousSong}>
              <AntDesign name="banckward" size={30} color="#eaeaea" />
            </TouchableOpacity>

            <TouchableOpacity onPress={togglePlayPause}>
              <AntDesign
                name={isPlaying ? "pausecircleo" : "playcircleo"}
                size={40}
                color="#eaeaea"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={playNextSong}>
              <AntDesign name="forward" size={30} color="#eaeaea" />
            </TouchableOpacity>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  musicControl: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#1f1f1f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trackInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    marginLeft: 10,
  },
  currentTrackArtwork: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  trackTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  currentTrackText: {
    color: "#eaeaea",
    fontSize: 16,
    flexWrap: "wrap",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 2,
  },
});
