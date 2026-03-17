import { useRef, useState } from "react";
import Header from "../components/Header";

function Home() {
  const id = useRef(25);
  const [bgImage, setBgImage] = useState("https://picsum.photos/id/25/1920/1080");
  const handleClick = () => {
    id.current += 1;
    setBgImage(`https://picsum.photos/id/${id.current}/1920/1080`);
  };

  return (
    <>
      <Header />
        <div 
          style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          top: "60px",
          left: 0,
          width: "100%",
          height: "calc(100% - 60px)",
          zIndex: -1
        }}
        >
      </div>
      <div className="container">
        <button onClick={handleClick}>
          Next Background
        </button>
      </div>
    </>
  );
}

export default Home;