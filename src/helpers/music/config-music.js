import { Howl, Howler } from "howler";

import one from "../../music/playlist/01.mp3";
import two from "../../music/playlist/02.mp3";
import three from "../../music/playlist/03.mp3";

export const Playlist = [one, two, three];

// export const Playlist = new Howl({
//   src: musicArray,
//   loop: true,
//   volume: 0.5,
//   onload: () => console.log("loaded"),
//   onend: function() {
//     console.log("Finished!");
//   }
// });
