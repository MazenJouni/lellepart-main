import ogImageSrc from "@images/icon.svg";


export const SITE = {
  title: "Lellepart Apartmanház",
  tagline: "Kiadó apartmanok a Balaton partján!",
  description: "Kiadó apartmanok a Balaton partján!",
  description_short: "Kiadó apartmanok a Balaton partján!",
  url: "https://lellepart.hu",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Kiadó apartmanok a Balaton partján!`,
  description: "Kiadó apartmanok a Balaton partján!",
  image: ogImageSrc,
};
