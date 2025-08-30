import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/PostsContext";
export default function PostDetails() {
  const { postId } = useParams();
  const posts = useContext(postsContext);
  const post = posts.find((post) => post.id === Number(postId));
  console.log(post);
  if (post) {
    return (
      <div>
        <h2> Post Details Page</h2>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>The post with id: {postId} is not exist</h1>
      </div>
    );
  }
}
