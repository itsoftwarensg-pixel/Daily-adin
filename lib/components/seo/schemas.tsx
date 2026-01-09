import React from "react";
import JsonLd from "@/lib/components/common/json-ld";
import { SITE_CONFIG } from "@/lib/config/site-config";

const BASE_URL = SITE_CONFIG.url;
const LOGO_URL = SITE_CONFIG.logo;

interface OrganizationSchemaProps {
  name?: string;
  alternateName?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name = SITE_CONFIG.name,
  alternateName = SITE_CONFIG.alternateName,
  url = SITE_CONFIG.url,
  logo = SITE_CONFIG.logo,
  sameAs = Object.values(SITE_CONFIG.socialLinks),
}) => {
  const data = {
    "@context": "https://schema.org/",
    "@type": "NewsMediaOrganization",
    name: name,
    url: url,
    logo: logo,
    alternateName: alternateName,
    sameAs: sameAs,
    foundingDate: SITE_CONFIG.foundingDate,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.contact.phone,
        contactType: "customer service",
      },
    ],
    email: `mailto:${SITE_CONFIG.contact.email}`,
    telephone: SITE_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
      addressRegion: SITE_CONFIG.address.region,
    },
  };

  return <JsonLd data={data} />;
};

export const LocalBusinessSchema: React.FC = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: LOGO_URL,
    "@id": LOGO_URL,
    url: BASE_URL,
    telephone: SITE_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
      addressRegion: SITE_CONFIG.address.region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    priceRange: "৳৳",
  };

  return <JsonLd data={data} />;
};

interface BreadcrumbItem {
  name: string;
  item: string;
}

export const BreadcrumbSchema: React.FC<{ items: BreadcrumbItem[] }> = ({
  items,
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http")
        ? item.item
        : `${BASE_URL}${item.item}`,
    })),
  };

  return <JsonLd data={data} />;
};

interface ArticleSchemaProps {
  headline: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl: string;
  description: string;
  articleSection?: string;
  keywords?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  image,
  url,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  description,
  articleSection,
  keywords,
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: headline,
    image: {
      "@type": "ImageObject",
      url: image,
      width: "1200",
      height: "675",
    },
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    datePublished: datePublished,
    dateModified: dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${BASE_URL}${url}`,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    author: [
      {
        "@type": "Person",
        name: authorName,
        url: authorUrl.startsWith("http")
          ? authorUrl
          : `${BASE_URL}${authorUrl}`,
      },
    ],
    description: description,
    articleSection: articleSection,
    keywords: keywords,
    isAccessibleForFree: true,
  };

  return <JsonLd data={data} />;
};
