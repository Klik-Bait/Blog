// src/types/index.ts

export interface Article {
    id: number;
    title: string;
    summary: string;
    content: string; // HTML string
    date: string; // ISO string
    slug: string;
    tags: string[];
  }
  