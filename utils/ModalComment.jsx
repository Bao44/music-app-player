import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import data from "../assets/data/comment.json";
import Avatar from "../components/Avatar";
import { hp } from "../helpers/common";
import { theme } from "../constants/theme";

const { height } = Dimensions.get("window");

const ModalComment = ({ modalComment, setModalComment, user }) => {

  // State để lưu trạng thái like và số lượt like cho bình luận và trả lời
  const [likes, setLikes] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = item.like; // bình luận có id riêng
      if (item.reply && item.reply.length > 0) {
        item.reply.forEach((reply) => {
          const replyId = `${item.id}-reply-${reply.id}`; // Tạo ID duy nhất cho trả lời
          acc[replyId] = reply.like; // Mỗi trả lời có ID riêng
        });
      }
      return acc;
    }, {})
  );

  const [liked, setLiked] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = false; // Trạng thái like cho bình luận
      if (item.reply && item.reply.length > 0) {
        item.reply.forEach((reply) => {
          const replyId = `${item.id}-reply-${reply.id}`; // Tạo ID duy nhất cho trả lời
          acc[replyId] = false; // Trạng thái like cho trả lời
        });
      }
      return acc;
    }, {})
  );

  // Khởi tạo trạng thái showReplies để theo dõi việc hiển thị thêm các câu trả lời
  const [showReplies, setShowReplies] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = false; // Ban đầu ẩn các câu trả lời
      return acc;
    }, {})
  );

  // Hàm toggle trạng thái like cho bình luận hoặc trả lời
  const toggleHeart = (id) => {
    setLiked((prevState) => {
      const newLiked = { ...prevState };
      newLiked[id] = !newLiked[id]; // Đảo trạng thái like
      return newLiked;
    });

    setLikes((prevState) => {
      const newLikes = { ...prevState };
      newLikes[id] = prevState[id] + (liked[id] ? -1 : 1); // Tăng/giảm lượt like
      return newLikes;
    });
  };

  // Hàm để toggle việc hiển thị thêm các câu trả lời
  const toggleReplies = (id) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Đảo trạng thái của việc hiển thị thêm câu trả lời
    }));
  };

  // Render từng bình luận và trả lời
  const renderComment = ({ item }) => {
    const hasReplies = item.reply && item.reply.length > 0;
    const showAllReplies = showReplies[item.id];

    return (
      <View style={styles.commentContainer}>
        {/* Comment */}
        <View style={styles.commentSection}>
          <Image source={{ uri: item.imageComment }} style={styles.avatar} />
          <View style={styles.commentContent}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.username}>{item.nameComment}</Text>
              <Text style={styles.commentDate}>{item.date}</Text>
            </View>
            <Text style={styles.commentText}>{item.content}</Text>
            <TouchableOpacity>
              <Text style={{ marginTop: 5, marginBottom: -10, color: "gray" }}>
                Trả lời
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => toggleHeart(item.id)}>
              <AntDesign
                name={liked[item.id] ? "heart" : "hearto"}
                size={30}
                color={liked[item.id] ? "red" : "black"}
              />
            </TouchableOpacity>
            <Text style={{ textAlign: "center" }}>{likes[item.id]}</Text>
          </View>
        </View>

        {/* Replies */}
        {hasReplies && (
          <View>
            {/* Hiển thị trả lời đầu tiên */}
            {item.reply[0] && (
              <View style={styles.replyItem}>
                <Image
                  source={{ uri: item.reply[0].imageReply }}
                  style={styles.avatar}
                />
                <View style={styles.commentContent}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.username}>
                      {item.reply[0].nameReply}
                    </Text>
                    <Text style={styles.commentDate}>{item.reply[0].date}</Text>
                  </View>
                  <Text style={styles.commentText}>
                    {item.reply[0].content}
                  </Text>
                  <TouchableOpacity>
                    <Text style={{ marginTop: 5, color: "gray" }}>Trả lời</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      toggleHeart(`${item.id}-reply-${item.reply[0].id}`)
                    }
                  >
                    <AntDesign
                      name={
                        liked[`${item.id}-reply-${item.reply[0].id}`]
                          ? "heart"
                          : "hearto"
                      }
                      size={30}
                      color={
                        liked[`${item.id}-reply-${item.reply[0].id}`]
                          ? "red"
                          : "black"
                      }
                    />
                  </TouchableOpacity>
                  <Text style={{ textAlign: "center" }}>
                    {likes[`${item.id}-reply-${item.reply[0].id}`]}
                  </Text>
                </View>
              </View>
            )}

            {/* Hiển thị các trả lời còn lại */}
            {showAllReplies &&
              item.reply.slice(1).map((reply) => (
                <View key={reply.id} style={styles.replyItem}>
                  <Image
                    source={{ uri: reply.imageReply }}
                    style={styles.avatar}
                  />
                  <View style={styles.commentContent}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.username}>{reply.nameReply}</Text>
                      <Text style={styles.commentDate}>{reply.date}</Text>
                    </View>
                    <Text style={styles.commentText}>{reply.content}</Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          marginTop: 5,
                          color: "gray",
                        }}
                      >
                        Trả lời
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        toggleHeart(`${item.id}-reply-${reply.id}`)
                      }
                    >
                      <AntDesign
                        name={
                          liked[`${item.id}-reply-${reply.id}`]
                            ? "heart"
                            : "hearto"
                        }
                        size={30}
                        color={
                          liked[`${item.id}-reply-${reply.id}`]
                            ? "red"
                            : "black"
                        }
                      />
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>
                      {likes[`${item.id}-reply-${reply.id}`]}
                    </Text>
                  </View>
                </View>
              ))}

            {/* Nút "Xem thêm" */}
            {item.reply.length > 1 && (
              <TouchableOpacity onPress={() => toggleReplies(item.id)}>
                <Text style={styles.showMoreText}>
                  {showAllReplies ? "Ẩn bớt" : "Xem thêm các câu trả lời"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View>
      <Modal
        visible={modalComment}
        swipeDirection={["up", "down"]}
        transparent={true}
        onRequestClose={() => {
          setModalComment(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.iconDown}
              onPress={() => {
                setModalComment(false);
              }}
            >
              <Entypo name="chevron-small-down" size={45} color="black" />
              <Text style={styles.modalHeaderText}>Comment</Text>
            </TouchableOpacity>

            <ScrollView style={styles.viewComment}>
              <FlatList
                data={data}
                renderItem={renderComment}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
              />
            </ScrollView>
            {/* InputText */}
            <View
              style={{
                borderTopWidth: 0.5,
                borderTopColor: "rgba(0, 0, 0, 0.05)",
              }}
            >
              <View style={{ flexDirection: "row", padding: 15 }}>
                <Avatar
                  uri={user?.image}
                  size={hp(5)}
                  rounded={theme.darius.xxl}
                  style={{ borderWidth: 2 }}
                />
                <TextInput
                  placeholder="Nhập bình luận"
                  style={styles.inputComment}
                />
                <MaterialCommunityIcons
                  name="sticker-emoji"
                  size={35}
                  color="black"
                  style={{ textAlignVertical: "center" }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    width: "100%",
    height: height * 0.8,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconDown: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    marginLeft: 5,
  },
  viewComment: {
    flex: 1,
  },
  commentContainer: {
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  commentSection: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    marginRight: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  commentDate: {
    fontSize: 14,
    color: "gray",
  },
  commentText: {
    fontSize: 16,
    marginRight: 10,
  },
  replyItem: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 50,
  },
  showMoreText: {
    color: "gray",
    fontSize: 14,
    marginTop: 5,
  },
  inputComment: {
    flex: 1,
    height: hp(5),
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: theme.darius.xl,
  },
});

export default ModalComment;
