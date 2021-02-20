export default interface ApiResponse<T> {
  errorMessage?: string;
  responseCode?: number;
  data?: T;
}
