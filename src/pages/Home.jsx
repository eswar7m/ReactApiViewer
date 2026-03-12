import Header from "../components/Header";

function Home() {
  const handleClick = () => {
    // TODO: Add functionality if needed
  };

  return (
    <>
      <Header />
      <div className="container">
        <p>
          Explore and interact with APIs effortlessly. Click the button below to fetch and view user data from our sample API.
        </p>
        <button onClick={handleClick}>
          Next Background
        </button>
      </div>
    </>
  );
}

export default Home;