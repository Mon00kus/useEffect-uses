import { useState } from "react";
import TestComponent from "./TestComponent";
/* import TestComponent from './TestComponent'; */

/* function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
} */

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>     
      {showComponent && <TestComponent />}
      <button onClick={() => setShowComponent((state) => !state)}>
        {/* {showComponent? <TestComponent/> : null} {showComponent ?? <TestComponent />} THEY BOOT DO THE SAME THING */}
        Show test component
      </button>
    </div>
  );
};

export default App;
