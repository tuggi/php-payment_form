var paymentForm = null;

function initializeWidget() {
    paymentForm = $.extend(true, {}, new PaymentForm());
    $(paymentForm.getWidget()).appendTo(document.body);

    setHandlers();
}

function setHandlers() {
    $(paymentForm.getSubmitButton()).on("click tap", function (){
        var transactionType = $(paymentForm.getTransactionType()).val();
        var referenceNumber = $(paymentForm.getReferenceNumber()).val();
        var amount = $(paymentForm.getAmount()).val();
        var currency = $(paymentForm.getCurrency()).val();
        
        console.log(transactionType, referenceNumber, amount, currency);
    });
}

$(document).ready(function () {
    initializeWidget();
});