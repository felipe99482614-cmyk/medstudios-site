import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  ChevronRight, 
  Target, 
  Users, 
  ShieldCheck, 
  Mail, 
  ArrowRight,
  MonitorSmartphone,
  ClipboardCheck,
  Menu, 
  X,
  Timer,
  Zap
} from 'lucide-react';

/**
 * Componente Principal da MedStudios
 * Estética: Deep MedTech (Moderno, Tecnológico e Seguro)
 */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // E-mail padrão da holding
  const contactEmail = "contato@medstudios.com.br";

  // Função para abrir o cliente de e-mail
  const handleContactClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  // Efeito para monitorizar o scroll e alterar o estilo da navegação
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem = ({ href, children }) => (
    <a 
      href={href} 
      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  const SectionTitle = ({ subtitle, title, light = false }) => (
    <div className="mb-12">
      <h3 className={`text-sm font-bold uppercase tracking-widest ${light ? 'text-emerald-300' : 'text-emerald-500'} mb-2`}>
        {subtitle}
      </h3>
      <h2 className={`text-3xl md:text-5xl font-extrabold ${light ? 'text-white' : 'text-slate-900'} tracking-tight`}>
        {title}
      </h2>
    </div>
  );

  const VentureCard = ({ icon: Icon, title, description, isComingSoon = false }) => (
    <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
      {isComingSoon && (
        <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase px-2 py-1 rounded-md flex items-center gap-1">
          <Timer size={12} /> Em Breve
        </div>
      )}
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-500 shadow-inner">
        <Icon className="text-slate-400 group-hover:text-white transition-colors duration-500" size={32} />
      </div>
      <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h4>
      <p className="text-slate-500 leading-relaxed mb-6">
        {description}
      </p>
      <div className="pt-4 border-t border-slate-50">
        <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm opacity-50 group-hover:opacity-100 transition-opacity">
          Acompanhe as novidades <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Banner de Lançamento */}
      <div className="bg-emerald-500 text-white py-2 px-6 text-center text-xs font-bold uppercase tracking-[0.2em] relative z-[60]">
        New Venture: MedStudios em fase de lançamento • Aguarde Novidades
      </div>

      {/* Navegação */}
      <nav className={`fixed w-full z-50 top-8 transition-all duration-300 ${scrolled ? 'px-4' : 'px-6'}`}>
        <div className={`container mx-auto max-w-6xl rounded-2xl transition-all duration-300 flex justify-between items-center ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 px-6 shadow-2xl border border-white/10' : 'bg-transparent py-4 px-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 transform hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-slate-900'}`}>
              MED<span className={scrolled ? 'text-emerald-400' : 'text-emerald-500'}>STUDIOS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#vision">Nossa Visão</NavItem>
            <button 
              onClick={handleContactClick}
              className="bg-white text-slate-900 hover:bg-emerald-500 hover:text-white px-6 py-2 rounded-xl font-bold transition-all text-sm shadow-xl border border-slate-100"
            >
              Fale Conosco
            </button>
          </div>

          <button className="md:hidden text-emerald-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-slate-900 p-8 rounded-3xl flex flex-col gap-6 md:hidden border border-white/10 shadow-2xl">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#vision">Nossa Visão</NavItem>
            <button 
              onClick={handleContactClick}
              className="bg-emerald-500 text-white px-6 py-4 rounded-2xl font-bold text-center"
            >
              Contato
            </button>
          </div>
        )}
      </nav>

      {/* Seção Hero */}
      <section id="home" className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2 rounded-full text-xs font-bold mb-8 shadow-sm">
            <Zap size={14} className="text-emerald-500 fill-emerald-500" />
            CONSTRUINDO O FUTURO DA MEDICINA
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-none mb-8 tracking-tighter">
            Medicina Ágil.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Tecnologia Humana.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            A MedStudios é uma nova holding dedicada a incubar e gerir projetos de alta performance em saúde e tecnologia. Estamos em fase de estruturação. Aguarde novidades.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => document.getElementById('vision').scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-600 transition-all shadow-2xl shadow-slate-300 group"
            >
              Conheça Nossa Tese <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Verticais de Negócio */}
      <section id="ventures" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mb-20">
            <SectionTitle 
              subtitle="Futuro Portfólio" 
              title="Verticais em desenvolvimento" 
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <VentureCard 
              icon={Stethoscope}
              title="MedOperations"
              description="Sistemas de gestão e otimização de fluxos operacionais para ambientes de saúde de alta complexidade."
              isComingSoon={true}
            />
            <VentureCard 
              icon={MonitorSmartphone}
              title="Studios Labs"
              description="Fábrica de software voltada para soluções SaaS e inteligência de dados aplicada à eficiência clínica."
              isComingSoon={true}
            />
            <VentureCard 
              icon={Target}
              title="MedCapital"
              description="Estruturação de investimentos e governança para grupos de saúde através de gestão profissional."
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Visão e Status de Desenvolvimento */}
      <section id="vision" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                Por que <span className="text-emerald-400 italic">Studios?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Acreditamos que a medicina moderna exige o cuidado artesanal de um "Studio" aliado à escala da tecnologia. Estamos a criar as ferramentas para a próxima geração de saúde.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, t: "Sólida Base Ética", d: "Segurança de dados e conformidade normativa no centro de todas as nossas operações." },
                  { icon: Users, t: "Expertise Técnica", d: "Visão clínica e tecnológica unificadas num único ecossistema de gestão." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-900 transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">{item.t}</h5>
                      <p className="text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-800 rounded-[3rem] p-12 md:p-16 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="text-6xl font-black mb-6">Em breve.</div>
                <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                  "Estamos a trabalhar intensamente para lançar as nossas primeiras plataformas de inteligência operacional e automação de fluxos. O futuro da MedStudios começa agora."
                </p>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-2/3 animate-pulse"></div>
                </div>
                <div className="mt-4 text-emerald-200 font-bold text-sm tracking-widest uppercase">
                    Status do Desenvolvimento: 65%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-20 mb-24">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">M</span>
                </div>
                <span className="text-3xl font-black tracking-tighter text-slate-900">
                  MED<span className="text-emerald-500">STUDIOS</span>
                </span>
              </div>
              <p className="text-lg text-slate-500 leading-relaxed">
                Transformando a prática em saúde através de gestão inteligente e inovação tecnológica proprietária.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h6 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Empresa</h6>
                <ul className="space-y-4 text-slate-500 font-medium text-sm">
                  <li><a href="#" className="hover:text-emerald-500 transition-colors">Quem Somos</a></li>
                  <li><a href="#" className="hover:text-emerald-500 transition-colors">Nossa Tese</a></li>
                  <li><a href="#" className="hover:text-emerald-500 transition-colors">Newsroom</a></li>
                </ul>
              </div>
              <div>
                <h6 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Contacto</h6>
                <ul className="space-y-4 text-slate-500 font-medium text-sm">
                  <li className="flex items-center gap-2 font-semibold italic text-slate-700 tracking-tight tracking-wider">
                    <button onClick={handleContactClick} className="hover:text-emerald-500 transition-colors">
                      {contactEmail}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <div className="flex flex-col gap-1">
              <p>© {new Date().getFullYear()} MEDSTUDIOS TECH & EDUCATION LTDA</p>
              <p className="opacity-70 tracking-normal capitalize font-medium">Launching phase</p>
            </div>
            <div className="flex gap-8">
                <a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
