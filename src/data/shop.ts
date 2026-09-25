// Production web shop (plant-shop project).
export const SHOP_URL = "https://www.shop-plantcentar.com";

/** Link to a subcategory page in the web shop; the name must match the shop's subcategory exactly. */
export const shopSubcategoryUrl = (subcategory: string) =>
  `${SHOP_URL}/podkategorija/${encodeURIComponent(subcategory)}`;
