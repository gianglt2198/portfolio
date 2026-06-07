import { getAllPosts, formatDate } from "@/lib/blog";
import { FeaturedPost, PostGrid } from "./BlogGrid";

export const metadata = {
  title: "Writing | Giang Le",
  description:
    "Notes on backend architecture, distributed systems, and AI from 6+ years building production systems.",
};

export default function BlogPage() {
  const posts = getAllPosts().map((p) => ({
    ...p,
    displayDate: formatDate(p.date),
  }));

  const featured = posts.find((p) => p.featured);
  const grid = posts.filter((p) => !p.featured);

  return (
    <section className="min-h-[100dvh]">
      <div className="container mx-auto px-4 py-16 xl:py-20">
        <div className="mb-14 xl:mb-20">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Technical Articles
          </span>
          <h1 className="h2 mt-3 mb-4">Writing</h1>
          <p className="text-zinc-400 max-w-[480px] leading-relaxed">
            Notes on backend architecture, distributed systems, and AI from 6+
            years of building production systems.
          </p>
        </div>

        {featured && <FeaturedPost post={featured} />}
        <PostGrid posts={grid} />
      </div>
    </section>
  );
}
