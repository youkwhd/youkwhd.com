export type Post = {
    slug: string;
    title: string;
    date: string;
    content: string;
    tags: string[];
    parsedTags: string[];
    excerpt: string;
};

export type Banner = {
    index: number;
    publicSrc: string;
    url: string;
};
