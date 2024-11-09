import { Link } from "react-router-dom";

const Navbar= () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
            <div className="flex items-center space-x-2">
                <img src="/st-icon.svg" alt="Icon" className="w-6 h-6" />
                <Link to="/home" className="text-2xl font-bold text-gray-800">
                    Scripted Thoughts
                </Link>
            </div>
                <Link to="/create-blog"
                    className="w-150 bg-indigo-600 text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-indigo-800 transition-colors duration-200 flex items-center justify-center">
                    Start Writing
                </Link>
        </nav>
    );
};

export default Navbar;
