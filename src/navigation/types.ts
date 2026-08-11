export type RootStackParamList = {
  Home: undefined;
  ProductListing: { collectionHandle?: string } | undefined;
  ProductDetail: { productId: string };
  Cart: undefined;
  Search: undefined;
};
