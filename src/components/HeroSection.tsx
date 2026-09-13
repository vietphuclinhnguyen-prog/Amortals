import { HERO_DATA } from '../data/productData';
import { SpongeVisual } from './SpongeVisual';
import { Droplets, Sparkles, Hand, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenOrderModal: (comboId?: 'single' | 'combo3') => void;
}

export function HeroSection({ onOpenOrderModal }: HeroSectionProps) {
  const iconMap: Record<string, typeof Droplets> = {
    Droplets,
    Sparkles,
    Hand
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient background glow & luxury aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] bg-gradient-to-b from-[#7e22ce]/20 via-[#c084fc]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201833] border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-6 shadow-[0_0_15px_rgba(192,132,252,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
              <span>BÔNG RỬA MẶT BỌT BIỂN AMORTALS CHÍNH HÃNG</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white leading-[1.2] tracking-tight mb-6">
              Rửa Mặt Sạch Sâu Chuẩn Spa –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#f0abfc]">
                Êm Mịn Cho Mọi Làn Da
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {HERO_DATA.subtitle}
            </p>

            {/* 3 Quick Highlights (a, b, c) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {HERO_DATA.highlights.map((hl) => {
                const IconComponent = iconMap[hl.icon] || Sparkles;
                return (
                  <div
                    key={hl.id}
                    className="group flex flex-col justify-between p-3.5 rounded-2xl bg-[#14111d]/90 border border-[#c084fc]/15 hover:border-[#c084fc]/40 transition-all hover:bg-[#1c162a] shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-lg bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc]">
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide uppercase">
                          {hl.id}. {hl.title}
                        </span>
                      </div>
                      <p className="text-[12px] text-zinc-400 leading-normal mb-3">
                        {hl.description}
                      </p>
                    </div>

                    {hl.image && (
                      <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#c084fc]/40 transition-all bg-[#09080e]/80">
                        <img
                          src={hl.image}
                          alt={hl.imageAlt || hl.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09080e]/90 via-transparent to-transparent flex items-end p-2 pointer-events-none">
                          <span className="text-[10px] font-medium text-[#e9d5ff] backdrop-blur-md bg-[#120f1c]/85 px-2 py-0.5 rounded-md border border-[#c084fc]/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]"></span>
                            {hl.imageAlt || 'Amortals'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => onOpenOrderModal('combo3')}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] active:scale-98 transition-all"
              >
                <span>{HERO_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="flex items-center justify-center px-6 py-4 rounded-full text-xs font-semibold text-zinc-300 hover:text-white bg-[#14111d] border border-white/10 hover:border-white/20 transition-all text-center"
              >
                Khám phá công nghệ bọt biển
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/5 w-full">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Khách hàng Amortals"
                    className="w-7 h-7 rounded-full border-2 border-[#09080e] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Khách hàng Amortals"
                    className="w-7 h-7 rounded-full border-2 border-[#09080e] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80"
                    alt="Khách hàng Amortals"
                    className="w-7 h-7 rounded-full border-2 border-[#09080e] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">15.000+ tín đồ skincare tin dùng</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#c084fc]" />
                <span>Bảo hành đổi trả chính hãng 7 ngày</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Product Visual & Real-Life Photo Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* The Custom Interactive Sponge Visualizer */}
            <div className="relative w-full flex flex-col items-center p-6 rounded-3xl bg-gradient-to-b from-[#171324]/80 to-[#100c19]/90 border border-[#c084fc]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-[11px] font-medium text-[#d8b4fe]">
                <span>Tím Pastel Tinh Tế</span>
              </div>

              <SpongeVisual />

              {/* Real Product Context Thumbnail Grid */}
              <div className="w-full mt-6 pt-4 border-t border-white/5">
                <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 text-center mb-3">
                  Hình ảnh thực tế & không gian sử dụng
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square">
                    <img
                      src="/images/amortals/regenerated_image_1789299992887.png"
                      alt="Set 3 bông Amortals 15mm kèm hộp"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-zinc-200 font-medium leading-none">Hộp 3 miếng 15mm</span>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square">
                    <img
                      src="/images/amortals/regenerated_image_1789299994706.webp"
                      alt="Bông giọt nước tím & xếp tầng Amortals"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-zinc-200 font-medium leading-none">Bọt biển tự nhiên</span>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-square">
                    <img
                      src="/images/amortals/mieng_rua_mat_new.jpg"
                      alt="Cận cảnh quai xỏ ngón tay và cấu trúc xốp bọt biển"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[10px] text-zinc-200 font-medium leading-none">Quai xỏ êm ái</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
