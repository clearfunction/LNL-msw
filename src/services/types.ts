export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  actors: string[];
}

export interface Movies {
  movies: Movie[];
  count: number;
  message: string;
}

export interface ServiceResult {
  success: boolean;
  err: string | undefined;
}