import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './views/Home'

function App() {
  return <Router>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      {/* <Route path='/DangKy' element= {<DangKy/>}/> */}
      <Route path='/showpost' element={<ShowPost/>}/>
      <Route path='/DangNhap' element= {<DangNhap/>}/>
      <Route path='/DangKy' element= {<DangKy/>}/>

    </Routes>
    
    
  </Router>;
}

export default App;
