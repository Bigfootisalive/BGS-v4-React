import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articledata from "./articledata";
import axios from 'axios';
import '../App.css';
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

import NotFound from "./Notfound";

const ArticlePage = () => {
    const [articleinfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false})
    const {canUpvote} = articleinfo;
    const {articleId} = useParams();
    const {user, isLoading} = useUser();
     useEffect(() => {
            const loadarticleinfo = async () => {
                const token = user && await user.getIdToken();
                const headers = token ? {authtoken: token} : {};
                const response = await axios.get(`/api/articles/${articleId}`, {headers});
                const newarticleInfo = response.data;
                setArticleInfo(newarticleInfo);
            };
            if(isLoading){
                loadarticleinfo();
            }
           
        },[isLoading, user] );
        
        
        const article = articledata.find(articledata => articledata.name === articleId);

        const addUpvote = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken: token} : {};
            const response = await axios.put(`/api/articles/${articleId}/upvote`, null, {headers});
            const updatedArticle = response.data;
            setArticleInfo(updatedArticle);

        }

    if (!article){
        return <NotFound />
    }

    return (
        <>
        <div class="article-content-text">
        <h1>{article.title}</h1>


        <p>This article has {articleinfo.upvotes} upvote(s)</p>

        <div class="upvotes-section">
            {user
            ? <button class="upvotes-button"onClick={addUpvote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button>
            : <button class="upvotes-button"onClick={addUpvote}>Login to Upvote</button>}
            </div>

        {article.content.map(paragraph =>(
            <p class="article-conent">{paragraph}</p>
        ))}
            {article.content2.map(paragraph =>(
            <p class="article-conent">{paragraph}</p>
        ))}
            {article.content3.map(paragraph =>(
            <p class="article-conent">{paragraph}</p>
        ))}
  {user
   ? <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
    : <button class="upvotes-button">Login to add a comment!</button>
  }
   <CommentsList comments={articleinfo.comments}/></div>
</>
   
    );
}
export default ArticlePage;