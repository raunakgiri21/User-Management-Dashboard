import React from 'react'

function TableRow({id, username}) {
  return (
    <div className="flex w-full cursor-pointer hover:bg-mainBGC">
      <div className="flex justify-center border-2 border-[#0b0725] rounded-l-md w-1/4 p-2">
        <p className="text-slate-400">{id}</p>
      </div>
      <div className="flex justify-center border-2 border-l-transparent border-[#0b0725] rounded-r-md w-3/4 p-2">
        <p className="text-slate-400">{username}</p>
      </div>
    </div>
  );
}

export default TableRow