import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const navItems = [
    { id: '/', label: 'Home' },
    { id: 'persons', label: 'Register Person' },
    { id: 'vaccine', label: 'Register Vaccine'},
    { id: 'vaccination', label: 'Register Vaccination'},
  ];
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith('/' + path);
  };
  return (
    <header className="bg-[#001E62] border-b-4 border-[#307AE0]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-white font-bold text-5xl">BTG Pactual</h1>
              <p className="text-[#B1D2FF]">Vaccination Card System</p>
            </div>
          </div>
        </div>
        
        <nav className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              to = {item.id}
              className={`px-8 py-2 rounded-2px text-2xl  transition-colors ${
                isActive(item.id)
                  ? 'bg-[#307ae0] text-white'
                  : 'text-blue-100 hover:text-white hover:bg-blue-600'
              }`}
            >

              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}