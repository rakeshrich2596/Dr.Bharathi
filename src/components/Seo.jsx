
import { Helmet } from "react-helmet-async";

// Replace with the confirmed production domain.
const SITE_URL = "https://drbharati.netlify.app";

// true = staging/test website
// false = production website
const IS_TEST_SITE = true;

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  imageAlt = "Bharati Fertility & Women Center",
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

      {/* Canonical - Production only */}
      {!IS_TEST_SITE && (
        <link
          rel="canonical"
          href={canonicalUrl}
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:type" content="website" />

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
            name="twitter:image"
            content={imageUrl}
          />
        </>
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
