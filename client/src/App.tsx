import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AddPostingPage from './pages/AddPosting/AddPostingPage';
import PostingsPage from './pages/Postings/PostingsPage';
import ScrapeLinkedInPage from './pages/ScrapeLinkedIn/ScrapeLinkedInPage';
import TagsPage from './pages/Tags/TagsPage';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen flex-col justify-between">
        <div>
          <header>
            <Nav />
          </header>
          <main className="mx-auto flex w-full max-w-7xl flex-col items-center py-16">
            <Routes>
              <Route path="/" element={<ScrapeLinkedInPage />} />
              <Route path="/postings/:id" element={<PostingsPage />} />
              <Route path="/postings" element={<PostingsPage />} />
              <Route path="/add-posting" element={<AddPostingPage />} />
              <Route path="/tags" element={<TagsPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
