import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ShoppingBag, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (comboId?: 'single' | 'combo3') => void;
}

export function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Vấn đề', href: '#pain-points' },
    { label: 'Giải pháp', href: '#solutions' },
    { label: 'Thông số', href: '#specs' },
    { label: 'Hướng dẫn', href: '#instructions' },
    { label: 'Đánh giá', href: '#reviews' },
    { label: 'Ưu đãi', href: '#pricing' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09080e]/90 backdrop-blur-md border-b border-[#c084fc]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#7e22ce] via-[#c084fc] to-[#f3e8ff] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(192,132,252,0.4)]">
              <div className="w-full h-full bg-[#0d0b14] rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#c084fc] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.2em] text-white group-hover:text-[#c084fc] transition-colors">
                AMORTALS
              </span>
              <span className="text-[10px] tracking-wider text-[#c084fc]/80 -mt-1 font-medium">
                NATURAL CLEANSING SPONGE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#14111d]/70 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] text-[#c084fc] font-medium px-2.5 py-1 rounded-full bg-[#7e22ce]/15 border border-[#c084fc]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c084fc]" />
              <span>Chính Hãng 100%</span>
            </div>
            <button
              id="navbar-buy-button"
              type="button"
              onClick={() => onOpenOrderModal('combo3')}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(192,132,252,0.35)]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#09080e]" />
              <span>MUA COMBO 3 MIẾNG</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenOrderModal('combo3')}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-[#09080e] bg-[#c084fc]"
            >
              Mua Ngay
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 px-4 pb-4 pt-2 bg-[#120f1b] border-b border-purple-900/30">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-200 hover:bg-[#201a30] hover:text-[#c084fc] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5 mt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal('combo3');
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] shadow-lg"
              >
                MUA NGAY - ƯU ĐÃI COMBO 3 MIẾNG
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
