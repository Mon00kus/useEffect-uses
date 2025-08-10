import { useEffect, useState } from "react";
import axios from "axios";

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fectchdata = async () => {
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(results.data);
      console.table(results.data);
    };
    fectchdata();
  }, []);

  console.log("Component Rendered");

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
