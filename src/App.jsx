// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'


import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Cpu, ArrowUp, ArrowRight, Terminal, Zap } from 'lucide-react';
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
    const [scrollY, setScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setShowScrollTop(currentScrollY > 500);
  
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = currentScrollY + 100;
  
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
  
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Message transmitted successfully!');
      setContactData({ name: '', email: '', message: '' });
    };
  
    const projects = [
      { title: 'NeoCommerce', desc: 'Next-gen e-commerce platform', tech: ['React', 'Node.js'], gradient: 'from-cyan-500 to-blue-600', icon: <Code size={40} /> },
      { title: 'TaskFlow Pro', desc: 'AI-powered task management', tech: ['React', 'Firebase'], gradient: 'from-purple-500 to-pink-600', icon: <Terminal size={40} /> },
      { title: 'DataViz Studio', desc: 'Real-time analytics dashboard', tech: ['React', 'D3.js'], gradient: 'from-orange-500 to-red-600', icon: <Database size={40} /> },
      { title: 'SocialHub', desc: 'Next-gen social platform', tech: ['React', 'GraphQL'], gradient: 'from-green-500 to-teal-600', icon: <Globe size={40} /> },
      { title: 'AI Engine', desc: 'Machine learning interface', tech: ['Python', 'TensorFlow'], gradient: 'from-indigo-500 to-purple-600', icon: <Cpu size={40} /> },
      { title: 'CloudSync', desc: 'File synchronization service', tech: ['React', 'AWS'], gradient: 'from-pink-500 to-rose-600', icon: <Zap size={40} /> }
    ];
  
    const skills = [
      { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'], color: 'cyan' },
      { category: 'Backend', items: ['Node.js', 'Python', 'GraphQL', 'REST'], color: 'purple' },
      { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'], color: 'pink' },
      { category: 'DevOps', items: ['AWS', 'Docker', 'CI/CD', 'K8s'], color: 'yellow' }
    ];
  
    const scrollProgress = Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100);
  
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Scan Lines */}
        <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-5" />
        
        {/* Matrix Rain */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 font-mono text-xs matrix-rain"
              style={{
                left: `${i * 3.3}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {[...Array(30)].map((_, j) => (
                <div key={j} className="leading-tight">{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
  
        {/* Glowing Orbs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
            style={{
              top: '20%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              right: '10%',
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
            }}
          />
        </div>
  
        {/* Cyber Grid */}
        <div className="fixed bottom-0 w-full h-96 cyber-grid opacity-20 pointer-events-none" />
  
        {/* Scroll Progress */}
        <div className="fixed top-0 left-0 w-full h-0.5 bg-slate-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-glow-line"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
  
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-40 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center cyber-box">
                  <Terminal size={20} className="text-black" />
                </div>
                <div className="text-xl font-bold tracking-wider cyber-text">TRIVIKRAM.DEV</div>
              </div>
              
              <div className="hidden md:flex items-center gap-6">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className={`text-sm font-medium tracking-wide transition-all relative ${
                      activeSection === section.toLowerCase()
                        ? 'text-cyan-400'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {section.toUpperCase()}
                    {activeSection === section.toLowerCase() && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 cyber-glow" />
                    )}
                  </button>
                ))}
              </div>
  
              <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">
              <div className="px-6 py-4 space-y-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section.toLowerCase())}
                    className="block w-full text-left py-3 text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-800"
                  >
                    {section.toUpperCase()}
                  </button>
                ))}
                <a 
                  href="#" 
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold tracking-wide text-black"
                >
                  RESUME
                </a>
              </div>
            </div>
          )}
        </nav>
  
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg hover:scale-110 transition-all z-50 cyber-box-glow"
          >
            <ArrowUp size={20} className="text-black" />
          </button>
        )}
  
        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full cyber-glow">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">SYSTEM ONLINE</span>
            </div>
            
            <h1 className="text-5xl md:text-9xl font-bold mb-4 cyber-gradient-text leading-tight tracking-tight">
              TRIVIKRAM
            </h1>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 text-white tracking-tight">
              BUDHABHATTI
            </h2>
            
            <div className="inline-block mb-8">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base md:text-xl tracking-wide cyber-box transform hover:scale-105 transition-all">
                FULL STACK DEVELOPER
              </div>
            </div>
            
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Crafting next-generation web experiences with cutting-edge technologies and sleek design
            </p>
            
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/Trivikram-B" className="cyber-icon-button group">
                <Github size={24} className="group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="cyber-icon-button group">
                <Linkedin size={24} className="group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="cyber-icon-button group">
                <Mail size={24} className="group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold tracking-wide hover:scale-105 transition-all cyber-box-glow"
              >
                <span className="text-black">EXPLORE WORK</span>
                <ArrowRight size={20} className="text-black group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-bold tracking-wide hover:bg-cyan-500/10 transition-all cyber-glow"
              >
                CONTACT
              </button>
            </div>
          </div>
        </section>
  
        {/* About */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-cyan-400 text-sm font-bold tracking-widest">ABOUT</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-12 cyber-gradient-text">
              WHO AM I
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="cyber-card p-8 hover:scale-105 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center mb-4 cyber-box group-hover:rotate-12 transition-transform">
                  <Code size={24} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Developer</h3>
                <p className="text-slate-300 leading-relaxed">
                  Building scalable web applications with modern frameworks and clean architecture
                </p>
              </div>
              
              <div className="cyber-card p-8 hover:scale-105 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center mb-4 cyber-box group-hover:rotate-12 transition-transform">
                  <Zap size={24} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Innovator</h3>
                <p className="text-slate-300 leading-relaxed">
                  Pushing boundaries with cutting-edge tech and creative problem-solving
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Skills */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
              <span className="text-purple-400 text-sm font-bold tracking-widest">TECH STACK</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-16 text-center cyber-gradient-text">
              SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="cyber-card p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className={`text-${skill.color}-400 text-sm font-black tracking-widest mb-4 cyber-text-glow-${skill.color}`}>
                    {skill.category.toUpperCase()}
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        <div className={`w-1.5 h-1.5 bg-${skill.color}-400 cyber-glow-sm`} />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Projects */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
              <span className="text-pink-400 text-sm font-bold tracking-widest">PORTFOLIO</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-16 text-center cyber-gradient-text">
              FEATURED WORK
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const cardScrollPosition = scrollY - 2200;
                const shouldAppear = cardScrollPosition > index * 150;
                const opacity = shouldAppear ? 1 : 0;
                const scale = shouldAppear ? 1 : 0.85;
                const translateY = shouldAppear ? 0 : 50;
                
                return (
                  <div 
                    key={index} 
                    className="cyber-card-project group cursor-pointer hover:scale-105 transition-all duration-500"
                    style={{
                      opacity,
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`relative h-64 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}>
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white/20" />
                      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white/20" />
                      
                      {/* Icon */}
                      <div className="relative z-10 flex justify-center">
                        <div className="text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all">
                          {project.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-xs font-bold text-white/60 mb-1 tracking-widest">{project.category}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-4">{project.desc}</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xs font-bold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="bg-black/90 border-t-2 border-cyan-500/50 p-4 flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                      </div>
                      <div className="flex gap-3">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <Code size={18} />
                        </a>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <span className="text-cyan-400 text-sm font-bold tracking-widest">CONNECT</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-center cyber-gradient-text">
              GET IN TOUCH
            </h2>
            
            <p className="text-lg text-slate-400 text-center mb-12">
              Let's build something amazing together
            </p>
            
            <div className="cyber-card p-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-cyan-400 mb-2 tracking-wide">NAME</label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    className="cyber-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-cyan-400 mb-2 tracking-wide">EMAIL</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="cyber-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-cyan-400 mb-2 tracking-wide">MESSAGE</label>
                  <textarea
                    rows={5}
                    value={contactData.message}
                    onChange={(e) => setContactData({...contactData, message: e.target.value})}
                    className="cyber-input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-black text-lg tracking-wide hover:scale-105 transition-all cyber-box-glow text-black"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-black border-t-2 border-cyan-500/20 py-10 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-slate-500 text-sm">
                © 2026 TRIVIKRAM BUDHABHATTI // ALL SYSTEMS OPERATIONAL
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/Trivikram-B" className="text-slate-500 hover:text-cyan-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
  
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Space+Grotesk:wght@700&display=swap');
          
          * {
            font-family: 'Inter', -apple-system, sans-serif;
          }
          
          h1, h2, h3, .cyber-text {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
          }
          
          @keyframes matrix-fall {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          
          .matrix-rain {
            animation: matrix-fall linear infinite;
          }
          
          .scanlines {
            background: repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1) 1px,
              transparent 1px,
              transparent 3px
            );
            animation: scan 8s linear infinite;
          }
          
          @keyframes scan {
            0% { transform: translateY(0); }
            100% { transform: translateY(12px); }
          }
          
          .cyber-grid {
            background-image: 
              linear-gradient(rgba(0, 255, 255, 0.1) 2px, transparent 2px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 2px, transparent 2px);
            background-size: 50px 50px;
            transform: perspective(600px) rotateX(60deg);
            transform-origin: bottom;
          }
          
          .cyber-gradient-text {
            background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
          }
          
          .cyber-card {
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(6, 182, 212, 0.2);
            box-shadow: 
              0 4px 6px rgba(0, 0, 0, 0.1),
              0 0 20px rgba(6, 182, 212, 0.1);
          }
          
          .cyber-card:hover {
            border-color: rgba(6, 182, 212, 0.5);
            box-shadow: 
              0 10px 20px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(6, 182, 212, 0.3);
          }
          
          .cyber-card-project {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(6, 182, 212, 0.3);
            overflow: hidden;
            border-radius: 12px;
          }
          
          .cyber-card-project:hover {
            border-color: rgba(6, 182, 212, 0.6);
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.3);
          }
          
          .cyber-box {
            box-shadow: 
              4px 4px 0 rgba(0, 0, 0, 0.5),
              0 0 10px currentColor;
          }
          
          .cyber-box-glow {
            box-shadow: 
              0 0 20px rgba(6, 182, 212, 0.5),
              0 0 40px rgba(139, 92, 246, 0.3);
          }
          
          .cyber-box-glow:hover {
            box-shadow: 
              0 0 30px rgba(6, 182, 212, 0.7),
              0 0 60px rgba(139, 92, 246, 0.5);
          }
          
          .cyber-glow {
            box-shadow: 0 0 10px currentColor;
          }
          
          .cyber-glow-sm {
            box-shadow: 0 0 5px currentColor;
          }
          
          .neon-glow-line {
            box-shadow: 0 0 20px currentColor;
          }
          
          .cyber-icon-button {
            width: 56px;
            height: 56px;
            background: rgba(15, 23, 42, 0.8);
            border: 2px solid rgba(6, 182, 212, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
            color: white;
          }
          
          .cyber-icon-button:hover {
            border-color: rgba(6, 182, 212, 0.8);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
            transform: scale(1.1);
          }
          
          .cyber-input {
            width: 100%;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.4);
            border: 2px solid rgba(6, 182, 212, 0.3);
            color: white;
            transition: all 0.3s;
            font-size: 1rem;
          }
          
          .cyber-input:focus {
            outline: none;
            border-color: rgba(6, 182, 212, 0.8);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }
          
          .cyber-input::placeholder {
            color: rgba(148, 163, 184, 0.5);
          }
          
          .cyber-text-glow-cyan { text-shadow: 0 0 10px #06b6d4; }
          .cyber-text-glow-purple { text-shadow: 0 0 10px #8b5cf6; }
          .cyber-text-glow-pink { text-shadow: 0 0 10px #ec4899; }
          .cyber-text-glow-yellow { text-shadow: 0 0 10px #fbbf24; }
        `}</style>
      </div>
    );
  }
export default App
