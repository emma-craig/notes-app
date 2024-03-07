export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    alt: string;
    avg_color: string;
    liked:boolean;
    src: {
      landscape: string;
      large: string;
      large2x: string;
      medium: string;
      original: string;
      portrait: string;
      small: string;
      tiny: string
    }
  }

export interface responseType {
    per_page: number;
    page: number;
    next_page: number;
    photos: Photo[];
    total_results: number;
}

