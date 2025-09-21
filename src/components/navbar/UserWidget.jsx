import { FaUserCircle } from "react-icons/fa";

const UserWidget = () => {

    return (
        <div className="flex items-center cursor-pointer transform hover:scale-110 transition duration-300">
            <FaUserCircle />
        </div>
    );
}

export default UserWidget;