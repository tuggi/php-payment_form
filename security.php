<?php

define ('HMAC_SHA256', 'sha256');
define ('SECRET_KEY', '8c4b9d0291964771b5f28fd40ace5674cde8e6f2c15e48efb07dd716d4fba60cc90157f1af4149458d028ae906a79d0ef8fbda4c258e4f3f80bc78f0b7f00d294732c48a7aee4603826e66112e25c65ac3670b6955c14bf59f7e459d3b9e7a94d05a4ffb2d1448e5b79d0ff53a149d878db590f508ff46e3815aa6b172534e80');

function sign ($params) {
  return signData(buildDataToSign($params), SECRET_KEY);
  echo buildDataToSign($params);
  echo SECRET_KEY;
}

function signData($data, $secretKey) {
    // echo $data;
    // echo base64_encode(hash_hmac('sha256', $data, $secretKey, true));
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
