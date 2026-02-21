'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function SustainabilityPage() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState('ID');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageSwitcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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

    return (
      <>
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
          {/* 
      AESTHETIC DNA:
      Trend Core: Eco-Conscious Corporate
      Spice: Organic Shapes + Data Visualization
      Palette: Dominant Emerald Green (#059669) & Deep Blue Accents
      Type: Telma (Serif) + Satoshi (Sans)
      Page Type: Sustainability / Impact
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
                <button onClick={() => router.push('/market-and-products')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    Potensi & Produk
                </button>
                <button className="px-5 py-2 rounded-full bg-white text-yareh-green font-medium shadow-sm transition-all text-sm">
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

    {/* Hero Section (Nature/Eco Focus) */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #065f46 100%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #10b981, transparent)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-0 right-20 w-60 h-60 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #059669, transparent)', filter: 'blur(50px)' }}></div>
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-200 text-sm font-medium mb-6">
                <i className="ph-fill ph-leaf"></i>
                <span>Komitmen Bumi Hijau</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                Pertanian Regeneratif <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">Untuk Masa Depan</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed mb-8">
                Kami menerapkan metode <i>Zero Deforestation</i> dan memadukan teknologi pemantauan satelit untuk memastikan setiap rimpang jahe ditanam tanpa melukai hutan Maluku.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-yareh-green hover:bg-emerald-600 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-green-900/20">
                    <i className="ph-fill ph-plant"></i>
                    Lihat Dampak Sosial
                </button>
                <button className="px-6 py-3 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-xl font-bold transition-all flex items-center gap-2">
                    Laporan ESG 2024
                </button>
            </div>
        </div>
    </section>

    {/* Core Sustainability Pillars */}
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-yareh-green font-bold tracking-widest text-xs uppercase mb-2 block">Pilar Keberlanjutan</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Merawat Alam, Memberdayakan Sesama</h2>
                <p className="text-gray-600">
                    Strategi keberlanjutan kami dibangun di atas tiga fondasi utama yang saling menguatkan.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div className="group relative bg-green-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-200/50 rounded-full blur-3xl group-hover:bg-green-300/50 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-yareh-green shadow-sm mb-6">
                            <i className="ph-fill ph-tree text-3xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Zero Deforestation</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Kami tidak membuka lahan hutan baru. Ekspansi dilakukan pada lahan tidur produktif dengan metode tumpangsari yang menjaga biodiversitas hutan Maluku.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-yareh-green"></i> Pemetaan Hutan Presisi
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-yareh-green"></i> Konservasi Air Tanah
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pillar 2 */}
                <div className="group relative bg-blue-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl group-hover:bg-blue-300/50 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-yareh-blue shadow-sm mb-6">
                            <i className="ph-fill ph-users-three text-3xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Dampak Sosial</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Meningkatkan taraf hidup petani lokal melalui kemitraan yang adil, pelatihan teknik pertanian modern, dan akses pasar global langsung tanpa perantara merugikan.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-yareh-blue"></i> Peningkatan Income 3x
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-yareh-blue"></i> Asuransi Petani
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Pillar 3 */}
                <div className="group relative bg-orange-50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl group-hover:bg-orange-300/50 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm mb-6">
                            <i className="ph-fill ph-recycle text-3xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Circular Economy</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Pemanfaatan limbah pertanian untuk kompos organik alami. Mengurangi ketergantungan pada pupuk kimia hingga 0% dalam jangka panjang.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-orange-600"></i> Pupuk Hayati
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="ph-fill ph-check-circle text-orange-600"></i> Waste-to-Energy
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Real Farm Activities Section */}\n    <section className="py-24 bg-gray-50">\n        <div className="max-w-7xl mx-auto px-6">\n            <div className="text-center max-w-3xl mx-auto mb-16">\n                <span className="text-yareh-green font-bold tracking-widest text-xs uppercase mb-2 block">Aksi Nyata di Lapangan</span>\n                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Dari Lahan Kami di Maluku</h2>\n                <p className="text-gray-600">\n                    Dokumentasi langsung dari perkebunan kami menunjukkan komitmen nyata terhadap praktik pertanian berkelanjutan dan pemberdayaan petani lokal.\n                </p>\n            </div>\n\n            {/* Photo Grid */}\n            <div className="grid md:grid-cols-2 gap-6\">\n                {/* Photo 1 */}\n                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300\">\n                    <img src=\"https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771644661235_vki11h.jpeg\" \n                         alt=\"Petani lokal bekerja di sistem irigasi perkebunan\" \n                         className=\"w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500\" />\n                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                        <div className="absolute bottom-6 left-6 text-white\">\n                            <p className="text-sm font-medium text-green-300 mb-1">Sistem Irigasi Modern</p>\n                            <p className="text-lg font-bold">Efisiensi Air & Konservasi</p>\n                        </div>\n                    </div>\n                </div>\n\n                {/* Photo 2 */}\n                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300\">\n                    <img src=\"https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771644661265_lnxb8j.jpeg\" \n                         alt=\"Petani tersenyum di perkebunan dengan sistem tanam modern\" \n                         className=\"w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500\" />\n                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                        <div className="absolute bottom-6 left-6 text-white\">\n                            <p className="text-sm font-medium text-blue-300 mb-1">Petani Bahagia</p>\n                            <p className="text-lg font-bold">Kesejahteraan Terjamin</p>\n                        </div>\n                    </div>\n                </div>\n\n                {/* Photo 3 */}\n                <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300\">\n                    <img src=\"https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771644661296_pn4ohh.jpeg\" \n                         alt=\"Tim petani bekerja bersama di lahan perkebunan\" \n                         className=\"w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500\" />\n                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                        <div className=\"absolute bottom-6 left-6 text-white\">\n                            <p className=\"text-sm font-medium text-orange-300 mb-1\">Gotong Royong</p>\n                            <p className=\"text-lg font-bold\">Kemitraan yang Kuat</p>\n                        </div>\n                    </div>\n                </div>\n\n                {/* Photo 4 */}\n                <div className=\"group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300\">\n                    <img src=\"https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771644661453_50lx8l.jpeg\" \n                         alt=\"Pemandangan luas perkebunan dengan sistem irigasi modern\" \n                         className=\"w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500\" />\n                    <div className=\"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                        <div className=\"absolute bottom-6 left-6 text-white\">\n                            <p className=\"text-sm font-medium text-green-300 mb-1\">Skala Perkebunan</p>\n                            <p className=\"text-lg font-bold\">Ekspansi Berkelanjutan</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            {/* Impact Stats */}\n            <div className=\"grid md:grid-cols-4 gap-6 mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100\">\n                <div className=\"text-center\">\n                    <div className=\"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-yareh-green mx-auto mb-3\">\n                        <i className=\"ph-fill ph-tree text-2xl\"></i>\n                    </div>\n                    <p className=\"text-3xl font-bold text-gray-900 mb-1\">100+</p>\n                    <p className=\"text-sm text-gray-600\">Hektar Lahan Produktif</p>\n                </div>\n                <div className=\"text-center\">\n                    <div className=\"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-yareh-blue mx-auto mb-3\">\n                        <i className=\"ph-fill ph-users-three text-2xl\"></i>\n                    </div>\n                    <p className=\"text-3xl font-bold text-gray-900 mb-1\">300+</p>\n                    <p className=\"text-sm text-gray-600\">Keluarga Petani Mitra</p>\n                </div>\n                <div className=\"text-center\">\n                    <div className=\"w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-3\">\n                        <i className=\"ph-fill ph-drop text-2xl\"></i>\n                    </div>\n                    <p className=\"text-3xl font-bold text-gray-900 mb-1\">40%</p>\n                    <p className=\"text-sm text-gray-600\">Penghematan Air Irigasi</p>\n                </div>\n                <div className=\"text-center\">\n                    <div className=\"w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-3\">\n                        <i className=\"ph-fill ph-leaf text-2xl\"></i>\n                    </div>\n                    <p className=\"text-3xl font-bold text-gray-900 mb-1\">0%</p>\n                    <p className=\"text-sm text-gray-600\">Deforestasi Baru</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    {/* Social Impact Section (Community) */}
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        {/* Background Elements - CSS Only */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #10b981, transparent)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    {/* CSS Farmer Community Visual */}
                    <div className="rounded-2xl shadow-2xl border border-gray-700 leaf-shape overflow-hidden h-80" style={{ background: 'linear-gradient(160deg, #0a4a2e 0%, #064e3b 50%, #047857 100%)' }}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="h-full flex items-center justify-center relative z-10">
                            <div className="text-center px-6">
                                <div className="flex justify-center gap-4 mb-4">
                                    <div className="text-4xl">👨‍🌾</div>
                                    <div className="text-4xl">👩‍🌾</div>
                                    <div className="text-4xl">👨‍🌾</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                                    <p className="text-white font-bold text-lg">Petani Mitra Maluku</p>
                                    <p className="text-green-200 text-sm mt-1">Pemberdayaan & Kesejahteraan Bersama</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-yareh-green p-6 rounded-2xl shadow-xl max-w-xs">
                        <p className="text-3xl font-bold mb-1">300+</p>
                        <p className="text-sm text-green-100">Keluarga petani yang akan diberdayakan dalam program ekspansi 100 Ha.</p>
                    </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 text-yareh-green font-bold uppercase tracking-wider text-xs">
                        <span className="w-2 h-2 rounded-full bg-yareh-green animate-pulse"></span>
                        Social Impact
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
                        Dari Hatusua Untuk <br /> Kesejahteraan Rakyat
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Di YAREHNASA, kami percaya bahwa produk terbaik dihasilkan oleh petani yang bahagia. Kami memotong rantai pasok yang panjang dan tidak efisien, memberikan harga beli yang jauh di atas rata-rata pasar kepada petani mitra.
                    </p>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700">
                        <div>
                            <p className="text-3xl font-bold text-white mb-1">3x</p>
                            <p className="text-sm text-gray-500">Peningkatan Pendapatan Petani Mitra</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white mb-1">100%</p>
                            <p className="text-sm text-gray-500">Akses Pendidikan Teknik Tani</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Technology & Traceability (Compliance) */}
    <section className="py-24 bg-yareh-lightGreen">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Teknologi Pelindung Alam</h2>
                    <p className="text-gray-600">
                        Kami adalah Agri-tech. Integrasi data satelit dan pencatatan digital memastikan klaim keberlanjutan kami dapat diverifikasi.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Feature 1 */}
                    <div className="text-center md:text-left space-y-4 pt-8 md:pt-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto md:mx-0">
                            <i className="ph-fill ph-satellite text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">NASA Integration</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pemantauan cuaca mikro dan kelembapan tanah presisi menggunakan data satelit untuk efisiensi air dan mitigasi risiko gagal panen.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center md:text-left space-y-4 pt-8 md:pt-0 md:pl-12">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-yareh-green mx-auto md:mx-0">
                            <i className="ph-fill ph-qr-code text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Digital Traceability</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Aplikasi YAREHNASA mencatat riwayat setiap petak lahan. Konsumen dapat melacak asal usul jahe hingga ke koordinat kebun.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center md:text-left space-y-4 pt-8 md:pt-0 md:pl-12">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto md:mx-0">
                            <i className="ph-fill ph-certificate text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Standard Kepatuhan</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Otomatisasi pencatatan untuk memenuhi standar ISO 22000 dan GlobalG.A.P. menjamin keamanan pangan dan kelestarian.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    {/* Call to Action */}
    <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-yareh-green mx-auto mb-8 animate-bounce">
                <i className="ph-fill ph-leaf text-4xl"></i>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Investasi yang Hijau & Berkelanjutan</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Dukung misi kami untuk menghijaukan kembali lahan kritis Maluku sambil memberdayakan ekonomi lokal.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => router.push('/investor-relations')} className="w-full sm:w-auto px-8 py-4 bg-yareh-green text-white rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2">
                    <i className="ph-fill ph-chart-line-up"></i>
                    Lihat Prospektus Investasi
                </button>
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
                        <li><a href="#" className="text-white font-medium transition-colors">Keberlanjutan</a></li>
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
