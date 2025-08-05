import React from 'react';

export function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GREAT Coaching",
    "description": "Professional tuition centre offering personalized learning support for students in Ireland",
    "url": "https://coaching-website-a97d.vercel.app",
    "logo": "https://coaching-website-a97d.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE",
      "addressRegion": "Ireland"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+353-87-270-9930",
        "contactType": "customer service",
        "name": "Garima Gupta"
      },
      {
        "@type": "ContactPoint", 
        "telephone": "+353-87-287-3200",
        "contactType": "customer service",
        "name": "Patrick"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+353-89-275-5350", 
        "contactType": "customer service",
        "name": "Febi"
      }
    ],
    "email": "greattuitioncentre@gmail.com",
    "openingHours": [
      "Tu 16:00-18:00",
      "Sa 10:00-12:00"
    ],
    "serviceType": "Educational Services",
    "areaServed": "Ireland"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 