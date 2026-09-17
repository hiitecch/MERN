import { useRef,useContext } from "react";
import { PostListContext } from "../store/PostListProvider";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const { addPost } = useContext(PostListContext);
  const TitleElement =useRef();
  const ContentElement= useRef();

  const HandlerSubmit=(event)=>{
    event.preventDefault();
    const postTitle = TitleElement.current.value;
    const postContent = ContentElement.current.value;

    // Do nothing if inputs are empty
    if (!postTitle.trim() || !postContent.trim()) return;

    // Call addPost from context
    addPost(postTitle, postContent);

    // Clear input fields after submission
    TitleElement.current.value = "";
    ContentElement.current.value = "";
    navigate("/");

  }
  return (
    <section className="create-page">

      <h1>Create Post</h1>

    
      <form onSubmit={HandlerSubmit} className="create-card">
        <input
          type="text"
          ref={TitleElement}
          placeholder="Enter post title"
          className="title-input"
        />

        <textarea ref={ContentElement}
          placeholder="What's on your mind?"
        ></textarea>

         <button type="submit" className="post-button">
          Post
        </button>
        </form>

       

      

    </section>
  );
}

export default CreatePost;

