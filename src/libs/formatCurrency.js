// ================== format currency ==================

function formaterCurrency(item) {
  return item.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
  });
}

export default formaterCurrency;
