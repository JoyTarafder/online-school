import React from 'react';
import Navigation from './Components/Navigation/Navigation.js'
import Header from './Components/Header/Header';
import CourseItems from './Components/CoursesItems/CourseItems';

function App() {
  return (
    <div>
      <div>
        <Header/>
        <Navigation/>
        <CourseItems/>
      </div>
    </div>
  );
}

export default App;
