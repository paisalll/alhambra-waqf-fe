import React, { useMemo } from "react";
import axios from "axios";
import useSWR from "swr";

export const useWakafById = (id_wakaf) => {
  const { data, mutate, error } = useSWR(
    id_wakaf ? `https://wakafalhambra.xyz/wakaf/` + id_wakaf : null,
    (key) => axios.get(key).then((res) => res.data),
  );
  const loading = !data && !error;
  return {
    loading,
    error,
    data,
    mutate,
  };
};
export default useWakafById;
