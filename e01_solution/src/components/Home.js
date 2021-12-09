import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Home</p>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
      >
        Go to tasks
      </button>
      <div style={{ margin: "1rem" }}>
        <Link to={"/about"}>About</Link>
      </div>
    </>
  );
};

export default Home;
