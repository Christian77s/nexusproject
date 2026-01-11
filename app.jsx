const { useState, useEffect } = React;
// Mengambil komponen motion dari window global (CDN)
const motion = window.Motion.motion; 

function App() {
    const [scrolled, setScrolled] = useState(false);

    // Logic untuk navbar transparan menjadi solid saat scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen text-slate-200 bg-[#0f172a]">
            
            {/* 1. Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        TECH.LAB
                    </h1>
                    <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-400 transition-colors shadow-lg">
                        Launch App
                    </button>
                </div>
            </nav>

            {/* 2. Hero Section */}
            <section className="relative pt-48 pb-20 px-6 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-tight italic uppercase">
                        MODERN WEB <br/> 
                        <span className="text-slate-500 not-italic">Simplified.</span>
                    </h2>
                    <p className="mt-8 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                        Desain profesional yang dipisahkan antara struktur HTML dan logika React. 
                        Kini web Anda memiliki fitur lengkap dan animasi halus.
                    </p>
                </motion.div>
            </section>

            {/* 3. Section Features */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "UI/UX Design", icon: "🎨", desc: "Menciptakan antarmuka yang modern, bersih, dan memanjakan mata pengguna." },
                        { title: "React Development", icon: "⚛️", desc: "Membangun aplikasi web yang cepat dan responsif dengan teknologi terbaru." },
                        { title: "Clean Architecture", icon: "🏗️", desc: "Menyusun kode yang rapi dan terstruktur agar mudah dikelola." }
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

            {/* 4. Contact Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-2xl shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">Mari Bekerja Sama</h2>
                        <p className="text-slate-400 font-medium">Punya proyek menarik? Kirimkan pesan sekarang.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Nama Lengkap</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600" />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600" />
                            </div>
                        </div>
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Pesan</label>
                            <textarea rows="4" placeholder="Ceritakan proyek Anda..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-cyan-500/50 transition-all text-white resize-none placeholder:text-slate-600"></textarea>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all uppercase tracking-widest"
                        >
                            Kirim Pesan
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            {/* 5. Footer Section */}
            <footer className="border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-cyan-400">TECH.LAB</h2>
                        <p className="text-slate-500 text-sm mt-2">© 2026 Developed by You. All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-6 text-slate-400 text-sm">
                        <a href="#" className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4">GitHub</a>
                        <a href="#" className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4">LinkedIn</a>
                        <a href="#" className="hover:text-cyan-400 transition underline decoration-cyan-500/20 underline-offset-4">Instagram</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

// Render akhir ke elemen root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);