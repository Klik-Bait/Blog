// src/services/api.ts

import { Article } from '@/types';

// Fetch all articles
export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data: Article[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

// Fetch a single article by slug
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/${slug}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error('Failed to fetch the article');
    }
    const data: Article = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error);
    return null;
  }
}
