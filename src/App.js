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
      <div>
       <div className="flex flex-col mt-8 sm:flex-row justify-center sm:justify-between items-center h-16">
  <img src={logo} alt="ArgSozluk" className="mt-12 sm:mt-0 inline-block ml-6" style={{ maxWidth: "15rem" }} />
  <button className="h-12 sm:h-12 mt-8 sm:mt-0 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 px-2 border-solid border-4 border-gray-900" onClick={scrollToBottom}>
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
