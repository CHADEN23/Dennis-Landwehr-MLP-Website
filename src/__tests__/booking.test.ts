import { getBookingUrl, getPhoneHref, getEmailHref } from "@/lib/booking";
import { siteConfig } from "@/config/site";

describe("booking utilities", () => {
  it("getBookingUrl returns configured URL", () => {
    const url = getBookingUrl();
    expect(url).toBe(siteConfig.bookingUrl);
    expect(url).toContain("https://");
    expect(url).not.toBe("");
  });

  it("getBookingUrl with source still returns valid URL", () => {
    const url = getBookingUrl("hero");
    expect(url).toBe(siteConfig.bookingUrl);
  });

  it("getPhoneHref returns correct tel link", () => {
    const href = getPhoneHref();
    expect(href).toMatch(/^tel:\+49/);
    expect(href).toContain(siteConfig.phone);
  });

  it("getEmailHref returns correct mailto link", () => {
    const href = getEmailHref();
    expect(href).toMatch(/^mailto:/);
    expect(href).toContain(siteConfig.email);
  });
});
