import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { hp, wp } from "../../helpers/common";
import TracksList from "../../utils/TracksList";
import library from "../../assets/data/library.json";
import { useRouter } from "expo-router";
import BackButton from "../../components/BackButton";

const Favorites = () => {
  const router = useRouter();
  const favoritesSongs = useMemo(() => {
    return library.filter((song) => song.rating === 1);
  });

  return (
    <ScreenWrapper bg="#130c1c">
      <View style={{flexDirection: 'row', marginTop: 20}}>
      <BackButton router={router} />
      <Text style={styles.text}>Favorites</Text>
      </View>
      <TracksList musicData={favoritesSongs} />
    </ScreenWrapper>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: wp(4),
    color: "white",
    fontSize: hp(3.2),
    fontWeight: "bold",
    marginTop: -5,
  },
});
