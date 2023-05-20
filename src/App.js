import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArgList from './ArgList';
import logo from './ArgSozluk.svg';
import Form from './Form';
import Success from './Success';

function App() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <div className="flex justify-between mt-4 h-16">
          <img src={logo} alt="ArgSozluk" className="inline-block ml-6" style={{ maxWidth: "15rem" }} />
          <button className="ml-auto mr-6 my-3 rounded-xl hover:bg-gray-200 hover:rounded-lg px-2 border-solid border-4 border-gray-900" onClick={scrollToBottom}>
            Biz Kimiz?
          </button>
        </div>

        <Routes>
          <Route path="/" element={<ArgList />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>

        {/* <h2 className="pt-40 pb-10 sticky top-[100vh] text-center text-2xl font-bold">İletişim ve Öneri İçin: netfysoft@netfysoft.com</h2> */}
        
        <Form />
      </div>
    </Router>
  );
}

export default App;
