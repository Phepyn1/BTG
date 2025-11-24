import { Syringe, Users, FileText, Eye } from 'lucide-react';
import { useNavigate  } from 'react-router-dom';





export default function HomePage() {

  const navigate = useNavigate()
const cards = [
    {
      id: 'persons',
      icon: Users,
      title: 'Register Person',
      description: 'Add new individuals to the vaccination system',
      color: '#195AB4',
    },
    {
      id: 'vaccine',
      icon: Syringe,
      title: 'Register Vaccine',
      description: 'Register new vaccines in the database',
      color: '#307AE0',
    },
    {
      id: 'vaccination',
      icon: FileText,
      title: 'Vaccination Record',
      description: 'Record vaccine applications for individuals',
      color: '#549CFF',
    },
    {
      id: 'viewcard',
      icon: Eye,
      title: 'View Vaccination Cards',
      description: 'Access complete vaccination records',
      color: '#195AB4',
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h2 className="mb-4 text-[#001e62] text-3xl">Vaccination Card System</h2>
        <p className="text-[#6C757D] max-w-2xl">
          A comprehensive system for managing vaccination records with enterprise-grade security and reliability.
          Register individuals, vaccines, and maintain complete vaccination history.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => navigate(card.id)}
              className="group bg-white border-2 border-[#DEE2E6] hover:border-[#307AE0] transition-all p-8 text-left"
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-16 h-16 flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ backgroundColor: card.color }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 group-hover:text-[#307AE0] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[#6C757D]">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="h-1 w-24 bg-linear-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

  
      <div className="mt-16 p-8 bg-[#D2E5FF] border-l-4 border-[#001E62]">
        <h4 className="mb-2">System Guidelines</h4>
        <ul className="space-y-2 text-[#001E62]">
          <li className="flex gap-2">
            <span>•</span>
            <span>All vaccination records are securely stored and maintained</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Each person and vaccine requires a unique identifier</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Vaccination records include dose number and application date</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Access API documentation for integration capabilities</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
