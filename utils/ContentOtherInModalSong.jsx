import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

const ContentOther = ({ currentTrack }) => {
  return (
    <View style={{marginBottom: 60}}>
      {/* content 1 */}
      <View style={styles.container}>
        <View>
          <Text style={styles.textArtist}>Khám phá {currentTrack.artist}</Text>
          <View style={{ marginHorizontal: 15 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.viewImage}
              />
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.viewImage}
              />
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.viewImage}
              />
              <Image
                source={{ uri: currentTrack?.artwork }}
                style={styles.viewImage}
              />
            </ScrollView>
          </View>
        </View>
      </View>
      {/* Content 2 */}
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
            Người tham gia thực hiện
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.nameArtist}>{currentTrack?.artist}</Text>
              <Text style={styles.positionArtist}>Ca sĩ chính</Text>
            </View>
            <TouchableOpacity style={styles.viewFollow}>
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Đang theo dõi
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.nameArtist}>{currentTrack?.artist}</Text>
            <Text style={styles.positionArtist}>
              Nhà soạn nhạc, Người viết lời
            </Text>
          </View>
          <View>
            <Text style={styles.nameArtist}>{currentTrack?.artist}</Text>
            <Text style={styles.positionArtist}>Nhà sản xuất</Text>
          </View>
        </View>
      </View>
      {/* Content 3 */}
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: currentTrack?.artwork }}
            style={styles.viewImageContent3}
          />
          <View style={styles.viewOpacityImage} />
          <Text style={styles.textReviewArtist}>Giới thiệu về ca sĩ</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 15,
          }}
        >
          <View>
            <Text style={styles.nameArtist}>{currentTrack?.artist}</Text>
            <Text style={styles.positionArtist}>
              Được đánh giá {currentTrack?.rating} sao
            </Text>
          </View>
          <TouchableOpacity style={styles.viewFollow}>
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Đang theo dõi
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textEnd}>...</Text>
      </View>
    </View>
  );
};

export default ContentOther;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "#1f1f1f",
    width: "100%",
    borderRadius: 20,
    paddingBottom: 25,
  },
  textArtist: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 20,
  },
  viewImage: {
    width: 150,
    height: 250,
    marginRight: 10,
    borderRadius: 20,
  },
  viewFollow: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 15,
  },
  nameArtist: {
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  positionArtist: {
    color: "gray",
  },
  viewImageContent3: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewOpacityImage: {
    position: "absolute",
    width: "100%",
    height: 250,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textReviewArtist: {
    position: "absolute",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    left: 20,
    top: 10,
  },
  textEnd: {
    color: "white",
    marginLeft: 15,
    marginTop: 10,
  },
});
