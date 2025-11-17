import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, canonical }) => {
  const siteName = "Lotterycompare - Online Lottery Platform";
  const defaultDescription = "Play online lottery games, participate in contests, and win big prizes. Secure, fair, and exciting lottery experience.";
  const defaultKeywords = "online lottery, lottery games, lottery contest, win prizes, online gaming";
  
  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title || siteName} />
      <meta property="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Lotterycompare" />
    </Helmet>
  );
};

export default SEO;

