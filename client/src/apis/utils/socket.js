import socketIo from "socket.io-client";
import { useRecoilState } from "recoil";
import { socketState } from "../atoms";

export const initialSocket = socketIo("http://localhost:4000", {
  withCredentials: true,
});

const connectSocket = (setSocket) => {
  console.log("소켓 연결 됐다~~~~");
  setSocket(initialSocket);
};

const disConnectSocket = (setSocket) => {
  console.log("소켓 끊겼습니다~~~~~");
  setSocket(initialSocket);
};

export const useSocket = () => {
  const [socket, setSocket] = useRecoilState(socketState);

  if (!socket) {
    connectSocket(setSocket);
  }

  initialSocket.on("connect", () => {
    connectSocket(setSocket);
  });

  initialSocket.on("disconnect", () => {
    disConnectSocket(setSocket);
  });

  return socket;
};
