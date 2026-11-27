// ================== calculate discount percentage ==================

const calculateDiscountPercentage = (price, discountPercentage) => {
  const discounted = price - (price * discountPercentage) / 100;
  return Number(discounted.toFixed(2));
};

export default calculateDiscountPercentage;
