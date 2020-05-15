//@flow
export type TShopItem = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
};

export type TCollectionPreviewProps = {
  title: string,
  items: TShopItem[],
};
