const playSound = (url, volume = 1, loop = false) => {
  const audio = new Audio(url);
  audio.volume = volume;
  audio.loop = loop;
  audio.play();
};

export { playSound };
