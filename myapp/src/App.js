
import './App.css';
import{BrowseRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom'

function App() {
  return (
    <div class name="App" >
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </div>

        
      
    
  );
}

export default App;
