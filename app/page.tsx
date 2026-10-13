import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  Camera,
  MapPin,
  MessageCircle,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { clinic, contactLinks } from "@/data/clinic";

const serviceIcons = [Sparkles, Stethoscope, SearchCheck] as const;

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        انتقل للمحتوى
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <Reveal>
                <p className="hero-kicker">
                  <MapPin size={17} aria-hidden="true" />
                  رعاية أسنان متخصصة في الشيخ زايد
                </p>
                <h1 id="hero-title">
                  ابتسامتك تبدأ
                  {" "}<span>برعاية أدق.</span>
                </h1>
                <p className="hero-lead">
                  في S Clinics بنجمع بين الخبرة، التشخيص الواضح، والاهتمام
                  بالتفاصيل — علشان كل خطوة في رحلتك العلاجية تبقى أهدى وأوضح.
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
                  <a className="button button-ghost button-large" href={contactLinks.phone}>
                    <Phone size={19} aria-hidden="true" />
                    اتصل بالعيادة
                  </a>
                </div>
                <p className="hero-note">Changing the world, one smile at a time.</p>
              </Reveal>
            </div>

            <Reveal className="hero-visual-wrap" delay={140}>
              <div className="hero-visual">
                <Image
                  src="/images/doctor-operating-room.jpg"
                  fill
                  sizes="(max-width: 900px) 92vw, 44vw"
                  alt="د. عمر محمد ثروت داخل غرفة العمليات مع الفريق الطبي"
                  className="hero-image"
                  priority
                />
                <div className="hero-image-shade" aria-hidden="true" />
                <div className="hero-doctor-card">
                  <span className="status-dot" aria-hidden="true" />
                  <span>
                    <strong>{clinic.doctor.name}</strong>
                    <small>{clinic.doctor.specialty}</small>
                  </span>
                </div>
                <div className="hero-monogram" aria-hidden="true">S</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="trust-strip" aria-label="معلومات سريعة عن العيادة">
          <div className="container trust-grid">
            <div className="trust-item">
              <span className="trust-icon"><Star size={22} aria-hidden="true" /></span>
              <span><strong>{clinic.rating.value}</strong><small>{clinic.rating.reviews} — {clinic.rating.note}</small></span>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><MapPin size={22} aria-hidden="true" /></span>
              <span><strong>الشيخ زايد</strong><small>Twin Towers — المبنى C</small></span>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><MessageCircle size={22} aria-hidden="true" /></span>
              <span><strong>حجز مباشر</strong><small>واتساب أو مكالمة تليفون</small></span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <Reveal>
              <div id="services-title">
                <SectionHeading
                  eyebrow="رعاية تناسب احتياجك"
                  title="خدماتنا"
                  description="نبدأ دائمًا بفهم الحالة ومناقشة الاختيارات بوضوح قبل أي إجراء علاجي."
                />
              </div>
            </Reveal>
            <div className="services-grid">
              {clinic.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <Reveal key={service.title} delay={index * 90}>
                    <article className="service-card">
                      <div className="service-topline">
                        <span className="service-icon"><Icon size={25} aria-hidden="true" /></span>
                        <span className="service-number">{service.number}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                        اسأل عن الخدمة <ArrowUpLeft size={17} aria-hidden="true" />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section doctor-section" id="doctor" aria-labelledby="doctor-title">
          <div className="container doctor-grid">
            <Reveal className="doctor-image-wrap">
              <div className="doctor-image-frame">
                <Image
                  src="/images/doctor-operating-room.jpg"
                  fill
                  sizes="(max-width: 900px) 92vw, 48vw"
                  alt="د. عمر محمد ثروت مع الفريق الطبي داخل غرفة العمليات"
                  className="doctor-image"
                />
              </div>
              <div className="doctor-experience-badge">
                <BadgeCheck size={24} aria-hidden="true" />
                <span>خبرة متخصصة<br />ورعاية شخصية</span>
              </div>
            </Reveal>

            <Reveal className="doctor-copy" delay={100}>
              <p className="eyebrow">اعرف طبيبك</p>
              <h2 id="doctor-title">{clinic.doctor.name}</h2>
              <p className="doctor-role">{clinic.doctor.specialty} · {clinic.doctor.role}</p>
              <p>
                هدفنا إن الزيارة تبدأ بفهم واضح لحالتك وتنتهي بخطة مناسبة ليك.
                بنهتم بالتفاصيل، وبنشرح الاختيارات المتاحة قبل ما ناخد أي خطوة.
              </p>
              <ul className="doctor-values">
                <li><ShieldCheck size={20} aria-hidden="true" /> تقييم مهني لكل حالة</li>
                <li><ShieldCheck size={20} aria-hidden="true" /> شرح واضح للاختيارات</li>
                <li><ShieldCheck size={20} aria-hidden="true" /> متابعة واهتمام بالتفاصيل</li>
              </ul>
              <a className="text-link" href={contactLinks.doctorInstagram} target="_blank" rel="noreferrer">
                <Camera size={19} aria-hidden="true" /> تابع د. عمر على إنستجرام
                <ArrowUpLeft size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section results-section" id="results" aria-labelledby="results-title">
          <div className="container">
            <Reveal>
              <div id="results-title">
                <SectionHeading
                  eyebrow="تفاصيل صغيرة، فرق واضح"
                  title="نماذج من الحالات"
                  description="صور منشورة بواسطة العيادة. النتيجة تختلف من حالة للتانية ويحددها الفحص والتقييم."
                  tone="dark"
                />
              </div>
            </Reveal>
            <div className="results-grid">
              <Reveal className="result-card result-card-featured">
                <Image
                  src="/images/esthetic-restoration.jpg"
                  fill
                  sizes="(max-width: 800px) 92vw, 54vw"
                  alt="نموذج منشور لترميمات تجميلية بالـ composite"
                  className="result-image"
                />
                <div className="result-overlay">
                  <span>Esthetic restoration</span>
                  <strong>ترميمات تجميلية</strong>
                </div>
              </Reveal>
              <div className="result-stack">
                <Reveal className="result-card" delay={90}>
                  <Image
                    src="/images/veneers-crowns.jpg"
                    fill
                    sizes="(max-width: 800px) 92vw, 32vw"
                    alt="نموذج منشور لنتيجة veneers and crowns"
                    className="result-image"
                  />
                  <div className="result-overlay"><strong>Veneers & Crowns</strong></div>
                </Reveal>
                <Reveal className="result-card" delay={160}>
                  <Image
                    src="/images/full-mouth-makeover.jpg"
                    fill
                    sizes="(max-width: 800px) 92vw, 32vw"
                    alt="نموذج منشور لتحسين الابتسامة"
                    className="result-image"
                  />
                  <div className="result-overlay"><strong>Smile makeover</strong></div>
                </Reveal>
              </div>
            </div>
            <p className="results-disclaimer">
              الصور للاستخدام داخل النموذج المبدئي فقط، وتحتاج موافقة العيادة وأصحاب الحالات قبل النشر الرسمي.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <Reveal>
              <div id="faq-title">
                <SectionHeading
                  eyebrow="قبل زيارتك"
                  title="أسئلة شائعة"
                  description="إجابات سريعة تساعدك تبدأ، ولو عندك سؤال طبي الأفضل نقيّمه أثناء الكشف."
                />
              </div>
              <div className="faq-side-note">
                <span><Phone size={20} aria-hidden="true" /></span>
                <p>محتاج تسأل عن حاجة تانية؟<br /><strong>{clinic.phoneDisplay}</strong></p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FaqList items={clinic.faqs} />
            </Reveal>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-card">
            <div className="contact-pattern" aria-hidden="true">S</div>
            <Reveal className="contact-copy">
              <p className="eyebrow">جاهز تبدأ؟</p>
              <h2 id="contact-title">خلّي أول خطوة بسيطة.</h2>
              <p>ابعتلنا على واتساب، واحكيلنا باختصار محتاج مساعدة في إيه.</p>
              <div className="contact-actions">
                <a className="button button-gold button-large" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={20} aria-hidden="true" /> احجز موعدك
                </a>
                <a className="button button-ghost button-large" href={contactLinks.phone}>
                  <Phone size={19} aria-hidden="true" /> {clinic.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal className="location-card" delay={100}>
              <span className="location-pin"><MapPin size={26} aria-hidden="true" /></span>
              <p className="location-label">موقع العيادة</p>
              <h3>Twin Towers</h3>
              <p>{clinic.address}</p>
              <a href={contactLinks.maps} target="_blank" rel="noreferrer" aria-label="افتح الموقع على الخريطة">
                افتح الموقع على الخريطة <ArrowUpLeft size={17} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/images/clinic-logo.jpg" width={64} height={64} alt="شعار S Clinics" />
            <div><strong>S Clinics</strong><small>One smile at a time.</small></div>
          </div>
          <p>رعاية أسنان متخصصة في قلب الشيخ زايد.</p>
          <div className="footer-links">
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer" aria-label="إنستجرام S Clinics"><Camera size={20} aria-hidden="true" /></a>
            <a href={contactLinks.phone} aria-label="اتصل بـ S Clinics"><Phone size={20} aria-hidden="true" /></a>
            <a href={contactLinks.maps} target="_blank" rel="noreferrer" aria-label="موقع S Clinics على الخريطة"><MapPin size={20} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 S Clinics — نموذج مبدئي</span>
          <span>المعلومات الطبية لا تغني عن الكشف.</span>
        </div>
      </footer>

      <a className="mobile-booking-bar" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={20} aria-hidden="true" /> احجز على واتساب
      </a>
    </div>
  );
}
