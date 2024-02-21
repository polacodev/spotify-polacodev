import { Pause, Play } from "./Player"

const CardPlayButton = ({ id }) => {
	return (
		<div className="card-play-button bg-green-500 rounded-full p-3">
			<Play />
		</div>
	)
}

export default CardPlayButton
