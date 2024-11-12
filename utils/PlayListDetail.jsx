import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native"; // Giả sử bạn dùng react-navigation
import ScreenWrapper from "../components/ScreenWrapper";
import { hp, wp } from "../helpers/common";
import AntDesign from "@expo/vector-icons/AntDesign";
import TracksList from "./TracksList";

const PlaylistDetail = ({ navigation }) => {
  const route = useRoute();
  const { playlist, songs } = route.params; // Lấy playlist và danh sách bài hát từ tham số

  return (
    <ScreenWrapper bg="#130c1c">
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{ paddingHorizontal: 15 }}
          onPress={() => navigation.navigate("Main")}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.playlistTitle}>{playlist}</Text>
      </View>
      <TracksList musicData={songs} />
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

export default PlaylistDetail;
