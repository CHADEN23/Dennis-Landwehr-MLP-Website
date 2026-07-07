import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { homepageFaqs } from "@/content/faqs";

describe("siteConfig", () => {
  it("contains no empty placeholder values for critical fields", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.professionalTitle).toBeTruthy();
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.phone).toBeTruthy();
    expect(siteConfig.bookingUrl).toContain("https://");
    expect(siteConfig.mlpProfileUrl).toContain("https://");
    expect(siteConfig.address.city).toBeTruthy();
  });

  it("bookingUrl is a valid HTTPS URL", () => {
    expect(siteConfig.bookingUrl).toMatch(/^https:\/\//);
  });

  it("siteUrl is a valid HTTPS URL", () => {
    expect(siteConfig.siteUrl).toMatch(/^https:\/\//);
  });
});

describe("services", () => {
  it("all services have required fields", () => {
    for (const service of services) {
      expect(service.id).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.href).toMatch(/^\/leistungen\//);
      expect(service.ctaText).toBeTruthy();
      expect(service.highlights.length).toBeGreaterThan(0);
    }
  });

  it("contains exactly five services", () => {
    expect(services).toHaveLength(5);
  });
});

describe("homepageFaqs", () => {
  it("all FAQs have question and answer", () => {
    for (const faq of homepageFaqs) {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
      expect(faq.id).toBeTruthy();
    }
  });

  it("contains at least 6 FAQs", () => {
    expect(homepageFaqs.length).toBeGreaterThanOrEqual(6);
  });
});
