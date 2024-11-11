import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Icon from "../../assets/icons";
import { useRouter } from "expo-router";
import Avatar from "../../components/Avatar";

const LinkUpScreen = () => {
  const { user, setAuth } = useAuth();
  const router = useRouter();

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
