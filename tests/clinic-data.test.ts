import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, clinic, contactLinks } from "@/data/clinic";

describe("clinic contact data", () => {
  it("keeps the verified clinic identity used by the page", () => {
    expect(clinic.name).toBe("S Clinics");
    expect(clinic.doctor.name).toBe("د. عمر محمد ثروت");
    expect(clinic.address).toContain("Twin Towers");
  });

  it("builds an encoded WhatsApp booking link", () => {
    const url = buildWhatsAppUrl("مرحبًا، أريد حجز موعد");

    expect(url).toBe(
      "https://wa.me/201117443355?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF",
    );
  });

  it("exposes valid phone and social destinations", () => {
    expect(contactLinks.phone).toBe("tel:+201117443355");
    expect(contactLinks.instagram).toBe(
      "https://www.instagram.com/s.clinics.cairo/",
    );
    expect(contactLinks.maps).toMatch(/^https:\/\/www\.google\.com\/maps\/search\//);
  });
});
