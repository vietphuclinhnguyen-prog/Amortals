import { PRODUCT_SPECS } from '../data/productData';
import { Award, Leaf, Package, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

export function SpecificationsSection() {
  const iconMap: Record<string, typeof Award> = {
    Award,
    Leaf,
    Package,
    Maximize2,
    ShieldCheck
  };

  return (
    <section id="specs" className="py-20 md:py-28 relative bg-[#0d0a14] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>4. THÔNG SỐ CHI TIẾT SẢN PHẨM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Bảng Thông Số Kỹ Thuật Chính Hãng
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Mỗi chi tiết đều được tinh chỉnh tỉ mỉ theo tiêu chuẩn xuất khẩu mỹ phẩm quốc tế.
          </p>
        </div>

        {/* Structured Luxury Specifications Table */}
        <div className="overflow-hidden rounded-3xl border border-[#c084fc]/25 bg-[#14111d] shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-10">
          <div className="bg-[#1c162b] px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d8b4fe]">
              BẢNG TIÊU CHUẨN SẢN PHẨM AMORTALS
            </span>
            <span className="text-[11px] font-medium text-zinc-400">
              Mã: AMT-SPONGE-PURPLE
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {PRODUCT_SPECS.map((spec, index) => {
              const IconComponent = iconMap[spec.iconName || 'Award'] || Award;
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:px-8 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3.5 w-full sm:w-1/3 mb-1 sm:mb-0">
                    <div className="w-8 h-8 rounded-xl bg-[#7e22ce]/25 flex items-center justify-center text-[#c084fc] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-300">
                      {spec.feature}
                    </span>
                  </div>

                  <div className="w-full sm:w-2/3 text-sm font-medium text-white sm:text-right pl-11 sm:pl-0">
                    <span className="text-[#f3e8ff]">
                      {spec.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Highlights / Quality Highlights Trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#161222] border border-white/5 text-center">
            <div className="text-xs text-[#c084fc] font-bold mb-1">CHẤT LIỆU CAO CẤP</div>
            <div className="text-xs text-zinc-300">Polyurethane thực vật kháng nấm mốc, an toàn cho da</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#161222] border border-white/5 text-center">
            <div className="text-xs text-[#c084fc] font-bold mb-1">KÍCH THƯỚC NỞ LÝ TƯỞNG</div>
            <div className="text-xs text-zinc-300">8.5 x 8 x 1.5 cm ôm khít lòng bàn tay và khuôn mặt</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#161222] border border-white/5 text-center">
            <div className="text-xs text-[#c084fc] font-bold mb-1">MỌI LOẠI DA TIN DÙNG</div>
            <div className="text-xs text-zinc-300">Đặc biệt an toàn cho da nhạy cảm & da đang treatment</div>
          </div>
        </div>

      </div>
    </section>
  );
}
