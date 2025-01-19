export const percentDis = (oldprice, price) => {
  return (((oldprice - price) / oldprice) * 100).toFixed(0);
};
