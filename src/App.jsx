import { forwardRef, useState, useRef, useEffect } from "react";
import { useMemo } from "react";
import MyComponent from "./components/MyComponent/MyComponent";
import Player from "./components/Player/Player";

import "./App.css";

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));

function App() {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const btnRef = useRef();

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  useEffect(() => btnRef.current.focus(), []);

  return (
    <div>
      <MyComponent
        clicks={clicks}
        setClicks={setClicks}
        query={query}
        setQuery={setQuery}
        filteredPlanets={filteredPlanets}
      />
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
    </div>
  );
}

export default App;
