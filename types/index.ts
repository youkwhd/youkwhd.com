type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    tags: { [key: string]: string; };
};

type Banner = {
    index: number;
    src: string;
    url: string;
};

export type {
    Post,
    Banner
}
