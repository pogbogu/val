export const audioPlayer = (audiofile) => {
  let audio = new Audio(audiofile);
  return audio?.play();
};
