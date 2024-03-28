import Vue from "vue";
import moment from "moment";
// import "moment-timezone";
// var idLocale = require("moment/locale/id");

moment.locale("id");

Vue.filter("formatDt2", function (value) {
  if (
    value === "0000-00-00" ||
    value === null ||
    value === "none" ||
    value === "0000-00-00 00:00:00" ||
    value === "-" ||
    value === ""
  ) {
    return "-";
  } else {
    return moment(value).format("DD/MM/Y");
  }
});
