// marketing-proj/src/lib/seo/engine/city/cityTitleEngine.js

import { customCityTitles } from "@/lib/seo/engine/seoVariationLayer";

export function generateCityTitle(keyword, city, country) {
  return (
    customCityTitles?.[city.name] ||
    `${keyword} systems in ${city.display}, ${country.name}`
  );
}