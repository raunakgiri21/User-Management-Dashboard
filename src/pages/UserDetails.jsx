import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import axios from "axios";
import TableRow from "../components/table/TableRow";
import LoadingUI from "../components/loadingUI/LoadingUI";
import Modal from "../components/modalUI/ModalUI";

function UserDetails() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [modalData, setModalData] = useState({
    id: null,
    username: null,
    email: null,
    phone: null,
    birthDate: null,
  });

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      setLoading(true);
      let { data } = await axios.get("https://jsonplaceholder.org/users");
      data = data.map((user) => ({
        id: user.id,
        username: user.login.username,
        email: user.email,
        phone: user.phone,
        birthDate: user.birthDate,
      }));
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error getting user data: ", error);
    }
  };

  const onSearchHandler = async () => {
    try {
      if (!search) {
        await getInitialData();
        return;
      }
      const filteredData = data.filter((user) => {
        let re = new RegExp(`${search}`, "gi");
        let res = user.username.match(re);
        return res;
      });
      setData(filteredData);
    } catch (error) {
      console.log("Error getting user filtered data: ", error);
    }
  };

  const modalHandler = (id) => {
    const [mod] = data.filter((user) => user.id === id);
    setModalData((prevModalData) => ({
      ...prevModalData,
      username: mod.username,
      id: mod.id,
      email: mod.email,
      phone: mod.phone,
      birthDate: mod.birthDate,
    }));
    setShowModal(true);
  };

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
        {modalData.id && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            username={modalData.username}
            id={modalData.id}
            email={modalData.email}
            phone={modalData.phone}
            birthDate={modalData.birthDate}
          />
        )}
        <div className="flex flex-col w-full gap-1 overflow-scroll">
          {loading ? (
            <LoadingUI />
          ) : data.length ? (
            data.map((user) => (
              <button
                key={user.id}
                onClick={() => {
                  modalHandler(user.id);
                }}
              >
                <TableRow
                  id={user.id}
                  username={user.username}
                />
              </button>
            ))
          ) : (
            <div className="flex justify-center mt-10">
              <p className="text-slate-400 text-lg">No Relevant Data Found!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
