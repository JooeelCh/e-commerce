import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserWidget = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {user ? (
        <>
          <FaUserCircle className="text-xl" />
          <span className="hidden md:block">{user.email}</span>
          <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm">Logout</button>
        </>
      ) : (
        <Link to="/login" className="flex cursor-pointer transform hover:scale-110 transition duration-300">
          <FaUserCircle />
        </Link>
      )}
    </div>
  );
};

export default UserWidget;
