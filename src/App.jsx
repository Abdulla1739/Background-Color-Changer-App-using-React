import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const bGroundBlack = () => {
    const bgDiv = document.getElementById("bg");
    const output = document.getElementById("output");
    bgDiv.style.backgroundColor = "#101820";
    bgDiv.style.color = "#FEE715";
    output.innerHTML = `
      <div  class='container border border-success rounded p-5'>
        <h1>"Sun on Midnight"</h1>
        <p>
          <strong>Yellow sparks on black</strong>, a message alight.<br />
          <strong>Warmth cuts the dark</strong>, a beacon so bright. <br />
          <strong>Caution or joy</strong>, the black amplifies, <br />
          <strong>yellow text on black</strong>, forever confides.
        </p>
      </div>
    `;
  };
  const bGroundBlue = () => {
    const bgDiv = document.getElementById("bg");
    const output = document.getElementById("output");
    bgDiv.style.backgroundColor = "#00246B";
    bgDiv.style.color = "#FBEAEB";
    output.innerHTML = `
      <div  class='container border border-success rounded p-5'>
        <h1>"Cotton Candy Clouds"</h1>
        <p>
          <strong>Soft pink whispers</strong>, on a summer sky,<br />
          <strong>Sweet words adrift</strong>, secrets don't lie. <br />
          <strong>A gentle caress</strong>, a daydream's delight, <br />
          <strong>Pastel on blue</strong>, a world bathed in light.
        </p>
      </div>
    `;
  };
  const bGroundGreen = () => {
    const bgDiv = document.getElementById("bg");
    const output = document.getElementById("output");
    bgDiv.style.backgroundColor = "#31473A";
    bgDiv.style.color = "#CB0000";
    output.innerHTML = `
      <div  class='container border border-success rounded p-5'>
        <h1>"Heartwood Fire"</h1>
        <p>
          <strong>Crimson whispers</strong>, on emerald deep,<br />
          <strong>A passionate message</strong>, secrets to keep. <br />
          <strong>Love's burning flame</strong>, or a warning so bold, <br />
          <strong>Red on green</strong>, a story unfolds.
        </p>
      </div>
    `;
  };
  const bGroundGray = () => {
    const bgDiv = document.getElementById("bg");
    const output = document.getElementById("output");
    bgDiv.style.backgroundColor = "#735DA5";
    bgDiv.style.color = "#FFBB00";
    output.innerHTML = `
      <div  class='container border border-success rounded p-5'>
        <h1>"Twilight's Whisper"</h1>
        <p>
          <strong>Faint whispers on</strong>, twilight's embrace,<br />
          <strong>Gray words like smoke</strong>, in a mystical space. <br />
          <strong>A hushed conversation</strong>, secrets untold, <br />
          <strong>Light whispers on periwinkle</strong>, cool and bold.
        </p>
      </div>
    `;
  };
  const bGroundCream = () => {
    const bgDiv = document.getElementById("bg");
    const output = document.getElementById("output");
    bgDiv.style.backgroundColor = "#73605B";
    bgDiv.style.color = "#CEE6F2";
    output.innerHTML = `
      <div  class='container border border-success rounded p-5'>
        <h1>"Seashell Secrets"</h1>
        <p>
          <strong>Vanilla whispers</strong>, on a canvas of sand,<br />
          <strong>Soft words adrift</strong>, secrets at hand. <br />
          <strong>A gentle caress</strong>, a calming delight, <br />
          <strong>Cream text on beiget</strong>, a world bathed in light.
        </p>
      </div>
    `;
  };
  const bGroundHome = () => {
    window.location.reload();
  };

  return (
    <>
      <div
        id="bg"
        style={{
          height: "100vh",
          scrollbarColor: "transparent",
          width: "100%",
          textAlign: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <h1>Click your favourite combinations</h1> <br />
        <div className="text-center d-md-flex justify-content-center align-items-center w-100 pt-2">
          <button
            onClick={bGroundHome}
            class="btn btn-outline-danger me-3 mb-3"
          >
            Home
          </button>
          <button
            class="me-3 btn btn-outline-warning mb-3"
            onClick={bGroundBlack}
          >
            Black N Yellow
          </button>
          <button
            onClick={bGroundBlue}
            class="btn btn-outline-primary me-3 mb-3"
          >
            Blue N Pink
          </button>
          <button
            onClick={bGroundGreen}
            class="btn btn-outline-success me-3 mb-3"
          >
            Green N Red
          </button>
          <button
            onClick={bGroundGray}
            class="btn btn-outline-secondary me-3 mb-3"
          >
            Periwinkle N Gray
          </button>
          <button onClick={bGroundCream} class="btn btn-outline-info me-3 mb-3">
            Taupe N Cream
          </button>
        </div>
        <div
          id="output"
          style={{ transition: " 1s ease-in-out" }}
          className="container"
        ></div>
      </div>
    </>
  );
}

export default App;
