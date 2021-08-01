import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [jpData, setJPData] = useState();
  useEffect(() => {
    document.title = "TunysNotes | Home";
  }, []);
  useEffect(() => {
    if (props.apiURL === "") return;
    fetch(props.apiURL + "/topic/japanese", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => setJPData(res.data.lessons));
  }, [props.apiURL]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 d-flex flex-column justify-content-center align-items-center"
            style={{
              backgroundColor: "darkgreen",
              minHeight: "100vh",
              color: "black",
            }}
          >
            <h1>Hi there. I'm Tuny and these are my notes.</h1>
            <h2>
              Join me on my journey as I dive into programming, mathematics, and
              Japanese.
            </h2>
          </div>

          <div
            className="col-12 d-flex flex-column align-items-between justify-content-evenly"
            style={{ height: "50vh" }}
          >
            <h2 className="text-center mb-3 mt-3">Mission</h2>
            <div className="row d-flex justify-content-around">
              <div className="col-12 col-lg-3 border border-secondary  p-3">
                <h3 className="text-center">Learn</h3>
                <p>I believe the best way to learn is to try and teach.</p>
              </div>
              <div className="col-12 col-lg-3 border border-secondary p-3">
                <h3 className="text-center">Educate</h3>
                <p>
                  I have a large interest in education and believe that it is
                  one of the few ways to positively contribute to the world.
                </p>
              </div>
              <div className="col-12 col-lg-3 border border-secondary  p-3">
                <h3 className="text-center">Network</h3>
                <p>
                  Education is more fun when people are involved. Come follow
                  along and create videos with me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
