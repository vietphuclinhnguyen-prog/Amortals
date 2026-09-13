import { useState } from 'react';
import { motion } from 'motion/react';
import { Droplets, Sparkles, Hand, Wind } from 'lucide-react';

interface SpongeVisualProps {
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  className?: string;
}

export function SpongeVisual({
  size = 'lg',
  showDetails = true,
  className = ''
}: SpongeVisualProps) {
  const [isWet, setIsWet] = useState(true);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const scaleMultiplier = isWet ? 1.08 : 0.88;

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Interactive Wet/Dry State Switcher */}
      <div className="flex items-center gap-2 p-1 mb-6 bg-[#161322]/80 backdrop-blur-md border border-[#9d72dc]/20 rounded-full shadow-lg z-20">
        <button
          type="button"
          onClick={() => setIsWet(false)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            !isWet
              ? 'bg-[#c084fc] text-[#09080e] shadow-md font-semibold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Trạng thái khô ban đầu
        </button>
        <button
          type="button"
          onClick={() => setIsWet(true)}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            isWet
              ? 'bg-[#c084fc] text-[#09080e] shadow-md font-semibold'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Droplets className="w-3.5 h-3.5" />
          Ngậm nước nở mềm (+30%)
        </button>
      </div>

      {/* Main Visual Stage */}
      <div className="relative w-72 h-80 sm:w-88 sm:h-96 flex items-center justify-center">
        {/* Soft atmospheric ambient glow */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.28) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%)',
            opacity: isWet ? 1 : 0.6
          }}
        />

        {/* Floating foam bubbles */}
        {isWet && (
          <>
            <motion.div
              animate={{ y: [-4, 4, -4], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-white/20 to-white/70 backdrop-blur-sm border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.4)] pointer-events-none z-10"
            />
            <motion.div
              animate={{ y: [3, -5, 3], opacity: [0.6, 0.85, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-10 -left-4 w-9 h-9 rounded-full bg-gradient-to-tr from-purple-200/20 to-white/60 backdrop-blur-sm border border-white/30 pointer-events-none z-10"
            />
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 -left-6 w-6 h-6 rounded-full bg-white/40 backdrop-blur-sm pointer-events-none z-10"
            />
          </>
        )}

        {/* The Real Sponge Product Visual (Ảnh 2) */}
        <motion.div
          animate={{ scale: scaleMultiplier }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative z-10 filter drop-shadow-[0_25px_50px_rgba(168,85,247,0.35)]"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-[#c084fc]/30 shadow-2xl bg-[#141020]/90 group">
            <img
              src="/images/amortals/hero_sponge_stack.jpg"
              alt="Bông rửa mặt bọt biển tự nhiên Amortals giọt nước tím và bộ xếp tầng êm ái"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Ambient water gloss highlight when wet */}
            {isWet && (
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9333ea]/15 via-transparent to-white/10 pointer-events-none" />
            )}

            {/* Interactive zone indicator overlay if hovering feature cards */}
            {activeZone && (
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px] flex items-center justify-center p-4 transition-all pointer-events-none">
                <div className="px-4 py-2 rounded-2xl bg-[#1c152e]/95 border border-[#c084fc]/60 text-center shadow-xl">
                  {activeZone === 'tip' && (
                    <div className="text-xs font-semibold text-[#e9d5ff]">
                      📍 Đầu nhọn giọt nước: Ôm sát khóe cánh mũi & mí mắt
                    </div>
                  )}
                  {activeZone === 'body' && (
                    <div className="text-xs font-semibold text-[#e9d5ff]">
                      📍 Thân tròn rộng: Bọt biển tự nhiên lướt êm ái má & trán
                    </div>
                  )}
                  {activeZone === 'strap' && (
                    <div className="text-xs font-semibold text-[#e9d5ff]">
                      📍 Quai xỏ AMORTALS: Luồn 2-3 ngón tay chắc chắn, không tuột
                    </div>
                  )}
                  {activeZone === 'cord' && (
                    <div className="text-xs font-semibold text-[#e9d5ff]">
                      📍 Dây treo lụa đính kèm: Dễ dàng treo ráo nước, kháng khuẩn
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Subtle bottom info bar */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#09080e]/95 via-[#09080e]/60 to-transparent flex items-center justify-between pointer-events-none">
              <span className="text-[11px] font-semibold text-[#e9d5ff] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
                Amortals Chính Hãng
              </span>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition-colors ${
                isWet
                  ? 'text-emerald-300 bg-emerald-950/80 border-emerald-500/30'
                  : 'text-zinc-400 bg-zinc-900/80 border-zinc-700/40'
              }`}>
                {isWet ? 'Nở mềm +30%' : 'Dạng khô ban đầu'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Badges under the Sponge */}
      {showDetails && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 max-w-xl w-full px-2">
          <div
            onMouseEnter={() => setActiveZone('tip')}
            onMouseLeave={() => setActiveZone(null)}
            className={`p-2.5 rounded-2xl border transition-all text-center ${
              activeZone === 'tip'
                ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                : 'bg-[#15121f]/90 border-white/5 hover:border-white/15'
            }`}
          >
            <Sparkles className="w-4 h-4 mx-auto mb-1 text-[#c084fc]" />
            <div className="text-xs font-semibold text-zinc-100">Đầu Nhọn Giọt Nước</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Khóe mũi & hốc mắt</div>
          </div>

          <div
            onMouseEnter={() => setActiveZone('body')}
            onMouseLeave={() => setActiveZone(null)}
            className={`p-2.5 rounded-2xl border transition-all text-center ${
              activeZone === 'body'
                ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                : 'bg-[#15121f]/90 border-white/5 hover:border-white/15'
            }`}
          >
            <Droplets className="w-4 h-4 mx-auto mb-1 text-[#c084fc]" />
            <div className="text-xs font-semibold text-zinc-100">Thân Tròn Rộng</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Làm sạch má & trán</div>
          </div>

          <div
            onMouseEnter={() => setActiveZone('strap')}
            onMouseLeave={() => setActiveZone(null)}
            className={`p-2.5 rounded-2xl border transition-all text-center ${
              activeZone === 'strap'
                ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                : 'bg-[#15121f]/90 border-white/5 hover:border-white/15'
            }`}
          >
            <Hand className="w-4 h-4 mx-auto mb-1 text-[#c084fc]" />
            <div className="text-xs font-semibold text-zinc-100">Quai Xỏ Chắc Chắn</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Cố định không tuột</div>
          </div>

          <div
            onMouseEnter={() => setActiveZone('cord')}
            onMouseLeave={() => setActiveZone(null)}
            className={`p-2.5 rounded-2xl border transition-all text-center ${
              activeZone === 'cord'
                ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                : 'bg-[#15121f]/90 border-white/5 hover:border-white/15'
            }`}
          >
            <Wind className="w-4 h-4 mx-auto mb-1 text-[#c084fc]" />
            <div className="text-xs font-semibold text-zinc-100">Dây Treo Kháng Khuẩn</div>
            <div className="text-[11px] text-zinc-400 mt-0.5">Thoáng khí nhanh khô</div>
          </div>
        </div>
      )}
    </div>
  );
}
