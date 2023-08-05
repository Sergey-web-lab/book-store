import { useSelector } from "react-redux";

export function useCheckAuth() {
  const userData = useSelector(state => state.user.isAuth);

  return {
    isAuth: userData
  }
}