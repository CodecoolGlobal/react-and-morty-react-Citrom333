import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Frontpage from "./components/Frontpage";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import { useState } from "react";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  const [show, setShow] = useState({
    showCharacters: false,
    showLocations: false
  });
  const { showCharacters, showLocations } = show;

  console.log("Characters data: ");
  console.log(characters.results);
  console.log("Locations data: ");
  console.log(locations);

  return <div><Frontpage props={_ => setShow({ showCharacters: true, showLocations: false })} />
    {showCharacters ?
      characters.results === undefined ? console.log("asd") : characters.results.map((user) => <Characters {...user} />)
      : ""}
    {showLocations ?
      characters.results === undefined ? console.log("asd") : characters.results.map((user) => <Locations {...user} />)
      : ""}
  </div>
}

export default App;
