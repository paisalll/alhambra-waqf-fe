export const mapDetailWakaf = (detailwakaf) => {
  return detailwakaf.map((item) => ({
    id: item.id,
    detail: item.detail,
    title: item.title,
  }));
};

export default mapDetailWakaf;
