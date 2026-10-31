
import { Helmet } from "react-helmet-async";

// Current public website URL.
// Custom domain confirm aana apram indha value mattum update pannunga.
const SITE_URL = "https://drbharati.netlify.app";

// false = live website should be indexed
// true = test/staging website should NOT be indexed
const IS_TEST_SITE = true;

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  schema = null,
}) {
  const cleanSiteUrl = SITE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const canonicalUrl = `${cleanSiteUrl}${cleanPath}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${cleanSiteUrl}${image.startsWith("/") ? image : `/${image}`}`
    : null;

  const robotsContent = IS_TEST_SITE
    ? "noindex, nofollow"
    : "index, follow";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />

      {/* Canonical */}
      {!IS_TEST_SITE && (
  <link rel="canonical" href={canonicalUrl} />
)}

      {/* Open Graph - WhatsApp / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bharati Fertility & Women Center" />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && (
        <>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:alt" content="Dr. Bharathi V" />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {imageUrl && (
        <meta name="twitter:image" content={imageUrl} />
      )}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
