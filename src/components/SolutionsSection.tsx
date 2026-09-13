import { SOLUTIONS } from '../data/productData';
import { Sparkles, CheckCircle2, Feather, Droplet, Layers, Wind, Eye, Compass, ShieldCheck } from 'lucide-react';

interface SolutionsSectionProps {
  onOpenOrderModal: (comboId?: 'single' | 'combo3') => void;
}

export function SolutionsSection({ onOpenOrderModal }: SolutionsSectionProps) {
  return (
    <section id="solutions" className="py-20 md:py-28 relative bg-[#09080e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7e22ce]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#c084fc]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3. GIẢI PHÁP TỪ BÔNG RỬA MẶT AMORTALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-4 leading-snug">
            Sự Đột Phá Trong Từng Điểm Chạm –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#f472b6]">
              Làm Sạch Dịu Nhẹ Tuyệt Đối
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Kết hợp hoàn hảo giữa vật liệu thực vật bọt biển tự nhiên và thiết kế công thái học hình giọt nước, mang đến trải nghiệm nâng niu làn da chuẩn spa ngay tại nhà.
          </p>
        </div>

        {/* 4 Solution Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Chất liệu xốp bọt biển vi sợi */}
          <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-[#14111d] border border-purple-900/30 hover:border-[#c084fc]/40 transition-all group">
            <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative border border-white/10">
              <img
                src="/images/amortals/regenerated_image_1789300002737.jpg"
                alt="Chất liệu xốp bọt biển vi sợi tự nhiên"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#09080e]/80 backdrop-blur-md border border-[#c084fc]/30 text-[10px] font-bold text-[#d8b4fe]">
                Mềm như mây
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c084fc] mb-2 uppercase tracking-wider">
                  <Feather className="w-4 h-4" />
                  <span>Chất liệu vi sợi thực vật</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d8b4fe] transition-colors">
                  Chất liệu xốp bọt biển vi sợi
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Khi gặp nước lập tức nở mềm như đám mây, triệt tiêu ma sát gây tổn thương biểu bì. Lướt êm ái trên da mà không để lại vết tấy đỏ hay rát bỏng.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400 font-medium pt-3 border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#c084fc]" />
                <span>An toàn tuyệt đối cho da nhạy cảm & treatment</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Khả năng tạo bọt vượt trội */}
          <div className="flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-[#14111d] border border-purple-900/30 hover:border-[#c084fc]/40 transition-all group">
            <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0 relative border border-white/10">
              <img
                src="/images/amortals/regenerated_image_1789300004105.jpg"
                alt="Tạo bọt bông xốp dày đặc"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#09080e]/80 backdrop-blur-md border border-[#c084fc]/30 text-[10px] font-bold text-[#d8b4fe]">
                Bọt mịn x2
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c084fc] mb-2 uppercase tracking-wider">
                  <Droplet className="w-4 h-4" />
                  <span>Cấu trúc vi bọt khí</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d8b4fe] transition-colors">
                  Khả năng tạo bọt vượt trội
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Biến một lượng nhỏ sữa rửa mặt thành lớp bọt bông xốp dày đặc, tăng hiệu quả làm sạch gấp 2 lần. Bọt len sâu cuốn trôi bã nhờn mà không tốn sữa rửa mặt.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400 font-medium pt-3 border-t border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#c084fc]" />
                <span>Tiết kiệm 50% lượng sữa rửa mặt hàng ngày</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Thiết kế công thái học (a, b, c) - Spanning 2 columns or detailed card */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#181326] to-[#120f1c] border border-[#c084fc]/25 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c084fc] mb-1.5 uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Đột phá công thái học</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Thiết kế công thái học – Tinh tế từng đường nét
                </h3>
              </div>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#09080e] bg-[#c084fc] shrink-0">
                Form Giọt Nước Thông Minh
              </span>
            </div>

            {/* Unified Large Card with 3 ergonomic highlights */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0c17]/95 border border-[#c084fc]/20 hover:border-[#c084fc]/40 transition-all shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* Ý 1: Chạm trọn góc khuất */}
                <div className="flex flex-col justify-between pt-4 md:pt-0 md:pr-6 first:pt-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Chạm trọn góc khuất
                      </h4>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed pl-10">
                      Dáng giọt nước uyển chuyển ôm khít mọi đường nét, từ khóe mũi đến vùng gò má, trán.
                    </p>
                  </div>
                </div>

                {/* Ý 2: Êm ái như mây */}
                <div className="flex flex-col justify-between pt-6 md:pt-0 md:px-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                        <Feather className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Êm ái như mây
                      </h4>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed pl-10">
                      Chất xốp nở mềm khi ngậm nước, nâng niu làn da và nhẹ nhàng cuốn trôi tạp chất.
                    </p>
                  </div>
                </div>

                {/* Ý 3: Trợ lực tự nhiên */}
                <div className="flex flex-col justify-between pt-6 md:pt-0 md:pl-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        Trợ lực tự nhiên
                      </h4>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed pl-10">
                      Thiết kế công thái học giúp phân tán lực đều đặn, cho thao tác làm sạch trơn tru và thư thái.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Pillar 4: Kèm dây treo tiện lợi */}
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#14111d] border border-purple-900/30 hover:border-[#c084fc]/40 transition-all">
            <div className="w-full md:w-56 h-48 rounded-2xl overflow-hidden shrink-0 relative border border-white/10">
              <img
                src="/images/amortals/regenerated_image_1789300008827.jpg"
                alt="Kèm dây treo tiện lợi kháng khuẩn nhanh khô"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#09080e]/80 backdrop-blur-md border border-[#c084fc]/30 text-[10px] font-bold text-[#d8b4fe]">
                Kháng khuẩn 99%
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#c084fc] mb-2 uppercase tracking-wider">
                  <Wind className="w-4 h-4" />
                  <span>Vệ sinh & Bảo quản thông minh</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Kèm dây treo tiện lợi – Nhanh khô, thoáng khí
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Khắc phục triệt để nhược điểm ẩm mốc của các loại mút nén hay khăn mặt truyền thống. Sau khi rửa mặt, chỉ cần vắt nhẹ và treo lên móc: bông nhanh khô thoáng khí, hạn chế tối đa vi khuẩn và nấm mốc phát triển.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenOrderModal('combo3')}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] hover:brightness-110 transition-all"
                >
                  Nhận Ưu Đãi Combo 3 Miếng
                </button>
                <span className="text-xs text-zinc-400">
                  🎁 Tặng kèm móc dán treo tường cao cấp
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
