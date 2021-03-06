import React from 'react'
import Homepage from '../pages/Homepage';
import Photo from './Prof Pic.png'
import NavBar from '../components/NavBar'
import { Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import ProjectsList from './ProjectsList';


function App() {
  return (
    <div className='grid-container'>
      <Header/>
    <div className="Headshot">
      <img className='image' src={Photo} alt="my headshot"></img>
      <NavBar/>
    </div>
    
    <div className="Body">
    
    <Switch>
        <Route exact path='/'>
            <Homepage/>
        </Route>
        <Route exact path='/projects'>
          <ProjectsList/>
        </Route>
    </Switch>
</div>
<footer className="footer"> Credit for image: 
  <a target="_blank" rel="noreferrer" href='http://www.dear-data.com/week-50-a-week-of-iphone-survey'>Dear Data</a>
</footer>
</div>
  );
}

export default App;
