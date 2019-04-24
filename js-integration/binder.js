function initializeWidget() {
    var paymentForm = $.extend(true, {}, new PaymentForm());
    $(paymentForm.getWidget()).appendTo(document.body);
    console.log(paymentForm.getWidget());
}

$(document).ready(function () {
    console.log(document.body);
    initializeWidget();
});