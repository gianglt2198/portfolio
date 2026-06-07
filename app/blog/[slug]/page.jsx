import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} | Giang Le`,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;

  return (
    <article className="min-h-[100dvh]">
      <div className="container mx-auto px-4 pt-8 pb-16 xl:pt-10 xl:pb-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          All articles
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-accent/80 border border-accent/25 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl xl:text-5xl font-semibold tracking-tight text-zinc-100 leading-snug mb-6">
            {frontmatter.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span>{formatDate(frontmatter.date)}</span>
            <span className="w-px h-3 bg-zinc-700" />
            <span>{frontmatter.readTime} read</span>
          </div>
        </header>

        {/* Cover image */}
        {frontmatter.cover && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 mb-14">
            <Image
              src={frontmatter.cover}
              alt={frontmatter.title}
              fill
              priority
              loading="eager"
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 896px"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-invert prose-zinc max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-400 prose-p:leading-relaxed
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-zinc-200
          prose-code:text-accent/90 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-0
          prose-li:text-zinc-400
          prose-hr:border-zinc-800"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200 transition-colors group"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
