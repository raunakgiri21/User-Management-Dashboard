import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { FiMenu } from "react-icons/fi";

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-col h-auto min-h-screen w-auto min-w-screen">
      <div className="flex justify-between h-24 lg:px-16 px-4 py-4 items-center gap-12 bg-secondaryBGC shadow-shadowOne">
        <p className="md:text-3xl text-2xl text-slate-300 font-semibold">
          User Management Dashboard
        </p>
        <div>
          <ul className="hidden mdl:inline-flex lg:gap-12 gap-4">
            <li className="mdl:text-xl text-slate-400 font-semibold">
              <NavLink
                to="/user-details"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-slate-800"
                    : isActive
                    ? "text-slate-300"
                    : ""
                }
              >
                User Details
              </NavLink>
            </li>
            <li className="mdl:text-xl text-slate-400 font-semibold">
              <NavLink
                // onClick={setShowMenu(false)}
                to="/account-creation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-slate-800"
                    : isActive
                    ? "text-slate-300"
                    : ""
                }
              >
                Account Creation
              </NavLink>
            </li>
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl font-bold mdl:hidden bg-mainBGC w-10 h-10 inline-flex items-center justify-center rounded-full text-slate-300 cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="mdl:hidden w-[80%] h-screen overflow-scroll absolute top-0 -left-3 bg-ternaryBGC p-12 pt-18">
              <ul className="flex flex-col gap-14">
                <li className="mdl:text-xl text-slate-400 font-semibold">
                  <NavLink
                    to="/user-details"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-slate-800"
                        : isActive
                        ? "text-slate-300"
                        : ""
                    }
                    onClick={() => setShowMenu(false)}
                  >
                    User Details
                  </NavLink>
                </li>
                <li className="mdl:text-xl text-slate-400 font-semibold">
                  <NavLink
                    to="/account-creation"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-slate-800"
                        : isActive
                        ? "text-slate-300"
                        : ""
                    }
                    onClick={() => setShowMenu(false)}
                  >
                    Account Creation
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-full">{<Outlet />}</div>
    </div>
  );
}
