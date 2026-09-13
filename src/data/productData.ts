import { HighlightItem, ProductSpec, PainPoint, SolutionPillar, UsageStep, ReviewItem, ComboOffer } from '../types';

export const HERO_DATA = {
  h1: "Rửa Mặt Sạch Sâu Chuẩn Spa – Êm Mịn Cho Mọi Làn Da",
  subtitle: "Bông rửa mặt bọt biển Amortals tự nhiên: Tạo bọt siêu mịn, len lỏi từng lỗ chân lông và làm sạch nhẹ nhàng không gây rát da",
  highlights: [
    {
      id: "a",
      title: "Bọt biển tự nhiên siêu mềm",
      description: "Khi ngậm nước lập tức nở mềm như nhung, không gây ma sát",
      icon: "Droplets",
      image: "/images/amortals/regenerated_image_1789299992887.png",
      imageAlt: "Set 3 bông bọt biển Amortals 15mm chính hãng"
    },
    {
      id: "b",
      title: "Thiết kế hình giọt nước",
      description: "Đầu nhọn ôm sát khóe mũi, vùng mắt và hõm cằm hoàn hảo",
      icon: "Sparkles",
      image: "/images/amortals/regenerated_image_1789299994706.webp",
      imageAlt: "Bông rửa mặt bọt biển Amortals giọt nước tím & xếp tầng êm ái"
    },
    {
      id: "c",
      title: "Quai xỏ ngón tay chắc chắn",
      description: "Cố định bàn tay linh hoạt, thao tác dễ dàng không trơn tuột",
      icon: "Hand",
      image: "/images/amortals/mieng_rua_mat_new.jpg",
      imageAlt: "Cận cảnh quai xỏ ngón tay chắc chắn & độ dày 15mm êm ái"
    }
  ],
  ctaText: "MUA NGAY - ƯU ĐÃI COMBO 3 MIẾNG"
};

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "hand",
    title: "Rửa mặt bằng tay thông thường",
    description: "Không thể làm sạch sâu bụi bẩn, bã nhờn và dầu thừa còn đọng sâu trong lỗ chân lông. Đầu ngón tay khó tiếp cận các vùng khuất như cánh mũi.",
    impact: "Dẫn đến mụn ẩn, mụn đầu đen và bít tắc lỗ chân lông lâu ngày.",
    icon: "HandMetal"
  },
  {
    id: "towel",
    title: "Dùng khăn mặt thô ráp",
    description: "Sợi vải thô ráp dễ gây xước da li ti, chà xát làm tổn thương màng ẩm tự nhiên bảo vệ da. Khăn ẩm treo trong nhà tắm là ổ chứa vi khuẩn và nấm mốc nguy hiểm.",
    impact: "Phá vỡ hàng rào ẩm tự nhiên, khiến da khô rát, đỏ ửng và dễ nhiễm trùng.",
    icon: "ShieldAlert"
  },
  {
    id: "machine",
    title: "Máy rửa mặt cọ rung quá mạnh",
    description: "Tần số rung cơ học cùng đầu cọ silicon/sợi cước có lực tác động quá mức, dễ gây kích ứng, vỡ mao mạch với da mụn viêm hoặc da đang treatment.",
    impact: "Làm tổn thương bề mặt biểu bì mỏng manh, gây kích ứng nghiêm trọng.",
    icon: "ZapOff"
  }
];

export const SOLUTIONS: SolutionPillar[] = [
  {
    id: "material",
    badge: "Chất Liệu Đỉnh Cao",
    title: "Chất liệu xốp bọt biển vi sợi tự nhiên",
    subtitle: "Nở mềm như đám mây khi gặp nước",
    description: "Khi tiếp xúc với nước, bông lập tức ngậm nước căng mọng và nở mềm tuyệt đối, tạo nên kết cấu mịn màng triệt tiêu ma sát gây tổn thương biểu bì. An toàn tuyệt đối cho cả làn da mỏng yếu nhất.",
    image: "/images/amortals/regenerated_image_1789300002737.jpg"
  },
  {
    id: "foam",
    badge: "Hiệu Quả Gấp Đôi",
    title: "Khả năng tạo bọt vượt trội",
    subtitle: "Lớp bọt xốp siêu mịn len lỏi từng tế bào",
    description: "Cấu trúc vi sợi li ti biến một lượng nhỏ sữa rửa mặt thành lớp bọt bông xốp dày đặc như kem tươi. Lớp đệm bọt bảo vệ tăng hiệu quả làm sạch sâu lỗ chân lông gấp 2 lần so với rửa mặt thông thường.",
    image: "/images/amortals/regenerated_image_1789300004105.jpg"
  },
  {
    id: "ergonomics",
    badge: "Thiết Kế Độc Quyền",
    title: "Thiết kế công thái học thông minh",
    subtitle: "Chăm chút từng góc cạnh khuôn mặt",
    description: "Được nghiên cứu tỉ mỉ theo cấu trúc đường cong khuôn mặt Châu Á:",
    subPoints: [
      "Chạm trọn góc khuất: Dáng giọt nước uyển chuyển ôm khít mọi đường nét, từ khóe mũi đến vùng gò má, trán.",
      "Êm ái như mây: Chất xốp nở mềm khi ngậm nước, nâng niu làn da và nhẹ nhàng cuốn trôi tạp chất.",
      "Trợ lực tự nhiên: Thiết kế công thái học giúp phân tán lực đều đặn, cho thao tác làm sạch trơn tru và thư thái."
    ],
    image: "/images/amortals/puff_1.jpg"
  },
  {
    id: "hygiene",
    badge: "Vệ Sinh Tối Đa",
    title: "Kèm dây treo tiện lợi, kháng khuẩn",
    subtitle: "Nhanh khô ráo, ngăn ngừa ẩm mốc",
    description: "Mỗi miếng bông đều được đính sẵn dây treo cao cấp bằng lụa mềm. Sau khi vắt nhẹ nước, bạn dễ dàng treo bông lên móc nơi khô thoáng khí, giúp bông nhanh khô ráo, hạn chế tối đa vi khuẩn và nấm mốc phát triển so với để trên khay ẩm ướt.",
    image: "/images/amortals/regenerated_image_1789300008827.jpg"
  }
];

export const PRODUCT_SPECS: ProductSpec[] = [
  {
    feature: "Thương hiệu",
    detail: "Amortals",
    iconName: "Award"
  },
  {
    feature: "Chất liệu",
    detail: "Bọt biển thực vật tự nhiên (Hydrophilic Polyurethane cao cấp)",
    iconName: "Leaf"
  },
  {
    feature: "Quy cách đóng gói",
    detail: "Hộp đơn lẻ hoặc set 3 miếng (kèm dây treo/hộp đựng bảo quản)",
    iconName: "Package"
  },
  {
    feature: "Kích thước nở",
    detail: "Khoảng 8.5 x 8 cm, độ dày ~1.5 cm",
    iconName: "Maximize2"
  },
  {
    feature: "Loại da phù hợp",
    detail: "Mọi loại da (kể cả da dầu mụn, da nhạy cảm, treatment)",
    iconName: "ShieldCheck"
  }
];

export const USAGE_STEPS: UsageStep[] = [
  {
    stepNumber: "01",
    name: "Làm ướt",
    action: "Ngậm nước nở mềm",
    description: "Nhúng bông vào nước ấm hoặc nước sạch để bông nở mềm hoàn toàn và vắt nhẹ để ráo bớt nước đọng.",
    tip: "Khi ngậm nước, bông sẽ nở to hơn ~30% và mềm mịn như một lớp thạch.",
    icon: "Droplets"
  },
  {
    stepNumber: "02",
    name: "Tạo bọt",
    action: "Tạo bọt siêu mịn",
    description: "Cho sữa rửa mặt trực tiếp lên bề mặt bông, xoa nhẹ để tạo lớp bọt bông xốp dày đặc.",
    tip: "Chỉ cần 1/2 lượng sữa rửa mặt thông thường là đã đủ bọt bông xốp.",
    icon: "Cloud"
  },
  {
    stepNumber: "03",
    name: "Massage",
    action: "Làm sạch chuẩn spa",
    description: "Xỏ ngón tay vào quai, massage xoay tròn nhẹ nhàng khắp mặt, dùng đầu nhọn cho khóe mũi và vùng chữ T.",
    tip: "Massage nhẹ theo chiều nâng cơ từ dưới lên trên, từ trong ra ngoài.",
    icon: "Sparkles"
  },
  {
    stepNumber: "04",
    name: "Làm sạch & Phơi khô",
    action: "Bảo quản kháng khuẩn",
    description: "Xả sạch bông dưới vòi nước, vắt ráo và treo nơi khô ráo, thoáng gió bằng dây treo đi kèm.",
    tip: "Nên thay bông định kỳ sau 2 - 3 tháng sử dụng để đảm bảo vệ sinh tốt nhất.",
    icon: "SunMedium"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Ngọc Mai",
    skinType: "Da dầu mụn",
    comment: "Từ ngày đổi sang bông Amortals này, sợi bã nhờn ở cánh mũi giảm hẳn. Bông mềm xỉu, không hề bị rát da như mấy loại mút nén ngày xưa.",
    rating: 5,
    date: "2 ngày trước",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    tag: "Đã mua Combo 3 miếng"
  },
  {
    id: "rev-2",
    author: "Phương Linh",
    skinType: "Da nhạy cảm",
    comment: "Thiết kế xỏ ngón cực kỳ tiện, không bị tuột. Có dây treo nên phơi nhanh khô, sạch sẽ hơn hẳn.",
    rating: 5,
    date: "5 ngày trước",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    tag: "Đã mua Combo 3 miếng + Quà tặng"
  },
  {
    id: "rev-3",
    author: "Thanh Trúc",
    skinType: "Da đang Treatment AHA/BHA",
    comment: "Da mình đang dùng treatment bong tróc rất rát nếu dùng máy rửa mặt. Chuyển qua bông bọt biển Amortals tím này êm ru, rửa xong da sạch bong kin kít mà vẫn mềm ẩm!",
    rating: 5,
    date: "1 tuần trước",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    tag: "Đã mua Combo 3 miếng"
  },
  {
    id: "rev-4",
    author: "Hương Giang",
    skinType: "Da hỗn hợp thiên dầu",
    comment: "Tone màu tím pastel cực kỳ sang chảnh và xinh xắn. Bông tạo bọt cực nhiều, dùng xong treo lên móc dán tặng kèm khô nhanh không lo mốc.",
    rating: 5,
    date: "2 tuần trước",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    tag: "Đã mua Hộp đơn lẻ"
  }
];

export const COMBOS: ComboOffer[] = [
  {
    id: "single",
    title: "Mua 1 Miếng Lẻ",
    tag: "Gói Trải Nghiệm",
    price: 69000,
    originalPrice: 99000,
    description: "Lựa chọn dùng thử tuyệt vời cho người mới bắt đầu làm quen với bông rửa mặt bọt biển tự nhiên Amortals.",
    benefits: [
      "01 Bông rửa mặt Amortals màu tím pastel",
      "Kèm dây treo lụa kháng khuẩn đính sẵn",
      "Hộp đóng gói kháng khuẩn chuẩn hãng",
      "Cam kết 100% hàng chính hãng"
    ],
    image: "https://images.unsplash.com/photo-1608248597359-2e0618037613?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "combo3",
    title: "Combo 3 Miếng Amortals",
    tag: "Khuyên Dùng - Tiết Kiệm Nhất",
    price: 159000,
    originalPrice: 249000,
    isPopular: true,
    giftText: "TẶNG KÈM MÓC DÁN TREO TƯỜNG CAO CẤP + FREESHIP TOÀN QUỐC",
    description: "Bộ 3 miếng dùng luân phiên hoặc cho cả gia đình, đủ chu trình thay mới sau 6 - 9 tháng tiết kiệm nhất.",
    benefits: [
      "Set 03 Bông rửa mặt Amortals tím pastel cao cấp",
      "Tặng kèm 01 Móc dán treo tường thông minh chuyên dụng",
      "Miễn phí vận chuyển toàn quốc (Freeship)",
      "Được kiểm tra hàng trước khi thanh toán",
      "Hộp quà sang trọng chuẩn cao cấp"
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  }
];

export const COMMITMENTS = [
  {
    title: "Hàng chính hãng 100%",
    desc: "Đầy đủ tem niêm phong, mã QR xác thực nguồn gốc từ thương hiệu Amortals.",
    icon: "ShieldCheck"
  },
  {
    title: "Đổi trả nếu lỗi sản xuất",
    desc: "Bảo hành 1 đổi 1 nhanh chóng trong 7 ngày nếu có bất kỳ lỗi nào từ nhà sản xuất.",
    icon: "RotateCcw"
  },
  {
    title: "Giao hàng nhanh chóng",
    desc: "Đóng gói cẩn thận 2 lớp, hỏa tốc toàn quốc 24-48h, đồng kiểm trước khi nhận.",
    icon: "Truck"
  }
];

export const CONTACT_INFO = {
  brand: "Amortals Skincare Việt Nam",
  tagline: "Vẻ đẹp thuần khiết từ sự nâng niu dịu dàng nhất",
  hotline: "1900 6889 - 0988 123 456",
  email: "support@amortalsbeauty.vn",
  address: "Tầng 8, Tòa nhà Luxury Tower, 198 Nguyễn Thị Minh Khai, Quận 3, TP. Hồ Chí Minh",
  showroom: "Chi nhánh Hà Nội: 45 Tràng Thi, Hoàn Kiếm, Hà Nội",
  workingHours: "08:00 - 21:30 (Thứ 2 - Chủ Nhật)",
  socials: [
    { name: "Facebook", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "TikTok", link: "#" }
  ]
};
