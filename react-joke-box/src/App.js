import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = `https://icanhazdadjoke.com`;

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    axios.get(`${API_URL}/search`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "randomJokeGenerator GitHub@gsrhead",
      },
    })
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.results.length);
        const randomJoke = res.data.results[randomIndex];
        setJoke(randomJoke.joke);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="box">
      <h2>DAD RANDOMS</h2>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get Dad Jokes</button>
    </div>
  );
}

export default App;
