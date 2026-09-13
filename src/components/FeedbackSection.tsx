import { REVIEWS_DATA } from '../data/productData';
import { Star, CheckCircle2, Heart, MessageSquareHeart, Sparkles } from 'lucide-react';

export function FeedbackSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 relative bg-[#0b0a11] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#7e22ce]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>6. FEEDBACK & ĐÁNH GIÁ THỰC TẾ (SOCIAL PROOF)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Khách Hàng Nói Gì Về{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#f472b6]">
              Bông Rửa Mặt Amortals?
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Hơn 15.000 tín đồ skincare và các cô nàng da nhạy cảm đã tin dùng và yêu thích mỗi ngày.
          </p>
        </div>

        {/* Rating Metrics Bar */}
        <div className="mb-12 p-6 rounded-3xl bg-[#14111d] border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#c084fc]">4.9 / 5.0</div>
            <div className="flex items-center justify-center text-amber-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs text-zinc-400 mt-1">Điểm hài lòng trung bình</div>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">99.4%</div>
            <div className="text-xs text-zinc-400 mt-2">Cảm nhận bông cực mềm, 0% rát da</div>
          </div>

          <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d8b4fe]">15.000+</div>
            <div className="text-xs text-zinc-400 mt-2">Sản phẩm đã trao tay khách hàng</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#14111d] border border-[#c084fc]/15 hover:border-[#c084fc]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#c084fc]/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">{review.author}</span>
                        <span className="flex items-center text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3 mr-0.5" /> Đã mua hàng
                        </span>
                      </div>
                      <div className="text-xs text-[#c084fc] font-medium">
                        Loại da: {review.skinType}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-zinc-200 text-sm sm:text-[15px] leading-relaxed italic bg-[#0e0c16] p-4 rounded-2xl border border-white/5">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Review Footer Tag */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="text-[#d8b4fe] font-medium">{review.tag}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Customer Experience Gallery with Sponge */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171224] via-[#141021] to-[#171224] border border-[#c084fc]/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                  Góc Check-In Cùng Bông Bọt Biển Amortals
                </h3>
                <p className="text-xs text-zinc-400">Hình ảnh thực tế từ khách hàng trải nghiệm chăm sóc da</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-medium self-start sm:self-auto">
              <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Được yêu thích nhất trên mạng xã hội</span>
            </div>
          </div>

          {/* Large, high-impact photo gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 group bg-[#09080e] shadow-lg">
              <img
                src="/images/amortals/regenerated_image_1789299994706.webp"
                alt="Bông rửa mặt Amortals giọt nước tím pastel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white">Bông giọt nước êm ái</span>
                <span className="text-[11px] text-zinc-300">Set 3 bông êm ái</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 group bg-[#09080e] shadow-lg">
              <img
                src="/images/amortals/regenerated_image_1789299992887.png"
                alt="Full box set 3 bông bọt biển Amortals 15mm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white">Đóng hộp sang trọng</span>
                <span className="text-[11px] text-zinc-300">Hộp nguyên seal chính hãng</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 group bg-[#09080e] shadow-lg">
              <img
                src="/images/amortals/mieng_rua_mat_new.jpg"
                alt="Quai xỏ ngón tay chắc chắn và cấu trúc xốp bọt biển"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white">Quai xỏ ngón tay chắc chắn</span>
                <span className="text-[11px] text-zinc-300">Cầm chắc tay, không trơn tuột</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 group bg-[#09080e] shadow-lg">
              <img
                src="/images/amortals/regenerated_image_1789300002737.jpg"
                alt="Chất liệu bọt biển nở mềm khi ngậm nước"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-semibold text-white">Chạm da êm như mây</span>
                <span className="text-[11px] text-zinc-300">Nở to mềm mịn khi ướt</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
