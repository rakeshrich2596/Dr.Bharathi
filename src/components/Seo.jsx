
import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/images/Dr.%20Bharathi_Logo.png",
}) {
  // Hosting person domain confirm pannum varai null
  const siteUrl = null;

  // Canonical URL only generate when actual domain is confirmed
  const canonicalUrl = siteUrl
    ? `${siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`
    : null;

  const imageUrl =
    siteUrl && image
      ? image.startsWith("http")
        ? image
        : `${siteUrl.replace(/\/$/, "")}${image.startsWith("/") ? image : `/${image}`}`
      : null;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      {/* Canonical URL */}
      {canonicalUrl && (
        <link
          rel="canonical"
          href={canonicalUrl}
        />
      )}

      {/* Open Graph / WhatsApp / Facebook */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="Dr. V. Bharathi"
      />

      {canonicalUrl && (
        <meta
          property="og:url"
          content={canonicalUrl}
        />
      )}

      {imageUrl && (
        <meta
          property="og:image"
          content={imageUrl}
        />
      )}

      {/* Twitter Preview */}
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

      {imageUrl && (
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      )}
    </Helmet>
  );
}
