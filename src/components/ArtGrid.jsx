import ArtCard from "./ArtCard";

export default function ArtGrid({ items }) {
  if (!items?.length) {
    return (
      <div style={{ textAlign: "center", color: "#9aa4b2", padding: "1rem" }}>
        No results yet. Try a search!
      </div>
    );
  }
  return (
    <div className="grid">
      {items.map((item) => (
        <ArtCard key={item.objectID} item={item} />
      ))}
    </div>
  );
}
