import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './views/Home'
import DangNhap from './views/DangNhap'
import DangKy from './views/DangKy'

function App() {
  return <Router>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/DangNhap' element= {<DangNhap/>}/>
      <Route path='/DangKy' element= {<DangKy/>}/>

    </Routes>
    
    
  </Router>;
}

export default App;
