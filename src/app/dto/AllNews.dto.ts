export interface AllNewsDto {
    hits: Hit[];
    page: number;
    nbHits: number;
    nbPages: number;
    hitsPerPage: number;
    processingTimeMS: number;
    query: string;
    params: string;
}

interface Hit {
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: null;
    comment_text: null;
    _tags: string[];
    num_comments: number;
    objectID: string;
    _highlightResult: HighlightResult;
}

interface HighlightResult {
    title: Author;
    url: Author;
    author: Author;
}

interface Author {
    value: string;
    matchLevel: string;
    matchedWords: string[];
}