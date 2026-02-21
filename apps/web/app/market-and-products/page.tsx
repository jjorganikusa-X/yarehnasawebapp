'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function MarketAndProductsPage() {
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
      Spice: Heritage Typography + Data Visualization
      Palette: Deep Ocean Blue (#1e40af) & Emerald Green (#059669) + Gold/Orange Accents
      Type: Telma (Serif) + Satoshi (Sans)
      Page Type: Market & Products
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
                <button onClick={() => router.push('/about-us')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    Tentang Kami
                </button>
                <button className="px-5 py-2 rounded-full bg-white text-yareh-blue font-medium shadow-sm transition-all text-sm">
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

    {/* Hero Section (Product Focus) */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #1c0a00 0%, #7c3f00 40%, #0d142d 100%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #d97706 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #d97706, transparent)', filter: 'blur(60px)' }}></div>
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-200 text-sm font-medium mb-6">
                    <i className="ph-fill ph-seal-check"></i>
                    <span>Premium Export Quality</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                    Kualitas Emas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yareh-gold">Tanah Maluku</span>
                </h1>
                
                <p className="text-xl text-gray-200 max-w-lg font-light leading-relaxed mb-8">
                    Menghadirkan jahe varietas unggul dengan kandungan minyak atsiri tinggi (High Essential Oil), diproses untuk memenuhi standar pasar global.
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-yareh-gold hover:bg-orange-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20">
                        <i className="ph ph-download-simple"></i>
                        Katalog Produk (PDF)
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* Product Details Section */}
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                
                {/* Visual */}
                <div className="lg:col-span-5 relative group">
                    <div className="absolute inset-0 bg-yareh-gold rounded-3xl rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-500"></div>
                    <div className="relative bg-white rounded-3xl p-2 border border-gray-100 shadow-2xl">
                        {/* CSS Ginger Product Visual */}
                        <div className="rounded-2xl w-full aspect-[4/5] flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #7c3f00 0%, #d97706 50%, #92400e 100%)' }}>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #fef3c7, transparent 60%)' }}></div>
                            <div className="text-center relative z-10 p-8">
                                <div className="text-8xl mb-6 drop-shadow-lg">🫚</div>
                                <div className="space-y-3">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30 text-left">
                                        <div className="flex justify-between items-center">
                                            <span className="text-amber-100 text-xs">Minyak Atsiri</span>
                                            <span className="text-white font-bold text-sm">3.5%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                                            <div className="h-full bg-amber-300 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30 text-left">
                                        <div className="flex justify-between items-center">
                                            <span className="text-amber-100 text-xs">Kemurnian</span>
                                            <span className="text-white font-bold text-sm">99.9%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/20 rounded-full mt-1 overflow-hidden">
                                            <div className="h-full bg-green-300 rounded-full" style={{ width: '99%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Varietas</p>
                                    <p className="text-lg font-serif font-bold text-gray-900">Jahe Gajah Premium</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-yareh-gold">A+</p>
                                    <p className="text-xs text-gray-400">Grade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specs */}
                <div className="lg:col-span-7 space-y-10">
                    <div>
                        <span className="text-yareh-gold font-bold tracking-widest text-xs uppercase mb-2 block">Spesifikasi Produk</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Keunggulan Rimpang Vulkanis</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Tumbuh di tanah vulkanis Maluku memberikan profil rasa yang unik dan kandungan nutrisi yang lebih padat. Jahe YAREHNASA dipanen pada usia optimal (8-10 bulan) untuk memastikan kualitas serat dan aroma terbaik.
                        </p>
                    </div>

                    {/* Progress Bars / Data Viz */}
                    <div className="space-y-6">
                        {/* Spec 1 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-gray-700">Kandungan Minyak Atsiri (Essential Oil)</span>
                                <span className="font-bold text-yareh-gold">2.8% - 3.5%</span>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-yareh-gold to-orange-500 rounded-full progress-bar-fill" style={{ width: '95%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Standar Pasar Global: 1.5% - 2.5%</p>
                        </div>
                        
                        {/* Spec 2 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-gray-700">Kebersihan & Sortir (Purity)</span>
                                <span className="font-bold text-yareh-green">99.9%</span>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-yareh-green to-emerald-400 rounded-full progress-bar-fill" style={{ width: '99.9%' }}></div>
                            </div>
                        </div>

                        {/* Spec 3 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-bold text-gray-700">Umur Panen (Harvest Age)</span>
                                <span className="font-bold text-yareh-blue">9-10 Bulan</span>
                            </div>
                            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-yareh-blue rounded-full progress-bar-fill" style={{ width: '90%' }}></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">Optimal untuk serat & pedas (oleoresin)</p>
                        </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <i className="ph-fill ph-drop text-2xl text-blue-500 mb-2"></i>
                            <p className="text-xs text-gray-500 uppercase">Moisture</p>
                            <p className="font-bold text-gray-900">< 12%</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <i className="ph-fill ph-ruler text-2xl text-purple-500 mb-2"></i>
                            <p className="text-xs text-gray-500 uppercase">Size</p>
                            <p className="font-bold text-gray-900">150g+</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <i className="ph-fill ph-shield-check text-2xl text-green-500 mb-2"></i>
                            <p className="text-xs text-gray-500 uppercase">Organic</p>
                            <p className="font-bold text-gray-900">Yes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Market Potential (Data for Investors) */}
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yareh-blue/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yareh-gold/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <span className="text-yareh-gold font-bold tracking-widest text-xs uppercase mb-2 block">Prospek Pasar</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">Potensi Pasar Global</h2>
                    <p className="text-gray-400 text-lg">
                        Permintaan jahe dunia terus meningkat didorong oleh kesadaran kesehatan pasca-pandemi dan tren produk organik.
                    </p>
                </div>
                <button onClick={() => router.push('/investor-relations')} className="px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 rounded-xl transition-all font-bold text-sm flex items-center gap-2">
                    <i className="ph-fill ph-chart-line-up"></i>
                    Lihat Proyeksi Keuangan
                </button>
            </div>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Stat Card 1 (Large) */}
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-20">
                        <i className="ph-fill ph-globe-hemisphere-west text-9xl"></i>
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Global Ginger Market Size</h3>
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-5xl lg:text-6xl font-bold text-white">$6.8 Billion</span>
                            <span className="text-green-400 flex items-center gap-1 font-bold bg-green-400/10 px-2 py-1 rounded text-sm">
                                <i className="ph-bold ph-trend-up"></i> +6.5% CAGR
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Diproyeksikan mencapai nilai pasar yang signifikan pada tahun 2028. Pertumbuhan terbesar terjadi di sektor farmasi dan makanan & minuman fungsional.
                        </p>
                        
                        {/* Simple visual chart representation */}
                        <div className="mt-8 flex items-end gap-2 h-24 w-full max-w-sm">
                            <div className="w-full bg-blue-500/30 hover:bg-blue-500 rounded-t-sm h-[40%] transition-all"></div>
                            <div className="w-full bg-blue-500/40 hover:bg-blue-500 rounded-t-sm h-[55%] transition-all"></div>
                            <div className="w-full bg-blue-500/50 hover:bg-blue-500 rounded-t-sm h-[65%] transition-all"></div>
                            <div className="w-full bg-blue-500/60 hover:bg-blue-500 rounded-t-sm h-[80%] transition-all"></div>
                            <div className="w-full bg-blue-500/80 hover:bg-blue-500 rounded-t-sm h-[90%] transition-all"></div>
                            <div className="w-full bg-blue-500 hover:bg-blue-500 rounded-t-sm h-full transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                        </div>
                        <div className="flex justify-between w-full max-w-sm text-xs text-gray-500 mt-2">
                            <span>2021</span>
                            <span>2026 (Est)</span>
                        </div>
                    </div>
                </div>

                {/* Stat Card 2 (Vertical) */}
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yareh-gold transition-colors">
                    <div className="w-12 h-12 bg-yareh-gold/20 text-yareh-gold rounded-xl flex items-center justify-center mb-6">
                        <i className="ph-fill ph-heartbeat text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Tren Kesehatan</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Konsumen beralih ke 'Functional Food'. Jahe dicari untuk properti anti-inflamasi dan immune-booster alami.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <i className="ph-fill ph-check text-green-400"></i> Herbal Supplements
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <i className="ph-fill ph-check text-green-400"></i> Organic Beverages
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <i className="ph-fill ph-check text-green-400"></i> Pharmaceutical
                        </li>
                    </ul>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yareh-blue transition-colors">
                    <div className="w-12 h-12 bg-yareh-blue/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                        <i className="ph-fill ph-handshake text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Permintaan B2B</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        Kebutuhan industri untuk bahan baku jahe berkualitas tinggi yang stabil dan traceable.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-700">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Mitra Global</span>
                            <span className="font-bold text-white text-lg">5+ Negara</span>
                        </div>
                    </div>
                </div>

                {/* Stat Card 4 */}
                <div className="lg:col-span-2 bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Mengapa Memilih YAREHNASA?</h3>
                        <p className="text-gray-400 text-sm mb-0">
                            Kami menjawab tantangan pasar global: <strong>Suplai tidak konsisten</strong> dan <strong>Kualitas rendah</strong>. YAREHNASA menjamin kontinuitas suplai 400 Ton/tahun dengan kualitas premium.
                        </p>
                    </div>
                    <div>
                        <button onClick={() => router.push('/sustainability')} className="whitespace-nowrap px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                            Lihat Solusi Kami
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* Product Application (Usage) */}
    <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Aplikasi Produk Industri</h2>
            
            <div className="flex flex-wrap justify-center gap-8">
                {/* Icon 1 */}
                <div className="flex flex-col items-center gap-4 w-40 group">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i className="ph-fill ph-pill text-4xl"></i>
                    </div>
                    <span className="font-bold text-gray-700">Farmasi</span>
                </div>
                
                {/* Icon 2 */}
                <div className="flex flex-col items-center gap-4 w-40 group">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i className="ph-fill ph-coffee text-4xl"></i>
                    </div>
                    <span className="font-bold text-gray-700">Minuman</span>
                </div>

                {/* Icon 3 */}
                <div className="flex flex-col items-center gap-4 w-40 group">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i className="ph-fill ph-drop-half-bottom text-4xl"></i>
                    </div>
                    <span className="font-bold text-gray-700">Minyak Atsiri</span>
                </div>

                {/* Icon 4 */}
                <div className="flex flex-col items-center gap-4 w-40 group">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i className="ph-fill ph-bowl-food text-4xl"></i>
                    </div>
                    <span className="font-bold text-gray-700">Kuliner</span>
                </div>

                {/* Icon 5 */}
                <div className="flex flex-col items-center gap-4 w-40 group">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                        <i className="ph-fill ph-sparkle text-4xl"></i>
                    </div>
                    <span className="font-bold text-gray-700">Kosmetik</span>
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
                        <li><a href="#" onClick={() => router.push('/about-us')} className="hover:text-white transition-colors">Tentang Kami</a></li>
                        <li><a href="#" onClick={() => router.push('/sustainability')} className="hover:text-white transition-colors">Keberlanjutan</a></li>
                        <li><a href="#" onClick={() => router.push('/investor-relations')} className="hover:text-white transition-colors">Investor Relations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Produk & Pasar</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="text-white font-medium transition-colors">Jahe Premium</a></li>
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
