import apisauce from "apisauce";
import { asyncLocalStorage } from "./LocalStorage";
import { ApiResponse } from "../Models";

const url = {
  baseUrl: "https://jsonplaceholder.typicode.com",
};

const api = apisauce.create({
  baseURL: url.baseUrl,
  timeout: 3000,
});

const getUserToken = async (): Promise<string> => {
  return await asyncLocalStorage.get("user_token");
};

export async function get<T>(
  url: string,
  isAuthenticated = false
): Promise<ApiResponse<T>> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.get(url);
  return response.data as ApiResponse<T>;
}

export async function post<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse<T>> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.post(url, data);
  return response.data as ApiResponse<T>;
}

export async function put<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse<T>> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.put(url, data);
  return response.data as ApiResponse<T>;
}

export async function patch<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse<T>> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.patch(url, data);
  return response.data as ApiResponse<T>;
}

export async function remove<T>(
  url: string,
  isAuthenticated = false
): Promise<ApiResponse<T>> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.get(url);
  return response.data as ApiResponse<T>;
}
