import React from 'react';
import { RiTodoLine } from 'react-icons/ri';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between max-w-screen mx-auto bg-white px-4">
        <h1 className="font-extrabold p-5 text-4xl text-orange-500 italic">Todo List</h1>
        <RiTodoLine className="text-6xl m-3 h-100% text-orange-500 animate-pulse" />
      </nav>
    </>
  );
}

export default Navbar;