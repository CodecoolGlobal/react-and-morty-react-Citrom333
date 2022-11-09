import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Frontpage from "./components/Frontpage";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";


function App() {

  const [reset, setReset]=useState(false)
  const [currentPageChars, setCurrentPageChars]=useState(1);
  const [currentPageLocs, setCurrentPageLocs]=useState(1);
  const characters = useCharacters(currentPageChars);
  const locations = useLocations(currentPageLocs);
// const moreCharacters=[];
// const [scrolledCharacter, setScrolledChar]=useState([])
// characters.results === undefined ? console.log("loading") : moreCharacters.push(characters.results);
//   const handleScroll =async (e) => {
  
   
//     const scrollHeight = e.target.documentElement.scrollHeight;
//     const currentHeight = Math.ceil(
//       e.target.documentElement.scrollTop + window.innerHeight
//     );
//     if (currentHeight + 1 >= scrollHeight) {
//       await characters.results === undefined ? console.log("asd") : moreCharacters.push(characters.results);
//       setCurrentPageChars(currentPageChars+1);
//       setScrolledChar((scrolledCharacter) => [...scrolledCharacter, ...moreCharacters]);
//     }
//   };
//   useEffect(() => {
   
//       setCurrentPageChars(currentPageChars+1);
//       window.addEventListener("scroll", handleScroll);
//       console.log(scrolledCharacter)
//   }, []);


  const CharButtonHandleClick=()=>{
    console.log("click");
    setShow({ showCharacters: true, showLocations: false, showGreetings:false});
    setShrink(true);
  }

  const LocButtonHandleClick=()=>{
    console.log("click");
    setShow({ showCharacters: false, showLocations: true, showGreetings:false});
    setShrink(true);
  }
  const LogoHandleClick=()=>{
    console.log("LOGO")
    setShow({ showCharacters: false, showLocations: false, showGreetings:true});
    setShrink(false);
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
  logoProps:LogoHandleClick,
  logoShrink:shrink
}
const HandlePageChangeLocs=(page)=>{
  setReset(!reset)
  setCurrentPageLocs(page)
  
}
const HandlePageChangeChars=(page)=>{
  setReset(!reset)
  setCurrentPageChars(page)
  
}
  return <div className="fullPage"><div ><Frontpage props={props}/>
  {showCharacters? <Pagination
      totalPages={42}
      currentPage={currentPageChars}
      onPageChange={(page)=>{HandlePageChangeChars(page)}}
      />:""}
  {showLocations? <Pagination
      totalPages={7}
      currentPage={currentPageLocs}
      onPageChange={(page)=>{HandlePageChangeLocs(page)}}
      />:""}
  <div className="cardContainer" >
    {showCharacters ?
      characters.results === undefined ? console.log("asd") : characters.results.map((user) => <Characters {...user}  key={user.id}/>)
      : ""}
    {showLocations ?
      locations.results === undefined ? console.log("asd") : locations.results.map((user) => <Locations {...user} key={user.id}/>)
      : ""}

  </div>
  {showCharacters? <Pagination
      totalPages={42}
      currentPage={currentPageChars}
      onPageChange={(page)=>{HandlePageChangeChars(page)}}
      />:""}
  {showLocations? <Pagination
      totalPages={7}
      currentPage={currentPageLocs}
      onPageChange={(page)=>{HandlePageChangeLocs(page)}}
      />:""}
  </div>
   <div>
   {showGreetings?
   <p id="greetings">On this website, you can get more information about the fantastic multiverse of Rick and Morty</p>:""}
</div></div>
}

export default App;
