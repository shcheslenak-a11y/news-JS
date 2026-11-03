export interface Request {
    endpoint: string;
    options?: Record<string, string>;
}

interface ParsedResponse {
    status: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourceResponse extends ParsedResponse {
    sources: Array<Source>;
}

export interface ArticleResponse extends ParsedResponse {
    totalResults: number;
    articles: Array<Article>;
}
