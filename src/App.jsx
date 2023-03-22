import React from 'react'
import HeadSection from './components/HeadSection';
import IntroSection from './components/IntroSection';
import Footer from './components/Footer'
import Feature from './components/Feature';
import Course from './components/Course';
import NotesForm from './components/NotesForm';

function App() {

  return (
    <div className="App" >
         <HeadSection />
         <IntroSection />
         <NotesForm />
         <Course />
         <Feature />
         <Footer />
    </div>
  );
}

export default App
