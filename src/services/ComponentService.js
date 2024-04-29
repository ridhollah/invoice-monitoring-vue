import TenderCashComponent from "../views/Installment/Component/TenderCashComponent.vue";
import TenderCreditComponent from "../views/Installment/Component/TenderCreditComponent.vue";
import TenderDebitComponent from "../views/Installment/Component/TenderDebitComponent.vue";
import TenderVoucherComponent from "../views/Installment/Component/TenderVoucherComponent.vue";
import TenderListComponent from "../views/Installment/Component/TenderListComponent.vue";

import HeaderInvoiceComponent from "../views/Invoice/Component/HeaderInvoiceComponent.vue";
import PaymentComponent from "../views/Invoice/Component/PaymentComponent.vue";
import TableTrxComponent from "../views/Invoice/Component/TableTrxComponent.vue";

import ModalCustomerComponent from "../views/Invoice/Component/ModalCustomerComponent.vue";

import DetailMemberPiutangComponent from "../views/Piutang/Component/DetailMemberPiutangComponent.vue";
import ModalDeleteComponent from "../views/Piutang/Component/ModalDeleteComponent.vue";
import ModalTambahComponent from "../views/Piutang/Component/ModalTambahComponent.vue";

import CetakInvoiceComponent from "../views/Printing/Component/CetakInvoiceComponent.vue";
import CetakSuratJalanComponent from "../views/Printing/Component/CetakSuratJalanComponent.vue";
import ModalCetakInvoiceComponent from "../views/Printing/Component/ModalCetakInvoiceComponent.vue";
import ModalCetakSuratJalanComponent from "../views/Printing/Component/ModalCetakSuratJalanComponent.vue";

import ReceiptDetailComponent from "../views/TransaksiReceipt/Component/ReceiptDetailComponent.vue";
import ModalDescriptComponent from "../views/TransaksiReceipt/Component/ModalDescriptComponent.vue";
import ModalEditSuratJalanComponent from "../views/TransaksiReceipt/Component/ModalEditSuratJalanComponent.vue";
import ModalEditCustomerComponent from "../views/TransaksiReceipt/Component/ModalEditCustomerComponent.vue";

import DetailTrxLogistikComponent from "../views/Logistik/Component/DetailTrxLogistikComponent.vue";
import ModalConfirmComponent from "../views/Logistik/Component/ModalConfirmComponent.vue";

import DaftarUserUpdateComponent from "../views/Setup/DaftarUser/component/DaftarUserUpdateComponent.vue";

const globalComponents = {
  install(Vue) {
    Vue.component("TenderCashComponent", TenderCashComponent);
    Vue.component("TenderCreditComponent", TenderCreditComponent);
    Vue.component("TenderDebitComponent", TenderDebitComponent);
    Vue.component("TenderVoucherComponent", TenderVoucherComponent);
    Vue.component("TenderListComponent", TenderListComponent);

    Vue.component("HeaderInvoiceComponent", HeaderInvoiceComponent);
    Vue.component("PaymentComponent", PaymentComponent);
    Vue.component("TableTrxComponent", TableTrxComponent);

    Vue.component("ModalCustomerComponent", ModalCustomerComponent);

    Vue.component("DetailMemberPiutangComponent", DetailMemberPiutangComponent);
    Vue.component("ModalDeleteComponent", ModalDeleteComponent);
    Vue.component("ModalTambahComponent", ModalTambahComponent);

    Vue.component("CetakInvoiceComponent", CetakInvoiceComponent);
    Vue.component("CetakSuratJalanComponent", CetakSuratJalanComponent);
    Vue.component("ModalCetakInvoiceComponent", ModalCetakInvoiceComponent);
    Vue.component(
      "ModalCetakSuratJalanComponent",
      ModalCetakSuratJalanComponent
    );

    Vue.component("ReceiptDetailComponent", ReceiptDetailComponent);
    Vue.component("ModalDescriptComponent", ModalDescriptComponent);
    Vue.component("ModalEditSuratJalanComponent", ModalEditSuratJalanComponent);
    Vue.component("ModalEditCustomerComponent", ModalEditCustomerComponent);

    Vue.component("DetailTrxLogistikComponent", DetailTrxLogistikComponent);
    Vue.component("ModalConfirmComponent", ModalConfirmComponent);

    Vue.component("DaftarUserUpdateComponent", DaftarUserUpdateComponent);
  },
};

export default globalComponents;
