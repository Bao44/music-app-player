import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import TracksList from "../../utils/TracksList";
import { hp, wp } from "../../helpers/common";
import { fetchSongs } from "../../services/songService";


const SongScreen = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    let res = await fetchSongs();
    if(res.success){
      setSongs(res.data);
    }
  };

  return (
    <ScreenWrapper bg="#130c1c">
        <Text style={styles.text}>
          Songs
        </Text>
        <TracksList musicData={songs}/>
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
