import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const ListSong = ({playSong, filteredMusic}) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => playSong(item)}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.artwork }} style={styles.artwork} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={filteredMusic}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default ListSong;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1b26",
    opacity: 0.8,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  artwork: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eaeaea",
    marginBottom: 4,
  },
  artist: {
    fontSize: 14,
    color: "#b0aeb5",
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingBottom: 80,
  },
});
