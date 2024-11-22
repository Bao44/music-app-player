import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Lyrics = ({ currentTrack }) => {
  const [showLyrics, setShowLyrics] = useState(false); // Quản lý trạng thái hiển thị

  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
  };
  return (
    <View style={styles.viewLyrics}>
      <Text style={styles.titleLyrics}>Lyrics</Text>
      <View style={{ padding: 10 }}>
        <Text
          style={styles.textLyrics}
          numberOfLines={showLyrics ? undefined : 4} // Hiển thị tất cả các dòng nếu showLyrics là true
          ellipsizeMode="tail" // Hiển thị dấu "..." nếu nội dung bị cắt
        >
          {currentTrack?.lyrics}
        </Text>
      </View>
      <TouchableOpacity onPress={toggleLyrics} style={styles.button}>
        <Text style={styles.buttonText}>
          {showLyrics ? "Hide lyrics" : "See more lyrics"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lyrics;

const styles = StyleSheet.create({
  viewLyrics: {
    marginTop: 30,
    backgroundColor: "#1f1f1f",
    width: "100%",
    borderRadius: 20,
  },
  titleLyrics: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  textLyrics: {
    color: "white",
    fontSize: 16,
    textAlign: "left",
    marginTop: 5,
    lineHeight: 30,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    opacity: 0.8,
  },
  buttonText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
  },
});
