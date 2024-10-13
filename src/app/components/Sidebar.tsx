import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-100 h-screen p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 p-2 bg-gray-200 rounded hover:bg-gray-300 w-full flex justify-center"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <>
          <h2 className="text-xl font-bold mb-4">Layout Examples</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block hover:bg-gray-200 p-2 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/todo" className="block hover:bg-gray-200 p-2 rounded">
                  Todo List
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default Sidebar;
