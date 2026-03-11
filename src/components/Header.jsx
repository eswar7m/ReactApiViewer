import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    navigate("/data", { state: data });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
    </div>
  );
}

export default Header;