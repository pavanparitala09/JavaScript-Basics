import { useEffect, useRef, useState } from "react";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const searchInputRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/countries.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setCountries(data);
          setFilteredCountries(data);
        } else {
          throw new Error("Expected an array of countries but received invalid format");
        }
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError(
          "Failed to fetch countries. Please check your internet connection.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const filtered = countries.filter((country) =>
        country.name?.common?.toLowerCase().includes(search.toLowerCase()),
      );

      setFilteredCountries(filtered);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [search, countries]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading countries...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-2xl font-semibold text-center px-4">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Country Explorer</h1>

      <div className="flex justify-center mb-6">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filteredCountries.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-600 mt-10">
          No result found
        </div>
      ) : (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;
