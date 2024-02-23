import { create } from "zustand";

const usePlayerStore = create((set) => ({
	volume: 1,
	setVolume: (volume) => set({ volume }),

	currentMusic: { playlist: null, song: null, songs: [] },
	setCurrentMusic: (currentMusic) => set({ currentMusic }),

	isPlaying: false,
	setIsPlaying: (isPlaying) => set({ isPlaying })
}))

export default usePlayerStore;
