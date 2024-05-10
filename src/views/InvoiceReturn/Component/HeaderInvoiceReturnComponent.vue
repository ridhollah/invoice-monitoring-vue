<template>
  <div>
    <div class="d-lg-flex">
      <div class="pe-lg-2 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex" style="font-size: 13px">
              <div class="col-md-8 col-lg-8">
                <div>
                  <label class="label font-monospace">No Return</label>
                  <p class="fw-bold">
                    {{ header.Returnno ? header.Returnno : "-" }}
                  </p>
                </div>

                <div>
                  <label class="label font-monospace">Outlet</label>
                  <p class="fw-bold text-uppercase">
                    {{ header.outlet_name ? header.outlet_name : "-" }}
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div>
                  <label class="label font-monospace">No Transaksi</label>
                  <p class="fw-bold">
                    {{ header.Receipt ? header.Receipt : "-" }}
                  </p>
                </div>
                <div>
                  <label class="label font-monospace">Tanggal</label>
                  <p class="fw-bold">
                    {{ header.tgl ? header.tgl : "-" | formatDt2 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ps-lg-2 col-lg-6 mt-2 mt-lg-0">
        <div class="card">
          <div class="card-body">
            <div class="d-flex" style="font-size: 13px">
              <div class="col-md-8 col-lg-8">
                <div>
                  <label class="label font-monospace">Nama Lengkap</label>
                  <p class="fw-bold">
                    {{ member.Name ? member.Name : "-" }}
                  </p>
                </div>
                <div>
                  <label class="label font-monospace">Alamat</label>
                  <p class="fw-bold">
                    {{ member.Address ? member.Address : "-" }}
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-lg-4">
                <div>
                  <label class="label font-monospace">Handphone</label>
                  <p class="fw-bold">
                    {{ member.HandPhone ? member.HandPhone : "-" }}
                  </p>
                </div>
                <div>
                  <label class="label font-monospace">Member</label>
                  <p class="fw-bold">
                    {{ member.Member_No ? member.Member_No : "-" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      tanggal: moment().format("DD/MM/YYYY"),
    };
  },
  computed: {
    ...mapState({
      header: (state) => state.invoiceReturn.header,
      member: (state) => state.invoiceReturn.member,
    }),
  },
};
</script>
