const LoopingVideo = () => {
  return (
    <video
      src="/chillvideo.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-cover"
    />
  );
};

export default LoopingVideo;
