import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './views/Home'
import ShowPost from './views/ShowPost';
function App() {
  return <Router>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/showpost' element={<ShowPost/>}/>
    </Routes>
    
    
  </Router>;
}

export default App;
