// src/types/search.ts
export interface SearchResult {
    slug: string;
    data: {
      title: string;
      description?: string;
      excerpt?: string;
      category?: string;
      publishDate?: string;
    };
  }
  
  export interface SearchMetadata {
    query: string;
    totalResults: number;
    searchTime?: number;
  }