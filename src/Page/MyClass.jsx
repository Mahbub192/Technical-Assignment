import { useEffect, useState } from "react";
import loadingImage from "../assets/98432-loading";
import Lottie from "lottie-react";

const MyClass = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <div className="h-80vh">
        <Lottie className="h-screen" animationData={loadingImage} loop={true} />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>User Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <tr>
                  <th>{user.id}</th>
                  <td>{user?.userId}</td>
                  <td>{user?.title}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
