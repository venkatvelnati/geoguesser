import './App.css';
import React from "react"
import WorldMap from "react-svg-worldmap";
//import CountryContext from "react-svg-worldmap";
const data = [
  
];



function clickAction(props){
	
}

function App() {
	//const [name, setName] = React.useState("");
  return (
    <div>
      
      <div align ="center" className='header'>
		  <h1>GEOGUESSER</h1>
      </div>

      <div align="center" className='map'>
      <WorldMap
	  	richInteraction="true"
        size="xl"
        data={data}
        onClickFunction={clickAction}
      />
      </div>

    </div>
  );
}

export default App;
