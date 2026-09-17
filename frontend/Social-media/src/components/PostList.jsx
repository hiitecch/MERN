import { useContext ,useEffect} from "react";
import Post from "./Post";
import NoPost from "./NoPost";
import { PostListContext } from "../store/PostListProvider";

const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListContext);

  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts = data.posts.map((post) => ({
          id: post.id.toString(),
          Title: post.title,
          Content: post.body,
        }));

        addIntialPosts(formattedPosts);
      });
  },[]);
      
  

  return (
    <>
      {postList.length === 0 ? (
        <NoPost ></NoPost>
      ) : (
        postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      )}
    </>
  );
};

export default PostList;