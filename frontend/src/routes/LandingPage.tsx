import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div className="bg-gray-50 min-h-screen flex-col items-center text-gray-900">
            {/* Header */}
            <header className="w-full max-w-6xl flex items-center py-6 px-4">
                <div className="text-2xl font-bold">Scripted Thoughts</div>
                <nav className="flex items-center space-x-9 ml-auto">
                    <Link to="/signin" className="hover:underline">Write</Link>
                    <Link to="/signin" className="hover:underline">Sign in</Link>
                    <Link to="/signup">
                    <button onClick={() => console.log("click")} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                        Get started
                    </button>
                    </Link>
                </nav>
            </header>
            
            {/* Main Content */}
            <main className="text-center flex flex-col items-center mt-16 px-4">
                <h1 className="text-5xl font-bold mb-4">Human stories & ideas</h1>
                <p className="text-lg text-gray-600 mb-8">
                    A place to read, write, and deepen your understanding
                </p>
                <Link to="/signin">
                    <button className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
                        Start reading
                    </button>
                </Link>
            </main>

            {/* Illustrations */}
            <div className="relative mt-12 flex justify-center items-center w-full">
                <div className="w-32 h-32 bg-green-500 rounded-full opacity-90"></div>
                <div className="w-40 h-40 bg-green-500 rounded-lg opacity-90 ml-6"></div>
                {/* Add more SVGs or illustrations as necessary */}
            </div>
        </div>
  )
}
