import { useState, FormEvent } from 'react';
import { CONTACT_INFO } from '../data/productData';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [skinConcern, setSkinConcern] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setSkinConcern('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#07060b] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7e22ce]/20 border border-[#c084fc]/30 text-xs font-semibold text-[#d8b4fe] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIÊN HỆ & TƯ VẤN CHĂM SÓC DA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Đồng Hành Cùng Làn Da Khỏe Đẹp Của Bạn
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Bạn đang phân vân liệu bông bọt biển Amortals có phù hợp với tình trạng da hiện tại? Đội ngũ chuyên viên luôn sẵn sàng hỗ trợ bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Brand Info & Showrooms */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-7 rounded-3xl bg-[#120f1b] border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#7e22ce]/30 flex items-center justify-center text-[#c084fc]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {CONTACT_INFO.brand}
                  </h3>
                  <p className="text-xs text-[#d8b4fe]">{CONTACT_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-sm text-zinc-300">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Hotline tư vấn & đặt hàng (Miễn phí)</div>
                    <div className="text-white font-bold">{CONTACT_INFO.hotline}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Email phản hồi & chăm sóc khách hàng</div>
                    <div className="text-white">{CONTACT_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Trụ sở chính & Trung tâm phân phối</div>
                    <div className="text-white">{CONTACT_INFO.address}</div>
                    <div className="text-zinc-400 text-xs mt-1">{CONTACT_INFO.showroom}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#c084fc] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Thời gian làm việc</div>
                    <div className="text-white">{CONTACT_INFO.workingHours}</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <span className="text-xs text-zinc-400">Theo dõi Amortals:</span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-white/5 hover:bg-[#c084fc]/20 hover:text-white cursor-pointer transition-colors">
                    Facebook
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-white/5 hover:bg-[#c084fc]/20 hover:text-white cursor-pointer transition-colors">
                    Instagram
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-white/5 hover:bg-[#c084fc]/20 hover:text-white cursor-pointer transition-colors">
                    TikTok
                  </span>
                </div>
              </div>
            </div>

            {/* Quality Commitment Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#171126] to-[#120e1f] border border-[#c084fc]/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#c084fc]/20 flex items-center justify-center text-[#c084fc] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-zinc-300 leading-relaxed">
                Tất cả sản phẩm Amortals đều có tem chống hàng giả, niêm phong nguyên seal hộp từ nhà máy, kiểm tra hàng thoải mái trước khi thanh toán.
              </div>
            </div>

          </div>

          {/* Right Column: Skincare Consultation Form */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#14111d] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#c084fc] uppercase tracking-wider mb-2">
                <Send className="w-4 h-4" />
                <span>ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Để Lại Câu Hỏi Cho Chuyên Viên Da Liễu
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Nhập thông tin bên dưới, chuyên viên Amortals sẽ liên hệ hỗ trợ bạn lựa chọn quy trình làm sạch phù hợp nhất cho làn da.
              </p>

              {isSent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-base font-bold text-white">Đã gửi thông tin thành công!</div>
                  <div className="text-xs text-zinc-300">
                    Chuyên viên Amortals sẽ liên lạc với bạn trong thời gian sớm nhất. Cảm ơn bạn!
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Họ và tên của bạn
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ví dụ: Hoàng Yến"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Số điện thoại / Zalo
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ví dụ: 0912 345 678"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Tình trạng da hoặc câu hỏi cần tư vấn
                    </label>
                    <textarea
                      rows={3}
                      value={skinConcern}
                      onChange={(e) => setSkinConcern(e.target.value)}
                      placeholder="Ví dụ: Da mình đang dùng BHA bị bong tróc, có dùng được bông rửa mặt này không?..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,132,252,0.3)]"
                  >
                    <span>GỬI YÊU CẦU TƯ VẤN</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Minimalist Luxurious Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300 tracking-wider">AMORTALS</span>
            <span>© {new Date().getFullYear()} Bản quyền thuộc về Amortals Skincare Việt Nam.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-300 transition-colors">Chính sách bảo mật</span>
            <span>•</span>
            <span className="hover:text-zinc-300 transition-colors">Điều khoản dịch vụ</span>
            <span>•</span>
            <span className="hover:text-zinc-300 transition-colors">Chính sách đổi trả 7 ngày</span>
          </div>
        </div>

      </div>
    </section>
  );
}
