export const format = (input, withDashPostfix) => {
  const { withDashPostfix } = true;

  let payload = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(input));

  if (withDashPostfix) payload += ",-";

  return payload;
};
export default format;
