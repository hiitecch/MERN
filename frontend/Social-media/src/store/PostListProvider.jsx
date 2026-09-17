import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addIntialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
 
  if(action.type==="DELETEPOST"){
    return currPostList.filter((post)=>post.id !==action.payload.postId)
  }
  else if(action.type==="ADDPOSTS"){
    return [...currPostList, ...action.payload.posts];
  }
  else if(action.type==="ADDPOST"){
    return [action.payload,...currPostList]
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  // 2. Renamed state to postList so it matches the value object key
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (postTitle,postContent) => {
    dispatchPostList({
      type:"ADDPOST",
      payload:{
        id:Date.now().toString(),
        Title:postTitle,
        Content:postContent,
      },
    });
  };


  const addIntialPosts = (posts) => {
    dispatchPostList({
      type:"ADDPOSTS",
      payload:{
        posts,
      },
    });
  };


  const deletePost = (postId) => {
    dispatchPostList({
      type:"DELETEPOST",
      payload :{
        postId,
      },
    });
      
    
  };

  return (
    <PostListContext.Provider value={{ postList, addPost,addIntialPosts, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;