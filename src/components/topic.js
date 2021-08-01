import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Topic(props) {
  const [data, setData] = useState();
  let { topic } = useParams();
  const [lessonName, setLessonName] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (props.apiURL === "") return;
    fetch(props.apiURL + "/topic/" + topic, {
      mode: "cors",
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200 || res.status === 304) return res.json();
      })
      .then((res) => {
        setData(res.data);
      });
  }, [props.apiURL, refresh]);

  const addLesson = (e) => {
    e.preventDefault();
    if (props.apiURL === "") return;
    console.log("launched to " + props.apiURL + "/topic/" + topic);
    fetch(props.apiURL + "/topic/" + topic, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name: lessonName,
        description: lessonDescription,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log("successs");
        setRefresh(!refresh);
      }
    });
  };

  return (
    <div>
      {typeof data !== "undefined" ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">{data.name}</h1>
              <h2 className="mb-5">{data.description}</h2>
              <div className="border border-secondary p-2 mt-4">
                <p className="h1 mb-0">Lessons</p>
              </div>

              {data.lessons.map((val) => {
                return (
                  <div key={val._id} className="border border-secondary p-2">
                    <Link
                      className="mb-0 h3"
                      to={"/" + topic + "/lesson/" + val._id}
                    >
                      {val.name}
                    </Link>
                    <p className="mb-0">{val.description}</p>
                  </div>
                );
              })}
              {props.isAdmin ? (
                <div className="d-flex justify-content-center mb-5">
                  <form
                    className="mt-3 w-50 border border-secondary p-3"
                    onSubmit={addLesson}
                  >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Lesson Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => setLessonName(e.target.value)}
                        value={lessonName}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        onChange={(e) => setLessonDescription(e.target.value)}
                        value={lessonDescription}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Topic;
