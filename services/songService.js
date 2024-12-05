import { supabase } from "../lib/supabase";

export const fetchSongs = async () => {
    try {
      const { data, error } = await supabase
        .from("songs")
        .select(`
          id,
          url,
          title,
          artist,
          artwork,
          images,
          rating,
          lyrics
        `)
        .order("id", { ascending: true });
  
      if (error) {
        console.log("fetchSongs error:", error);
        return { success: false, msg: "Could not fetch songs" };
      }
  
      return { success: true, data };
    } catch (error) {
      console.log("fetchSongs error:", error);
      return { success: false, msg: "Could not fetch songs" };
    }
  };
  