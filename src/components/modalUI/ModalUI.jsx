import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  username,
  id,
  email,
  phone,
  birthDate,
}) {
  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative md:w-2/4 w-4/6 my-6 mx-auto max-w-lg">
              {/*content*/}
              <div
                onClick={(e) => e.stopPropagation()}
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondaryBGC outline-none focus:outline-none"
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-700 rounded-t">
                  <h3 className="text-2xl font-semibold text-slate-300">
                    Report
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-2 px-4 flex flex-col">
                  <p className="my-1 text-slate-400 text-md leading-relaxed md:ml-[20%]">
                    ID :- <span className="text-slate-300">{id}</span>
                  </p>
                  <p className="my-1 text-slate-400 text-md leading-relaxed md:ml-[20%]">
                    Username :-{" "}
                    <span className="text-slate-300">{username}</span>
                  </p>
                  <p className="my-1 text-slate-400 text-md leading-relaxed md:ml-[20%]">
                    Email :- <span className="text-slate-300">{email}</span>
                  </p>
                  <p className="my-1 text-slate-400 text-md leading-relaxed md:ml-[20%]">
                    Phone No. :- <span className="text-slate-300">{phone}</span>
                  </p>
                  <p className="my-1 text-slate-400 text-md leading-relaxed md:ml-[20%]">
                    BirthDate :-{" "}
                    <span className="text-slate-300">{birthDate}</span>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end md:p-6 p-3 border-t border-solid border-slate-700 rounded-b">
                  <button
                    className="text-slate-500 background-transparent font-bold uppercase px-4 py-2 text-sm outline outline-2 rounded-md focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
