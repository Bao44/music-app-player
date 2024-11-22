import {
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import { useRouter } from "expo-router";
import Avatar from "../../components/Avatar";
import musicData from "../../assets/data/library.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const Home = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

  // Trạng thái hiển thị cho từng danh sách
  const [showAllFor, setShowAllFor] = useState(false);
  const [showAllRecent, setShowAllRecent] = useState(false);
  const [showAllWantLister, setShowAllWantLister] = useState(false);
  const [showAllChill, setShowAllChill] = useState(false);
  const [showAllAlbum, setShowAllAlbum] = useState(false);
  const [showAllRadio, setShowAllRadio] = useState(false);

  // Hàm để đổi trạng thái cho từng danh sách
  const handleToggleShowAllFor = () => {
    setShowAllFor(!showAllFor);
  };

  const handleToggleShowAllRecent = () => {
    setShowAllRecent(!showAllRecent);
  };

  const handleToggleShowAllWantLister = () => {
    setShowAllWantLister(!showAllWantLister);
  };

  const handleToggleShowAllChill = () => {
    setShowAllChill(!showAllChill);
  };

  const handleToggleShowAllAlbum = () => {
    setShowAllAlbum(!showAllAlbum);
  };

  const handleToggleShowAllRadio = () => {
    setShowAllRadio(!showAllRadio);
  };

  // Hiển thị dữ liệu dựa trên trạng thái tương ứng
  const displayedFor = showAllFor
    ? musicData.slice(10, 16)
    : musicData.slice(10, 12);
  const displayedRecent = showAllRecent
    ? musicData.slice(4, 16)
    : musicData.slice(4, 7);
  const displayedWantLister = showAllWantLister
    ? musicData.slice(2, 16)
    : musicData.slice(2, 6);
  const displayedChill = showAllChill
    ? musicData.slice(5, 16)
    : musicData.slice(5, 8);
  const displayedAlbum = showAllAlbum
    ? musicData.slice(12, 16)
    : musicData.slice(12, 15);
  const displayedRadio = showAllRadio
    ? musicData.slice(8, 16)
    : musicData.slice(8, 10);

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image source={{ uri: item.artwork }} style={styles.artwork} />
      <View>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper bg="#130c1c">
      <ScrollView>
        {/* View Screen HeaderHome */}
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.title}>Music</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
                <Feather name="bell" size={28} color="white" />
              </TouchableOpacity>
              <Pressable onPress={() => router.push("profile")}>
                <Avatar
                  uri={user?.image}
                  size={hp(4.3)}
                  rounded={theme.radius.sm}
                  style={{ borderWidth: 2 }}
                />
              </Pressable>
            </View>
          </View>
        </View>
        {/*  View Screen Home */}

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity style={styles.pressableHeader}>
            <Text style={styles.pressableHeaderText}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pressableHeader}
            onPress={() => router.push("SongScreen")}
          >
            <Text style={styles.pressableHeaderText}>Song</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pressableHeader}>
            <Text style={styles.pressableHeaderText}>Podcasts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pressableHeader}
            onPress={() => router.push("artistScreen")}
          >
            <Text style={styles.pressableHeaderText}>Singer</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 10 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={styles.pressableLikeSong}
            onPress={() => router.push("favorites")}
          >
            <View style={{ backgroundColor: "#718355" }}>
              <Pressable
                style={{
                  width: 55,
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="heart" size={24} color="white" />
              </Pressable>
            </View>
            <Text style={styles.pressableLikeSongText}>Favorites</Text>
          </Pressable>

          <View style={styles.pressableLikeSong}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/obi.jpg")}
            />
            <View>
              <Text style={styles.pressableLikeSongText}>Hiphop</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.pressableLikeSong}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/tatcahoac.jpg")}
            />
            <View>
              <Text style={styles.pressableLikeSongText}>Lyrical music</Text>
            </View>
          </View>

          <View style={styles.pressableLikeSong}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/zoro.jpg")}
            />
            <View>
              <Text style={styles.pressableLikeSongText}>9x music</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.pressableLikeSong}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/luabang4.jpg")}
            />
            <View>
              <Text style={styles.pressableLikeSongText}>Kpop</Text>
            </View>
          </View>

          <View style={styles.pressableLikeSong}>
            <Image
              style={{ width: 55, height: 55 }}
              source={require("../../assets/images/luffy1.jpg")}
            />
            <View>
              <Text style={styles.pressableLikeSongText}>US-UK</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 20 }} />

        <Text style={styles.titleOptions}>Trending albums</Text>
        <FlatList
          data={musicData}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={styles.titleOptions}>Suggestions for you</Text>
          <View style={{ marginRight: 10, marginTop: 10 }}>
            {/* Nút để hiện toàn bộ danh sách */}
            {!showAllFor && (
              <TouchableOpacity onPress={handleToggleShowAllFor}>
                <Text style={{ color: "white" }}>See all</Text>
              </TouchableOpacity>
            )}

            {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
            {showAllFor && (
              <TouchableOpacity onPress={handleToggleShowAllFor}>
                <Text style={{ color: "white" }}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayedFor}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleOptions}>Listen recently</Text>
          <View style={{ marginRight: 10, marginTop: 10 }}>
            {/* Nút để hiện toàn bộ danh sách */}
            {!showAllRecent && (
              <TouchableOpacity onPress={handleToggleShowAllRecent}>
                <Text style={{ color: "white" }}>See all</Text>
              </TouchableOpacity>
            )}

            {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
            {showAllRecent && (
              <TouchableOpacity onPress={handleToggleShowAllRecent}>
                <Text style={{ color: "white" }}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayedRecent}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.artwork }}
                style={{
                  borderRadius: 100,
                  borderColor: "#80ED99",
                  borderWidth: 3,
                  width: 150,
                  height: 150,
                  marginRight: 15,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleOptions}>You might want to listen</Text>
          {/* Nút để hiện toàn bộ danh sách */}
          {!showAllWantLister && (
            <TouchableOpacity onPress={handleToggleShowAllWantLister}>
              <Text style={{ color: "white" }}>See all</Text>
            </TouchableOpacity>
          )}

          {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
          {showAllWantLister && (
            <TouchableOpacity onPress={handleToggleShowAllWantLister}>
              <Text style={{ color: "white" }}>Hide</Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={displayedWantLister}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleOptions}>Chill</Text>
          <View style={{ marginRight: 10, marginTop: 10 }}>
            {/* Nút để hiện toàn bộ danh sách */}
            {!showAllChill && (
              <TouchableOpacity onPress={handleToggleShowAllChill}>
                <Text style={{ color: "white" }}>See all</Text>
              </TouchableOpacity>
            )}

            {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
            {showAllChill && (
              <TouchableOpacity onPress={handleToggleShowAllChill}>
                <Text style={{ color: "white" }}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayedChill}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />

        <Text style={styles.titleOptions}>Topics & categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "#EF476F" }]}
          >
            <Text style={styles.textViewTopic}>Rap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "blue" }]}
          >
            <Text style={styles.textViewTopic}>GenZ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "#718355" }]}
          >
            <Text style={styles.textViewTopic}>US-UK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "purple" }]}
          >
            <Text style={styles.textViewTopic}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "#0B6477" }]}
          >
            <Text style={styles.textViewTopic}>Chill</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewTopic, { backgroundColor: "green" }]}
          >
            <Text style={styles.textViewTopic}>Relax</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ height: 20 }} />

        <Text style={styles.titleOptions}>Newly released</Text>
        <FlatList
          data={musicData}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleOptions}>Album hot</Text>
          <View style={{ marginRight: 10, marginTop: 10 }}>
            {/* Nút để hiện toàn bộ danh sách */}
            {!showAllAlbum && (
              <TouchableOpacity onPress={handleToggleShowAllAlbum}>
                <Text style={{ color: "white" }}>See all</Text>
              </TouchableOpacity>
            )}

            {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
            {showAllAlbum && (
              <TouchableOpacity onPress={handleToggleShowAllAlbum}>
                <Text style={{ color: "white" }}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayedAlbum}
          renderItem={renderItem}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />

        <View style={{ height: 20 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleOptions}>Outstanding radio</Text>
          <View style={{ marginRight: 10, marginTop: 10 }}>
            {/* Nút để hiện toàn bộ danh sách */}
            {!showAllRadio && (
              <TouchableOpacity onPress={handleToggleShowAllRadio}>
                <Text style={{ color: "white" }}>See all</Text>
              </TouchableOpacity>
            )}

            {/* Nút để ẩn toàn bộ danh sách nếu đã hiện */}
            {showAllRadio && (
              <TouchableOpacity onPress={handleToggleShowAllRadio}>
                <Text style={{ color: "white" }}>Hide</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayedRadio}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: item.artwork }}
                style={{
                  borderRadius: 100,
                  borderColor: "#EF476F",
                  borderWidth: 3,
                  width: 150,
                  height: 150,
                  marginRight: 15,
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.url}
          horizontal={true}
        />
        <View style={{ height: 20 }} />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: "white",
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
    borderWidth: 3,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  pressableHeader: {
    backgroundColor: "#282828",
    padding: 10,
    borderRadius: 30,
  },
  pressableHeaderText: {
    color: "white",
    fontSize: 15,
  },
  pressableLikeSong: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 0,
    backgroundColor: "#202020",
    elevation: 3,
  },
  pressableLikeSongText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  titleOptions: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  artwork: {
    width: 150,
    height: 160,
    marginRight: 15,
    marginTop: 10,
  },
  artist: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 10,
  },
  viewTopic: {
    marginHorizontal: 5,
    marginTop: 15,
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  textViewTopic: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
  },
});
