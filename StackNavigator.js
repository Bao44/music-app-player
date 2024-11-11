import HomeScreen from "./app/(tabs)/HomeScreen";
import SongScreen from "./app/(tabs)/SongScreen";
import PlayLists from "./app/(tabs)/PlayLists";
import Artists from "./app/(tabs)/Artists";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from "@expo/vector-icons/Fontisto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlaylistDetail from "./utils/PlayListDetail";
import ArtistDetail from "./utils/ArtistDetail";
import IgScreen from "./app/(tabs)/IgScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#130c1c",
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarLabelStyle: { color: "white", fontSize: 14 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="home" size={30} color="white" />
              ) : (
                <AntDesign name="home" size={30} color="gray" />
              ),
          }}
        />

        <Tab.Screen
          name="Song"
          component={SongScreen}
          options={{
            tabBarLabel: "Song",
            headerShown: false,
            tabBarLabelStyle: { color: "white", fontSize: 14 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Fontisto name="music-note" size={24} color="white" />
              ) : (
                <Fontisto name="music-note" size={24} color="gray" />
              ),
          }}
        />

        <Tab.Screen
          name="Ig"
          component={IgScreen}
          options={{
            tabBarLabel: "Ig",
            headerShown: false,
            tabBarLabelStyle: { color: "white", fontSize: 14 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome5 name="globe-asia" size={24} color="white" />
              ) : (
                <FontAwesome5 name="globe-asia" size={24} color="gray" />
              ),
          }}
        />

        <Tab.Screen
          name="PlayLists"
          component={PlayLists}
          options={{
            tabBarLabel: "PlayLists",
            headerShown: false,
            tabBarLabelStyle: { color: "white", fontSize: 14 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="playlist-music"
                  size={24}
                  color="white"
                />
              ) : (
                <MaterialCommunityIcons
                  name="playlist-music"
                  size={24}
                  color="gray"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Artists"
          component={Artists}
          options={{
            tabBarLabel: "Artists",
            headerShown: false,
            tabBarLabelStyle: { color: "white", fontSize: 14 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome6 name="user-group" size={20} color="white" />
              ) : (
                <FontAwesome6 name="user-group" size={20} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
      {/*  */}
    </>
  );
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayListDetail"
          component={PlaylistDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ArtistDetail"
          component={ArtistDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
