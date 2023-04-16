import axios from "axios";
import useSWR from "swr";
import { HOST } from "../strings/index";
const URL = HOST + "/wakaf";
const fetcher = async (id_wakaf) => id_wakaf && (await axios.get(URL + id_wakaf)).data;

export const useWakafById = (id_wakaf) => {
  const { data, mutate, error: beritaSingleErrorLoading } = useSWR([URL, id_wakaf], fetcher);

  const payload = data?.values;

  return {
    beritaSingleErrorLoading,
    data: payload,
    mutate,
  };
};
export default useWakafById;
