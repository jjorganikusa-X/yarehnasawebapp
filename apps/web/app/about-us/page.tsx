'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function AboutUsPage() {
  const router = useRouter();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ID');
  const languageSwitcherRef = useRef<HTMLDivElement>(null);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    const langNames: { [key: string]: string } = {
      'id': 'ID',
      'en': 'EN',
      'jp': 'JP',
      'nl': 'NL',
      'de': 'DE'
    };
    setCurrentLang(langNames[lang]);
    setIsLanguageMenuOpen(false);
    console.log('Language changed to:', lang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
      <>
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
          {/* 
      AESTHETIC DNA:
      Trend Core: Corporate Agri-Tech
      Spice: Heritage Typography + Modern Gradients
      Palette: Deep Ocean Blue (#1e40af) & Emerald Green (#059669)
      Type: Telma (Serif) + Satoshi (Sans)
      Page Type: About Us (Narrative Focus)
    */}

    {/* Sticky Header */}
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" onClick={() => router.push('/')} className="flex items-center gap-3 group">
                <img src="https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771641369152_tdnht.jpeg" alt="PT ESE Yarehnasa Logo" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none tracking-tight text-gray-900">PT ESE YAREHNASA</span>
                    <span className="text-xs text-yareh-green font-medium tracking-wider">MARITIM & PANGAN</span>
                </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
                <button onClick={() => router.push('/')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    Beranda
                </button>
                <button className="px-5 py-2 rounded-full bg-white text-yareh-blue font-medium shadow-sm transition-all text-sm">
                    Tentang Kami
                </button>
                <button onClick={() => router.push('/market-and-products')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    Potensi & Produk
                </button>
                <button onClick={() => router.push('/sustainability')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-green hover:bg-white/50 font-medium transition-all text-sm">
                    Keberlanjutan
                </button>
                <button onClick={() => router.push('/investor-relations')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    Investor
                </button>
            </nav>

            {/* Language Switcher & CTA */}
            <div className="flex items-center gap-4">
                {/* Language Switcher */}
                <div ref={languageSwitcherRef} className="relative language-switcher">
                    <button onClick={toggleLanguageMenu} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <i className="ph-fill ph-globe text-xl text-gray-600"></i>
                        <span className="text-sm font-medium text-gray-700">{currentLang}</span>
                        <i className="ph ph-caret-down text-sm text-gray-600"></i>
                    </button>
                    <div className={`${isLanguageMenuOpen ? '' : 'hidden'} absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[200px] z-50`}>
                        <button onClick={() => changeLanguage('id')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            <span className="text-2xl">🇮🇩</span>
                            <span className="text-sm font-medium text-gray-700">Bahasa Indonesia</span>
                        </button>
                        <button onClick={() => changeLanguage('en')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            <span className="text-2xl">🇺🇸</span>
                            <span className="text-sm font-medium text-gray-700">English (USA)</span>
                        </button>
                        <button onClick={() => changeLanguage('jp')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            <span className="text-2xl">🇯🇵</span>
                            <span className="text-sm font-medium text-gray-700">日本語 (Japanese)</span>
                        </button>
                        <button onClick={() => changeLanguage('nl')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            <span className="text-2xl">🇳🇱</span>
                            <span className="text-sm font-medium text-gray-700">Nederlands (Dutch)</span>
                        </button>
                        <button onClick={() => changeLanguage('de')} className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors">
                            <span className="text-2xl">🇩🇪</span>
                            <span className="text-sm font-medium text-gray-700">Deutsch (German)</span>
                        </button>
                    </div>
                </div>
                
                <button onClick={() => router.push('/investor-relations')} className="hidden md:flex items-center gap-2 bg-yareh-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                    <span>Investasi</span>
                    <i className="ph ph-arrow-right"></i>
                </button>
                <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <i className="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
    </header>

    {/* Hero Section (Narrative Focus) */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0d142d 0%, #1e3a6e 50%, #063a22 100%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '35px 35px' }}></div>
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #059669, transparent)', filter: 'blur(50px)' }}></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #1e40af, transparent)', filter: 'blur(60px)' }}></div>
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-6">
                <i className="ph-fill ph-map-pin"></i>
                <span>Kepulauan Maluku, Indonesia</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Pusat Rempah Dunia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">Yang Terlahir Kembali</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                Kami tidak hanya menanam jahe. Kami menghidupkan kembali sejarah emas Maluku dengan inovasi modern dan integritas yang teguh.
            </p>
        </div>
    </section>

    {/* Vision & Mission (Split Layout) */}
    <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Visi */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-yareh-blue/10 to-transparent rounded-3xl -z-10 group-hover:from-yareh-blue/20 transition-all"></div>
                    <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl h-full">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-yareh-blue mb-8">
                            <i className="ph-fill ph-eye text-3xl"></i>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Visi Kami</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Menjadi <span className="text-yareh-blue font-bold">Penyuplai Jahe Terbesar di Dunia</span> dari negara kepulauan, dengan standar keberlanjutan global yang menjaga keseimbangan alam dan teknologi.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">Global Leader</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">Sustainable</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider">Innovative</span>
                        </div>
                    </div>
                </div>

                {/* Misi & Values */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-yareh-green/10 to-transparent rounded-3xl -z-10 group-hover:from-yareh-green/20 transition-all"></div>
                    <div className="bg-yareh-darkBlue text-white p-10 rounded-2xl h-full shadow-xl">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-yareh-green mb-8">
                            <i className="ph-fill ph-scales text-3xl"></i>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-6">Misi & Integritas</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                            Berbisnis dengan nama baik. Kami berkomitmen menyediakan pangan berkualitas tinggi melalui transparansi penuh, memastikan setiap rimpang jahe dapat dilacak hingga ke akarnya.
                        </p>
                        
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <i className="ph-fill ph-quotes text-4xl text-yareh-green opacity-50 absolute -mt-4 -ml-2"></i>
                            <blockquote className="relative z-10 italic text-white/90 font-serif text-lg text-center">
                                "Nama baik lebih berharga dari pada kekayaan besar, dikasihi orang lebih baik dari pada perak dan emas."
                            </blockquote>
                            <p className="text-right text-sm text-yareh-green font-bold mt-4 uppercase tracking-widest">— Amsal 22:1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Plantation Stats & Expansion Plan */}
    <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-yareh-green font-bold tracking-widest text-xs uppercase mb-2 block">Lokasi & Kapasitas</span>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Perkebunan Hatusua</h2>
                <p className="text-gray-600 text-lg">
                    Terletak di Kabupaten Seram Bagian Barat (SBB), Kepulauan Maluku. Tanah vulkanis subur yang menjadi rumah bagi jahe berkualitas premium kami.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-yareh-blue transition-colors">
                    <i className="ph-fill ph-map-trifold text-4xl text-gray-300 group-hover:text-yareh-blue transition-colors mb-4"></i>
                    <h3 className="text-4xl font-bold text-gray-900 mb-1">10<span className="text-lg text-gray-400">Ha</span></h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Luas Area Saat Ini</p>
                </div>
                <div className="bg-gradient-to-br from-yareh-blue to-blue-700 p-8 rounded-2xl shadow-lg text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125"></div>
                    <i className="ph-fill ph-arrows-out-cardinal text-4xl text-blue-200 mb-4 relative z-10"></i>
                    <h3 className="text-4xl font-bold mb-1 relative z-10">100<span className="text-lg text-blue-200">Ha</span></h3>
                    <p className="text-sm text-blue-100 font-medium uppercase tracking-wide relative z-10">Target Ekspansi</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-yareh-green transition-colors">
                    <i className="ph-fill ph-plant text-4xl text-gray-300 group-hover:text-yareh-green transition-colors mb-4"></i>
                    <h3 className="text-4xl font-bold text-gray-900 mb-1">40<span className="text-lg text-gray-400">Ton/Ha</span></h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Potensi Panen</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:border-yareh-gold transition-colors">
                    <i className="ph-fill ph-package text-4xl text-gray-300 group-hover:text-yareh-gold transition-colors mb-4"></i>
                    <h3 className="text-4xl font-bold text-gray-900 mb-1">400<span className="text-lg text-gray-400">Ton</span></h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Total Produksi/Tahun</p>
                </div>
            </div>

            {/* Visual Content Block */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
                {/* CSS Farm Visual */}
                <div className="w-full h-full" style={{ background: 'linear-gradient(160deg, #0a4a2e 0%, #1a6b4a 30%, #2d8f5e 60%, #064e3b 100%)' }}>
                    <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="flex justify-center gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🌱</div>
                                    <div className="text-green-200 text-xs">Bibit</div>
                                </div>
                                <div className="text-4xl text-green-400 self-center">→</div>
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🌿</div>
                                    <div className="text-green-200 text-xs">Tumbuh</div>
                                </div>
                                <div className="text-4xl text-green-400 self-center">→</div>
                                <div className="text-center">
                                    <div className="text-6xl mb-2">🫚</div>
                                    <div className="text-green-200 text-xs">Panen</div>
                                </div>
                                <div className="text-4xl text-green-400 self-center">→</div>
                                <div className="text-center">
                                    <div className="text-6xl mb-2">📦</div>
                                    <div className="text-green-200 text-xs">Ekspor</div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 inline-block">
                                <p className="text-white font-bold text-xl">Perkebunan Hatusua — 10 Ha</p>
                                <p className="text-green-200 text-sm mt-1">Produksi 300-400 Ton/Tahun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-10 lg:p-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 text-yareh-green mb-4">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="font-bold tracking-wider text-sm uppercase">Live Operations</span>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-4">Dari Tanah Vulkanis Menuju Pasar Global</h3>
                        <p className="text-gray-200 text-lg mb-8">
                            Kami mengelola perkebunan ini dengan sistem manajemen terintegrasi. Setiap inci lahan dipantau untuk memastikan jahe yang dihasilkan bebas residu kimia berbahaya dan memiliki kualitas rimpang terbaik.
                        </p>
                        <button onClick={() => router.push('/sustainability')} className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2 w-fit">
                            Lihat Metode Tanam
                            <i className="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Narrative/Story Section */}
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-yareh-blue font-bold tracking-widest text-xs uppercase mb-2 block">Sejarah & Inovasi</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900">
                        Merevitalisasi Warisan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yareh-blue to-purple-600">The Spice Islands</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Kepulauan Maluku pernah menjadi pusat perdagangan dunia, tempat di mana pala dan cengkeh bernilai lebih tinggi dari emas. Hari ini, PT ESE YAREHNASA melanjutkan warisan tersebut dengan komoditas Jahe.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Kami tidak hanya mengandalkan sejarah, tetapi menciptakan sejarah baru. Dengan memadukan kearifan lokal petani Maluku dan teknologi agri-tech masa depan, kami memastikan keberlanjutan pasokan pangan bagi dunia.
                    </p>
                    
                    <div className="pt-4 flex items-center gap-8">
                        <div>
                            <p className="text-3xl font-bold text-yareh-blue">100%</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Putra Daerah</p>
                        </div>
                        <div className="w-px h-12 bg-gray-200"></div>
                        <div>
                            <p className="text-3xl font-bold text-yareh-green">ISO</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">Standard Ready</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Traditional Farming CSS Visual */}
                        <div className="rounded-2xl shadow-lg mt-8 h-64 w-full flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c3f00, #a16207)' }}>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                            <div className="text-center relative z-10">
                                <div className="text-5xl mb-3">👨‍🌾</div>
                                <p className="text-amber-100 font-bold text-sm">Kearifan Lokal</p>
                                <p className="text-amber-200/70 text-xs">Petani Maluku</p>
                            </div>
                        </div>
                        {/* Modern Tech CSS Visual */}
                        <div className="rounded-2xl shadow-lg mb-8 h-64 w-full flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }}>
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
                            <div className="text-center relative z-10">
                                <div className="text-5xl mb-3">🛸</div>
                                <p className="text-blue-100 font-bold text-sm">Teknologi Modern</p>
                                <p className="text-blue-200/70 text-xs">NASA + Agri-Tech</p>
                            </div>
                        </div>
                    </div>
                    {/* Central badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100">
                            <i className="ph-fill ph-arrows-left-right text-3xl text-gray-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yareh-blue to-yareh-green rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">Y</div>
                        <span className="font-bold text-xl tracking-tight">PT ESE YAREHNASA</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Perusahaan Energi Pangan & Maritim yang berfokus pada ketahanan pangan berkelanjutan. Penyedia jahe terbaik dari Kepulauan Rempah.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yareh-blue transition-colors"><i className="ph-fill ph-instagram-logo"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yareh-blue transition-colors"><i className="ph-fill ph-linkedin-logo"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yareh-blue transition-colors"><i className="ph-fill ph-facebook-logo"></i></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Perusahaan</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="text-white font-medium transition-colors">Tentang Kami</a></li>
                        <li><a href="#" onClick={() => router.push('/sustainability')} className="hover:text-white transition-colors">Keberlanjutan</a></li>
                        <li><a href="#" onClick={() => router.push('/investor-relations')} className="hover:text-white transition-colors">Investor Relations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Produk & Pasar</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" onClick={() => router.push('/market-and-products')} className="hover:text-white transition-colors">Jahe Premium</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pasar Global</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Teknologi</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Katalog Ekspor</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start gap-3">
                            <i className="ph-fill ph-map-pin text-yareh-green mt-1"></i>
                            <span className="text-sm">Jl. Dr. J. Leimena Desa Riang Kec. Teluk Ambon, Maluku Indonesia</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ph-fill ph-envelope-simple text-yareh-green"></i>
                            <span className="text-sm">Yarehnasa@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ph-fill ph-whatsapp-logo text-yareh-green"></i>
                            <span className="text-sm">+62 821 2285 4195</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>&copy; 2024 PT ESE YAREHNASA. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
        </div>
      </>
    );
}
