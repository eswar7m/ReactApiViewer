import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const fetchData = async (e) => {
    e.preventDefault();
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    navigate("/data", { state: data });
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">API Explorer</span>
      </div>
      <div className="nav-right">
        <a onClick={fetchData}>List Users</a>
      </div>
    </header>
  );
}

export default Header;