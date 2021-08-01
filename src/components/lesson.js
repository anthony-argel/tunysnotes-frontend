import { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function Lesson(props) {
  let { topic, lesson } = useParams();
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [refresh, setRefresh] = useState(false);

  let history = useHistory();
  useEffect(() => {
    if (props.apiURL === "") return;
    fetch(props.apiURL + "/lesson/" + lesson, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 400 && res.status !== 403) {
          return res.json();
        }
      })
      .then((res) => {
        setData(res.data);
      });
  }, [props.apiURL, refresh]);

  const addContent = (e) => {
    e.preventDefault();
    if (props.apiURL === "") return;
    fetch(props.apiURL + "/lesson/" + lesson, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: name,
        contenttype: type,
        contentid: id,
      }),
    }).then((res) => setRefresh(!refresh));
  };

  const processContent = (e, contenttype, contentid) => {
    e.preventDefault();
    if (contenttype === "POST") {
      history.push("/" + topic + "/read/" + contentid);
    }
  };

  return (
    <div>
      {typeof data !== "undefined" ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{data.name}</h1>
              <h3>{data.description}</h3>
              <div className="border border-secondary p-2 mt-4">
                <p className="h2 mb-0">Content</p>
              </div>
              {data.contents.map((val, index) => {
                return (
                  <div key={val._id} className="border border-secondary p-2">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "#0d6efd",
                        textDecoration: "underline",
                      }}
                      onClick={(e) =>
                        processContent(e, val.contenttype, val.contentid)
                      }
                      className="h3 mb-0"
                    >
                      {val.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
      {props.isAdmin ? (
        <div className="d-flex justify-content-center mb-5">
          <form
            className="mt-3 w-50 border border-secondary p-3"
            onSubmit={addContent}
          >
            <select
              className="form-select"
              onChange={(e) => setType(e.target.value)}
            >
              <option selected>Select menu</option>
              <option value="POST">POST</option>
              <option value="TEST">TEST</option>
              <option value="FLASHCARD">FLASHCARD</option>
            </select>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Lesson;
