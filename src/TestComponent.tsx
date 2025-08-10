import { useEffect, useState } from "react";
import axios from "axios";


interface Brewery {
  id: string;
  name: string;
  // brewery_type: string;
  // city: string;
}

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
   if (search === "") return;
   if (search.length < 3) return;

    const fectchdata = async () => {     
      try{

        const results = await axios.get(
          //`https://api.openbrewerydb.org/v1/breweries/search?query=${search}`
        `https://api.openbrewerydb.org/v1/breweries/autocomplete?query=${search}`
        );

        console.log(`https://api.openbrewerydb.org/v1/breweries/search?query=${search}`);     

        setBreweries(results.data);
        console.table(results.data);

      } catch (error) {

        console.error(console.error("Error al buscar cervecerias"));
        setBreweries([]);

      }
    };
    fectchdata();
  }, [search]);

  console.log("Component Rendered");

  return (
    <div>
      <h1>Test Components !!!</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
      <button onClick={() => setDarkMode((state) => !state)}>
        Toggle dark mode
      </button>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      
      {breweries.length > 0 ? (
        <ul>
          {breweries.map((brewery) => (
            <h2 key={brewery.id}>{brewery.name}</h2>
          ))}
        </ul>

      ) : (
        <p>No se encontraron cervecerías. Intenta con otro término.</p>
      )}
      {count} 
    </div>
  );
};
export default TestComponent;
