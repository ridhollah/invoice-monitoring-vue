<template>
  <div
    class="modal fade"
    id="modalSaveReturn"
    tabindex="-1"
    aria-labelledby="modalSaveReturnLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalSaveReturnLabel">Peringatan !!!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            No Sales {{ header.Receipt }} memiliki sisa cicilan
            <b>{{ header.sisacicilan | Rupiah }}</b
            >. <br />
            <b>Apakah sisa cicilan ini mau dipotong </b> dengan nominal pada No
            return {{ header.Returnno }}
            <b>sebesar {{ header.TtlSales | Rupiah }}</b>
            ?
          </p>
        </div>
        <div
          class="modal-footer"
          style="flex-wrap: nowrap; justify-content: space-between !important"
        >
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style="width: 50%"
            @click="$store.dispatch('invoiceReturn/saveNewTrx', 0)"
          >
            Tidak
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style="width: 50%"
            @click="$store.dispatch('invoiceReturn/saveNewTrx', 1)"
          >
            Ya, Potong
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    header() {
      return this.$store.state.invoiceReturn.header;
    },
  },
};
</script>
