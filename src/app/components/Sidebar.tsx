import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaListUl } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-[#F5F5F7] text-[#1D1D1F] h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} relative shadow-lg`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-4 ${isOpen ? 'right-4' : 'left-1/2 -translate-x-1/2'} p-2 bg-white text-[#1D1D1F] rounded-full hover:bg-gray-100 shadow-md transition-all duration-300`}
      >
        {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
      </button>
      {isOpen && (
        <>
          <h2 className="text-xl font-semibold mb-8 mt-16 px-6">NextJS 실습</h2>
          <nav>
            <ul className="space-y-2 px-4">
              <li>
                <Link href="/" className="block">
                  <div className="hover:bg-white transition-colors duration-300 p-3 rounded-lg">
                    <div className="flex items-center">
                      <FaHome className="text-[#007AFF] mr-4" size={20} />
                      <div>
                        <h3 className="font-medium text-base">홈</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/todo" className="block">
                  <div className="hover:bg-white transition-colors duration-300 p-3 rounded-lg">
                    <div className="flex items-center">
                      <FaListUl className="text-[#007AFF] mr-4" size={20} />
                      <div>
                        <h3 className="font-medium text-base">할 일 목록</h3>
                      </div>
                    </div>
                  </div>
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
