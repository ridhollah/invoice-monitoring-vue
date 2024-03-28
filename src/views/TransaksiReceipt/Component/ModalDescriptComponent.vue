<template>
  <div>
    <div
      class="modal fade"
      id="modalDescript"
      tabindex="-1"
      aria-labelledby="modalDescriptLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDescriptLabel">Peringatan !!!</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Transaksi ini masih dalam status
            <span class="badge bg-danger">BELUM LUNAS</span>, <br />apakah anda
            yakin ingin mencetak invoice ?

            <div class="mb-3 mt-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Berikan Alasan</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Tidak
            </button>
            <button type="button" class="btn btn-primary btn-sm">Ya</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
