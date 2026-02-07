// src/Pages/Classes.jsx
import React from 'react'; 
import ClassesList from '../Components/classes/ClassesList'; 
import Footer from '../Components/classes/Footer'; 
import HeaderSection from '../Components/classes/HeaderSection';

function Classes() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection activePage="Clases" />
      <ClassesList />
      <Footer />
    </div>
  );
}

export default Classes;