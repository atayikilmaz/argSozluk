import React from 'react';
import ArgList from './ArgList';
import logo from './ArgSozluk.svg';
import Form from './Form';
import AboutUs from './AboutUs';

function App() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
      <div className="overflow-x-hidden">
       <div className="flex flex-col mt-8 sm:flex-row justify-center sm:justify-between items-center h-16">
  <img src={logo} alt="ArgSozluk" className="mt-12 sm:ml-6 sm:mt-0 inline-block ml-4" style={{ maxWidth: "15rem" }} />
  <button className="p-2 mr-4 sm:h-12 mt-8 sm:mt-0 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 px-2 border-solid border-4 border-gray-900" onClick={scrollToBottom}>
    Biz Kimiz?
  </button>
</div>






        <ArgList />

        <Form />

        <AboutUs />


      </div>
  );
}

export default App;
