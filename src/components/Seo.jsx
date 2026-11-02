
import { Helmet } from "react-helmet-async";

// Production domain
const SITE_URL = "https://drbharatigynecologist.com";

// false = Production website
// true = Staging / Test website
const IS_TEST_SITE = false;

export default function Seo({
  // Basic SEO
  title,
  description,
  path = "/",

  // Open Graph - separate from Meta title and description
  ogTitle,
  ogDescription,
  ogType = "website",

  // Social sharing image
  image = "/og-image.png",
  imageAlt = "Dr. Bharathi V - Bharati Fertility & Women Center",

  // Structured data
  schema = null,
}) {
  const cleanSiteUrl = SITE_URL.replace(/\/$/, "");

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  const canonicalUrl = `${cleanSiteUrl}${cleanPath}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${cleanSiteUrl}${image.startsWith("/") ? image : `/${image}`}`
    : null;

  // Use separate OG values when provided
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Robots */}
      <meta
        name="robots"
        content={
          IS_TEST_SITE
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      {/* Canonical URL */}
      {!IS_TEST_SITE && (
        <link
          rel="canonical"
          href={canonicalUrl}
        />
      )}

      {/* Open Graph */}
      <meta
        property="og:title"
        content={finalOgTitle}
      />

      <meta
        property="og:description"
        content={finalOgDescription}
      />

      <meta
        property="og:type"
        content={ogType}
      />

      <meta
        property="og:site_name"
        content="Bharati Fertility & Women Center"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      {imageUrl && (
        <>
          <meta
            property="og:image"
            content={imageUrl}
          />

          <meta
            property="og:image:alt"
            content={imageAlt}
          />

          <meta
            property="og:image:width"
            content="1200"
          />

          <meta
            property="og:image:height"
            content="630"
          />
        </>
      )}

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={finalOgTitle}
      />

      <meta
        name="twitter:description"
        content={finalOgDescription}
      />

      {imageUrl && (
        <meta
          name="twitter:image"
          content={imageUrl}
        />
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
