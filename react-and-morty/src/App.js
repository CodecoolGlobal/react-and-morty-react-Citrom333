import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Frontpage from "./components/Frontpage";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";


function App() {

  const [reset, setReset] = useState(false)
  const [currentPageChars, setCurrentPageChars] = useState(1);
  const [currentPageLocs, setCurrentPageLocs] = useState(1);
  const characters = useCharacters(currentPageChars);
  const locations = useLocations(currentPageLocs);
  const [counterOfBottom, setCounterOfBottom] = useState(1)
// console.log(locations)
  const inTheDeep=()=>{
    if(showCharacters && counterOfBottom<=42){
      setCounterOfBottom(()=>counterOfBottom+1)
      console.log("pageBottom")
      console.log(counterOfBottom)
     setCurrentPageChars(counterOfBottom)
      }
    else if (showLocations && counterOfBottom <=7) {  
      setCounterOfBottom(()=>counterOfBottom+1)
      console.log("pageBottom")
      console.log(counterOfBottom)
      setCurrentPageLocs(counterOfBottom)
    }
    else {
      return;
    };
  }
  const handleScroll = (e) => {

    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
            inTheDeep();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("useEffect scroll")
  }, );

  const [moreChars, addMoreChars] = useState([])

  useEffect(() => {
    if (characters.results !== undefined) { 
      if (moreChars.length===0) {
        addMoreChars(current => [...current, ...characters.results])
      }
       else if (moreChars[0].id!==characters.results[0].id) {
          addMoreChars(current => [...current, ...characters.results])
        }
      // moreChars.push(...characters.results)
      else console.log("duplicate")
    }
    // console.log(moreChars)
  }, [characters.results])

  const [moreLocs, addMoreLocs] = useState([])
  useEffect(() => {
    if (locations.results !== undefined) { 
      if (moreLocs.length===0) {
        addMoreLocs(current => [...current, ...locations.results])
      }
       else if (moreLocs[0].id!==locations.results[0].id) {
          addMoreLocs(current => [...current, ...locations.results])
        }
      // moreLocs.push(...locations.results)
      else console.log("duplicate")
    }
  }, [locations.results])

  const CharButtonHandleClick = () => {
    console.log("click");
    setShow({ showCharacters: true, showLocations: false, showGreetings: false });
    setShrink(true);
    setCounterOfBottom(1)
  }
  
  const LocButtonHandleClick = () => {
    console.log("click");
    setShow({ showCharacters: false, showLocations: true, showGreetings: false });
    setShrink(true);
    setCounterOfBottom(1)

    
  }
  const LogoHandleClick = () => {
    console.log("LOGO")
    setShow({ showCharacters: false, showLocations: false, showGreetings: true });
    setShrink(false);
  
  }

  const [shrink, setShrink] = useState(false);
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
  const props = {
    charButtonProps: CharButtonHandleClick,
    locButtonProps: LocButtonHandleClick,
    logoProps: LogoHandleClick,
    logoShrink: shrink
  }
  const HandlePageChangeLocs = (page) => {
    setReset(!reset)
    setCurrentPageLocs(page)

  }
  const HandlePageChangeChars = (page) => {
    setReset(!reset)
    setCurrentPageChars(page)


  }
  return <div className="fullPage"><div ><Frontpage props={props} />
    {/* {showCharacters ? <Pagination
      totalPages={42}
      currentPage={currentPageChars}
      onPageChange={(page) => { HandlePageChangeChars(page) }}
    /> : ""}
    {showLocations ? <Pagination
      totalPages={7}
      currentPage={currentPageLocs}
      onPageChange={(page) => { HandlePageChangeLocs(page) }}
    /> : ""} */}
    <div className="cardContainer" >
      {showCharacters ?
        // characters.results === undefined ? console.log("asd") : characters.results.map((user) => <Characters {...user} key={user.id} />)
        moreChars.map((user) => <Characters {...user} key={user.id} />)
        : ""}
      {showLocations ?
        // locations.results === undefined ? console.log("asd") : locations.results.map((user) => <Locations {...user} key={user.id} />)
        moreLocs.map((user) => <Locations {...user} key={[user.id,"l"]} />)
        : ""}

    </div>
    {/* {showCharacters ? <Pagination
      totalPages={42}
      currentPage={currentPageChars}
      onPageChange={(page) => { HandlePageChangeChars(page) }}
    /> : ""}
    {showLocations ? <Pagination
      totalPages={7}
      currentPage={currentPageLocs}
      onPageChange={(page) => { HandlePageChangeLocs(page) }}
    /> : ""}   */}
    {showLocations||showCharacters?<button id="returnBtn" onClick={LogoHandleClick}> </button>:""}
    </div>
    <div>
      {showGreetings ?
        <p id="greetings">On this website, you can get more information about the fantastic multiverse of Rick and Morty</p> : ""}
    </div></div>
}

export default App;
