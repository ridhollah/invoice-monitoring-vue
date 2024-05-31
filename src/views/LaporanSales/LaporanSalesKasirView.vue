<template>
  <div class="card">
    <div class="card-body">
      <h5 class="fw-500 text-uppercase">Setoran Kasir</h5>
      <div class="divider"></div>
      <div class="card" style="width: 50%">
        <div class="card-body">
          <div class="form-group">
            <label for="exampleFormControlInput1">Outlet</label>
            <input
              style="font-size: 13px"
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="outlet"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama Kasir</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="nama"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Tanggal Setoran</label>
            <input
              style="font-size: 13px"
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="tglkasir"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nomor Mesin</label>
            <select
              class="form-select"
              aria-label="Default select example"
              style="font-size: 13px"
              v-model="nomesin"
            >
              <option value="0">Pilih</option>
              <option v-for="n in 100" :key="n" :value="n">
                {{ n < 10 ? "00" + n : n < 100 ? "0" + n : 100 }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Shift</label>
            <select
              class="form-select"
              aria-label="Default select example"
              style="font-size: 13px"
              v-model="shift"
            >
              <option value="0">Pilih</option>
              <option value="Pagi">Pagi</option>
              <option value="Malam">Malam</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Jumlah</label>
            <input
              style="font-size: 13px"
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="jumlah"
            />
          </div>
          <!-- <div class="form-group">
            <label for="exampleFormControlInput1">Terbilang</label>
            <input
              style="font-size: 13px"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              :value="jumlah | terbilang"
              disabled
            />
          </div> -->
          <button
            class="btn btn-primary btn-sm mt-2"
            style="width: 100% !important"
            @click="print"
          >
            Cetak
          </button>
        </div>
      </div>
      <div class="card" v-show="show">
        <div class="card-body">
          <div ref="cetak">
            <h5 style="margin-left: 4px; font-size: 14px">
              SETORAN KASIR - SUZUYA GROUP
            </h5>
            <div style="width: 100%; border: 1px dotted #000"></div>
            <div
              style="
                width: 100% !important;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              <table style="width: 100% !important; font-size: 14px">
                <tbody>
                  <tr>
                    <td style="width: 35%">Outlet</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ outlet }}</td>
                  </tr>
                  <tr>
                    <td style="width: 35%">Tanggal</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ tglkasir | formatDt3 }}</td>
                  </tr>
                  <tr>
                    <td style="width: 35%">Tanggal Cetak</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ tglprint }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style="width: 100%; border: 1px dotted #000"></div>
            <p style="font-size: 14px">Penyetor</p>
            <div style="width: 100%; border: 1px dotted #000"></div>
            <div
              style="
                width: 100% !important;
                margin-top: 10px;
                margin-bottom: 10px;
              "
            >
              <table style="width: 100% !important; font-size: 14px">
                <tbody>
                  <tr>
                    <td style="width: 35%">Nama</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ nama }}</td>
                  </tr>
                  <tr>
                    <td style="width: 35%">No Mesin</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">
                      {{
                        nomesin < 10
                          ? "00" + nomesin
                          : nomesin < 100
                          ? "0" + nomesin
                          : 100
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td style="width: 35%">Shift</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ shift }}</td>
                  </tr>
                  <tr>
                    <td style="width: 35%">Jumlah</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 60%">{{ jumlah | Rupiah }}</td>
                  </tr>
                  <!-- <tr>
                    <td style="width: 25%; align-content: baseline">
                      Terbilang
                    </td>
                    <td style="width: 5%; align-content: baseline">:</td>
                    <td style="width: 60%">{{ jumlah }}</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
            <div style="width: 100%; border: 1px dotted #000"></div>
            <div style="width: 100% !important; margin-top: 10px">
              <table style="width: 100% !important; font-size: 14px">
                <tbody>
                  <tr>
                    <td style="width: 50%; text-align: center">Kasir</td>
                    <td style="width: 50%; text-align: center">Kepala Kasir</td>
                  </tr>
                  <tr style="height: 80px !important">
                    <td style="width: 50%; text-align: center">
                      {{ nama }}
                    </td>
                    <td style="width: 50%; text-align: center">
                      ( __________ )
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      show: false,
      outlet: 0,
      nama: "",
      tglkasir: "",
      nomesin: "0",
      shift: "0",
      jumlah: 0,
      tglprint: moment().format("DD-MM-Y HH:mm:ss"),
    };
  },
  methods: {
    print() {
      var contents = this.$refs.cetak;
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
      frameDoc.document.write(
        '<html lang="en"><head><title>Print Image Maintenance</title>'
      );
      frameDoc.document.write(
        // '<link rel="stylesheet" href="http://172.27.1.31:8080/css/setorankasir.css"/>'
        '<link rel="stylesheet" href="http://dp.suzuya.co.id/css/setorankasir.css"/>'
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
  },
};
</script>
