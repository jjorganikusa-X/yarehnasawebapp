'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './lib/useLanguage';

export default function HomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

    return (
      <>
        <div className="bg-gray-50 text-gray-800 font-sans antialiased" suppressHydrationWarning>
          {/* 
      AESTHETIC DNA:
      Trend Core: Corporate Agri-Tech
      Spice: Heritage Typography + Modern Gradients
      Palette: Deep Ocean Blue (#1e40af) & Emerald Green (#059669)
      Type: Telma (Serif) + Satoshi (Sans)
      Page Type: Landing
    */}

    {/* Sticky Header */}
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b border-gray-100 shadow-sm bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
                <img src="https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771641369152_tdnht.jpeg" alt="PT ESE Yarehnasa Logo" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none tracking-tight text-gray-900">PT ESE YAREHNASA</span>
                    <span className="text-xs text-yareh-green font-medium tracking-wider">MARITIM & PANGAN</span>
                </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200">
                <button className="px-5 py-2.5 rounded-full bg-white text-yareh-blue font-semibold shadow-sm transition-all text-sm">
                    {t('nav.home')}
                </button>
                <button onClick={() => router.push('/about-us')} className="px-5 py-2.5 rounded-full text-gray-700 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    {t('nav.about')}
                </button>
                <button onClick={() => router.push('/market-and-products')} className="px-5 py-2.5 rounded-full text-gray-700 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    {t('nav.products')}
                </button>
                <button onClick={() => router.push('/sustainability')} className="px-5 py-2.5 rounded-full text-gray-700 hover:text-yareh-green hover:bg-white/50 font-medium transition-all text-sm">
                    {t('nav.sustainability')}
                </button>
                <button onClick={() => router.push('/investor-relations')} className="px-5 py-2.5 rounded-full text-gray-700 hover:text-yareh-blue hover:bg-white/50 font-medium transition-all text-sm">
                    {t('nav.investor')}
                </button>
            </nav>

            {/* Language Switcher & CTA */}
            <div className="flex items-center gap-4">
                {mounted && <LanguageSwitcher />}
                
                <button onClick={() => router.push('/investor-relations')} className="hidden md:flex items-center gap-2 bg-yareh-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20 font-semibold">
                    <span>{t('nav.investment')}</span>
                    <i className="ph ph-arrow-right"></i>
                </button>
                <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <i className="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
    </header>

    {/* Hero Section */}
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
        {/* CSS Gradient Background - No External Image Needed */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0d142d 0%, #1e3a6e 40%, #0a4a2e 100%)' }}></div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #059669 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 40%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(13, 20, 45, 0.5) 0%, transparent 100%)' }}></div>
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full z-0 opacity-20" style={{ background: 'radial-gradient(circle, #059669, transparent)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full z-0 opacity-15" style={{ background: 'radial-gradient(circle, #1e40af, transparent)', filter: 'blur(80px)' }}></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pb-20">
            <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                    <i className="ph-fill ph-plant text-yareh-green"></i>
                    <span>{t('home.tagline')}</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] text-glow">
                    {t('home.heroTitle1')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">{t('home.heroTitle2')}</span>
                </h1>
                
                <p className="text-xl text-gray-200 max-w-xl font-light leading-relaxed">
                    {t('home.heroDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-yareh-green to-emerald-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        <i className="ph ph-download-simple text-xl"></i>
                        {t('home.downloadBrochure')}
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        {t('home.contactSales')}
                    </button>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm italic mb-2">{t('home.bibleVerse')}</p>
                    <div className="flex items-center gap-2 text-yareh-green font-serif font-bold">
                        <i className="ph-fill ph-book-bookmark"></i>
                        <span>Amsal 22:1</span>
                    </div>
                </div>
            </div>

            {/* Hero Cards/Stats */}
            <div className="hidden lg:grid grid-cols-2 gap-6 opacity-90">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <i className="ph-fill ph-chart-line-up text-4xl text-yareh-green mb-4"></i>
                    <h3 className="text-3xl font-bold mb-1">40 Ton<span className="text-sm font-normal text-white/60">/Ha</span></h3>
                    <p className="text-sm text-gray-300">{t('home.statsProduction')}</p>
                </div>
                <div className="bg-gradient-to-br from-yareh-blue/80 to-yareh-blue/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white mt-12 transform hover:scale-105 transition-all duration-300">
                    <i className="ph-fill ph-globe-hemisphere-east text-4xl text-blue-300 mb-4"></i>
                    <h3 className="text-3xl font-bold mb-1">5 Negara</h3>
                    <p className="text-sm text-gray-200">{t('home.statsExport')}</p>
                </div>
                <div className="col-span-2 bg-white/95 backdrop-blur-md p-6 rounded-2xl text-gray-900 flex items-center gap-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-yareh-green">
                    <div className="p-3 bg-green-100 rounded-full text-yareh-green">
                        <i className="ph-fill ph-leaf text-2xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Pertanian Regeneratif</h4>
                        <p className="text-sm text-gray-600">{t('home.statsRegenerative')}</p>
                    </div>
                    <div className="ml-auto">
                        <i className="ph-bold ph-arrow-right text-gray-400"></i>
                    </div>
                </div>
            </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <i className="ph ph-caret-down text-xl"></i>
        </div>
    </section>

    {/* Marquee/Stats Bar */}
    <div className="bg-yareh-darkBlue py-6 border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 text-white/80">
            <div className="flex items-center gap-3">
                <i className="ph-fill ph-certificate text-2xl text-yareh-green"></i>
                <span className="text-sm font-medium tracking-wide">ISO 22000 PREPARATION</span>
            </div>
            <div className="flex items-center gap-3">
                <i className="ph-fill ph-globe text-2xl text-yareh-green"></i>
                <span className="text-sm font-medium tracking-wide">GLOBALG.A.P. STANDARDS</span>
            </div>
            <div className="flex items-center gap-3">
                <i className="ph-fill ph-satellite text-2xl text-yareh-green"></i>
                <span className="text-sm font-medium tracking-wide">NASA CLIMATE INTEGRATION</span>
            </div>
            <div className="flex items-center gap-3">
                <i className="ph-fill ph-users-three text-2xl text-yareh-green"></i>
                <span className="text-sm font-medium tracking-wide">B2B PARTNERSHIPS</span>
            </div>
        </div>
    </div>

    {/* About & Heritage Section */}
    <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-yareh-blue to-yareh-green rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* CSS Visual: Maluku Illustration */}
                        <div className="w-full h-[500px] flex items-center justify-center relative" style={{ background: 'linear-gradient(160deg, #0a4a2e 0%, #1a6b4a 40%, #0d3d6e 100%)' }}>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4ade80 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(5,150,105,0.4), transparent)' }}></div>
                            <div className="relative text-center px-8 z-10">
                                <div className="text-8xl mb-4">🌿</div>
                                <div className="flex justify-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center text-3xl border-2 border-green-400/40">🏝️</div>
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/30 flex items-center justify-center text-3xl border-2 border-emerald-400/40">🌋</div>
                                    <div className="w-16 h-16 rounded-full bg-teal-500/30 flex items-center justify-center text-3xl border-2 border-teal-400/40">🌊</div>
                                </div>
                                <p className="text-green-200 font-bold text-lg">Hatusua • SBB • Maluku</p>
                                <p className="text-green-300/70 text-sm mt-1">Tanah Vulkanis Subur Indonesia</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-serif italic text-lg">&quot;Pusat rempah dunia yang historis&quot;</p>
                            <p className="text-white/70 text-sm">Hatusua, Kabupaten SBB - Maluku</p>
                        </div>
                    </div>
                </div>
                
                <div className="lg:col-span-7 space-y-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-yareh-blue text-xs font-bold tracking-widest uppercase">
                        {t('home.aboutHeading')}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                        {t('home.aboutTitle1')} <br />
                        <span className="text-yareh-blue">{t('home.aboutTitle2')}</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {t('home.aboutDescription')}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-8 pt-4">
                        <div className="pl-6 border-l-2 border-yareh-green">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('home.visionTitle')}</h4>
                            <p className="text-gray-600 text-sm">{t('home.visionDescription')}</p>
                        </div>
                        <div className="pl-6 border-l-2 border-yareh-blue">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('home.integrityTitle')}</h4>
                            <p className="text-gray-600 text-sm">{t('home.integrityDescription')}</p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button onClick={() => router.push('/about-us')} className="group flex items-center gap-2 text-yareh-blue font-bold hover:gap-4 transition-all">
                            <span>{t('home.readStory')}</span>
                            <i className="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Key Pillars Grid */}
    <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">{t('home.innovationTitle')}</h2>
                <p className="text-gray-600">
                    {t('home.innovationDescription')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div onClick={() => router.push('/sustainability')} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-yareh-green mb-6 group-hover:bg-yareh-green group-hover:text-white transition-colors">
                            <i className="ph-fill ph-plant text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Pertanian Regeneratif</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            Metode tanam tanpa merusak hutan (Zero Deforestation) yang menjaga kesuburan tanah vulkanis secara alami.
                        </p>
                        <span className="text-yareh-green text-sm font-bold flex items-center gap-1">
                            Pelajari Sustainability <i className="ph-bold ph-caret-right"></i>
                        </span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-yareh-blue mb-6 group-hover:bg-yareh-blue group-hover:text-white transition-colors">
                            <i className="ph-fill ph-qr-code text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Teknologi & Traceability</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            Manajemen operasional via aplikasi, integrasi satelit NASA, dan kepatuhan ISO 22000 yang transparan.
                        </p>
                        <span className="text-yareh-blue text-sm font-bold flex items-center gap-1">
                            Lihat Teknologi <i className="ph-bold ph-caret-right"></i>
                        </span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                            <i className="ph-fill ph-airplane-tilt text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Akses Pasar Global</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            Jaringan ekspor ke 5 negara dengan entitas C-Corp di USA sebagai hub distribusi internasional.
                        </p>
                        <span className="text-yellow-600 text-sm font-bold flex items-center gap-1">
                            Jaringan Kami <i className="ph-bold ph-caret-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Global Map Section (Visual Representation) */}
    <section className="py-24 bg-yareh-darkBlue text-white overflow-hidden relative">
        {/* Abstract map dots pattern bg */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        LIVE NETWORK STATUS
                    </div>
                    <h2 className="text-4xl font-serif font-bold">Terhubung ke 5 Negara Tujuan Ekspor</h2>
                    <p className="text-blue-100/80 leading-relaxed">
                        Dengan sistem logistik end-to-end yang aman dan dukungan Letter of Credit (L/C), kami memastikan Jahe YAREHNASA sampai ke mitra global dengan kualitas terjaga.
                    </p>
                    
                    <ul className="space-y-4 pt-4">
                        <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                <span className="font-bold text-xs">USA</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Amerika Serikat</h4>
                                <p className="text-xs text-gray-400">Hub C-Corp & Distribusi Utama</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                                <span className="font-bold text-xs">JPN</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Jepang</h4>
                                <p className="text-xs text-gray-400">Pasar Premium Asia</p>
                            </div>
                        </li>
                        {/* More countries represented by text below */}
                    </ul>
                    
                    <div className="flex gap-3 text-sm text-gray-400 pt-2">
                        <span>+ Rotterdam (NL)</span> • <span>Singapura</span> • <span>Jerman</span>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    {/* Stylized Globe/Route Graphic */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-dashed border-blue-400/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            {/* CSS Globe Replacement */}
                            <div className="w-64 h-64 rounded-full shadow-2xl shadow-blue-500/20 flex items-center justify-center relative overflow-hidden" style={{ background: 'radial-gradient(circle at 30% 30%, #1e40af, #172554)' }}>
                                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.15) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(255,255,255,0.1) 18px, rgba(255,255,255,0.1) 19px)' }}></div>
                                <div className="text-center text-white relative z-10">
                                    <div className="text-6xl mb-2">🌏</div>
                                    <p className="text-xs font-bold tracking-widest text-blue-200">GLOBAL NETWORK</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Location Cards */}
                        <div className="absolute top-10 right-0 bg-white text-gray-900 p-3 rounded-lg shadow-lg text-xs font-bold animate-bounce" style={{ animationDuration: '3s' }}>
                            USA HQ
                        </div>
                        <div className="absolute bottom-20 left-0 bg-white text-gray-900 p-3 rounded-lg shadow-lg text-xs font-bold animate-bounce" style={{ animationDuration: '4s' }}>
                            Maluku Plantation
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Product Spotlight */}
    <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-stone-100 to-orange-50 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-orange-100">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <span className="text-orange-600 font-bold tracking-widest text-xs uppercase mb-2 block">Produk Unggulan</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Jahe Premium YAREHNASA</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Tumbuh di tanah vulkanis yang kaya mineral, jahe kami memiliki profil rasa yang kuat dan kandungan minyak atsiri yang tinggi. Diproses dengan standar kebersihan tertinggi untuk pasar internasional.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <i className="ph-fill ph-check-circle text-orange-500"></i>
                            <span className="text-gray-800">Tanah Vulkanis Maluku</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ph-fill ph-check-circle text-orange-500"></i>
                            <span className="text-gray-800">100% Organik & Traceable</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ph-fill ph-check-circle text-orange-500"></i>
                            <span className="text-gray-800">High Essential Oil Content</span>
                        </li>
                    </ul>

                    <button onClick={() => router.push('/market-and-products')} className="px-8 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                        Lihat Spesifikasi
                    </button>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                    {/* CSS Ginger Product Visual */}
                    <div className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-sm h-[400px] flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c3f00 0%, #d97706 50%, #a16207 100%)' }}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #fef3c7, transparent 60%), radial-gradient(circle at 70% 30%, #d97706, transparent 50%)' }}></div>
                        <div className="text-center relative z-10 p-8">
                            <div className="text-8xl mb-4 drop-shadow-lg">🫚</div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                                <p className="text-white font-bold text-xl font-serif">Jahe Gajah Premium</p>
                                <p className="text-amber-100 text-sm mt-1">Hatusua, Maluku — Grade A+</p>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">100% Organik</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">Traceable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section (Investor Focus) */}
    <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-yareh-blue mb-6">Bergabung dalam Revolusi Pangan</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Dapatkan akses ke dokumen rahasia, pitch deck, dan proyeksi finansial PT ESE (YAREHNASA). Mari tumbuh bersama.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => router.push('/investor-relations')} className="w-full sm:w-auto px-8 py-4 bg-yareh-blue text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2">
                    <i className="ph-fill ph-files"></i>
                    Akses Portal Investor
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:border-yareh-blue hover:text-yareh-blue transition-all flex items-center justify-center gap-2">
                    <i className="ph-bold ph-whatsapp-logo"></i>
                    Hubungi via WhatsApp
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
                    <h4 className="font-bold text-lg mb-6">{t('footer.company')}</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" onClick={() => router.push('/about-us')} className="hover:text-white transition-colors">{t('nav.about')}</a></li>
                        <li><a href="#" onClick={() => router.push('/sustainability')} className="hover:text-white transition-colors">{t('nav.sustainability')}</a></li>
                        <li><a href="#" onClick={() => router.push('/investor-relations')} className="hover:text-white transition-colors">{t('nav.investor')}</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-bold text-lg mb-6">{t('footer.products')}</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" onClick={() => router.push('/market-and-products')} className="hover:text-white transition-colors">Jahe Premium</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pasar Global</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Teknologi</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Katalog Ekspor</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-lg mb-6">{t('footer.contact')}</h4>
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
                <p>{t('footer.rights')}</p>
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
