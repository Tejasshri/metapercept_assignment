import "./App.css";
import { Fragment, useState } from "react";

import data from "./data.json";

let myData = data.map((each) => ({
  ...each,
  ShortDesc: each.ShortDesc.slice(0, 100),
}));

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="main d-flex flex-column" id="top">
      <nav className="p-3 d-flex flex-row align-items-center justify-content-between">
        <h1 className="fs-3 p-0"> Title </h1>
        <ul className="d-flex flex-row align-items-center">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <button className="btn btn-outline-primary">Button</button>
        </ul>
      </nav>
      <main>
        <section className="p-4 banner d-flex flex-column align-items-center">
          <h1 className="fs-4">Title</h1>
          <p className="fs-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magnam,
            dolorem qui, pariatur ipsum cupiditate laboriosam dicta obcaecati,
            aliquid iste accusantium facere. Aliquid, suscipit porro? Nisi
            debitis in omnis nostrum sed? Maxime!
            {showText && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium facilis blanditiis quod nisi doloremque, consequatur
                sed, repudiandae recusandae a eum beatae at dicta eaque error
                perferendis iste quasi provident aspernatur.
              </p>
            )}
          </p>
          <button
            className="btn btn-light"
            onClick={() => setShowText((p) => !p)}>
            {" "}
            {showText ? "Less more" : "Read more"}
          </button>
        </section>
        <section className="d-flex flex-column">
          <div className="align-self-center text-center p-3">
            <h2> Classes </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eos
              ipsa nostrum m
            </p>
          </div>
        </section>
        <ul className="p-0 d-flex flex-row flex-wrap justify-content-center">
          {myData.map((each) => (
            <li
              key={crypto.randomUUID()}
              className="card shadow rounded m-3 d-flex flex-column">
              <img className="dummyImg" src={each.ImageUrl} alt="" />
              <div className="p-2 flex-grow-1">
                <h3>{each.Name}</h3>
                <p>{each.ShortDesc}</p>
                <button className="button w-50 btn btn-outline-secondary mt-auto">
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="bg-light p-3 d-flex justify-content-between align-items-center">
        <p>Copyright@2021. All right reversed</p>
        <a href="#top">Back to Top</a>
      </footer>
    </div>
  );
}

export default App;
