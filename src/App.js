import React from 'react';
import './App.css';
import CourseSection from './CourseSection/App'
import {CourseProvider} from './data'

function App() {
  return (
    <CourseProvider>
    <div className="App">
      <CourseSection></CourseSection>
    </div>
    </CourseProvider>
  );
}

export default App;
