const CommentsList = ({ comments }) => (
    <>
    <h3 class="commenttext">Comments:</h3>
    {comments.map(comment => (
<div class="commentdiv" className="comment" key={comment.postedBy+': '+ comment.text}>
    <h4 class="commentdiv">{comment.postedBy}</h4><p class="commentdiv">{comment.text}</p>
    </div>
))}
</>
);
export default CommentsList;