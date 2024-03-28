import Vue from "vue";
Vue.filter("Rupiah", function (money) {
  if (
    money == null ||
    money == "" ||
    money == 0 ||
    money == "0" ||
    money == "0.00"
  ) {
    return "Rp. 0";
  } else {
    return new Intl.NumberFormat(
      "id-ID",
      { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }
});

Vue.filter("Rupiah2", function (value) {
  if (
    value == null ||
    value == "" ||
    value == 0 ||
    value == "0" ||
    value == "0.00"
  ) {
    return "0";
  } else {
    let rupiahFormat = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return rupiahFormat;
  }
});
