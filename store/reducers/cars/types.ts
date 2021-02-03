export interface ICar {
  id: string;
  make: string;
  model: string;
  year: number;
}
export interface IMeta {
  page: number;
  per_page: number;
  total_items?: number;
}
export interface ICarsState {
  _metadata: IMeta;
  items: ICar[];
  loading: boolean;
  error: IError;
}

export interface IError {
  message: string;
}
