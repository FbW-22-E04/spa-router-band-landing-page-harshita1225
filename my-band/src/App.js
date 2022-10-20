import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";

const data = [
  {
    name: "home",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Paragon_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL1745.jpg/330px-Paragon_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL1745.jpg",
  },
  {
    name: "vocals",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Paragon_Metal_Frenzy_2018_12.jpg/1920px-Paragon_Metal_Frenzy_2018_12.jpg",
  },
  {
    name: "guitar",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Paragon_Metal_Frenzy_2018_18.jpg/1920px-Paragon_Metal_Frenzy_2018_18.jpg",
  },
  {
    name: "bass",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Paragon_Metal_Frenzy_2018_10.jpg/800px-Paragon_Metal_Frenzy_2018_10.jpg",
  },
  {
    name: "drums",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Paragon_Metal_Frenzy_2018_03.jpg/1920px-Paragon_Metal_Frenzy_2018_03.jpg",
  },
];

const App = () => {
  const { artist } = useParams();
  console.log(useParams());
  const updateImg = data.filter((item) => item.name === artist)[0];

  return (
    <div className="container">
      <div className="band-container">
        <NavLink to="/home">
          <div className="logo">
            <img
              src="https://png.pngitem.com/pimgs/s/1-10366_heavy-fuckinmetal-from-hamburg-paragon-band-logo-hd.png"
              alt="band"
            />
          </div>
        </NavLink>
        <ul className="nav-items">
          <NavLink style={{ textDecoration: "none" }} to="/vocals">
            <li>VOCALS</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/guitar">
            <li>GUITAR</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/drums">
            <li>DRUMS</li>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/bass">
            <li>BASS</li>
          </NavLink>
        </ul>

        <div className="img-container">
          <img src={updateImg?.src} alt={artist} />
        </div>
      </div>
    </div>
  );
};

export default App;
