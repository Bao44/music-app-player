// import React, { useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import Header from "../../components/Header";
// import ScreenWrapper from "../../components/ScreenWrapper";
// import tracks from "../../assets/data/library.json";
// import { useRouter } from "expo-router";

// const ArtistScreen = () => {
//   const router = useRouter();
//   const [selectedArtist, setSelectedArtist] = useState(null); // Nghệ sĩ được chọn
//   const [artistTracks, setArtistTracks] = useState([]); // Danh sách bài hát của nghệ sĩ

//   const uniqueArtists = Array.from(new Set(tracks.map((item) => item.artist)));

//   const handleArtistPress = (artist) => {
    
//     setSelectedArtist(artist);
//     const filteredTracks = tracks.filter((track) => track.artist === artist);
//     setArtistTracks(filteredTracks);

//     router.push("artistDetails", {
//       artist: artist,
//       tracks: filteredTracks,
//     });
//   };

//   return (
//     <ScreenWrapper bg={"white"}>
//       <View style={{ paddingHorizontal: 10 }}>
//         <Header title="Artist" />
//       </View>
//       {/* Danh sách nghệ sĩ */}
//       <FlatList
//         data={uniqueArtists}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleArtistPress(item)}>
//             <View style={{ padding: 10 }}>
//               <Text style={styles.artistName}>{item}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </ScreenWrapper>
//   );
// };

// export default ArtistScreen;

// const styles = StyleSheet.create({
//   artistName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   goBack: {
//     fontSize: 16,
//     color: "blue",
//     marginVertical: 10,
//   },
//   artistTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   trackName: {
//     fontSize: 16,
//   },
// });


import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import ScreenWrapper from "../../components/ScreenWrapper";
import tracks from "../../assets/data/library.json";
import { useRouter } from "expo-router";

const ArtistScreen = () => {
  const router = useRouter();
  const uniqueArtists = Array.from(new Set(tracks.map((item) => item.artist)));

  const handleArtistPress = (artist) => {
    // Lưu artist trong route params
    router.push({
      pathname: "artistDetails",
      params: { artist },
    });
  };

  return (
    <ScreenWrapper bg={"white"}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header title="Artist" />
      </View>
      <FlatList
        data={uniqueArtists}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleArtistPress(item)}>
            <View style={{ padding: 10 }}>
              <Text style={styles.artistName}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScreenWrapper>
  );
};

export default ArtistScreen;

const styles = StyleSheet.create({
  artistName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
