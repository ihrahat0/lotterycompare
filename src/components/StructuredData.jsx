import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'Organization', data }) => {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lotterycompare",
    "description": "Online lottery platform offering secure and fair gaming experience",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/images/logo/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/Lotterycompare",
      "https://twitter.com/Lotterycompare",
      "https://instagram.com/Lotterycompare"
    ]
  });

  const getWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lotterycompare",
    "url": "https://yourdomain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  const getBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  });

  let schema;
  switch (type) {
    case 'Organization':
      schema = getOrganizationSchema();
      break;
    case 'WebSite':
      schema = getWebSiteSchema();
      break;
    case 'Breadcrumb':
      schema = getBreadcrumbSchema(data);
      break;
    default:
      schema = data;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

