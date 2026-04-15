import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components = {
  h1: ({ children }) => (
    <h1 className="mb-3 text-3xl font-semibold tracking-tighter  text-amber-950">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-medium tracking-tighter mt-3 mb-3 text-amber-950">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-medium tracking-tighter mt-6 mb-3 text-amber-950">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className=" leading-relaxed text-zinc-800">{children}</p>
  ),

  Link: ({ children }) => (
    <p className="my-4 text-xl leading-relaxed text-zinc-800">{children}</p>
  ),

  a: ({ href, children }) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    const className =
      "underline decoration-zinc-300 decoration-1 underline-offset-4 hover:text-amber-900 hover:decoration-amber-900 ";

    if (isInternal) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-4 space-y-2 text-zinc-800 marker:text-amber-900">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-4 space-y-2 text-zinc-800 marker:text-amber-900">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  hr: () => <hr className="h-0.5 bg-zinc-200 border-none my-8" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-amber-900 pl-4 my-6 italic text-zinc-600">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-amber-100/50 text-amber-950 px-1.5 py-0.5 rounded text-sm font-mono selection:bg-amber-900 selection:text-amber-50">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-zinc-900 text-zinc-100 p-5 rounded-lg overflow-x-auto my-6 text-sm font-mono selection:bg-amber-50 selection:text-amber-900 shadow-sm">
      {children}
    </pre>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
