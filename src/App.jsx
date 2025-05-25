import { useState } from "react";

function App() {
  const [color, seColor] = useState("olive");
  const date = new Date().toLocaleDateString();
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-between items-center p-10"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-2xl">
            Select the Color you love
          </h1>
          <h3 className="font-bold text-red-600 bg-white p-4 rounded-full">
            Date: {date}
          </h3>
        </div>
        <div className="btn-parent bg-white w-fit p-4 rounded-full flex  gap-2">
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "red" }}
            onClick={() => seColor("red")}
          >
            Red
          </button>
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "blue" }}
            onClick={() => seColor("blue")}
          >
            Blue
          </button>
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "green" }}
            onClick={() => seColor("green")}
          >
            Green
          </button>
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "orange" }}
            onClick={() => seColor("orange")}
          >
            Orange
          </button>
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "pink" }}
            onClick={() => seColor("pink")}
          >
            Pink
          </button>
          <button
            className=" px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "purple" }}
            onClick={() => seColor("Purple")}
          >
            Purple
          </button>
          <button
            className="px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "teal" }}
            onClick={() => seColor("teal")}
          >
            Teal
          </button>
          <button
            className="px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "goldenrod" }}
            onClick={() => seColor("goldenrod")}
          >
            Goldenrod
          </button>
          <button
            className="px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "crimson" }}
            onClick={() => seColor("crimson")}
          >
            Crimson
          </button>
          <button
            className="px-4 py-2 rounded-full text-white cursor-pointer"
            style={{ backgroundColor: "dodgerblue" }}
            onClick={() => seColor("dodgerblue")}
          >
            Dodger Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
