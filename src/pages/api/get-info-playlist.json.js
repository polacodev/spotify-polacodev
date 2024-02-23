import { allPlaylists, songs } from "@/lib/data";

export async function GET({ params, request }) {
	const { url } = request;
	const urlResponse = new URL(url);
	const id = urlResponse.searchParams.get("id");

	const playlistFound = allPlaylists.find((playlist) => playlist.id === id);
	const songsFound = songs.filter((song) => playlistFound.albumId === song.albumId);

	return new Response(JSON.stringify({ playlist: playlistFound, songs: songsFound, song: songsFound[0] }))
}
