<template>
  <div>
    <div width="100%" id="block1">
      <div id="main">
        <div class="display-4" id="header">
          <span>Git</span>
          <span class="high">Pay</span>
        </div>
        <div class="display-2" id="right">
          Правильный способ
          <span class="high">продать</span> ваши
          <span class="high">pull requests</span>
        </div>
        <div class="display-1"></div>
      </div>
    </div>
    <div width="100%" id="block2">
      <div
        class="display-1"
        id="text1"
      >Площадка для покупки и продажи кода, powered by Git and WalletOne.</div>
    </div>

    <v-divider></v-divider>
    <div width="100%" class="block">
      <h1 class="title-underline display-3">We work with</h1>

      <div class="logos">
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          height="100rem"
          width="100rem"
        />

        <img
          class="logo"
          src="https://www.walletone.com/wp-content/uploads/logos/w1.png"
          height="90rem"
          width="100rem"
        />
        <img
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emblem_of_the_Federal_Tax_Service.svg/1200px-Emblem_of_the_Federal_Tax_Service.svg.png"
          height="100rem"
          width="100rem"
        />
        <img
          class="logo"
          src="https://banner2.cleanpng.com/20180804/wge/kisspng-airtable-database-spreadsheet-logo-application-sof-airtable-for-mac-free-download-and-software-revi-5b65a4915ca291.2247377715333879213794.jpg"
          height="100rem"
          width="100rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<style>
#block1 {
  background-image: url("https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80");
  background-size: 100rem;
  height: 25rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#main {
  color: rgb(255, 255, 255);
  justify-content: center;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);

  height: 100%;
}
#header {
  padding-top: 5rem;
  margin-bottom: 5rem;
}
#right {
  margin-bottom: 2rem;
}
.high {
  color: rgb(42, 111, 240);
}
#block2 {
  justify-content: center;
  text-align: center;
  height: 8rem;
  background-color: rgb(42, 111, 240);
}
#text1 {
  padding-top: 2.5rem;
  color: rgb(255, 255, 255);
}
.block {
  justify-content: center;
  text-align: center;
  height: 40rem;
}
.title-underline {
  border-bottom: 1px solid rgb(42, 111, 240);
  display: inline-block;
  padding-bottom: 10px;
  padding-top: 2.5rem;
}
.logo {
  margin: 10px 10px 10px 10px;
}
.logos {
  margin-top: 20px;
}
</style>
