import React, { useState, useEffect } from "react";

const API_URL = `https://icanhazdadjoke.com`;

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(`${API_URL}/search`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomJoke = data.results[randomIndex];
        setJoke(randomJoke.joke);
      });
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
