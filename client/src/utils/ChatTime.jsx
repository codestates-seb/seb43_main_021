import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import ko from "dayjs/locale/ko";

dayjs.locale(ko);

const ChatTime = ({ now }) => {
  const formatTime = dayjs(now).format("A hh:mm");

  return <div>{formatTime}</div>;
};

export default ChatTime;
