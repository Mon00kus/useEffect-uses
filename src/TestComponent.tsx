import { useEffect, useState } from "react";

/* type Props = {}; */
const TestComponent = (/* props: Props */) => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    /* document.title = `${count}`;
    console.log("Component renderer for the first time"); */
    /*  const myTimer = setTimeout(() => {
        alert("Hello from testcomponent");
      }, 10000); */
    /*  return () => clearTimeout(myTimer); */
    console.log(`Use effect count: ${count}`);
    return () => console.log(`Clean Up count: ${count}`);
  }, [count]);

  /*  useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    console.log("darkMOde hook ran")
  },[darkMode]) */

  console.log("Component Render");

  return (
    <div>
      <h1>Test Components !!!</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
      <button onClick={() => setDarkMode((state) => !state)}>
        Toggle dark mode
      </button>
    </div>
  );
};
export default TestComponent;
