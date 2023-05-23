import React from "react";
import dayjs from "dayjs";

const PeriodDateTime = ({ createdDate, period }) => {
  const now = dayjs();
  const periodDate = dayjs(createdDate).add(period, "day");
  const isToday = now.isSame(periodDate, "day");

  const formatTime = (periodDate) => {
    return periodDate.format("HH시 MM분");
  };

  const FormatDate = (periodDate) => {
    return periodDate.format("M월 D일");
  };

  const showPeriod = (periodDate) => {
    if (isToday) {
      return `오늘 ${formatTime(periodDate)}`;
    } else {
      return FormatDate(periodDate);
    }
  };

  return <>{showPeriod(periodDate)}</>;
};

export default PeriodDateTime;
