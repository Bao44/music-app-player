import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Feather from "@expo/vector-icons/Feather";
import { FlatList } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

const premiumHome = () => {
  const router = useRouter();
  const data = [
    {
      title: "Premium",
      time: "Free for 1 month",
      price: "$12.99/month",
    },
    {
      title: "Premium Family",
      time: "Free for 1 month",
      price: "$17.99/month",
    },
    {
      title: "Premium Student",
      time: "Free for 1 month",
      price: "$4.99/month",
    },
    {
      title: "Premium Duo",
      time: "Free for 1 month",
      price: "$9.99/month",
    },
  ];

  const renderItem = ({ item }) => (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 34, marginTop: 20 }}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View style={{ backgroundColor: "#F4E7FB", borderRadius: 20 }}>
            <Text style={{ fontSize: 20, color: "#C8A8E9", padding: 10 }}>
              {item.time}
            </Text>
          </View>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.price}</Text>
        </View>
        <View>
          <View style={styles.viewTextOption}>
            <Feather name="check" size={26} color="#C8A8E9" />
            <Text style={styles.textOption}>Ad-free listening</Text>
          </View>
          <View style={styles.viewTextOption}>
            <Feather name="check" size={26} color="#C8A8E9" />
            <Text style={styles.textOption}>Download to listen offline</Text>
          </View>
          <View style={styles.viewTextOption}>
            <Feather name="check" size={26} color="#C8A8E9" />
            <Text style={styles.textOption}>Access full catalog Premium</Text>
          </View>
          <View style={styles.viewTextOption}>
            <Feather name="check" size={26} color="#C8A8E9" />
            <Text style={styles.textOption}>High sound quality</Text>
          </View>
          <View style={styles.viewTextOption}>
            <Feather name="check" size={26} color="#C8A8E9" />
            <Text style={styles.textOption}>Cancel anytime</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Subscribe now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
  return (
    <ScreenWrapper bg="#130c1c">
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text style={styles.textHeader}>Unlimited</Text>
          <Text style={styles.textHeader}>music selections</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={40}
          color="white"
          style={{ textAlign: "center" }}
        />
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontSize: 24}}>Back home</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default premiumHome;

const styles = StyleSheet.create({
  textHeader: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
    width: 370,
    height: 550,
    margin: 5,
    padding: 20,
    margin: 10,
    borderRadius: 15,
    marginVertical: 20,
  },
  viewTextOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  textOption: {
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
  },
  btn: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginTop: 45,
    alignSelf: "center",
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
