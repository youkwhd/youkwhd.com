type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    tags: { [key: string]: string; };
};

export default Post;
