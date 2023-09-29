import React, { useEffect, useState } from "react";
import { RenderTugas } from "../assets/components/RenderTugas";

export const Challenge = () => {
  const [Input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [DataSearch, setDataSearch] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const [Data, setData] = useState([
    {
      id: 1,
      list: "Date bareng Reemar",
      check: true,
    },
    {
      id: 2,
      list: "Olahraga sama Reemar",
      check: false,
    },
    {
      id: 3,
      list: "Nikahin Reemar",
      check: false,
    },
    {
      id: 4,
      list: "Nonton Film sama reemar",
      check: false,
    },
    {
      id: 5,
      list: "Jogging sama reemar",
      check: false,
    },
    {
      id: 6,
      list: "Aquarium date sama reemar",
      check: false,
    },
    {
      id: 7,
      list: "Study date sama reemar",
      check: false,
    },
  ]);

  const [originalData, setOriginalData] = useState(Data);

  const renderList = () => {
    return filterTasks.map((value) => {
      return (
        <RenderTugas
          key={value.id}
          data={value}
          loadData={setData}
          list={Data}
          onDelete={handleDelete}
          isEditMode={isEditMode}></RenderTugas>
      );
    });
  };

  const filterData = (e) => {
    setOriginalData(Data);

    const filteredData = Data.filter((valueFilter) =>
      valueFilter.list.includes(DataSearch)
    );
    setData(filteredData);
  };

  const resetData = () => {
    setData(originalData);
  };

  useEffect(() => {
    if (setDataSearch === "") {
      resetData(); // Kembalikan tampilan ke data awal
    }
  }, [setDataSearch, resetData]);

  const handleShowTask = () => {
    let filteredTasks = Data;
    if (filter === "todo") {
      filteredTasks = filteredTasks.filter((task) => !task.check);
    } else if (filter === "done") {
      filteredTasks = filteredTasks.filter((task) => task.check);
    }
    return filteredTasks;
  };
  const filterTasks = handleShowTask();

  const handleDelete = (taskId) => {
    // Fungsi untuk menghapus tugas berdasarkan ID atau referensi unik
    const newData = Data.filter((task) => task.id !== taskId);
    setData(newData);
  };

  const handleDeleteDoneTasks = () => {
    // Fungsi untuk menghapus tugas yang telah selesai ("Done")
    const newData = Data.filter((task) => !task.check);
    setData(newData);
  };

  const handleDeleteAllTasks = () => {
    // Fungsi untuk menghapus semua tugas
    setData([]);
  };

  const RenderSubmit = (e) => {
    e.preventDefault();
    const dataInput = Input.trim(); // Menghapus spasi putih dari awal dan akhir input

    if (dataInput === "") {
      // Validasi input kosong
      return;
    }

    const newTask = {
      id: Data.length + 1,
      list: dataInput,
      check: false,
    };

    // Tambahkan tugas baru ke dalam daftar
    setData([...Data, newTask]);

    // Reset input
    setInput("");
  };

  return (
    <div className=" w-full h-[75rem] bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 p-[2rem] ">
      <div className="  flex justify-center flex-col mx-[20rem] h-[70rem] backdrop-blur-sm bg-white/30 rounded-lg">
        <div className="flex justify-center grid justify-items-center flex-col  mb-[1rem] ">
          <h1 className="text-xl font-bold p-[1rem] text-white">Todo Search</h1>
          <div className="p-[0.7rem] border border-gray-300 rounded-[0.3rem] ">
            <div className="flex justify-center content-center items-center border border-gray-300 w-[40rem] h-[2rem] rounded-[0.3rem]  bg-[#7E43E0] ">
              <button className=" px-[0.5rem]  ">
                <svg className="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search Todo"
                className="w-[39rem] h-[1.9rem] rounded-r-[0.1rem] pl-2 placeholder-[#595A75] placeholder-radius-30 "
                onChange={(e) => {
                  setDataSearch(e.target.value);
                  if (e.target.value === "") {
                    resetData(); // Kembalikan tampilan ke data awal
                  }
                }}></input>
            </div>
            <div className="flex justify-center w-[40rem] h-[2rem] items-center mt-[1rem] bg-[#7E43E0]  rounded-[0.3rem]">
              <button
                onClick={() => {
                  filterData();
                }}
                className="text-base font-normal text-white">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center grid justify-items-center flex-col  mb-[1rem]">
          <h1 className="text-xl font-bold p-[1rem] text-white">TodoInput</h1>
          <div className="p-[0.7rem] border border-gray-300 rounded-[0.3rem] ">
            <form onSubmit={RenderSubmit} className="flex flex-col ">
              <div className="flex flex justify-center content-center items-center border border-gray-300 w-[40rem] h-[2rem] rounded-[0.3rem]  bg-[#7E43E0]">
                <button className=" px-[0.5rem]  ">
                  <svg className="fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512">
                    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Input Todo"
                  value={Input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  className="w-[39rem] h-[1.9rem] rounded-r-[0.1rem] pl-2 "></input>
              </div>
              <div className="flex justify-center w-[40rem] h-[2rem] items-center mt-[1rem] bg-[#7E43E0]  rounded-[0.3rem]">
                <button
                  type="submit"
                  className="text-base font-normal text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center  justify-items-center flex-col  mb-[1rem] ">
          <h1 className="text-xl font-bold p-[1rem] text-white">TodoList</h1>
          <div className="flex justify-between  space-x-6 mb-[2rem]">
            <button
              className={`bg-[#7E43E0] px-[5.5rem] h-[2rem] rounded-[0.3rem] text-base font-normal text-white ${
                filter === "all" ? "bg-[#7076EB]" : ""
              }`}
              onClick={() => setFilter("all")}>
              All
            </button>
            <button
              className={`bg-[#7E43E0] px-[5.5rem] h-[2rem] rounded-[0.3rem] text-base font-normal text-white ${
                filter === "done" ? "bg-[#7076EB]" : ""
              }`}
              onClick={() => setFilter("done")}>
              Done
            </button>
            <button
              className={`bg-[#7E43E0] px-[5.5rem] h-[2rem] rounded-[0.3rem] text-base font-normal text-white ${
                filter === "todo" ? "bg-[#7076EB]" : ""
              }`}
              onClick={() => setFilter("todo")}>
              Todo
            </button>
          </div>
          <div>
            {renderList()}
            <div className="flex justify-between">
              <button
                className="bg-[#D93649] px-[6.5rem] h-[2rem] rounded-[0.3rem] text-base font-normal text-white"
                onClick={handleDeleteDoneTasks}>
                Delete Done Tasks
              </button>
              <button
                className="bg-[#D93649] px-[6.5rem] h-[2rem] rounded-[0.3rem] text-base font-normal text-white"
                onClick={handleDeleteAllTasks}>
                Delete All Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
