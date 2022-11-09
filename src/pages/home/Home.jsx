import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Nav />
        Hello
      </div>
    </div>
  );
};

export default Home;
