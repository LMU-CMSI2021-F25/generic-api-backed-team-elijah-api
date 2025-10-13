export default function ErrorBanner({ message }) {
    if (!message) return null;
    return (
      <div
        role="alert"
        style={{
          margin: "1rem 0",
          padding: "0.75rem 1rem",
          borderRadius: 12,
          background: "#2a0f14",
          color: "#ffd4d4",
          border: "1px solid #5a1c24",
        }}
      >
        {message}
      </div>
    );
  }
  