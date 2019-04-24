<?php

define ('HMAC_SHA256', 'sha256');
define ('SECRET_KEY', '8c4b9d0291964771b5f28fd40ace5674cde8e6f2c15e48efb07dd716d4fba60cc90157f1af4149458d028ae906a79d0ef8fbda4c258e4f3f80bc78f0b7f00d294732c48a7aee4603826e66112e25c65ac3670b6955c14bf59f7e459d3b9e7a94d05a4ffb2d1448e5b79d0ff53a149d878db590f508ff46e3815aa6b172534e80');

function sign ($params) {
  return signData(buildDataToSign($params), SECRET_KEY);
  echo buildDataToSign($params);
  echo SECRET_KEY;
}

function signData($data, $secretKey) {
    echo $data . "-------"; 
    echo $secretKey . "-------"; 
    echo base64_encode(hash_hmac('sha256', $data, $secretKey, true));
    return base64_encode(hash_hmac('sha256', $data, $secretKey, true));
}

function buildDataToSign($params) {
        $signedFieldNames = explode(",",$params["signed_field_names"]);
        foreach ($signedFieldNames as $field) {
           $dataToSign[] = $field . "=" . $params[$field];
        }
        return commaSeparate($dataToSign);
}

function commaSeparate ($dataToSign) {
    return implode(",",$dataToSign);
}

?>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.min.js"></script>

<script>
var hash = CryptoJS.HmacSHA256("access_key=77246056409d34449977303b767c984c,profile_id=60DC420E-7BF0-4BAE-8C43-4F30C5F153C5,transaction_uuid=5cc01daaeb988,signed_field_names=access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,unsigned_field_names=,signed_date_time=2019-04-24T08:26:18Z,locale=en,transaction_type=,reference_number=,amount=,currency=", 
        "8c4b9d0291964771b5f28fd40ace5674cde8e6f2c15e48efb07dd716d4fba60cc90157f1af4149458d028ae906a79d0ef8fbda4c258e4f3f80bc78f0b7f00d294732c48a7aee4603826e66112e25c65ac3670b6955c14bf59f7e459d3b9e7a94d05a4ffb2d1448e5b79d0ff53a149d878db590f508ff46e3815aa6b172534e80");
var base64 = CryptoJS.enc.Base64.stringify(hash);

console.log(base64);
</script>

