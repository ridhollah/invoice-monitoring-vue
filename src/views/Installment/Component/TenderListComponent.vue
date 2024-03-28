<template>
  <div
    class="modal fade"
    id="tenderList"
    tabindex="-1"
    aria-labelledby="tenderListLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tenderListLabel">Tender List</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="table-responsive" style="height: 300px; font-size: 12px">
            <table class="table table-hover table-striped table-bordered">
              <thead>
                <tr class="text-center">
                  <th style="width: 15%">Nama Tender</th>
                  <th style="width: 15%">No Kartu</th>
                  <th style="width: 15%">No Batch</th>
                  <th style="width: 15%">No Voucher</th>
                  <th style="width: 20%">Total Bayar</th>
                  <th style="width: 5%">Line</th>
                  <th style="width: 5%">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(n, index) in payment.listPayment" :key="index">
                  <td>{{ n.tendername }}</td>
                  <td>{{ n.nocard }}</td>
                  <td>{{ n.noapproval }}</td>
                  <td>{{ n.nodocument }}</td>
                  <td class="text-end">{{ n.ttlbayar | Rupiah2 }}</td>
                  <td class="text-center">{{ n.line }}</td>
                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      @click="$store.dispatch('installment/deleteTender', n)"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
          >
            tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    payment() {
      return this.$store.state.installment.header;
    },
  },
};
</script>
