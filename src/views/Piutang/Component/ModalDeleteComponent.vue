<template>
  <div
    class="modal fade"
    id="exampleModalToggle4"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel4"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel4">
            {{ $store.state.piutang.detailTrxDelete.receipt }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              Apakah anda yakin ingin menghapus Transksi
              {{ $store.state.piutang.detailTrxDelete.receipt }} ?
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary btn-sm"
            data-bs-target="#modalTambahPiutang"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Batal
          </button>
          <button
            class="btn btn-primary btn-sm"
            data-bs-target="#modalTambahPiutang"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            @click="$store.dispatch('piutang/deleteTrx')"
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
