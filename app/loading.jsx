export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-dark)",
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "48px",
          height: "48px",
          border: "3px solid rgba(56, 189, 248, 0.15)",
          borderTopColor: "var(--primary)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          margin: "0 auto 1rem",
        }} />
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>
          Loading…
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
