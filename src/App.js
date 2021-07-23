function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div
          className="row d-flex justify-content-center"
          style={{ backgroundColor: "darkgreen", color: "black" }}
        >
          <div className="col-9 vh-100 d-flex flex-column justify-content-center px-5">
            <h1>Hi there, I'm Tuny and these are my notes</h1>
            <h2>
              Join me on my quest to become a math teacher and Japanese speaker
            </h2>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center text-center p-5"
          style={{ minHeight: "80vh" }}
        >
          <h3 className="p-4">My mission...</h3>
          <div className="col-9 d-flex">
            <img
              className="w-50 h-auto"
              src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            ></img>
            <div>
              <h4>Learn</h4>
              <p>I believe that the best way to learn is to try and teach.</p>
            </div>
          </div>
          <div className="col-9 d-flex">
            <h4>Educate</h4>
            <p>
              I love mathematics and Japanese. I want to share them with the
              world in an easy to consume format.
            </p>
          </div>
          <img
            className="w-50 h-auto"
            src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          ></img>
          <div className="col-9">
            <img
              className="w-100 h-auto"
              src="https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            ></img>
            <h4>Inspire</h4>
            <p>Learning is more exciting when more people are involved.</p>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center text-center p-5"
          style={{ backgroundColor: "darkgreen", color: "black" }}
        >
          <h3 className="mb-3">Latest Japanese additions...</h3>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-center text-center p-5"
          style={{ backgroundColor: "darkgreen", color: "black" }}
        >
          <h3 className="mb-3">Latest Math additions...</h3>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
          <div className="col-3">
            <div className="bg-dark w-100" style={{ height: "25vh" }}>
              a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
