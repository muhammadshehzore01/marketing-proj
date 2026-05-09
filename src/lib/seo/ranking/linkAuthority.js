// /home/shahrukh-eng/marketing-proj/src/lib/seo/ranking/linkAuthority.js
import { buildInternalLinks } from "../internalLinks";

export function getAuthorityLinks(country) {
  const links = buildInternalLinks(country);

  return {
    primary: links.serviceLinks,
    secondary: links.productLinks,
    geo: links.cityLinks,
  };
}