
import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProgressBar from 'react-native-progress/Bar';

const ProgressBarModal = ({ currentTrack, playbackObject, onPlaybackStatusUpdate }) => {
  const [currentTime, setCurrentTime] = useState(0); // Thời gian hiện tại của bài hát
  const [duration, setDuration] = useState(1); // Tổng thời gian của bài hát

  useEffect(() => {
    // Nếu `currentTrack` thay đổi, đặt lại thời gian hiện tại về 0
    setCurrentTime(0);

    // Hàm này được gọi liên tục để cập nhật thời gian hiện tại của bài hát
    const updateProgress = async () => {
      if (playbackObject) {
        const status = await playbackObject.getStatusAsync();
        if (status.isLoaded && status.isPlaying) {
          setCurrentTime(status.positionMillis);
          setDuration(status.durationMillis);
        }
        playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      }
    };

    // Cập nhật thời gian sau mỗi 500ms
    const intervalId = setInterval(updateProgress, 500);

    return () => clearInterval(intervalId); // Xóa interval khi component unmount
  }, [currentTrack, playbackObject]);

  // Tính toán phần trăm tiến trình
  const progress = duration > 0 ? currentTime / duration : 0;

  // Chuyển đổi thời gian từ mili giây sang phút và giây
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitleInfo}>
        <View style={{ height: 100, justifyContent: "center" }}>
          <Text style={styles.titleInfo}>{currentTrack?.title}</Text>
          <Text style={styles.artistInfo}>{currentTrack?.artist}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10}}>
        <ProgressBar 
          progress={progress} 
          width={null} //387
          height={7} 
          color='white' 
          style={styles.viewProgress}
        />
        <View style={styles.progressTime}>
          <Text style={styles.textProgress}>{formatTime(currentTime)}</Text>
          <Text style={styles.textProgress}>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressBarModal;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  viewTitleInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    
  },
  titleInfo: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    width: 250,
  },
  artistInfo: {
    fontSize: 20,
    color: "gray",
  },
  progressTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15,
  },
  viewProgress:{
    
  },
  textProgress: {
    color: "gray",
    fontSize: 18,
  }
});
