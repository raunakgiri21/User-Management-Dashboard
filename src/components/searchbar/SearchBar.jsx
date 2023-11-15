import React from "react";

function SearchBar({search,setSearch,onSearch}) {
  return (
    <div className="bg-secondaryBGC flex justify-between items-center h-full w-full max-w-[1024px] shadow-shadowTwo rounded-md px-8 py-4 gap-4">
      <input
        type="text"
        name="search"
        placeholder="Search by username"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        className="contactInput w-1/2 placeholder-slate-700 md:text-base text-sm"
        autoComplete="off"
      />
      <button
        className="md:w-1/6 w-1/4 h-8 bg-[#141518] rounded-lg text-sm text-gray-400 tracking-wide enabled:hover:text-white duration-300 hover:border-[1px] enabled:hover:border-mainBGC border-transparent active:bg-[#040505]"
        onClick={() => onSearch()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
