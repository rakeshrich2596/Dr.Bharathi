import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  path,
}) {
  const siteUrl = "https://YOUR-DOMAIN.com";
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:type"
        content="website"
      />
    </Helmet>
  );
}