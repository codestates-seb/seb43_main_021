import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../stores/atoms";

const useAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    if (accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [accessToken, setLogin]);

  return login;
};

export default useAccessToken;
