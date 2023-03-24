import axios from "axios";
import useSWR from "swr";
import { immutable } from "swr/immutable";
import { HOST } from "../strings/index";
const URL = HOST + "/wakaf";
const fetcher = async (url) => axios.get(URL).then((res) => res.data);

export const useWakaf = () => {
  const {
    data: wakaf,
    mutate,
    error: wakafErrorLoading,
  } = useSWR(URL, fetcher, { use: [immutable] });
  const wakafLoading = !wakaf && !wakafErrorLoading;
  return {
    wakafLoading,
    wakafErrorLoading,
    wakaf: wakaf?.data,
    mutate,
  };
};
export default useWakaf;
