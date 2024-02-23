
import usePlayerStore from "@/store/playerStore";
import { Pause, Play } from "./Player"

const CardPlayButton = ({ id, size="small" }) => {

	const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state);

	const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

	const handleClick = async () => {
		if (isPlayingPlaylist) {
			setIsPlaying(false)
			return;
		}

		try {
			const response = await fetch(`/api/get-info-playlist.json?id=${id}`)
			const data = await response.json();
			const { songs, playlist, song } = data;
			setIsPlaying(true);
			setCurrentMusic({ playlist, song, songs })
		} catch (error) {
			throw error;
		}
	}

	const iconClassName = size === "small" ? "size-4" : "size-6"

	return (
		<button onClick={handleClick} className="card-play-button bg-green-500 rounded-full p-3 hover:scale-105 transition hover:bg-green-400">
			{isPlayingPlaylist && isPlaying ? <Pause className={iconClassName}/> : <Play className={iconClassName} />}
		</button>
	)
}

export default CardPlayButton
