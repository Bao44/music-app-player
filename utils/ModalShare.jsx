import {
  Modal,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import data from "../assets/data/comment.json";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

const { height } = Dimensions.get("window"); // Lấy chiều cao của màn hình

const ModalShare = ({ modalShare, setModalShare }) => {
  const renderListPerson = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listItem}>
        <Image source={{ uri: item.imageComment }} style={styles.avatar} />
        <Text style={styles.nameText}>{item.nameComment}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Modal
        visible={modalShare}
        swipeDirection={["up", "down"]}
        transparent={true} // Để background mờ
        onRequestClose={() => {
          setModalShare(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Button to close the modal */}
            <TouchableOpacity
              style={styles.iconDown}
              onPress={() => {
                setModalShare(false);
              }}
            >
              <Entypo name="chevron-small-down" size={45} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTextHeader}>
              Liên kết mà bạn chia sẻ là dành riêng cho bạn và có thể được dùng
              để cải thiện gợi ý cũng như quảng cáo bạn nhìn thấy.{" "}
              <Text style={{ color: "blue" }}>Tìm hiểu thêm</Text>
            </Text>
            {/* Content of the modal */}
            <View style={{ padding: 10, marginTop: 10 }}>
              {/* Input */}
              <View style={styles.viewModalInput}>
                <View style={styles.viewInput}>
                  <AntDesign name="search1" size={20} color="gray" />
                  <TextInput placeholder="Tìm kiếm" style={styles.textInput} />
                </View>
                <AntDesign name="addusergroup" size={30} color="black" />
              </View>
            </View>
            {/* FlatList */}
            <FlatList
              data={data}
              renderItem={renderListPerson}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            {/* Footer */}
            <View style={styles.footer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/images/zoro.jpg")}
                      style={styles.imageFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Thêm ghi chú</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <Entypo
                      name="attachment"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Sao chép liên kết</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="facebook-messenger"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Chia sẻ</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <AntDesign
                      name="sharealt"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>WhatsApp</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome
                      name="facebook"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Facebook</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="add"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Thêm vào tin</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="comment-sms"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>SMS</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="snapchat"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Snapchat</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="x-twitter"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>X</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <FontAwesome6
                      name="threads"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Threads</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity style={styles.viewButtonFooter}>
                    <Entypo
                      name="email"
                      size={24}
                      color="black"
                      style={styles.iconButtonFooter}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textFooter}>Email</Text>
                </View>
              </ScrollView>
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
    justifyContent: "flex-end", // Canh giữa theo chiều dọc, nhưng chỉ ở phần trên
    alignItems: "center", // Canh giữa theo chiều ngang
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Màu nền mờ
  },
  modalContent: {
    width: "100%",
    height: height * 0.6, // Chiếm 50% chiều cao màn hình
    backgroundColor: "white",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 10, // Khoảng cách từ trên cùng
  },
  iconDown: {
    position: "absolute",
    top: 0, // Vị trí của biểu tượng "chevron"
    left: 0,
    width: "100%",
    paddingLeft: "45%",
  },
  modalTextHeader: {
    marginTop: 30,
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 14,
    color: "gray",
  },
  viewModalInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: 350,
    height: 45,
    paddingLeft: 10,
  },
  textInput: {
    paddingLeft: 10,
    paddingRight: 150,
    fontSize: 18,
  },
  listItem: {
    flex: 1,
    alignItems: "center", // Căn giữa các mục
    justifyContent: "center", // Căn giữa các mục theo chiều dọc
    margin: 10, // Khoảng cách giữa các mục
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 10,
  },
  nameText: {
    textAlign: "center",
    marginRight: 10,
    marginTop: 10,
  },
  footer: {
    height: 120,
    borderWidth: 0.5,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  imageFooter: {
    width: 50,
    height: 50,
    borderRadius: 20,
    margin: 10,
  },
  textFooter: {
    textAlign: "center",
    width: 70,
    marginRight: -5,
  },
  viewButtonFooter: {
    width: 50,
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    marginVertical: 10,
    marginLeft: 5,
  },
  iconButtonFooter: {
    textAlign: "center",
    marginTop: 12,
  },
});

export default ModalShare;
