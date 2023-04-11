import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TaskAdd from './TaskAdd';

function App() {

  return (
    <>
      <div className="h-screen">
        <div>
          <Navbar />
          <hr />
        </div>

        <div className="p-10 h-screen overflow-auto">
          <h1 className="text-5xl font-semibold">Things to get done.</h1>

          <div className="my-10">
            <h1 className="text-3xl font-medium">Things to do.</h1>

            <div className="p-4">
              <TaskAdd />
            </div>
          </div>
        </div>


        <div className="flex justify-around p-5 bg-slate-500 sticky">
          <Footer footer="Copyright @ 2022 | Codeyogi" />
          <Footer footer="Powered By Codeyogi" />

        </div>
      </div>
    </>
  );
}

export default App;
