import fs from "fs";
import Link from "next/link";

export default function BlogPage({posts}: {posts: string[]}) {
    return <div>
        {posts.map((post, index) => (
            <Link key={index} href={`blog/posts/${post}`}>
                {post}
            </Link>
        ))}
    </div>

}

export function getStaticProps() {
    const posts = fs.readdirSync("./pages/blog/posts");
    

    return {
        props: {
           posts: posts.map(post => post.replace(".tsx", ""))
        }
    }
}