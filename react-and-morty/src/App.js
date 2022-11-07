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

  const CharButtonHandleClick=()=>{
    console.log("click");
    setShow({ showCharacters: true, showLocations: false, showGreetings:false});
    setShrink(shrink=true);
  }

  const LocButtonHandleClick=()=>{
    console.log("click");
    setShow({ showCharacters: false, showLocations: true, showGreetings:false});
    setShrink(shrink=true);
  }
  const LogoHandleClick=()=>{
    console.log("LOGO")
    setShow({ showCharacters: false, showLocations: false, showGreetings:true});
    setShrink(shrink=false);
  }

  const [shrink, setShrink]=useState(false);
  const [show, setShow] = useState({
    showCharacters: false,
    showLocations: false,
    showGreetings: true,

  });
  const { showCharacters, showLocations, showGreetings } = show;

  // console.log("Characters data: ");
  // console.log(characters.results);
  // console.log("Locations data: ");
  // console.log(locations);
const props={
  charButtonProps:CharButtonHandleClick,
  locButtonProps:LocButtonHandleClick,
  logoProps:LogoHandleClick
}
  return <><div><Frontpage props={props}/>
    {showCharacters ?
      characters.results === undefined ? console.log("asd") : characters.results.map((user) => <Characters {...user} />)
      : ""}
    {showLocations ?
      locations.results === undefined ? console.log("asd") : locations.results.map((user) => <Locations {...user} />)
      : ""}
  </div>
   <div>
   {showGreetings?
   <p>On this website, you can get more information about the fantastic multiverse of Rick and Morty</p>:""}
</div></>
}

export default App;
