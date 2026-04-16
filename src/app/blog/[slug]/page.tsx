import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | SPA Cranes`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ minHeight: "100vh", background: "#020617", paddingTop: "120px", paddingBottom: "100px" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <Link href="/blog" style={{ color: "var(--text-muted, #94a3b8)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "2rem", fontSize: "0.95rem" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: "var(--primary, #facc15)", color: "#020617", padding: "4px 12px", borderRadius: "6px", fontSize: "0.85rem", fontWeight: "bold", textTransform: "uppercase", marginBottom: "1rem" }}>
            {post.category}
          </div>
          <h1 className="orbitron" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f8fafc", lineHeight: 1.2, marginBottom: "1rem" }}>
            {post.title}
          </h1>
          <div style={{ color: "var(--text-muted, #94a3b8)" }}>
            Published on {post.date}
          </div>
        </div>

        <div style={{ width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "20px", overflow: "hidden", marginBottom: "3rem" }}>
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
          {post.content}
        </div>
      </article>
    </main>
  );
}
