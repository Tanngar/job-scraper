import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AddPostingPage from './pages/AddPosting/AddPostingPage';
import PostingsPage from './pages/Postings/PostingsPage';
import ScrapeLinkedInPage from './pages/ScrapeLinkedIn/ScrapeLinkedInPage';
import TagsPage from './pages/Tags/TagsPage';

const App = () => {
  return (
    <Router>
      <div className="h-full min-h-screen bg-temp-900">
        <Nav />
        <div className="mx-auto flex max-w-7xl flex-col items-center p-8">
          <Routes>
            <Route path="/" element={<ScrapeLinkedInPage />} />
            <Route path="/postings" element={<PostingsPage />} />
            <Route path="/postings/:id" element={<PostingsPage />} />
            <Route path="/add-posting" element={<AddPostingPage />} />
            <Route path="/tags" element={<TagsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
