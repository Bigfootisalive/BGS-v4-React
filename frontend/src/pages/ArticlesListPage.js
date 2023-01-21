import articledata from './articledata';
import '../App.css';
import {Link} from 'react-router-dom'
const ArticlesListPage = () => {
    return (
        <> 
        <h1>Articles</h1>
            {articledata.map(articledata => (
            <Link key={articledata.name}className="article-list-item"to={articledata.name}>
                <div class="article-conent-list">
                    <h3>{articledata.title}</h3>
                    <p>{articledata.content[0].substring(0, 150)}...</p>
                </div></Link>
            ))}
        </>

        )
}
export default ArticlesListPage;