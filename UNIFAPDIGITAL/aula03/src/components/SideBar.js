import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserCog, FaCog } from 'react-icons/fa';

function SideBar() {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaHome size={20} />,
    },
    {
      path: '/profile',
      name: 'Perfil',
      icon: <FaUserCog size={20} />,
    },
    {
      path: '/setting',
      name: 'Configurações',
      icon: <FaCog size={20} />,
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white p-4">
      <div className="text-2xl font-bold mb-8 text-center">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    location.pathname === item.path ? 'bg-gray-700' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
