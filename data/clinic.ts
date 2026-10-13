export type ClinicService = {
  readonly title: string;
  readonly description: string;
  readonly number: string;
};

export type ClinicFaq = {
  readonly question: string;
  readonly answer: string;
};

const whatsappNumber = "201117443355";

export function buildWhatsAppUrl(
  message = "مرحبًا، أريد حجز موعد في S Clinics",
) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contactLinks = {
  phone: "tel:+201117443355",
  whatsapp: buildWhatsAppUrl(),
  instagram: "https://www.instagram.com/s.clinics.cairo/",
  doctorInstagram: "https://www.instagram.com/dr.sarwatt/",
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "S Clinics Cairo Twin Towers Sheikh Zayed",
  )}`,
} as const;

export const clinic = {
  name: "S Clinics",
  arabicName: "إس كلينيكس",
  tagline: "نغيّر العالم... ابتسامة وراء ابتسامة",
  phoneDisplay: "0111 744 3355",
  address: "Twin Towers، المبنى C، الدور الرابع، الشيخ زايد",
  locationShort: "الشيخ زايد — Twin Towers",
  doctor: {
    name: "د. عمر محمد ثروت",
    specialty: "جراح الفم والوجه والفكين",
    role: "مؤسس S Clinics",
  },
  rating: {
    value: "5.0",
    reviews: "223 تقييمًا",
    note: "وقت إعداد النموذج",
  },
  services: [
    {
      number: "01",
      title: "ترميمات وتجميل الأسنان",
      description:
        "خطط علاجية تهتم بالشكل والوظيفة مع تقييم كل حالة بصورة فردية.",
    },
    {
      number: "02",
      title: "جراحة الفم والوجه والفكين",
      description:
        "تقييم متخصص للحالات الجراحية على يد د. عمر محمد ثروت.",
    },
    {
      number: "03",
      title: "رعاية وتشخيص الأسنان",
      description:
        "فحص واضح ومناقشة الخيارات المناسبة قبل بدء أي إجراء علاجي.",
    },
  ] satisfies readonly ClinicService[],
  faqs: [
    {
      question: "إزاي أحجز موعد؟",
      answer:
        "تقدر تبدأ محادثة واتساب مباشرة أو تتصل بالعيادة، وفريق S Clinics هيساعدك في تنسيق الموعد المناسب.",
    },
    {
      question: "العيادة موجودة فين؟",
      answer:
        "في الشيخ زايد، Twin Towers، المبنى C، الدور الرابع. استخدم زر الخريطة للوصول بسهولة.",
    },
    {
      question: "أحضّر إيه لأول زيارة؟",
      answer:
        "لو عندك أشعات أو تقارير سابقة خُدها معاك، ودوّن أي أدوية تستخدمها أو أسئلة حابب تناقشها مع الطبيب.",
    },
    {
      question: "أعرف إزاي العلاج المناسب لحالتي؟",
      answer:
        "الاختيار بيتحدد بعد فحص وتقييم مهني. تواصل مع العيادة لحجز كشف بدل الاعتماد على تشخيص عبر الإنترنت.",
    },
  ] satisfies readonly ClinicFaq[],
} as const;
