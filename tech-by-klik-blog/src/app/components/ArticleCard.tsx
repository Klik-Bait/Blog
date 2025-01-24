// app/components/ArticleCard.tsx

import Link from 'next/link';
import { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <li className="mb-6">
      <Link href={`/articles/${article.slug}`}>
        <p className="text-2xl font-semibold text-blue-600 hover:underline">{article.title}</p>
      </Link>
      <p className="text-gray-600">{new Date(article.date).toLocaleDateString()}</p>
      <p className="text-gray-700 mt-2">{article.summary}</p>
      <div className="mt-2">
        {article.tags.map((tag) => (
          <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ArticleCard;
