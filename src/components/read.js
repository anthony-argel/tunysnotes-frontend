import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./assets/styles.css";

function Read(props) {
  let { topic, postid } = useParams();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch("https://quiet-retreat-88465.herokuapp.com/blog/" + postid, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTitle(res[0].title);
        setPost(res[0].post);
      });
  }, [props.apiURL]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-8 m-4 p-4 shadow-lg">
          {title !== "" ? <h1>{title}</h1> : null}
          <hr></hr>
          {post !== "" ? (
            <div>
              <p dangerouslySetInnerHTML={{ __html: post }}></p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Read;
