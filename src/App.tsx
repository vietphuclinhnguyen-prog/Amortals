import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { SpecificationsSection } from './components/SpecificationsSection';
import { InstructionsSection } from './components/InstructionsSection';
import { FeedbackSection } from './components/FeedbackSection';
import { PricingCtaSection } from './components/PricingCtaSection';
import { ContactSection } from './components/ContactSection';
import { OrderModal } from './components/OrderModal';
import { ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedCombo, setSelectedCombo] = useState<'single' | 'combo3'>('combo3');

  const handleOpenOrderModal = (comboId: 'single' | 'combo3' = 'combo3') => {
    setSelectedCombo(comboId);
    setIsOrderModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09080e] text-zinc-100 selection:bg-[#c084fc]/30 selection:text-[#f3e8ff] relative">
      {/* Top Fixed Header Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenOrderModal={handleOpenOrderModal} />

        {/* 2. Vấn đề của khách hàng (Pain Points) */}
        <PainPointsSection />

        {/* 3. Giải pháp từ Bông Rửa Mặt Amortals */}
        <SolutionsSection onOpenOrderModal={handleOpenOrderModal} />

        {/* 4. Thông số chi tiết sản phẩm */}
        <SpecificationsSection />

        {/* 5. Hướng dẫn sử dụng & bảo quản */}
        <InstructionsSection />

        {/* 6. Feedback & Đánh giá thực tế (Social Proof) */}
        <FeedbackSection />

        {/* 7. Ưu đãi & Kêu gọi hành động cuối trang (Final CTA) */}
        <PricingCtaSection onOpenOrderModal={handleOpenOrderModal} />

        {/* Liên hệ & Showroom */}
        <ContactSection />
      </main>

      {/* Floating Action Buttons for quick navigation & order */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* Scroll to top button */}
        <button
          type="button"
          onClick={handleScrollToTop}
          className="w-10 h-10 rounded-full bg-[#1b152b]/90 border border-[#c084fc]/20 text-[#c084fc] hover:text-white hover:bg-[#2e2149] shadow-lg flex items-center justify-center transition-all backdrop-blur-md"
          title="Về đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Floating Quick Buy Pill on desktop */}
        <button
          type="button"
          onClick={() => handleOpenOrderModal('combo3')}
          className="hidden md:flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] shadow-[0_0_25px_rgba(192,132,252,0.4)] hover:shadow-[0_0_35px_rgba(192,132,252,0.6)] active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4 text-[#09080e]" />
          <span>MUA COMBO 3 MIẾNG (FREESHIP)</span>
        </button>
      </div>

      {/* Sticky Bottom Bar on Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0e0c16]/95 backdrop-blur-md border-t border-[#c084fc]/20 flex items-center justify-between gap-3 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
        <div>
          <div className="text-[10px] text-zinc-400">Combo 3 Miếng Hot</div>
          <div className="text-sm font-extrabold text-[#c084fc]">159.000đ <span className="text-[10px] text-emerald-400 font-semibold">• Freeship</span></div>
        </div>
        <button
          type="button"
          onClick={() => handleOpenOrderModal('combo3')}
          className="flex-1 py-2.5 px-4 rounded-full text-xs font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] shadow-md text-center"
        >
          MUA NGAY (TẶNG MÓC DÁN)
        </button>
      </div>

      {/* Order Modal Drawer */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialCombo={selectedCombo}
      />
    </div>
  );
}
