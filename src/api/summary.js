import React, { useMemo } from "react";
import axios from "axios";
import useSWR from "swr";
import { HOST } from "../strings/index";
export const useSummary = () => {
  const { data, mutate, error } = useSWR(`${HOST}/wakaf/summary`, (key) =>
    axios.get(key).then((res) => res.data),
  );
  const loading = !data && !error;
  return {
    loading,
    error,
    data: data?.data,
    mutate,
  };
};
export default useSummary;
