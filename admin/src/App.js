import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewsList from './components/news/NewsList';
import NewsDetail from './components/news/NewsDetail';
import CreateNews from './components/news/CreateNews';
import UpdateNews from './components/news/UpdateNews';
import DeleteNews from './components/news/DeleteNews';
import TeamMemberList from './components/team/TeamMemberList';
import CreateTeamMember from './components/team/CreateTeamMember';
import UpdateTeamMember from './components/team/UpdateTeamMember';
import DeleteTeamMember from './components/team/DeleteTeamMember';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/team-members">Team Members</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* News Routes */}
          <Route exact path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/create" element={<CreateNews />} />
          <Route path="/update/:id" element={<UpdateNews />} />
          <Route path="/delete/:id" element={<DeleteNews />} />
          
          {/* Team Members Routes */}
          <Route path="/team-members" element={<TeamMemberList />} />
          <Route path="/create-team-member" element={<CreateTeamMember />} />
          <Route path="/update-team-member/:id" element={<UpdateTeamMember />} />
          <Route path="/delete-team-member/:id" element={<DeleteTeamMember />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
