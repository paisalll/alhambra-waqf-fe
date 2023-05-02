// import axios from "axios";
// import useSWR from "swr";
// import { HOST } from "../strings/index";
// const URL = HOST + "/news";
// const fetcher = async (id_news) => id_news && (await axios.get(URL + id_news)).data;

// export const useBeritaSingleById = (id_news) => {
//   const { data, mutate, error: beritaSingleErrorLoading } = useSWR([URL, id_news], fetcher);

//   const payload = data?.values;

//   return {
//     beritaSingleErrorLoading,
//     data: payload,
//     mutate,
//   };
// };
// export default useBeritaSingleById;
import useSWR from "swr";
import axios from "axios";

export const useBeritaSingleById = (id_news) => {
  const { data, mutate, error } = useSWR(
    id_news ? `https://wakafalhambra.xyz/news/` + id_news : null,
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

export default useBeritaSingleById;
