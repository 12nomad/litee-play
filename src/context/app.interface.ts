import { Dispatch } from "react";

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export interface IAppContext {
  games: IGame[];
  platforms: IPlatform[];
  genres: IGenre[];
  dispatch: Dispatch<TAppAction>;
  loading: boolean;
  genresLoading: boolean;
  platformsLoading: boolean;
  error?: string;
  genresError?: string;
  platformsError?: string;
  genreFilterId?: number;
  platformFilterId?: number;
  genreFilterName?: string;
  platformFilterName?: string;
  platformSortValue?: string;
  searchValue?: string;
}

interface IGetGamesAction {
  type: "GET_GAMES";
  payload: { games: IGame[] };
}

interface IGetGenresAction {
  type: "GET_GENRES";
  payload: { genres: IGenre[] };
}

interface ISetError {
  type: "SET_ERROR";
  payload: { error: string };
}

interface ISetLoading {
  type: "SET_LOADING";
  payload: { loading: boolean };
}

interface ISetGenresError {
  type: "SET_GENRES_ERROR";
  payload: { error: string };
}

interface ISetGenresLoading {
  type: "SET_GENRES_LOADING";
  payload: { loading: boolean };
}

interface ISetPlatformsError {
  type: "SET_PLATFORMS_ERROR";
  payload: { error: string };
}

interface ISetPlatformsLoading {
  type: "SET_PLATFORMS_LOADING";
  payload: { loading: boolean };
}

interface ISetGenreFilter {
  type: "SET_GENRE_FILTER";
  payload: { id: number; name: string };
}

interface ISetPlatformFilter {
  type: "SET_PLATFORM_FILTER";
  payload: { id: number; name: string };
}

interface ISetPlatformSortValue {
  type: "SET_PLATFORM_SORT_VALUE";
  payload: { value: string };
}

interface ISetSearchValue {
  type: "SET_SEARCH_VALUE";
  payload: { value: string };
}

interface IGetGamesPlatform {
  type: "GET_PLATFORMS";
  payload: { platforms: IPlatform[] };
}

export type TAppAction =
  | IGetGamesAction
  | ISetError
  | ISetLoading
  | IGetGenresAction
  | ISetGenreFilter
  | ISetGenresError
  | ISetGenresLoading
  | IGetGamesPlatform
  | ISetPlatformFilter
  | ISetPlatformsError
  | ISetPlatformsLoading
  | ISetPlatformSortValue
  | ISetSearchValue;
