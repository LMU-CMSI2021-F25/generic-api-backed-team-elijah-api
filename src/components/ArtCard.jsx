import "../styles/cards.css";

export default function ArtCard({ item }) {
  const {
    objectID,
    title,
    artistDisplayName,
    objectDate,
    primaryImageSmall,
    department,
    objectURL,
  } = item;

  return (
    <article className="card">
      <div className="thumb-wrap">
        {primaryImageSmall ? (
          <img className="thumb" src={primaryImageSmall} alt={title || "Artwork"} loading="lazy" />
        ) : null}
      </div>
      <div className="card-body">
        <div className="title">{title || "Untitled"}</div>
        <div className="meta">{artistDisplayName || "Unknown artist"}</div>
        <div className="meta">{objectDate || ""}</div>
        <span className="badge">{department || "Collection"}</span>
        {objectURL ? (
          <a
            className="button"
            href={objectURL}
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            View at The Met ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
