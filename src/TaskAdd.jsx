import React, { useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md';

const getLocalItems = () => {
  let data = localStorage.getItem('Data');
  if (data) {
    return JSON.parse(localStorage.getItem('Data'));
  } else {
    return [];
  }
}

function TaskAdd() {
  const [Form, setForm] = useState(false);
  const [Task, setTask] = useState('');
  const [items, setitems] = useState(getLocalItems);

  function handleAddTask() {
    setForm(true)
  }
  function handleCancle() {
    setForm(false)
  }
  function handleInputData(event) {
    setTask(event.target.value)

  }

  function handleSaveData() {
    if (!Task) {

    } else {
      setitems([...items, Task])

      setTask('')
    }
    console.log("data", items)
  }

  //delte items
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });
    setitems(updatedItems);
  }
  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(items))

  }, [items]);




  return (
    <>
    <div className="mx-3">
      {Form == false ? (<button className="py-2 px-4 bg-orange-500 hover:bg-sky-500 border border-sm rounded-md text-white font-semibold"
        onClick={handleAddTask}
      >Add a Task</button>)

        :
        <div className="bordr border-3 shadow-md rounded-md w-full">
          <div className="flex flex-col gap-4 p-8">
            <h1 className="text-2xl font-semibold">Creat a task to do.</h1>
            <input
              value={Task}
              onChange={handleInputData}

              type="text"
              placeholder="Enter the Task" />
            <div className="flex flex-row gap-3">
              <button className="py-2 px-5 bg-orange-500 hover:bg-green-500 rounded-md text-white font-semibold"
                onClick={handleSaveData}

              >Save</button>
              <button className="py-2 px-5 bg-gray-200 hover:bg-red-300 rounded-md text-black font-semibold"
                onClick={handleCancle}
              >Cancle</button>
            </div>
          </div>
        </div>}
      <div className="py-3   ">
        {
          items.map((elem, index) => {
            return (
              <div className="flex flex-row" key={index}>
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                  />
                  <h1
                    className="text-xl m-1 font-semibold">{elem} </h1>
                  <button className onClick={() => deleteItem(index)}>
                    <MdCancel className="text-xl mt-1 text-red-500" />
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>

  </>);
}
export default TaskAdd;