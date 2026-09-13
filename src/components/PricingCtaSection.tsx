import { COMBOS, COMMITMENTS } from '../data/productData';
import { ShieldCheck, RotateCcw, Truck, Check, Sparkles, Gift, ArrowRight, Flame } from 'lucide-react';

interface PricingCtaSectionProps {
  onOpenOrderModal: (comboId: 'single' | 'combo3') => void;
}

export function PricingCtaSection({ onOpenOrderModal }: PricingCtaSectionProps) {
  const commitmentIcons: Record<string, typeof ShieldCheck> = {
    ShieldCheck,
    RotateCcw,
    Truck
  };

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#09080e] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-purple-900/20 via-[#c084fc]/15 to-purple-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>7. ƯU ĐÃI & KÊU GỌI HÀNH ĐỘNG CUỐI TRANG (FINAL CTA)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-4">
            Chọn Gói Ưu Đãi Phù Hợp Cho{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#f472b6]">
              Làn Da Của Bạn
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ưu đãi đặc biệt giảm tới 35% trong tuần lễ ra mắt. Đặt mua ngay hôm nay để nhận quà tặng độc quyền!
          </p>
        </div>

        {/* 3 Golden Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {COMMITMENTS.map((item, index) => {
            const IconComponent = commitmentIcons[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#14111d] border border-white/10 hover:border-[#c084fc]/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Option a: Mua 1 miếng: Giá dùng thử */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-[#14111d] border border-white/10 hover:border-[#c084fc]/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-zinc-300 bg-white/5 border border-white/10">
                  a. Mua 1 miếng: Giá dùng thử
                </span>
                <span className="text-xs text-zinc-400">Tiết kiệm 30.000đ</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Hộp 1 Miếng Đơn Lẻ</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Phù hợp cho những ai muốn trải nghiệm cảm giác mềm mại khác biệt của bọt biển tự nhiên Amortals.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/5">
                <span className="text-4xl font-extrabold text-white">69.000đ</span>
                <span className="text-sm text-zinc-500 line-through">99.000đ</span>
                <span className="text-xs font-bold text-[#c084fc] px-2 py-0.5 rounded-md bg-[#7e22ce]/20">
                  -30%
                </span>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {COMBOS[0].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[#c084fc] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onOpenOrderModal('single')}
              className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#221b33] hover:bg-[#2e2345] border border-[#c084fc]/30 transition-all flex items-center justify-center gap-2"
            >
              <span>ĐẶT MUA 1 MIẾNG DÙNG THỬ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Option b: Mua Combo 3 miếng: Tặng kèm móc dán treo tường + Freeship toàn quốc */}
          <div className="relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#1c142e] to-[#140e24] border-2 border-[#c084fc] shadow-[0_0_40px_rgba(192,132,252,0.25)]">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] shadow-lg">
              <Flame className="w-3.5 h-3.5 fill-[#09080e]" />
              <span>BÁN CHẠY NHẤT • KHUYÊN DÙNG</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#d8b4fe] bg-[#7e22ce]/30 border border-[#c084fc]/30">
                  b. Mua Combo 3 miếng: Ưu đãi trọn bộ
                </span>
                <span className="text-xs font-bold text-emerald-400">Tiết kiệm 90.000đ</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Combo 3 Miếng Amortals Tím Pastel</h3>
              
              {/* Exclusive Gift Badge */}
              <div className="p-3 rounded-2xl bg-[#7e22ce]/20 border border-[#c084fc]/40 mb-6 flex items-start gap-2.5">
                <Gift className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#d8b4fe]">QUÀ TẶNG KÈM ĐẶC BIỆT:</div>
                  <div className="text-xs text-zinc-200">
                    Tặng kèm 01 Móc dán treo tường thông minh + Freeship toàn quốc!
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/10">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e8ff] to-[#c084fc]">
                  159.000đ
                </span>
                <span className="text-sm text-zinc-500 line-through">249.000đ</span>
                <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                  TIẾT KIỆM 36%
                </span>
              </div>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {COMBOS[1].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#c084fc]/20 flex items-center justify-center text-[#c084fc] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={i < 2 ? "font-semibold text-white" : ""}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              id="combo-cta-button"
              type="button"
              onClick={() => onOpenOrderModal('combo3')}
              className="w-full py-4 rounded-full text-sm font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(192,132,252,0.4)]"
            >
              <span>ĐẶT MUA COMBO 3 MIẾNG (FREESHIP + QUÀ)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
