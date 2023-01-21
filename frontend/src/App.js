import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar'
import NotFoundPage from './pages/404Page'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/Articles';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
       <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          <Route path="/articles" element={<ArticlesListPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/create-account" element={<CreateAccountPage />}/>
          <Route path="/articles/:articleId" element={<ArticlePage />}/>


        </Routes>
       </div>
    </div>
    </BrowserRouter>


  );
}

export default App;
