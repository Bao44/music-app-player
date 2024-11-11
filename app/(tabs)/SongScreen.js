import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import TracksList from "../../utils/TracksList";
import library from '../../assets/data/library.json'; 
import { hp, wp } from "../../helpers/common";


const SongScreen = () => {
  return (
    <ScreenWrapper bg="#130c1c">
        <Text style={styles.text}>
          Songs
        </Text>
        <TracksList musicData={library}/>
    </ScreenWrapper>
  );
};

export default SongScreen;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: wp(4),
    color: "white",
    fontSize: hp(3.2),
    fontWeight: "bold",
  }
});
