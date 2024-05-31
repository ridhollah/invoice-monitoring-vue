// import * as XLSX from "xlsx-js-style";
const Export = {
  // export csv
  exportCsv(data, judul) {
    const datas = data;
    const csvContent = this.convertToSCV(datas);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", judul);
    link.click();
  },
  convertToSCV(data) {
    const header = Object.keys(data[0]);
    const rows = data.map((obj) => header.map((h) => obj[h]));
    const headerRow = header.join(",");
    const csvRows = [headerRow, ...rows.map((row) => row.join(","))];
    return csvRows.join("\n");
  },
  // export excel
  exportExcels(datas) {
    import("@/services/Export2Excel").then((excel) => {
      const header = this.convertToExcel(datas);
      const field = this.convertToExcel(datas);
      const data = this.formatJsonExcel(field, datas);
      excel.export_json_to_excel({
        header: header,
        data: data,
        sheetName: `LAPORAN TRANSAKSI`,
        filename: `LAPORAN TRANSAKSI`,
        autoWidth: true,
        bookType: "xlsx",
      });
    });
  },
  convertToExcel(data) {
    const headerField = Object.keys(data[0]);
    return headerField;
  },
  formatJsonExcel(filterData, jsonData) {
    return jsonData.map((v) =>
      filterData.map((j) => {
        return v[j];
      })
    );
  },
  // exportExcels(data) {
  //   // Membuat worksheet dari data
  //   const ws = XLSX.utils.json_to_sheet(data);

  //   // Membuat workbook dan menambahkan worksheet
  //   const wb = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  //   // Menulis workbook ke buffer
  //   const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  //   // Membuat Blob dari buffer
  //   const blob = new Blob([wbout], { type: "application/octet-stream" });

  //   // Membuat URL dari Blob dan membuat link untuk download
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "tes.xlsx");
  //   link.click();
  // },
};

export default Export;
