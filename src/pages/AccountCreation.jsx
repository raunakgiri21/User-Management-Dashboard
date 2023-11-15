import React, { useEffect, useState } from "react";

function AccountCreation() {
  const [click,setClick] = useState(true);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
    setSuccessMsg("");
  }, [click]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setSuccessMsg("");
      setErrMsg("Username is required!");
      return;
    }
    if (password.length < 8) {
      setSuccessMsg("");
      setErrMsg("Password should be at least 8 characters");
      return;
    }
    if (password !== confirmPassword) {
      setSuccessMsg("");
      setErrMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setErrMsg("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setSuccessMsg("Account Created Successfully");
      setLoading(false)
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-auto md:p-24 p-16 px-8">
      <div className=" bg-secondaryBGC h-full w-full max-w-[628px] shadow-shadowTwo rounded-md p-8">
        {!errMsg && !successMsg && !loading && (
          <p className="py-3 bg-transparent text-center text-slate-500 text-base tracking-wide">
            Please Fill Required Details
          </p>
        )}
        {loading && (
          <p className="py-3 bg-transparent text-center text-slate-500 text-base tracking-wide animate-bounce">
            Loading
          </p>
        )}
        {errMsg && (
          <p className="py-3 bg-transparent text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-transparent text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <form className="flex flex-col gap-14 pt-3">
          <div className="w-full flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Username
            </p>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
                setClick((prev) => !prev);
              }}
              value={username}
              type="text"
              name="username"
              className={`${
                errMsg === "Username is required!" && "outline-errorLine"
              } contactInput`}
              autoComplete="off"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Password
            </p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setClick((prev) => !prev);
              }}
              value={password}
              type="password"
              name="password"
              className={`${
                errMsg === "Password should be at least 8 characters" &&
                "outline-errorLine"
              } contactInput`}
              autoComplete="off"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Confirm - Password
            </p>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setClick((prev) => !prev);
              }}
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              className={`${
                errMsg === "Passwords do not match" && "outline-errorLine"
              } contactInput`}
              autoComplete="off"
            />
          </div>
          <div className="w-full mt-12">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="disabled:cursor-not-allowed w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase enabled:hover:text-white duration-300 enabled:hover:border-[1px] enabled:hover:border-mainBGC border-transparent active:bg-[#040505]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountCreation;
