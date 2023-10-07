"use client";
import { Tillana } from "next/font/google";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(desc);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask =[...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8" >
          <div className="flex justify-between w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => { deleteHandler(i) }}
            className="w-60 bg-red-500 text-white rounded-full
           font-bold">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        TO-DO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded-lg "
          placeholder="Enter Your Task Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded-lg"
          placeholder="Enter Description of Task"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="rounded-full bg-black text-xl text-white h-12 w-36 text-center opacity-70"
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
        
      </div>
    </>
  );
};

export default page;
