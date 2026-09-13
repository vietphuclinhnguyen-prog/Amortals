import { useState, useEffect, FormEvent } from 'react';
import { COMBOS } from '../data/productData';
import { X, CheckCircle2, ShoppingBag, ShieldCheck, Gift, Truck } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCombo?: 'single' | 'combo3';
}

export function OrderModal({ isOpen, onClose, initialCombo = 'combo3' }: OrderModalProps) {
  const [selectedCombo, setSelectedCombo] = useState<'single' | 'combo3'>(initialCombo);
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'banking'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  useEffect(() => {
    if (initialCombo) {
      setSelectedCombo(initialCombo);
    }
  }, [initialCombo]);

  if (!isOpen) return null;

  const currentCombo = COMBOS.find((c) => c.id === selectedCombo) || COMBOS[1];
  const unitPrice = currentCombo.price;
  const shippingFee = selectedCombo === 'combo3' ? 0 : 25000;
  const totalPrice = unitPrice * quantity + shippingFee;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrderCode(`AMT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#130f1e] border border-[#c084fc]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-zinc-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#c084fc] uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4" />
              <span>ĐẶT HÀNG NHANH CHÍNH HÃNG AMORTALS</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Xác Nhận Đơn Hàng Ưu Đãi
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Combo Selection Radio Buttons */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold text-zinc-300">
                  Chọn gói ưu đãi:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Single Option */}
                  <div
                    onClick={() => setSelectedCombo('single')}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all ${
                      selectedCombo === 'single'
                        ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                        : 'bg-[#181326] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">Mua 1 Miếng</span>
                      <span className="text-xs font-bold text-[#c084fc]">69.000đ</span>
                    </div>
                    <div className="text-[11px] text-zinc-400">Giá dùng thử (Ship 25k)</div>
                  </div>

                  {/* Combo 3 Option */}
                  <div
                    onClick={() => setSelectedCombo('combo3')}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all relative ${
                      selectedCombo === 'combo3'
                        ? 'bg-[#2b1f45] border-[#c084fc] shadow-[0_0_15px_rgba(192,132,252,0.2)]'
                        : 'bg-[#181326] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#c084fc] text-[#09080e]">
                      HOT SALE
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">Combo 3 Miếng</span>
                      <span className="text-xs font-bold text-[#c084fc]">159.000đ</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <Truck className="w-3 h-3" /> Freeship + Tặng Móc Dán
                    </div>
                  </div>

                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#181326] border border-white/10">
                <span className="text-xs font-semibold text-zinc-300">Số lượng bộ:</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-300"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-white w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Customer Info Form */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Họ và tên người nhận <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Phương Linh"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Số điện thoại <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ví dụ: 0988 123 456"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Hình thức thanh toán
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value as 'cod' | 'banking')}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white outline-none"
                    >
                      <option value="cod">COD (Kiểm tra & Trả khi nhận)</option>
                      <option value="banking">Chuyển khoản trực tiếp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Địa chỉ nhận hàng chi tiết <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Ghi chú đơn hàng (nếu có)
                  </label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Giao giờ hành chính, gọi trước khi giao..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1c162c] border border-white/10 focus:border-[#c084fc] text-sm text-white placeholder-zinc-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-4 rounded-2xl bg-[#0f0c18] border border-white/5 space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Tạm tính ({quantity} bộ):</span>
                  <span className="text-zinc-200">{(unitPrice * quantity).toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Phí vận chuyển:</span>
                  <span className={shippingFee === 0 ? 'text-emerald-400 font-bold' : 'text-zinc-200'}>
                    {shippingFee === 0 ? 'MIỄN PHÍ' : '25.000đ'}
                  </span>
                </div>
                {selectedCombo === 'combo3' && (
                  <div className="flex justify-between text-[#c084fc]">
                    <span>Quà tặng kèm:</span>
                    <span>01 Móc dán treo tường thông minh</span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold text-white">
                  <span>Tổng thanh toán:</span>
                  <span className="text-lg text-[#c084fc] font-extrabold">
                    {totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full text-sm font-bold text-[#09080e] bg-gradient-to-r from-[#d8b4fe] via-[#c084fc] to-[#e879f9] hover:brightness-110 active:scale-98 transition-all shadow-[0_0_20px_rgba(192,132,252,0.3)] disabled:opacity-50"
              >
                {isSubmitting ? 'ĐANG XỬ LÝ ĐƠN HÀNG...' : 'XÁC NHẬN ĐẶT HÀNG NGAY'}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-1">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span>Chính hãng 100%</span>
                </div>
                <div>•</div>
                <div>Đồng kiểm tra trước khi thanh toán</div>
              </div>

            </form>
          </div>
        ) : (
          /* Order Confirmation Success State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Đặt Hàng Thành Công!
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
              Cảm ơn <span className="font-semibold text-white">{fullName}</span> đã tin tưởng lựa chọn bông rửa mặt bọt biển tự nhiên Amortals.
            </p>

            <div className="p-5 rounded-2xl bg-[#181326] border border-white/10 text-left space-y-2 mb-6 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-400">Mã đơn hàng:</span>
                <span className="font-mono font-bold text-[#c084fc]">{orderCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Sản phẩm:</span>
                <span className="font-medium text-white">{currentCombo.title} (x{quantity})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Số điện thoại:</span>
                <span className="text-white">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Địa chỉ giao:</span>
                <span className="text-white text-right max-w-[240px] truncate">{address}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm">
                <span>Tổng tiền COD:</span>
                <span className="text-[#c084fc]">{totalPrice.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 mb-6">
              Chuyên viên chăm sóc khách hàng của Amortals sẽ gọi điện xác nhận và gửi hàng trong vòng 24 giờ.
            </p>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-full text-xs font-bold text-[#09080e] bg-[#c084fc] hover:brightness-110 transition-all"
            >
              Hoàn tất & Tiếp tục xem
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
