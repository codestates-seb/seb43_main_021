import dayjs from "dayjs";

const FormatDateTime = ({ dateTime }) => {
  const now = dayjs();
  const targetDateTime = dayjs(dateTime);
  const diff = now.diff(targetDateTime);

  const diffMinutes = Math.floor(diff / (60 * 1000));
  const diffHours = Math.floor(diff / (60 * 60 * 1000));
  const diffDays = Math.floor(diff / (24 * 60 * 60 * 1000));
  const diffWeeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
  const diffMonths = Math.floor(diff / (4.3 * 7 * 24 * 60 * 60 * 1000));

  if (diff > 1 && diff < 60 * 1000) {
    return "방금 전";
  } else if (diff < 60 * 60 * 1000) {
    return `${diffMinutes}분 전`;
  } else if (diff < 24 * 60 * 60 * 1000) {
    return `${diffHours}시간 전`;
  } else if (diff < 7 * 24 * 60 * 60 * 1000) {
    return `${diffDays}일 전`;
  } else if (diff < 4.3 * 7 * 24 * 60 * 60 * 1000) {
    return `${diffWeeks}주 전`;
  } else if (diff < 12 * 4.3 * 7 * 24 * 60 * 60 * 1000) {
    return `${diffMonths}달 전`;
  }
};

export default FormatDateTime;
