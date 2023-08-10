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
  slug: string;
  description: string;
  genres: IGenre[];
  publishers: IPublisher[];
  released: string;
}

export interface ITrailer {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
}

export interface IScreenShot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface IPublisher {
  id: number;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export interface IAppContext {
  dispatch: Dispatch<TAppAction>;
  genreFilterId?: number;
  platformFilterId?: number;
  genreFilterName?: string;
  platformFilterName?: string;
  platformSortValue?: string;
  searchValue?: string;
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

export type TAppAction =
  | ISetGenreFilter
  | ISetPlatformFilter
  | ISetPlatformSortValue
  | ISetSearchValue;
