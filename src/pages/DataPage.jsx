import { useLocation } from "react-router-dom";

function DataPage() {
  const location = useLocation();
  const data = location.state || [];

  return (
    <div style={{ padding: "20px" }}>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPage;