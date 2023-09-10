import { useState } from "react";
import "./App.scss";
import WeatherCondition from "./components/WeatherCondition";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [seached, setSearched] = useState();
  let [valueIs,setValueIs] = useState();

  const changeHandler = (e)=>{
    setValueIs(e.target.value)
  }
 
  const submitHandler = (e)=>{
    e.preventDefault()
    setSearched(valueIs)
  }
  return (
    <div className="App">
      <form id="searchContainer" value={seached} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="search any City"
          onChange={changeHandler}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="container">
        <WeatherCondition
          targetIs={seached}
        />
      </div>
    </div>
  );
}

export default App;
