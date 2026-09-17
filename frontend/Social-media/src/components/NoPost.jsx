import { useContext } from "react";
import { PostListContext } from "../store/PostListProvider";

const NoPost = ({onclickGetPost})=>{
    const { postList } = useContext(PostListContext);
    return(
        <>
            {postList.length === 0 && <center><h1>No Post</h1></center>}
        </>)
}


export default NoPost;