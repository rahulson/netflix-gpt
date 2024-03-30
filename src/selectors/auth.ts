import { createSelector } from "reselect";
import { IRootState } from "../store/store";
import { isEmpty } from "../utils/validate";

const getAuth = (state: IRootState) => state.user;

export const getAuthInfo = createSelector([getAuth], (data) => data);

const isLoggedIn = (state: IRootState) => {
  const auth = getAuth(state);
  return !isEmpty(auth.token);
};

export const isUserLoggedIn = createSelector([isLoggedIn], (data) => data);
