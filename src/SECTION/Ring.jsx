import Slideshow from "../components/SlideShow";
import VideoPlayer from "../components/Video";

const Ring = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <Slideshow />
      <VideoPlayer link={"ukSewaXAC5M"} />
    </div>
  );
};

export default Ring;
