import Link from "next/link";

export const metadata = {
  title: "Page not found | DS Inventek",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section" style={{ marginTop: "60px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <p className="section-eyebrow">Error 404</p>
        <h1 className="section-title">We couldn't find that page.</h1>
        <p className="section-subtitle">
          The page you're looking for may have moved or no longer exists.
          Here are a couple of places to pick back up.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
          <Link href="/courses" className="btn-ghost">
            Browse courses
          </Link>
        </div>
      </div>
    </section>
  );
}
