import { useLocation } from "react-router-dom";

function DataPage() {
  const location = useLocation();
  const data = location.state?.results || [];
  if (!data || data.length === 0) {
    return (
      <div className="container">
        <div className="empty-state">
          <h2>No Data Available</h2>
          <p>Please go back to the home page and fetch some data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pokemon) => (
              <tr>
                <td>{pokemon.name}</td>
                <td>{pokemon.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataPage;