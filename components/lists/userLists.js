
import React, { useState, useEffect } from "react";

// import UserEditModal from "../modal/userEditModal";
// import Loader from "../common/loader";
import { GET } from "../../api/api";
import DisplayCard from "../common/displayCard";

const UserList = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [user, setUser] = useState({});

  const handleOpenCard = () => {
    setVisible(true);
  };

  useEffect(() => {
    GET("/users").then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
        setLoading(false);
      } else if (status === 200) {
        console.log("Login success");
        console.log(data);
        setData(data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <DisplayCard >
      <div className=" rounded-lg h-full w-full">
        {/* <div className="flex justify-between w-full pr-2">
        <div className="text-2xl font-bold font-sans cursor-default py-1 mb-2">Users</div>
      </div> */}
        <div className="">
          <div className="w-full ">
            {isLoading == true && (
              <div className="flex justify-center relative">
                <div className=" custom-loader absolute top-28"></div>
              </div>
            )}
          </div>
          <table className="w-full divide-y  divide-gray-200 rounded-md text-left">
            <thead className="rounded-md w-full">
              <tr className="w-full  rounded-md px-2 py-10 text-gray-800">
                <th className="py-2 pl-4">Name</th>
                <th>Email</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="w-full px-6 text-lg font-medium  rounded-md hover:bg-slate-200 transition-all duration-150 cursor-pointer "
                    onClick={() => {
                      handleOpenCard();
                      setUser(item);
                    }}
                  >
                    <td className="py-3 pl-4 ">{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.employeeId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <UserEditModal visible={visible} setVisible={setVisible} user={user} /> */}
      </div>
    </DisplayCard>
  );
};

export default UserList;
