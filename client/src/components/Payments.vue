<template>
  <div style="width: 100%; text-align: center">
    <form
      id="testForm"
      method="POST"
      action="https://api.dev.walletone.com/p2p/v2/payer"
      @submit="handleForm"
    >
      <input type="hidden" name="PhoneNumber" id="PhoneNumber" value="+79818925700" />
      <input type="hidden" name="PlatformPayerId" id="PlatformPayerId" value="microbo" />
      <input type="hidden" name="PlatformId" id="PlatformId" value="microbo" />
      <input type="hidden" name="ReturnUrl" id="ReturnUrl" value="http://microbo.ru/w1" />
      <input type="hidden" name="Timestamp" id="Timestamp" />
      <input type="hidden" name="Signature" id="Signature" value />

      <input type="submit" value="Конечно заплачу" style="color: blue;" />
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Payments",
  methods: {
    handleForm() {
      const key = "TZvds4HWduo6unK9emOFzIuRHXMueUXUREk15tSDdJ2yY0x7TJuDUD";

      const date = moment()
        .utc()
        .format("YYYY-MM-DDTHH:mm:ss");
      document.getElementById("Timestamp").value = date;
      //Signature, который формируется путем объединения значений всех остальных параметров формы (с учетом параметра Timestamp) в алфавитном порядке их имен (без учета регистра)
      // с добавлением в конец «секретного ключа» площадки. Полученное после объединения параметров и «секретного ключа» значение, представленное в кодировке UTF-8,
      // хешируется выбранным методом формирования ЭЦП и его байтовое представление кодируется в Base64.
      //Signature = Base64(SignatureMethod(UTF8(Sort(Params) + SignatureKey)))
      const params =
        document.getElementById("PhoneNumber").value +
        document.getElementById("PlatformPayerId").value +
        document.getElementById("PlatformId").value +
        document.getElementById("ReturnUrl").value +
        date;
      const crypto = require("crypto");
      const iconv = require("iconv-lite");
      const encodedKey = crypto
        .createHash("sha256")
        .update(iconv.encode(params + key, "UTF-8"))
        .digest("base64");
      document.getElementById("Signature").value = encodedKey;
    }
  }
};
</script>

<style></style>
