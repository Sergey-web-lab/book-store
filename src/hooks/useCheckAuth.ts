import { useAppSelector } from "./reactReduxHooks";

export function useCheckAuth() {
  const userData = useAppSelector(state => state.user.isAuth);

  return {
    isAuth: userData
  }
}