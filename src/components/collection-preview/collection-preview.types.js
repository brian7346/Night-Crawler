//@flow
export type TCollectionPreviewProps = {
  title: string,
  items: TShopItem[],
};

export type TShopItem = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
};
