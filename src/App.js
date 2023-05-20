import React from 'react';
import ArgList from './ArgList';
import logo from './ArgSozluk.svg';
import Form from './Form';

function App() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
      <div>
        <div className="flex justify-between mt-4 h-16">
          <img src={logo} alt="ArgSozluk" className="inline-block ml-6" style={{ maxWidth: "15rem" }} />
          <button className="ml-auto mr-6 my-3 rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 px-2 border-solid border-4 border-gray-900" onClick={scrollToBottom}>
            Biz Kimiz?
          </button>
        </div>

        <ArgList />

        <Form />
      </div>
  );
}

export default App;
