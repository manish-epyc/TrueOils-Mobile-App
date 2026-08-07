# TrueOils App — Learning Project Plan

## Purpose
Learning project to build a React Native e-commerce app on top of Shopify, modeled after the trueoils.in store. This app is **not** connected to the live trueoils.in Shopify store — it uses a separate Shopify Partner **development store** so nothing here can affect the client's production site.

## Data source
- Shopify **Storefront API** (GraphQL), not scraping the live site.
- Product/collection data seeded into the dev store via CSV import (Admin → Products → Import) using an export from trueoils.in.
  - CSV import is one-way (file → dev store only) — cannot write back to the live store.
  - Import must be run while logged into the **dev store's** admin, not the live store's.
- Storefront API access token generated from a custom app scoped to the dev store only (Settings → Apps → Develop apps).

## Stack
- Expo (React Native) + TypeScript
- React Navigation
- GraphQL client (urql or Apollo) → Shopify Storefront API
- Zustand for cart/session state
- `react-native-webview` for checkout (Shopify hosted checkout via WebView)

## v1 Screens
1. Home — featured collections/products
2. Product listing — by collection, basic search
3. Product detail — variants, images, add to cart
4. Cart
5. Checkout — WebView → Shopify hosted checkout, deep-link back into app on completion
6. Login/Signup — Shopify Customer Account API
7. Account — profile, order history, addresses

## Build order
1. Scaffold Expo app (TypeScript) + folder structure
2. Create Shopify dev store (Partner Dashboard), import product CSV, generate Storefront API token
3. Storefront API client + env config (dev store domain + token)
4. Home & Product Listing screens (fetch products/collections)
5. Product Detail + cart state (Zustand) + Cart screen
6. WebView checkout flow + return-to-app handling
7. Customer Account API — login/signup/account screens
8. Polish: loading/error states, image caching, pull-to-refresh

## Guardrails
- Never use trueoils.in store domain or API tokens in this app's config.
- All API credentials point to the Shopify Partner dev store only.
- If the app is ever pointed at the live store, that must be an explicit, deliberate decision — not a default.
