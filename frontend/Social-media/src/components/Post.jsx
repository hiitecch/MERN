import { useContext } from "react";
import { PostListContext } from "../store/PostListProvider";

function Post({ post }) {
  const {deletePost}= useContext(PostListContext);
  return (
    <div className="post">

      <div className="post-header">
        <div className="avatar">P</div>

        <div className="user-info">
          <h5>{post.id}</h5>
          <small>2 hours ago</small>
        </div>
      </div>

      <div className="post-body">
        <h2>{post.Title}</h2>

        <p className="post-content">
          {post.Content}
        </p>
      </div>

      <div className="post-actions">
        <button>❤️ Like</button>
        <button>💬 Comment</button>
        <button onClick={()=>deletePost(post.id)}>🗑️ Delete</button>
      </div>

    </div>
  );
}

export default Post;




