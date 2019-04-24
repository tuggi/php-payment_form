var PaymentForm = function() {
    var global = {
        access_key: null,
        profile_id: null,
        transaction_uuid: null,
        signed_field_names: null,
        unsigned_field_names: null,
        signed_date_time: null,
        locale: null,

        data: null,

        transaction_type: null,
        reference_number: null,
        amount: null,
        currency: null,

        submitButton: null,
        wrapper: null
    };

    constructor();
    initialize();

    function initialize() {
        var wrapper = global.wrapper = document.createElement("div");
        var br = document.createElement("br");
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        $(legend).text("Payment Details");

        var transactionTypeSpan = document.createElement("span");
        $(transactionTypeSpan).text("transaction_type");
        var transactionType = global.transaction_type = document.createElement("input");
        $(transactionType).addClass("transactionType");

        var referenceNumberSpan = document.createElement("span");
        $(referenceNumberSpan).text("reference_number");
        var referenceNumber = global.reference_number = document.createElement("input");
        $(referenceNumber).addClass("reference_number");

        var amountSpan = document.createElement("span");
        $(amountSpan).text("amount");
        var amount = global.amount = document.createElement("input");
        $(amount).addClass("amount");

        var currencySpan = document.createElement("span");
        $(currencySpan).text("currency");
        var currency = global.currency = document.createElement("input");
        $(currency).addClass("currency");

        var submitButton = global.submitButton = document.createElement("button");
        $(submitButton).text("Submit");


        var hash = CryptoJS.HmacSHA256("access_key=77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01c8a1adb0,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,access_key=77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01c8a1adb0,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,signed_date_time=2019-04-24T08:21:30Z,locale=en,transaction_type=,reference_number=,amount=,currency==2019-04-24T08:21:30Z,locale=en,transaction_type=,reference_number=,amount=,currency==77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01b9a88b80,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,signed_date_time=2019-04-24T08:17:30Z,locale=en,transaction_type=,reference_number=,amount=,currency=", 
        "8c4b9d0291964771b5f28fd40ace5674cde8e6f2c15e48efb07dd716d4fba60cc90157f1af4149458d028ae906a79d0ef8fbda4c258e4f3f80bc78f0b7f00d294732c48a7aee4603826e66112e25c65ac3670b6955c14bf59f7e459d3b9e7a94d05a4ffb2d1448e5b79d0ff53a149d878db590f508ff46e3815aa6b172534e80");
        var base64 = CryptoJS.enc.Base64.stringify(hash);
        // console.log(base64);

        $(fieldset).append(legend);
        $(fieldset).append(transactionTypeSpan);
        $(fieldset).append(transactionType);
        $(fieldset).append(referenceNumberSpan);
        $(fieldset).append(referenceNumber);
        $(fieldset).append(amountSpan);
        $(fieldset).append(amount);
        $(fieldset).append(currencySpan);
        $(fieldset).append(currency);
        $(wrapper).append(fieldset);
        $(wrapper).append(submitButton);
    }

    function constructor() {
        global.access_key = "77246056409d34449977303b767c984c";
        global.profile_id = "60DC420E-7BF0-4BAE-8C43-4F30C5F153C5";
        global.transaction_uuid = generateUniqid();
        global.signed_field_names = "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency";
        global.unsigned_field_names = "";
        global.signed_date_time = new Date().toISOString();
        global.locale = "en";

        global.data = JSON.stringify(global, ['access_key', 'profile_id', 'transaction_uuid', 'signed_field_names', 'unsigned_field_names', 'signed_date_time', 'locale']);
        global.data = global.data.replace(/[{"}]/g, '');
        console.log(global.data);
    }

    function generateUniqid() {
        var a = "";
        var b = false;
        var c = Date.now()/1000;
        var d = c.toString(16).split(".").join("");
        while(d.length < 14){
            d += "0";
        }
        var e = "";
        if(b){
            e = ".";
            var f = Math.round(Math.random()*100000000);
            e += f;
        }
        return a + d + e;
    }

    PaymentForm.prototype.getTransactionType = function() {
        return global.transaction_type;
    }

    PaymentForm.prototype.getReferenceNumber = function() {
        return global.reference_number;
    }

    PaymentForm.prototype.getAmount = function() {
        return global.amount;
    }

    PaymentForm.prototype.getCurrency = function() {
        return global.currency;
    }

    PaymentForm.prototype.getSubmitButton = function() {
        return global.submitButton;
    }

    PaymentForm.prototype.getWidget = function() {
        return global.wrapper;
    }

}