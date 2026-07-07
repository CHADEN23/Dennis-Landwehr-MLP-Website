import {
  buildPersonSchema,
  buildWebSiteSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildFinancialServiceSchema,
} from "@/lib/schema";
import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/content/faqs";

describe("JSON-LD schema builders", () => {
  describe("buildPersonSchema", () => {
    it("returns valid Person schema", () => {
      const schema = buildPersonSchema();
      expect(schema["@type"]).toBe("Person");
      expect(schema.name).toBe(siteConfig.name);
      expect(schema.email).toBe(siteConfig.email);
      expect(schema.jobTitle).toBe(siteConfig.professionalTitle);
    });

    it("does not contain empty values for critical fields", () => {
      const schema = buildPersonSchema();
      expect(schema.name).not.toBe("");
      expect(schema.name).toBeTruthy();
      expect(schema.email).not.toBe("");
    });
  });

  describe("buildWebSiteSchema", () => {
    it("returns valid WebSite schema", () => {
      const schema = buildWebSiteSchema();
      expect(schema["@type"]).toBe("WebSite");
      expect(schema.url).toContain("https://");
    });
  });

  describe("buildBreadcrumbSchema", () => {
    it("creates breadcrumb with correct positions", () => {
      const items = [
        { name: "Startseite", href: "/" },
        { name: "Leistungen", href: "/leistungen" },
      ];
      const schema = buildBreadcrumbSchema(items);
      expect(schema["@type"]).toBe("BreadcrumbList");
      const list = schema.itemListElement as Array<{ position: number; name: string }>;
      expect(list[0].position).toBe(1);
      expect(list[1].position).toBe(2);
      expect(list[0].name).toBe("Startseite");
    });
  });

  describe("buildFaqSchema", () => {
    it("returns null for empty faqs", () => {
      const schema = buildFaqSchema([]);
      expect(schema).toBeNull();
    });

    it("creates FAQ schema for given questions", () => {
      const faqs: FaqItem[] = [
        {
          id: "test-1",
          question: "Testfrage?",
          answer: "Testantwort.",
        },
      ];
      const schema = buildFaqSchema(faqs);
      expect(schema).not.toBeNull();
      expect(schema!["@type"]).toBe("FAQPage");
      const entities = schema!.mainEntity as Array<{ "@type": string; name: string }>;
      expect(entities[0]["@type"]).toBe("Question");
      expect(entities[0].name).toBe("Testfrage?");
    });
  });

  describe("buildFinancialServiceSchema", () => {
    it("returns FinancialService schema with address", () => {
      const schema = buildFinancialServiceSchema();
      expect(schema["@type"]).toBe("FinancialService");
      const address = schema.address as { addressLocality: string };
      expect(address.addressLocality).toBe(siteConfig.address.city);
    });
  });
});
