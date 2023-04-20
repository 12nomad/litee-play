import { IAppContext, TAppAction } from "./app.interface";

export const initialState: IAppContext = {
  games: [],
  platforms: [],
  genres: [],
  loading: false,
  genresLoading: false,
  platformsLoading: false,
  dispatch: () => {
    return;
  },
};

const appReducer = (state = initialState, action: TAppAction): IAppContext => {
  const { type, payload } = action;

  switch (type) {
    case "GET_GAMES":
      return { ...state, games: payload.games };

    case "GET_GENRES":
      return { ...state, genres: payload.genres };

    case "GET_PLATFORMS":
      return { ...state, platforms: payload.platforms };

    case "SET_GENRE_FILTER":
      return {
        ...state,
        genreFilterId: payload.id,
        genreFilterName: payload.name,
      };

    case "SET_PLATFORM_FILTER":
      return {
        ...state,
        platformFilterId: payload.id,
        platformFilterName: payload.name,
      };

    case "SET_PLATFORM_SORT_VALUE":
      return { ...state, platformSortValue: payload.value };

    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: payload.value };

    case "SET_ERROR":
      return { ...state, error: payload.error };

    case "SET_LOADING":
      return { ...state, loading: payload.loading };

    case "SET_GENRES_ERROR":
      return { ...state, genresError: payload.error };

    case "SET_GENRES_LOADING":
      return { ...state, genresLoading: payload.loading };

    case "SET_PLATFORMS_ERROR":
      return { ...state, platformsError: payload.error };

    case "SET_PLATFORMS_LOADING":
      return { ...state, platformsLoading: payload.loading };

    default:
      return state;
  }
};

export default appReducer;
