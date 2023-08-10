import { IAppContext, TAppAction } from "./app.interface";

export const initialState: IAppContext = {
  dispatch: () => {
    return;
  },
};

const appReducer = (state = initialState, action: TAppAction): IAppContext => {
  const { type, payload } = action;

  switch (type) {
    case "SET_GENRE_FILTER":
      return {
        ...state,
        genreFilterId: payload.id,
        genreFilterName: payload.name,
        searchValue: undefined,
      };

    case "SET_PLATFORM_FILTER":
      return {
        ...state,
        platformFilterId: payload.id === -1 ? undefined : payload.id,
        platformFilterName: payload.name === "all" ? undefined : payload.name,
      };

    case "SET_PLATFORM_SORT_VALUE":
      return { ...state, platformSortValue: payload.value };

    case "SET_SEARCH_VALUE":
      return {
        ...state,
        searchValue: payload.value,
        genreFilterId: undefined,
        genreFilterName: undefined,
      };

    default:
      return state;
  }
};

export default appReducer;
