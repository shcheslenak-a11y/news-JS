export interface Request {
    endpoint: string;
    options?: Record<string, string>;
}

export interface ParsedResponse {
    status: string;
    totalResults?: number;
    articles?: Array<Article>;
    sources?: Array<Source>;
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
