"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export function FeaturedPost({ post }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      className="mb-16 xl:mb-24"
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center border-t border-b border-zinc-800 py-12 xl:py-16">
          <div className="order-2 xl:order-1 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-accent/80 border border-accent/25 px-2 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl xl:text-4xl font-semibold tracking-tight text-zinc-100 leading-snug group-hover:text-accent transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-zinc-400 leading-relaxed max-w-[520px]">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs font-mono text-zinc-500">
                {post.displayDate}
              </span>
              <span className="w-px h-3 bg-zinc-700" />
              <span className="text-xs font-mono text-zinc-500">
                {post.readTime} read
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-3 transition-all duration-300 whitespace-nowrap">
                Read article <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </div>
          </div>
          <div className="order-1 xl:order-2 relative aspect-video xl:aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-800">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1200px) 100vw, 480px"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function PostGrid({ posts }) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_OUT_EXPO }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col h-full border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-base xl:text-lg font-semibold text-zinc-200 leading-snug group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/60">
                <span className="text-xs font-mono text-zinc-600">
                  {post.displayDate}
                </span>
                <span className="w-px h-3 bg-zinc-800" />
                <span className="text-xs font-mono text-zinc-600">
                  {post.readTime} read
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
