import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Topic from "./components/topic";
import Login from "./components/login";
import Lesson from "./components/lesson";
import Read from "./components/read";
import NavBar from "./components/navbar";

function App() {
  const [apiURL, setAPIURL] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    setAPIURL("https://serene-stream-83663.herokuapp.com");
    verifyToken();
  }, []);

  const verifyToken = () => {
    if (localStorage.getItem("token") === null) {
      return;
    }

    fetch("https://serene-stream-83663.herokuapp.com/user/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      mode: "cors",
    }).then((res) => {
      if (res.status === 403 || res.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
        if (localStorage.getItem("admin") === "true") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      }
    });
  };

  return (
    <div className="app">
      <div style={{ minHeight: "97vh" }}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route path="/" exact>
              <Home apiURL={apiURL}></Home>
            </Route>
            <Route path="/login" exact>
              <Login
                apiURL={apiURL}
                setLogin={setLoggedIn}
                setAdmin={setAdmin}
              ></Login>
            </Route>
            <Route path="/:topic" exact>
              <Topic apiURL={apiURL} isAdmin={isAdmin}></Topic>
            </Route>
            <Route path="/:topic/lesson/:lesson" exact>
              <Lesson apiURL={apiURL} isAdmin={isAdmin}></Lesson>
            </Route>
            <Route path="/:topic/read/:postid" exact>
              <Read apiURL={apiURL} isAdmin={isAdmin}></Read>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <div
        style={{ backgroundColor: "black", minHeight: "3vh" }}
        className="text-center"
      >
        <a
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://anthonyargel.com/"
        >
          Developer
        </a>
      </div>
    </div>
  );
}

export default App;
