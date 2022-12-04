export interface slickProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
}

export interface bannerProps {
  image: string;
  name: string;
  title: string;
  text: string;
  type: string;
}

export interface iconProps {
  image: string;
  name: string;
  path: string;
}

export interface cardProps {
  image: string;
  name: string;
}

export interface itemsProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface dataProps {
  data: itemsProps[];
  category?: string;
}

export interface itemProps {
  data: itemsProps;
  category?: string;
}
