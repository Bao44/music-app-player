import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import { useRouter } from "expo-router";
import Avatar from "../../components/Avatar";
import ig from "../../assets/data/ig.json";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ModalComment from "../../utils/ModalComment";
import ModalShare from "../../utils/ModalShare";

const LinkUpScreen = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

  const [modalComment, setModalComment] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [selectedHeart, setSelectedHeart] = useState({});
  const [showDescription, setShowDescription] = useState({});

  const toggleHeart = (id) => {
    setSelectedHeart((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleDescription = (id) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderStory = ({ item }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{ uri: item.avatar }} style={styles.avatarStory} />
        </TouchableOpacity>
        <Text style={styles.nameStory}>{item.name}</Text>
      </View>
    );
  };

  const renderInformation = ({ item }) => {
    return (
      <View style={{ marginHorizontal: 10 }}>
        <View style={styles.headerInformation}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatarInformation}
            />
            <Text style={styles.nameInformation}>{item.name}</Text>
          </View>
          <Entypo name="dots-three-vertical" size={22} color="black" />
        </View>
        <Image source={{ uri: item.image }} style={styles.imageInformation} />
        <View style={styles.viewIconEvent}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => toggleHeart(item.id)}>
              <AntDesign
                name={selectedHeart[item.id] ? "heart" : "hearto"}
                size={30}
                color={selectedHeart[item.id] ? "red" : "black"} // chỉ thay đổi cho item được click
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalComment(!modalComment);
              }}
            >
              <Feather
                name="message-circle"
                size={30}
                color="black"
                style={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>

            <ModalComment
              modalComment={modalComment}
              setModalComment={setModalComment}
              user = {user}
            />

            <TouchableOpacity
              onPress={() => {
                setModalShare(!modalShare);
              }}
            >
              <FontAwesome5 name="share" size={30} color="black" />
            </TouchableOpacity>

            <ModalShare
              modalShare={modalShare}
              setModalShare={setModalShare}
            />
          </View>
          <TouchableOpacity>
            <FontAwesome name="bookmark-o" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameContent}>
          {item.name} <Text style={styles.content}>CONTENT</Text>
        </Text>
        <Text
          style={styles.description}
          numberOfLines={showDescription[item.id] ? undefined : 1} // Hiển thị tất cả các dòng nếu showDes là true
          ellipsizeMode="tail" // Hiển thị dấu "..." nếu nội dung bị cắt
        >
          Description anh bảo đẹp trai số 1 thế giới siêu cấp đẹp trai không ai
          sánh bằng hahaha
        </Text>
        <TouchableOpacity onPress={() => toggleDescription(item.id)}>
          <Text style={styles.showDescription}>
            {showDescription[item.id] ? "Ẩn bớt" : "Xem thêm"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenWrapper bg="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* View Screen HeaderHome */}
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.title}>Ig</Text>
            <View style={styles.icons}>
              <Pressable onPress={() => router.push("notifications")}>
                <Icon
                  name="heart"
                  size={hp(3.2)}
                  strokeWidth={2}
                  color={theme.colors.text}
                />
              </Pressable>
              <Pressable onPress={() => router.push("newPost")}>
                <Icon
                  name="plus"
                  size={hp(3.2)}
                  strokeWidth={2}
                  color={theme.colors.text}
                />
              </Pressable>
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
        {/* Story */}
        <FlatList data={ig} renderItem={renderStory} horizontal />
        {/* Information */}
        <FlatList
          data={ig}
          renderItem={renderInformation}
          scrollEnabled={false}
        />
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default LinkUpScreen;

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
    color: "black",
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
  avatarStory: {
    height: 110,
    width: 110,
    margin: 10,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "blue",
  },
  nameStory: {
    textAlign: "center",
    fontSize: 16,
  },
  headerInformation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  nameInformation: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageInformation: {
    height: 450,
    width: "100%",
    marginVertical: 10,
    borderWidth: 3,
    borderColor: "blue",
  },
  avatarInformation: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "red",
  },
  viewIconEvent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  nameContent: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 20,
    fontWeight: "normal",
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    marginVertical: 5,
  },
  showDescription: {
    fontSize: 18,
    color: "#1f1f1f",
  },
});
