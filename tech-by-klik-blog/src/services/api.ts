// src/services/api.ts

import { Article } from '@/types';
import { dummyArticles } from './dummyArticles';

/**
 * Fetch all articles.
 * @returns {Promise<Article[]>} A promise that resolves to an array of articles.
 */
export const fetchArticles = async (): Promise<Article[]> => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return dummyArticles;
};

/**
 * Fetch a single article by its slug.
 * @param {string} slug - The slug of the article.
 * @returns {Promise<Article | null>} A promise that resolves to the article or null if not found.
 */
export const fetchArticleBySlug = async (slug: string): Promise<Article | null> => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  const article = dummyArticles.find((article) => article.slug === slug);
  return article || null;
};
