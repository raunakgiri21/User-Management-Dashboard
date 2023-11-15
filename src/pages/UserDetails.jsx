import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import axios from "axios";
import TableRow from "../components/table/TableRow";

function UserDetails() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getInitialData();
  },[])

  const getInitialData = async() => {
    try {
      let { data } = await axios.get("https://jsonplaceholder.org/users");
      data = data.map((user) => ({
        id: user.id,
        username: user.login.username,
        email: user.email,
        phone: user.phone,
        birthDate: user.birthDate,
      }));
      setData(data);
    } catch (error) {
      console.log("Error getting user data: ", error);
    }
  };

  const onSearchHandler = async () => {
    try {
      if(!search){
        getInitialData();
        return;
      }
      const filteredData = data.filter((user) => {
        let re = new RegExp(`${search}`, "gi");
        let res = user.username.match(re);
        return res
      });
      setData(filteredData);
    } catch (error) {
      console.log("Error getting user filtered data: ", error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-auto md:px-24 px-8 pt-8 gap-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={onSearchHandler}
      />
      <div className="bg-secondaryBGC flex flex-col justify-start items-center h-[calc(100vh-220px)] w-full max-w-[1024px] shadow-shadowTwo rounded-md px-8 py-4 gap-4 overflow-scroll">
        <div className="flex w-full">
          <div className="w-1/4 flex justify-center text-lg font-bold text-slate-400">
            ID
          </div>
          <div className="w-3/4 flex justify-center text-lg font-bold text-slate-400">
            USERNAME
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 overflow-scroll">
          {data.length && data.map((user) => (
            <TableRow key={user.id} id={user.id} username={user.username}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
