import { PAIN_POINTS } from '../data/productData';
import { AlertCircle, XCircle, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';

export function PainPointsSection() {
  return (
    <section id="pain-points" className="py-20 md:py-28 relative border-t border-white/5 bg-[#0b0a11]">
      {/* Background soft ambient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300 mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>2. VẤN ĐỀ CỦA KHÁCH HÀNG (PAIN POINTS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Tại Sao Da Bạn Dù Rửa Mặt Hàng Ngày{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-purple-300 to-[#c084fc]">
              Vẫn Bít Tắc & Dễ Kích Ứng?
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Nhiều thói quen làm sạch quen thuộc tưởng chừng vô hại lại chính là nguyên nhân làm tổn thương màng ẩm bảo vệ và sinh mụn dai dẳng.
          </p>
        </div>

        {/* 3 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between p-7 rounded-3xl bg-[#14111d] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Number & Warning Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-purple-400/80 px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/30">
                    VẤN ĐỀ 0{index + 1}
                  </span>
                  <div className="w-9 h-9 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <XCircle className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#d8b4fe] transition-colors">
                  {item.title}
                </h3>

                {/* Main Problem Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Consequence Box */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-400/90 shrink-0 mt-0.5" />
                <span className="text-xs text-rose-300/80 leading-snug font-medium">
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Comparison Table / Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#171224] via-[#1a1429] to-[#171224] border border-[#c084fc]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#c084fc]/20 border border-[#c084fc]/40 flex items-center justify-center text-[#c084fc] shrink-0 shadow-[0_0_20px_rgba(192,132,252,0.3)]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                  Đã đến lúc nâng cấp bước làm sạch da mỗi ngày
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Làn da mỏng manh xứng đáng được nâng niu bằng giải pháp bọt biển vi sợi tự nhiên Amortals – Êm dịu như nhung, sạch sâu chuẩn spa.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-[#d8b4fe] px-3.5 py-2 rounded-xl bg-[#7e22ce]/20 border border-[#c084fc]/30 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#c084fc]" />
                <span>Không chà xát – Không gây rát</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
