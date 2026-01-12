const { useState, useEffect } = React;

const motion = window.Motion.motion; 

function App() {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Thank you! We have received your message. The SC.LAB team will contact you within 24 hours.");
    };


    return (
        <div className="min-h-screen text-slate-200 bg-[#0f172a]">
            
            
            <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        SC.LAB
                    </h1>
                    <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors shadow-lg">
                        Launch App
                    </button>
                </div>
            </nav>


            <section className="relative pt-48 pb-10 px-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-tight italic uppercase">
                        FUTURE-READY <br/> 
                        <span className="text-slate-500 not-italic">DIGITAL SOLUTIONS.</span>
                    </h2>
                    <p className="mt-8 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                        We're setting a new standard in web development. Combining sharp visual aesthetics with cutting-edge technological performance to bring your ideas to life.</p>
                </motion.div>
            </section>

            
            <section className="max-w-7xl mx-auto px-6 py-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] shadow-2xl text-center"
                >
                    <h2 className="text-white text-3xl font-bold italic uppercase">EXPERIENCE NEXT-GEN INTERACTION</h2>
                    <p className="text-white/90 mt-4 font-medium">Delivering the perfect harmony between visual aesthetics and cutting-edge technological performance for a seamless digital experience..</p>
                </motion.div>
            </section>

            
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "UI/UX Design", icon: "🎨", desc: "Creating a modern, clean, and eye-pleasing interface for users." },
                        { title: "React Development", icon: "⚛️", desc: "Build fast and responsive web applications with the latest technologies." },
                        { title: "Clean Architecture", icon: "🏗️", desc: "Compose neat and structured code for easy management." }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            
            <section className="max-w-4xl mx-auto px-6 py-24">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-2xl shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">Let's Work Together</h2>
                        <p className="text-slate-400 font-medium">Have an interesting project? Send us a message now.</p>
                    </div>

                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                                <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600" />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                                <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600" />
                            </div>
                        </div>
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Massage</label>
                            <textarea required rows="4" placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white resize-none placeholder:text-slate-600"></textarea>
                        </div>
                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all uppercase tracking-widest"
                        >
                            SEND MASSAGE
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            
            <footer className="border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-cyan-400">SC.LAB</h2>
                        <p className="text-slate-500 text-sm mt-2">© 2026 Developed by Christian. All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-6 text-slate-400 text-sm">
    <a 
        href="https://github.com/Christian77s" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4"
    >
        GitHub
    </a>
    <a 
        href="https://www.linkedin.com/in/christian-chin-richman-a68a532ab/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4"
    >
        LinkedIn
    </a>
    <a 
        href="https://www.instagram.com/christ77r/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4"
    >
        Instagram
    </a>
</div>
                </div>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);