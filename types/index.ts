export type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    tags: string[];
    parsedTags: string[];
};

export type Banner = {
    index: number;
    publicSrc: string;
    url: string;
};
