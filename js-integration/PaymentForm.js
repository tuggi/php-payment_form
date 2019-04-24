var PaymentForm = function() {
    var global = {
        access_key: "77246056409d34449977303b767c984c",
        profile_id: "60DC420E-7BF0-4BAE-8C43-4F30C5F153C5",
        transaction_uuid: null,
        signed_field_names: "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency",
        unsigned_field_names: null,
        signed_date_time: new Date().toISOString(),
        locale: "en",

        transaction_type: null,
        reference_number: null,
        amount: null,
        currency: null,

        wrapper: null
    };

    initialize();

    function initialize() {
        var wrapper = global.wrapper = document.createElement("div");
       
        var fieldset = document.createElement("fieldset");
        
        var legend = document.createElement("legend");
        $(legend).text("Payment Details")

        $(fieldset).append(legend);
        $(wrapper).append(fieldset);

        var hash = CryptoJS.HmacSHA256("access_key=77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01c8a1adb0,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,access_key=77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01c8a1adb0,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,signed_date_time=2019-04-24T08:21:30Z,locale=en,transaction_type=,reference_number=,amount=,currency==2019-04-24T08:21:30Z,locale=en,transaction_type=,reference_number=,amount=,currency==77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01b9a88b80,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,signed_date_time=2019-04-24T08:17:30Z,locale=en,transaction_type=,reference_number=,amount=,currency=", 
        "8c4b9d0291964771b5f28fd40ace5674cde8e6f2c15e48efb07dd716d4fba60cc90157f1af4149458d028ae906a79d0ef8fbda4c258e4f3f80bc78f0b7f00d294732c48a7aee4603826e66112e25c65ac3670b6955c14bf59f7e459d3b9e7a94d05a4ffb2d1448e5b79d0ff53a149d878db590f508ff46e3815aa6b172534e80");
        var base64 = CryptoJS.enc.Base64.stringify(hash);

        console.log(base64);
    }

    PaymentForm.prototype.getWidget = function() {
        return global.wrapper;
    }

    console.log(global);
}