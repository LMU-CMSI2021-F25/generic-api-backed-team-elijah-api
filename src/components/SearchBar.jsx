export default function SearchBar({ value, onChange, onSubmit }) {
    return (
      <form className="toolbar" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <input
          className="input"
          type="search"
          placeholder="Search artworks (e.g. Monet, armor, dragon)"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search artworks"
        />
        <button className="button" type="submit" aria-label="Search">Search</button>
      </form>
    );
  }
  