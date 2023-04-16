import axios from "axios";
import useSWR from "swr";
import { immutable } from "swr/immutable";
import { HOST } from "../strings/index";
const URL = HOST + "/news";
const fetcher = async (url) => axios.get(URL).then((res) => res.data);

export const useBerita = () => {
  const {
    data: berita,
    mutate,
    error: beritaErrorLoading,
  } = useSWR(URL, fetcher, { use: [immutable] });
  const beritaLoading = !berita && !beritaErrorLoading;
  return {
    beritaLoading,
    beritaErrorLoading,
    berita: berita?.data,
    mutate,
  };
};
export default useBerita;
