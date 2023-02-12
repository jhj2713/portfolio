export interface ISwiperItem {
  item: {
    title: string;
    description: string[];
    color: string;
    dates?: string[];
    tags: string[];
    imageUrl: string;
  };
  idx: number;
  handleDetail: (idx: number) => void;
}
