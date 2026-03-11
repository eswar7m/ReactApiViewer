import Header from "../components/Header";

function Home() {
    const handleClick = () => {
        //To DO
    };

    return (
      <div>
        <Header />
        <button onClick={handleClick}>
          Home Button
        </button>
      </div>
    );
  }
  
  export default Home;