import { Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const HandleEventModals = ({
  isPlaying,
  onPress = () => {},
  onPressPrev = () => {},
  onPressNext = () => {},
  onPressShuffle = () => {}, // Thêm hàm phát ngẫu nhiên
  isShuffle = false, // Trạng thái của phát ngẫu nhiên
}) => {
  const [repeat, setRepeat] = useState(null);
  const handlePressRepeat = () => {
    setRepeat((prevValue) => (prevValue === 2 ? 0 : prevValue + 1));
  };
  return (
    <View style={styles.viewEvent}>
      <TouchableOpacity>
        <Text style={styles.iconRepeat}>{repeat === 0 ? "" : repeat}</Text>
        <Feather
          name="repeat"
          size={30}
          color="#03C03C"
          onPress={handlePressRepeat}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign
          name="stepbackward"
          size={40}
          color="white"
          onPress={onPressPrev}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome6
          name={isPlaying ? "pause" : "play"}
          size={60}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign
          name="stepforward"
          size={40}
          color="white"
          onPress={onPressNext}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressShuffle}>
        <FontAwesome name="random" size={30} color={isShuffle ? "#03C03C" : "white"} />
      </TouchableOpacity>
    </View>
  );
};

export default HandleEventModals;

const styles = StyleSheet.create({
  viewEvent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  iconRepeat: {
    position: "absolute",
    fontSize: 14,
    top: -10,
    right: -10,
    color: "white",
  },
});
