import { USAGE_STEPS } from '../data/productData';
import { Droplets, Cloud, Sparkles, SunMedium, Lightbulb } from 'lucide-react';

export function InstructionsSection() {
  const iconMap: Record<string, typeof Droplets> = {
    Droplets,
    Cloud,
    Sparkles,
    SunMedium
  };

  return (
    <section id="instructions" className="py-20 md:py-28 relative bg-[#09080e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5. HƯỚNG DẪN SỬ DỤNG & BẢO QUẢN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Quy Trình 4 Bước Rửa Mặt{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#f472b6]">
              Chuẩn Spa Tại Nhà
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Chỉ mất 2 phút mỗi ngày để làn da được làm sạch sâu từ gốc chân lông mà vẫn bảo toàn hàng rào ẩm tự nhiên.
          </p>
        </div>

        {/* 4 Steps Grid with Connected Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle horizontal connecting line on large screens */}
          <div className="hidden lg:block absolute top-14 left-16 right-16 h-[2px] bg-gradient-to-r from-[#7e22ce]/40 via-[#c084fc]/40 to-[#7e22ce]/40 -z-0 pointer-events-none" />

          {USAGE_STEPS.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Sparkles;
            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#14111d] border border-white/10 hover:border-[#c084fc]/40 transition-all duration-300 group hover:-translate-y-1 z-10 shadow-lg"
              >
                <div>
                  {/* Top Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#7e22ce]/30 border border-[#c084fc]/30 flex items-center justify-center text-[#c084fc] group-hover:scale-110 group-hover:bg-[#c084fc] group-hover:text-[#09080e] transition-all shadow-[0_0_15px_rgba(192,132,252,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#1e172d] border border-purple-500/20 text-[#d8b4fe]">
                      BƯỚC {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Name */}
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#d8b4fe] transition-colors">
                    {step.name}
                  </h3>
                  
                  <div className="text-xs font-semibold text-[#c084fc] mb-3 uppercase tracking-wider">
                    {step.action}
                  </div>

                  {/* Step Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Skincare Pro-tip */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-2 bg-[#0d0b14]/50 -mx-3 -mb-3 p-3 rounded-2xl">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-zinc-400 leading-snug">
                    {step.tip}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cleaning & Maintenance Advice Card */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#171224] to-[#120f1c] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c084fc]/20 flex items-center justify-center text-[#c084fc] shrink-0">
              <SunMedium className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Mẹo phơi khô kháng khuẩn</h4>
              <p className="text-xs text-zinc-400">
                Luôn treo bông ở nơi thoáng gió, tránh ngâm bông trong bồn nước đọng để bọt biển giữ độ đàn hồi bền lâu nhất.
              </p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full text-xs font-medium text-[#d8b4fe] bg-[#7e22ce]/20 border border-[#c084fc]/30 shrink-0">
            Tuổi thọ khuyến nghị: 2 - 3 tháng/miếng
          </span>
        </div>

      </div>
    </section>
  );
}
