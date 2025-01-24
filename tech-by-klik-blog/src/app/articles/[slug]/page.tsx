// app/articles/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Article } from '@/types';
import { fetchArticleBySlug, fetchArticles } from '@/src/services/api';
import Head from 'next/head';
import React from 'react';

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { slug } = params;
  const article: Article | null = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{article.title} | My Minimal Blog</title>
        <meta name="description" content={article.summary} />
      </Head>
      <article className="max-w-4xl mx-auto py-8 px-4 prose">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600">{new Date(article.date).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <div className="mt-4">
          {article.tags.map((tag) => (
            <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </>
  );
};

export async function generateStaticParams() {
  const articles: Article[] = await fetchArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default ArticlePage;
