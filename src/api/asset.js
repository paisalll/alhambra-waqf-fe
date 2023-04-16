import axios from "axios";
import useSWR from "swr";
import { immutable } from "swr/immutable";
import { HOST } from "../strings/index";
const URL = HOST + "/asset";
const fetcher = async (url) => axios.get(URL).then((res) => res.data);

export const useAsset = () => {
  const { data, mutate, error: assetErrorLoading } = useSWR(URL, fetcher, { use: [immutable] });
  const assetLoading = !data && !assetErrorLoading;
  return {
    assetLoading,
    assetErrorLoading,
    data: data?.data,
    mutate,
  };
};
export default useAsset;
