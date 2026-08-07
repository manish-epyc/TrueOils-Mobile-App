import { createClient, fetchExchange, cacheExchange } from 'urql';
import { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_TOKEN } from '@env';

const STOREFRONT_API_VERSION = '2024-10';

export const shopifyClient = createClient({
  url: `https://${SHOPIFY_STORE_DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => ({
    headers: {
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN ?? '',
      'Content-Type': 'application/json',
    },
  }),
});
