import axios from "axios";
import useSWR from "swr";
import { immutable } from "swr/immutable";
import { HOST } from "../strings/index";
const URL = HOST + "/asset";
const fetcher = async (url) => axios.get(URL).then((res) => res.data);

export const useAsset = () => {
  const {
    data: asset,
    mutate,
    error: assetErrorLoading,
  } = useSWR(URL, fetcher, { use: [immutable] });
  const assetLoading = !asset && !assetErrorLoading;
  return {
    assetLoading,
    assetErrorLoading,
    asset: asset?.data,
    mutate,
  };
};
export default useAsset;
