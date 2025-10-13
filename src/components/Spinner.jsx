export default function Spinner({ label = "Loading..." }) {
    return (
      <div role="status" aria-live="polite" style={{ textAlign: "center", padding: "1rem" }}>
        <div
          style={{
            display: "inline-block",
            width: 28,
            height: 28,
            border: "3px solid #1f2a44",
            borderTopColor: "#38bdf8",
            borderRadius: "50%",
            animation: "spin 0.9s linear infinite",
          }}
        />
        <div style={{ marginTop: 8, color: "#9aa4b2" }}>{label}</div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }
  