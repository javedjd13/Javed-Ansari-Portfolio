import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Images/profile.jpg";

const ProfileImage = () => (
  <Tilt
    className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-[#8245ec40] shadow-[0_0_60px_#8245ec66]"
    tiltMaxAngleX={0}
    tiltMaxAngleY={0}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={0}
  >
    <img
      src={profileImage}
      alt="Javed Ansari"
      className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] object-center "
    />
  </Tilt>
);

export default ProfileImage;
