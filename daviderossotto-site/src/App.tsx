import React from "react";

const page: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 20px",
  borderBottom: "1px solid #e5e7eb",
};

const nav: React.CSSProperties = {
  display: "flex",
  gap: 16,
  fontSize: 14,
};

const link: React.CSSProperties = {
  textDecoration: "none",
  color: "#4b5563",
};

const main: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "24px 16px",
};

export default function App() {
  return (
    <div style={page}>
      <header style={header}>
        <span style={{ fontWeight: "bold" }}>Davide Rossotto</span>
        <nav style={nav}>
          <a href="#projects" style={link}>
            Projects
          </a>
          <a href="#about" style={link}>
            About
          </a>
          <a href="mailto:drossotto@crimson.ua.edu" style={link}>
            Email
          </a>
        </nav>
      </header>

      <main style={main}>
        <div
          style={{
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            background: "#ffffff",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.06)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 24, lineHeight: 1.4 }}>
            Here is my homepage to source personal api&apos;s, projects, and other stuff.
            This will be propagated in an effort to conceal the actual purpose,
            my personal media server. (Jellyfin)
          </h1>
        </div>
        
        <h2 id="about">About</h2>
        <section
          id="about"
          style={{
            display: "grid",
            gap: 12,
            maxWidth: 720,
            padding: "20px 24px",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            background: "#ffffff",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.05)",
          }}
        >
          <p style={{ margin: 0 }}>
            There is nothing materially interesting to show here yet or likely
            ever. About pages are for insecure and vain people.
          </p>
        </section>
      </main>
    </div>
  );
}
