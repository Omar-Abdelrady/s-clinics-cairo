import Image from "next/image";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  Camera,
  Check,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { HeroCarousel } from "@/components/hero-carousel";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { clinic, contactLinks } from "@/data/clinic";

const proofPoints = [
  {
    label: "تقييم المرضى",
    value: clinic.rating.value,
    note: `${clinic.rating.reviews} · ${clinic.rating.note}`,
  },
  {
    label: "موقعنا",
    value: "الشيخ زايد",
    note: "Twin Towers · المبنى C",
  },
  {
    label: "بداية بسيطة",
    value: "حجز مباشر",
    note: "واتساب أو مكالمة",
  },
] as const;

const heroSlides = [
  {
    src: "/images/ai/doctor-editorial-portrait.png",
    alt: "صورة تحريرية تخيلية للدكتور عمر داخل عيادة S Clinics",
    eyebrow: "عناية أسنان بمعايير أدق",
    counter: "01 / 03",
  },
  {
    src: "/images/ai/doctor-clinic-portrait.png",
    alt: "صورة concept للدكتور عمر في أجواء عيادة عصرية",
    eyebrow: "خبرة واضحة وتجربة أهدى",
    counter: "02 / 03",
  },
  {
    src: "/images/ai/clinic-interior-editorial.png",
    alt: "عيادة أسنان عصرية بإضاءة هادئة",
    eyebrow: "تجربة مريحة من أول زيارة",
    counter: "03 / 03",
  },
] as const;

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        انتقل للمحتوى
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
          <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-index">
                <span>01</span>
                عناية أسنان بمعايير أدق
              </p>
              <h1
                id="hero-title"
                className="hero-title"
                aria-label="ابتسامتك تبدأ برعاية أدق."
              >
                <span className="hero-title-line hero-title-line-one">
                  <span>ابتسامتك</span>
                </span>
                <span className="hero-title-line hero-title-line-two">
                  <span>تبدأ برعاية أدق.</span>
                </span>
              </h1>
              <p className="hero-lead">
                خبرة متخصصة، تشخيص واضح، واهتمام حقيقي بالتفاصيل — علشان
                رحلتك العلاجية تبقى أهدى من أول زيارة.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-gold button-large"
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  احجز على واتساب
                  <ArrowLeft size={18} aria-hidden="true" />
                </a>
                <a className="quiet-link" href={contactLinks.phone}>
                  <Phone size={18} aria-hidden="true" />
                  اتصل بالعيادة
                </a>
              </div>
              <div className="hero-signature">
                <span>S Clinics</span>
                <small>Changing the world, one smile at a time.</small>
              </div>
            </div>

            <Reveal className="hero-media-wrap" variant="clip" delay={120}>
              <HeroCarousel slides={heroSlides}>
                <div className="hero-location-card">
                  <MapPin size={18} aria-hidden="true" />
                  <span>
                    <small>موقع العيادة</small>
                    الشيخ زايد · Twin Towers
                  </span>
                </div>
              </HeroCarousel>
            </Reveal>
          </div>
          <a className="scroll-cue" href="#services">
            <span>اكتشف العيادة</span>
            <ArrowDownLeft size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="proof-section" aria-label="معلومات سريعة عن العيادة">
          <div className="container proof-grid">
            {proofPoints.map((item, index) => (
              <Reveal key={item.label} className="proof-item" delay={index * 70}>
                <span className="proof-number">0{index + 1}</span>
                <div>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                  <span>{item.note}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container services-layout">
            <div className="services-intro">
              <Reveal>
                <p className="editorial-label">
                  <span>02</span>
                  خدماتنا
                </p>
                <h2 id="services-title">خبرة دقيقة. تجربة أهدى.</h2>
                <p className="section-lead">
                  كل خطة بتبدأ بفهم الحالة ومناقشة الاختيارات بوضوح، قبل أي
                  إجراء علاجي.
                </p>
              </Reveal>
              <Reveal className="services-image-wrap" variant="clip" delay={100}>
                <div className="services-image">
                  <Image
                    src="/images/ai/dental-tools-editorial.png"
                    fill
                    sizes="(max-width: 860px) 92vw, 36vw"
                    alt="أدوات أسنان دقيقة مرتبة على سطح حجري فاتح"
                    className="editorial-image"
                  />
                </div>
                <p className="image-caption">
                  Precision in every detail <span>02 / 05</span>
                </p>
              </Reveal>
            </div>

            <div className="services-list">
              {clinic.services.map((service, index) => (
                <Reveal key={service.title} delay={100 + index * 90}>
                  <article className="service-row">
                    <span className="service-number">{service.number}</span>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <a
                      href={contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`اسأل عن ${service.title}`}
                    >
                      <ArrowUpLeft size={20} aria-hidden="true" />
                    </a>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={380}>
                <div className="services-note">
                  <Check size={18} aria-hidden="true" />
                  بنشرح الاختيارات المتاحة قبل ما نبدأ أي خطوة.
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section doctor-section" id="doctor" aria-labelledby="doctor-title">
          <div className="container doctor-layout">
            <Reveal className="doctor-visual" variant="clip">
              <div className="doctor-photo">
                <Image
                  src="/images/doctor-operating-room.jpg"
                  fill
                  sizes="(max-width: 900px) 94vw, 54vw"
                  alt="د. عمر محمد ثروت مع الفريق الطبي داخل غرفة العمليات"
                  className="doctor-image"
                />
              </div>
              <div className="doctor-photo-note">
                <span className="status-dot" aria-hidden="true" />
                جراحة الفم والوجه والفكين
              </div>
            </Reveal>

            <Reveal className="doctor-copy" variant="fade" delay={100}>
              <p className="editorial-label">
                <span>03</span>
                اعرف طبيبك
              </p>
              <h2 id="doctor-title">{clinic.doctor.name}</h2>
              <p className="doctor-role">
                {clinic.doctor.specialty} · {clinic.doctor.role}
              </p>
              <p className="doctor-statement">
                «هدفنا إن الزيارة تبدأ بفهم واضح لحالتك، وتنتهي بخطة مناسبة
                ليك — من غير استعجال ومن غير وعود مبالغ فيها.»
              </p>
              <ul className="doctor-values">
                <li>تقييم مهني لكل حالة</li>
                <li>شرح واضح للاختيارات</li>
                <li>متابعة واهتمام بالتفاصيل</li>
              </ul>
              <a className="arrow-link" href={contactLinks.doctorInstagram} target="_blank" rel="noreferrer">
                <Camera size={18} aria-hidden="true" />
                تابع د. عمر على إنستجرام
                <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section results-section" id="results" aria-labelledby="results-title">
          <div className="container">
            <div className="results-heading">
              <Reveal>
                <p className="editorial-label editorial-label-light">
                  <span>04</span>
                  حالات منشورة
                </p>
                <h2 id="results-title">نماذج من الحالات</h2>
              </Reveal>
              <Reveal variant="fade" delay={80}>
                <p>
                  كل نتيجة مرتبطة بحالة مختلفة، والتقييم المهني هو اللي بيحدد
                  الخطة المناسبة.
                </p>
              </Reveal>
            </div>

            <div className="results-gallery">
              <Reveal className="case-card case-card-tall" variant="clip">
                <Image
                  src="/images/esthetic-restoration.jpg"
                  fill
                  sizes="(max-width: 760px) 94vw, 43vw"
                  alt="نموذج منشور لترميمات تجميلية بالـ composite"
                  className="case-image"
                />
                <div className="case-meta"><span>01</span><strong>Esthetic restoration</strong></div>
              </Reveal>
              <Reveal className="case-card" variant="clip" delay={100}>
                <Image
                  src="/images/veneers-crowns.jpg"
                  fill
                  sizes="(max-width: 760px) 94vw, 32vw"
                  alt="نموذج منشور لنتيجة veneers and crowns"
                  className="case-image"
                />
                <div className="case-meta"><span>02</span><strong>Veneers &amp; Crowns</strong></div>
              </Reveal>
              <Reveal className="case-card case-card-wide" variant="clip" delay={180}>
                <Image
                  src="/images/full-mouth-makeover.jpg"
                  fill
                  sizes="(max-width: 760px) 94vw, 48vw"
                  alt="نموذج منشور لتحسين الابتسامة"
                  className="case-image"
                />
                <div className="case-meta"><span>03</span><strong>Smile makeover</strong></div>
              </Reveal>
            </div>
            <p className="results-disclaimer">
              الصور للاستخدام داخل النموذج المبدئي فقط، وتحتاج موافقة العيادة
              وأصحاب الحالات قبل النشر الرسمي.
            </p>
          </div>
        </section>

        <section className="philosophy-section" aria-labelledby="philosophy-title">
          <div className="container philosophy-layout">
            <Reveal className="philosophy-copy">
              <p className="editorial-label"><span>05</span>فلسفة الرعاية</p>
              <h2 id="philosophy-title">نهتم بالتفاصيل قبل كل شيء</h2>
              <p>
                من لحظة دخولك لحد المتابعة، بنبني تجربة واضحة وهادية تحترم
                وقتك وأسئلتك واحتياجك الحقيقي.
              </p>
              <div className="philosophy-signature">One smile at a time.</div>
            </Reveal>
            <Reveal className="philosophy-art" variant="clip" delay={100}>
              <Image
                src="/images/ai/enamel-sculpture-editorial.png"
                fill
                sizes="(max-width: 860px) 94vw, 52vw"
                alt="تكوين نحتي تجريدي مستوحى من الدقة وانسيابية الابتسامة"
                className="editorial-image"
              />
            </Reveal>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <Reveal className="faq-heading">
              <p className="editorial-label"><span>06</span>قبل زيارتك</p>
              <h2 id="faq-title">أسئلة شائعة</h2>
              <p>
                إجابات مختصرة تساعدك تبدأ. الأسئلة الطبية تحتاج تقييم مباشر
                أثناء الكشف.
              </p>
              <a className="faq-phone" href={contactLinks.phone}>
                <Phone size={18} aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
            </Reveal>
            <Reveal className="faq-panel" delay={90}>
              <FaqList items={clinic.faqs} />
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-panel">
            <div className="contact-orbit" aria-hidden="true" />
            <Reveal className="contact-copy">
              <p className="editorial-label editorial-label-light"><span>07</span>جاهز تبدأ؟</p>
              <h2 id="contact-title">خلّي أول خطوة بسيطة.</h2>
              <p>ابعتلنا على واتساب، واحكيلنا باختصار محتاج مساعدة في إيه.</p>
              <div className="contact-actions">
                <a className="button button-gold button-large" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} aria-hidden="true" />
                  احجز موعدك
                </a>
                <a className="button button-outline button-large" href={contactLinks.phone}>
                  <Phone size={19} aria-hidden="true" />
                  {clinic.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal className="location-panel" variant="fade" delay={100}>
              <div className="location-icon"><MapPin size={23} aria-hidden="true" /></div>
              <small>موقع العيادة</small>
              <h3>Twin Towers</h3>
              <p>{clinic.address}</p>
              <a href={contactLinks.maps} target="_blank" rel="noreferrer" aria-label="افتح الموقع على الخريطة">
                افتح الخريطة <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Image src="/images/clinic-logo.jpg" width={64} height={64} alt="شعار S Clinics" />
            <div><strong>S Clinics</strong><small>One smile at a time.</small></div>
          </div>
          <p>رعاية أسنان متخصصة في قلب الشيخ زايد.</p>
          <div className="footer-links">
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer" aria-label="إنستجرام S Clinics"><Camera size={19} aria-hidden="true" /></a>
            <a href={contactLinks.phone} aria-label="اتصل بـ S Clinics"><Phone size={19} aria-hidden="true" /></a>
            <a href={contactLinks.maps} target="_blank" rel="noreferrer" aria-label="موقع S Clinics على الخريطة"><MapPin size={19} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 S Clinics — نموذج مبدئي</span>
          <span>المعلومات الطبية لا تغني عن الكشف.</span>
          <span className="footer-rating"><Star size={13} aria-hidden="true" /> {clinic.rating.value}</span>
        </div>
      </footer>

      <a className="mobile-booking-bar" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={20} aria-hidden="true" />
        احجز على واتساب
      </a>
    </div>
  );
}
