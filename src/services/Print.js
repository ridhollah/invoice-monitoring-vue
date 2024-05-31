const Print = {
  printLaporan(refs) {
    var contents = refs;
    let frame1 = document.createElement("iframe");
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    let frameDoc = frame1.contentWindow
      ? frame1.contentWindow
      : frame1.contentDocument.document
      ? frame1.contentDocument.document
      : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html lang="en"><head><title>Print PDF</title>');
    frameDoc.document.write(
      '<link rel="stylesheet" href="http://dp.suzuyagroup.com/css/bootstrap.css"/>'
    );
    frameDoc.document.write("</head><body>");
    frameDoc.document.write(contents.outerHTML);
    frameDoc.document.write("</body></html>");
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["frame1"].focus();
      window.frames["frame1"].print();
      document.body.removeChild(frame1);
    }, 500);
    return false;
  },
  printInvoice(refs) {
    var contents = refs;
    let frame1 = document.createElement("iframe");
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    let frameDoc = frame1.contentWindow
      ? frame1.contentWindow
      : frame1.contentDocument.document
      ? frame1.contentDocument.document
      : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html lang="en"><head><title>Print</title>');
    frameDoc.document.write(
      '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/invoice.css"/>',
      '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/bootstrap.css"/>'
    );
    frameDoc.document.write("</head><body>");
    frameDoc.document.write(contents.outerHTML);
    frameDoc.document.write("</body></html>");
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["frame1"].focus();
      window.frames["frame1"].print();
      document.body.removeChild(frame1);
    }, 500);
    return false;
  },
  printSuratJalan(refs) {
    var contents = refs;
    let frame1 = document.createElement("iframe");
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    let frameDoc = frame1.contentWindow
      ? frame1.contentWindow
      : frame1.contentDocument.document
      ? frame1.contentDocument.document
      : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html lang="en"><head><title>Print</title>');
    frameDoc.document.write(
      // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/invoice.css"/>',
      // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/bootstrap.css"/>'
      '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/invoice.css"/>',
      '<link rel="stylesheet" href="https://dp.suzuyagroup.com/css/bootstrap.css"/>'
    );
    frameDoc.document.write("</head><body>");
    frameDoc.document.write(contents.outerHTML);
    frameDoc.document.write("</body></html>");
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["frame1"].focus();
      window.frames["frame1"].print();
      document.body.removeChild(frame1);
    }, 500);
    return false;
  },
  printCashCount(refs) {
    var contents = refs;
    let frame1 = document.createElement("iframe");
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    let frameDoc = frame1.contentWindow
      ? frame1.contentWindow
      : frame1.contentDocument.document
      ? frame1.contentDocument.document
      : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html lang="en"><head><title>Printe</title>');
    frameDoc.document.write(
      '<link rel="stylesheet" href="http://dp.suzuyagroup.com/css/setorankasir.css"/>'
    );
    frameDoc.document.write("</head><body>");
    frameDoc.document.write(contents.outerHTML);
    frameDoc.document.write("</body></html>");
    frameDoc.document.close();
    setTimeout(function () {
      window.frames["frame1"].focus();
      window.frames["frame1"].print();
      document.body.removeChild(frame1);
    }, 500);
    return false;
  },
};

export default Print;
