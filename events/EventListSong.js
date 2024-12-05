import { useState, useEffect } from "react";
import { Audio } from "expo-av"; // Import the Audio component from expo-av

const useMusicPlayer = (musicData) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState(musicData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [sound, setSound] = useState(null); // Audio object to control playback
  const [modalVisible, setModalVisible] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  // fetch music data
  useEffect(() => {
    setFilteredMusic(musicData);
  }, [musicData]);
  

  // dọn dẹp khi component bị hủy
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  // Tìm kiếm
  const handleSearch = ({
    setSearchQuery,
    query,
    setFilteredMusic,
    musicData,
  }) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = musicData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMusic(filteredData);
    } else {
      setFilteredMusic(musicData);
    }
  };

  // Play song
  const playSong = async (track) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({
      uri: track.url,
    });
    setSound(newSound);
    setCurrentTrack(track);
    setIsPlaying(true);
    setCurrentTrackIndex(musicData.findIndex((item) => item.url === track.url));

    await newSound.playAsync();
    newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  };

  // Toggle play/pause
  const togglePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      playNextSong();
    }
  };

  // Play next song
  const playNextSong = () => {
    let nextTrackIndex = currentTrackIndex + 1;
    if (isShuffle) {
      playRandomSong();
    } else {
      playSong(musicData[nextTrackIndex]);
    }
  };

  // Play previous song
  const playPreviousSong = () => {
    let previousTrackIndex = currentTrackIndex - 1;
    if (previousTrackIndex < 0) {
      previousTrackIndex = musicData.length - 1;
    }
    playSong(musicData[previousTrackIndex]);
  };

  // Play random song
  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * musicData.length);
    playSong(musicData[randomIndex]);
  };

  const toggleShuffle = () => {
    setIsShuffle((prevShuffle) => !prevShuffle);
  };

  return {
    sound,
    searchQuery,
    setSearchQuery,
    handleSearch,
    filteredMusic,
    setFilteredMusic,
    isPlaying,
    currentTrack,
    modalVisible,
    setModalVisible,
    togglePlayPause,
    playSong,
    playNextSong,
    playPreviousSong,
    onPlaybackStatusUpdate,
    toggleShuffle,
    isShuffle,
  };
};

export default useMusicPlayer;
