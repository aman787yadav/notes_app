import React from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../Redux/slices/user-slice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    dispatch(removeUserData());
    navigate("/");
  }

  return (
    <header className="flex h-[80px] items-center justify-center shadow-md">
      <div className="mx-5 flex w-full max-w-[1550px] items-center justify-between">
        
        {/* Logo */}
        <div className="flex h-[60px] items-center justify-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-blue-600">FindMyNotes</h1>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <GiHamburgerMenu className="text-xl md:hidden" />
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {isAuthenticated && (
            <>
              <Link to="/notes">Notes</Link> {/* <-- NEW Link */}
              <Link to="/search">
                <FaSearch className="text-xl" />
              </Link>
              <Link to="/upload">
                <MdOutlineFileUpload className="text-[24px]" />
              </Link>
              <Link to="/profile">
                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                  Profile
                </button>
              </Link>
              <button
                className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to="/login">
                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


