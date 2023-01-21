import { useState } from "react";
import axios from "axios";
import useUser  from '../hooks/useUser';
const AddCommentForm = ({articleName, onArticleUpdated}) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};

        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        } );
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    
    }
    const {user} = useUser();

return (
    <div id="add-comment-form"> 
        <h3>Leave a Comment</h3>
       {user && <p>You are posting as {user.email}</p>}

             <textarea placeholder="Comment" value={commentText}  onChange={e => setCommentText(e.target.value)} rows="4" cols="50">Comment</textarea>
        
        
        <br/>
        <button class="upvotes-button" onClick={addComment}>
            Submit Comment
        </button>

    </div>
)
}
export default AddCommentForm;