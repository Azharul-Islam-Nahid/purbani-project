import React from "react";

const DepartmentList = ({ departments, setDepartment }) => {
  
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 justify-start items-center ">
        {departments.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setDepartment(item.name)}
              className="flex gap-x-5 items-center justify-between text-black shadow-lg py-2 px-5 border bg-white mb-2"
            >
              <div className="font-bold text-xl capitalize text-color_secondary">
                {item.name}
              </div>
              <div className="text-3xl text-color_secondary">{item.logo}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentList;
