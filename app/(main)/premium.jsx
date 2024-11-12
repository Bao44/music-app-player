import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import BackButton from "../../components/BackButton";

const premium = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#130c1c">
      <BackButton router={router} />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.text}>Premium</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={40} color="white" style={{ marginVertical: 30 }}/>
        <TouchableOpacity
          onPress={() => router.push("premiumHome")}
          style={styles.buttonPremium}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Start Listening
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default premium;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPremium: {
    padding: 15,
    backgroundColor: "#ff6b6b",
    borderRadius: 30,
    margin: 10,
    opacity: 0.8,
    paddingHorizontal: 50,
  },
});
