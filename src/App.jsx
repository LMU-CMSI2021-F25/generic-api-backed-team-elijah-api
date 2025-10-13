import { useEffect, useState } from "react";
import { fetchDepartments, searchObjects, fetchObjectsBulk } from "./api/metApi";
import Spinner from "./components/Spinner";
import ErrorBanner from "./components/ErrorBanner";
import SearchBar from "./components/SearchBar";
import Toolbar from "./components/Toolbar";
import ArtGrid from "./components/ArtGrid";
import "./styles/globals.css";
import "./styles/cards.css";

export default function App() {
  // UI state
  const [query, setQuery] = useState("");
  const [departments, setDepartments] = useState([]);
  const [dept, setDept] = useState("all");

  // Data state
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // On mount, load departments
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const deps = await fetchDepartments();
        if (!ignore) setDepartments(deps);
      } catch (e) {
        console.error(e);
        if (!ignore) setErr("Could not load departments. Try again later.");
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  async function performSearch() {
    setErr("");
    if (!query.trim()) {
      setItems([]);
      return;
    }
    setLoading(true);
    try {
      const ids = await searchObjects({ query: query.trim(), departmentId: dept });
      if (!ids.length) {
        setItems([]);
        setLoading(false);
        return;
      }
      const details = await fetchObjectsBulk(ids);
      setItems(details);
    } catch (e) {
      console.error(e);
      setErr("Search failed. Check your connection and try again.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="app-title">Met Explorer 🖼️</h1>
      <p className="subtitle">Search The Met’s collection by keyword and filter by department.</p>

      <Toolbar departments={departments} dept={dept} setDept={setDept}>
        <img alt="Tiny museum" src="/favicon.svg" style={{ width: 28, height: 28, opacity: 0.9 }} />
      </Toolbar>

      <SearchBar value={query} onChange={setQuery} onSubmit={performSearch} />

      <ErrorBanner message={err} />

      {loading ? <Spinner label="Fetching artworks…" /> : <ArtGrid items={items} />}

      <footer style={{ textAlign: "center", color: "#9aa4b2", padding: "1rem 0 2rem" }}>
        Data courtesy of The Metropolitan Museum of Art Open Access Program.
      </footer>
    </div>
  );
}

