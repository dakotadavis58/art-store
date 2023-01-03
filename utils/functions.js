const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const formatToDollar = (value) => {
  return formatter.format(value);
};

export { formatToDollar };
