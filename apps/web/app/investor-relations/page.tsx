'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function InvestorRelationsPage() {
  const router = useRouter();

  useEffect(() => {
    // Listen for edit mode messages from parent
    let editModeActive = false;
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === 'design:editMode') {
        editModeActive = e.data.enabled;
        console.log('[Design iframe] Edit mode:', editModeActive);
      }
    };
    window.addEventListener('message', handleMessage);

    // The real navigation function that uses postMessage
    const doNavigate = (screenId: string) => {
      // Block navigation when edit mode is on
      if (editModeActive) {
        console.log('[Design iframe] Navigation blocked - edit mode active');
        return;
      }
      console.log('[Design iframe] postMessage navigation to:', screenId);
      window.parent.postMessage({ type: 'design:navigate', screenId: screenId }, '*');
    };

    // Override navigateTo
    (window as any).navigateTo = doNavigate;

    // Event delegation: intercept clicks on elements with onclick containing navigateTo
    const handleClick = (e: MouseEvent) => {
      // Block navigation clicks when edit mode is on
      if (editModeActive) {
        let target = e.target as HTMLElement | null;
        while (target && target !== document.documentElement) {
          const onclick = target.getAttribute && target.getAttribute('onclick');
          if (onclick && onclick.includes('navigateTo')) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          target = target.parentElement;
        }
        return;
      }

      let target = e.target as HTMLElement | null;
      while (target && target !== document.documentElement) {
        const onclick = target.getAttribute && target.getAttribute('onclick');
        if (onclick && onclick.includes('navigateTo')) {
          // Extract screen ID from onclick="navigateTo('screenId')" or onclick="navigateTo(\"screenId\")"
          const match = onclick.match(/navigateTo\s*\(\s*['\"](\w+)['\"]/);;
          if (match && match[1]) {
            e.preventDefault();
            e.stopPropagation();
            doNavigate(match[1]);
            return;
          }
        }
        target = target.parentElement;
      }
    };
    document.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

    return (
      <>
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
          {/* 
      AESTHETIC DNA:
      Trend Core: Corporate Finance / FinTech
      Spice: Trust & Security
      Palette: Deep Ocean Blue (#1e40af) & Platinum + Gold Accents
      Type: Telma (Serif) + Satoshi (Sans)
      Page Type: Investor Relations (Conversion Focus)
    */}

    {/* Sticky Header */}
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" onClick={() => router.push('/')} className="flex items-center gap-3 group">
                <img src="https://app-cdn.appgen.com/75aafc38-9e40-4ef3-86e3-889cbfac686e/assets/uploaded_1771641369152_tdnht.jpeg" alt="PT ESE Yarehnasa Logo" className="w-12 h-12 object-contain" />
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none tracking-tight text-gray-900">PT ESE YAREHNASA</span>
                    <span className="text-xs text-yareh-green font-medium tracking-wider">MARITIM &amp; PANGAN</span>
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
                    Potensi &amp; Produk
                </button>
                <button onClick={() => router.push('/sustainability')} className="px-5 py-2 rounded-full text-gray-600 hover:text-yareh-green hover:bg-white/50 font-medium transition-all text-sm">
                    Keberlanjutan
                </button>
                <button className="px-5 py-2 rounded-full bg-white text-yareh-blue font-medium shadow-sm transition-all text-sm">
                    Investor
                </button>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
                <button className="hidden md:flex items-center gap-2 bg-yareh-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20">
                    <span>Investasi</span>
                    <i className="ph ph-arrow-right"></i>
                </button>
                <button className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <i className="ph ph-list text-2xl"></i>
                </button>
            </div>
        </div>
    </header>

    {/* Hero Section (Corporate Finance) */}
    <section className="relative h-[60vh] min-h-[500px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1e40af 100%)' }}></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 31px)' }}></div>
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #059669, transparent)', filter: 'blur(60px)' }}></div>
        <div className="absolute inset-0 z-10 hero-gradient"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-medium mb-6">
                    <i className="ph-fill ph-trend-up"></i>
                    <span>Pertumbuhan Berkelanjutan</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
                    Investasi Masa Depan <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">Pangan Global</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg font-light leading-relaxed mb-8">
                    Bergabunglah dengan PT ESE YAREHNASA dalam misi mensuplai jahe premium dunia. Model bisnis yang terukur, transparan, dan berdampak sosial tinggi.
                </p>

                <div className="flex gap-4">
                    <a href="#document-portal" className="px-6 py-3 bg-white text-yareh-blue rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg">
                        <i className="ph-bold ph-key"></i>
                        Akses Dokumen Rahasia
                    </a>
                </div>
            </div>
            
            {/* Hero Stats Visual */}
            <div className="hidden lg:block relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-blue-200 text-sm uppercase tracking-wider mb-1">Target Valuasi Ekspor</p>
                            <h3 className="text-4xl font-bold text-white">High Growth</h3>
                        </div>
                        <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                            <i className="ph-fill ph-chart-line-up text-2xl"></i>
                        </div>
                    </div>
                    
                    {/* Fake Chart */}
                    <div className="h-32 flex items-end justify-between gap-2 px-2">
                        <div className="w-full bg-blue-500/20 rounded-t h-[30%]"></div>
                        <div className="w-full bg-blue-500/30 rounded-t h-[45%]"></div>
                        <div className="w-full bg-blue-500/40 rounded-t h-[60%]"></div>
                        <div className="w-full bg-blue-500/60 rounded-t h-[75%]"></div>
                        <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-[95%] relative group">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-yareh-blue text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                2026 Projection
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-blue-200/60 mt-4 border-t border-white/10 pt-4">
                        <span>Q1 2024</span>
                        <span>Q4 2026 Est</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Investment Thesis / Why Invest */}
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-yareh-blue font-bold tracking-widest text-xs uppercase mb-2 block">Value Proposition</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Mengapa Berinvestasi Sekarang?</h2>
                <p className="text-gray-600 text-lg">
                    Kami berada di titik infleksi pertumbuhan. Dari pondasi yang kuat di 10 hektar, kami siap melesat menuju penguasaan pasar global.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Point 1 */}
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-yareh-blue transition-all group">
                    <div className="w-14 h-14 bg-blue-100 text-yareh-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-yareh-blue group-hover:text-white transition-colors">
                        <i className="ph-fill ph-strategy text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Model Bisnis Terukur</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Fokus B2B dengan kontrak jangka panjang menjamin cash flow yang stabil. Ekspansi lahan dilakukan bertahap (10Ha → 100Ha) untuk mitigasi risiko.
                    </p>
                </div>

                {/* Point 2 */}
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-yareh-green transition-all group">
                    <div className="w-14 h-14 bg-green-100 text-yareh-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-yareh-green group-hover:text-white transition-colors">
                        <i className="ph-fill ph-globe-stand text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Jaringan Global Established</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Infrastruktur ekspor sudah terbentuk melalui entitas di Amerika Serikat dan mitra di 5 negara. Jalur logistik &amp; pembayaran L/C terjamin.
                    </p>
                </div>

                {/* Point 3 */}
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-yareh-gold transition-all group">
                    <div className="w-14 h-14 bg-yellow-100 text-yareh-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-yareh-gold group-hover:text-white transition-colors">
                        <i className="ph-fill ph-chart-polar text-3xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">High Demand Commodity</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Permintaan jahe organik tumbuh 6.5% CAGR. Kami mengisi celah suplai premium yang tidak dapat dipenuhi oleh produsen konvensional.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Scalability Timeline/Roadmap */}
    <section className="py-24 bg-yareh-darkBlue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-blue-600/20 rounded-full blur-[128px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Peta Jalan Ekspansi</h2>
                    <p className="text-blue-200">Rencana strategis menuju 100 Hektar dan Dominasi Pasar.</p>
                </div>
            </div>

            <div className="relative border-l border-blue-800 ml-4 md:ml-8 space-y-12">
                {/* Step 1 */}
                <div className="relative pl-12 md:pl-16">
                    <div className="absolute left-[-5px] top-2 w-3 h-3 bg-yareh-green rounded-full border border-blue-900 ring-4 ring-blue-900"></div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <span className="text-yareh-green font-bold text-sm tracking-wide mb-1 block">FASE 1 - SAAT INI</span>
                        <h3 className="text-2xl font-bold mb-2">Validasi &amp; Fondasi (10 Ha)</h3>
                        <p className="text-gray-400 text-sm">
                            Optimalisasi produksi 300-400 ton/tahun. Sertifikasi GlobalG.A.P. dan pemantapan sistem manajemen digital.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-12 md:pl-16">
                    <div className="absolute left-[-5px] top-2 w-3 h-3 bg-blue-500 rounded-full border border-blue-900 ring-4 ring-blue-900"></div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <span className="text-blue-400 font-bold text-sm tracking-wide mb-1 block">FASE 2 - 2025</span>
                        <h3 className="text-2xl font-bold mb-2">Ekspansi Agresif (+40 Ha)</h3>
                        <p className="text-gray-400 text-sm">
                            Perluasan lahan ke 50 Ha total. Pembukaan hub distribusi di Rotterdam untuk pasar Eropa. Implementasi IoT skala penuh.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-12 md:pl-16">
                    <div className="absolute left-[-5px] top-2 w-3 h-3 bg-yareh-gold rounded-full border border-blue-900 ring-4 ring-blue-900"></div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <span className="text-yareh-gold font-bold text-sm tracking-wide mb-1 block">FASE 3 - 2026/27</span>
                        <h3 className="text-2xl font-bold mb-2">Market Leader (100 Ha)</h3>
                        <p className="text-gray-400 text-sm">
                            Total lahan 100 Ha dengan produksi 4.000 ton/tahun. IPO preparation dan pengembangan produk turunan bernilai tinggi (Oleoresin).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Document Portal (Form) */}
    <section id="document-portal" className="py-24 bg-gray-50 relative" >
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                
                {/* Left Side: Context */}
                <div className="lg:w-1/3 bg-gray-900 p-10 text-white relative flex flex-col justify-between">
                    <div className="absolute inset-0 bg-invest-pattern bg-cover bg-center opacity-10" ></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6">
                            <i className="ph-fill ph-lock-key text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold font-serif mb-4">Portal Investor</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Dokumen berikut bersifat rahasia dan hanya tersedia bagi investor terakreditasi atau mitra strategis yang telah diverifikasi.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <i className="ph-fill ph-file-pdf text-red-400 text-xl"></i>
                                <span>Pitch Deck (Investasi)</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <i className="ph-fill ph-file-pdf text-red-400 text-xl"></i>
                                <span>Rencana Bisnis 5 Tahun</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <i className="ph-fill ph-file-xls text-green-400 text-xl"></i>
                                <span>Proyeksi Finansial</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <p className="text-xs text-gray-500">
                            Dengan mengisi formulir ini, Anda menyetujui NDA (Non-Disclosure Agreement) standar kami.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-2/3 p-10 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Access</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yareh-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all form-input" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Nama Organisasi / Perusahaan</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yareh-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all form-input" placeholder="Ventures Capital Ltd" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Bisnis</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yareh-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all form-input" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Jenis Minat</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yareh-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all form-input bg-white">
                                    <option>Pilih Opsi</option>
                                    <option>Angel Investor</option>
                                    <option>Venture Capital</option>
                                    <option>Strategic Partner</option>
                                    <option>Media</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Pesan Tambahan</label>
                            <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yareh-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all form-input" placeholder="Ceritakan sedikit tentang ketertarikan Anda..."></textarea>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="nda" className="w-4 h-4 text-yareh-blue rounded border-gray-300 focus:ring-yareh-blue" />
                                <label htmlFor="nda" className="text-sm text-gray-500 cursor-pointer">Saya setuju dengan ketentuan privasi</label>
                            </div>
                            <button type="button" className="px-8 py-3 bg-yareh-blue text-white rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2">
                                Kirim Permintaan
                                <i className="ph-bold ph-paper-plane-right"></i>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

    {/* Direct Contact Info */}
    <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Kontak Langsung</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4 group">
                    <div className="w-16 h-16 bg-blue-50 text-yareh-blue rounded-full flex items-center justify-center text-2xl group-hover:bg-yareh-blue group-hover:text-white transition-all">
                        <i className="ph-fill ph-map-pin"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Kantor Pusat</h4>
                        <p className="text-sm text-gray-500">Jl. Dr. J. Leimena Desa Riang<br />Kec. Teluk Ambon, Maluku</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 group">
                    <a href="mailto:Yarehnasa@gmail.com" className="w-16 h-16 bg-blue-50 text-yareh-blue rounded-full flex items-center justify-center text-2xl group-hover:bg-yareh-blue group-hover:text-white transition-all">
                        <i className="ph-fill ph-envelope-simple"></i>
                    </a>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                        <p className="text-sm text-gray-500">Yarehnasa@gmail.com</p>
                        <p className="text-xs text-gray-400 mt-1">Respon dalam 24 Jam</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 group">
                    <a href="https://wa.me/6282122854195" target="_blank" className="w-16 h-16 bg-blue-50 text-yareh-blue rounded-full flex items-center justify-center text-2xl group-hover:bg-yareh-blue group-hover:text-white transition-all">
                        <i className="ph-fill ph-whatsapp-logo"></i>
                    </a>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
                        <p className="text-sm text-gray-500">+62 821 2285 4195</p>
                        <p className="text-xs text-gray-400 mt-1">Investor Relations Line</p>
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
                        Perusahaan Energi Pangan &amp; Maritim yang berfokus pada ketahanan pangan berkelanjutan. Penyedia jahe terbaik dari Kepulauan Rempah.
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
                        <li><a href="#" className="text-white font-medium transition-colors">Investor Relations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="font-bold text-lg mb-6">Produk &amp; Pasar</h4>
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
                <p>© 2024 PT ESE YAREHNASA. All rights reserved.</p>
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
