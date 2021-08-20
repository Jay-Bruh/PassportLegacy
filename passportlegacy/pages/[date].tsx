export default function Blog({post}) {
  return (
      <div>{post.Title}</div>
    );
}

// Tell nextjs how many pages are there
export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/posts');
    const posts = await res.json();
    
    const paths = posts.map((post) => ({
        params: {date: post.Date.toString()}
    }))

    return {
        paths,
        fallback: false,
    };
}

// Get data for each individual page
export async function getStaticProps({params}){
    const {date} = params;

    const res = await fetch(`http://localhost:1337/posts?Date=${date}`)
    const data = await res.json();
    const post = data[0];

    return {
        props: {post},
    }

}