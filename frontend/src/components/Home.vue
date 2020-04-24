<template>
  <div width="100%">
    <Header
      @change-component="changeComponent"
      @show-overlay="showOverlay"
    ></Header>

    <v-overlay :value="overlay" :absolute="true">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <Login
        @show-overlay="showOverlay"
        @selected_username="activePage = 'User'"
      />
    </v-overlay>

    <div v-if="activePage == 'Welcome'">
      <Welcome />
    </div>

    <div v-if="$store.state.username && activePage == 'User'">
      <User />
    </div>

    <div v-if="activePage == 'Repos'">
      <Repos />
    </div>

    <div v-if="activePage == 'Projects'">
      <Projects />
    </div>

    <div>
      <form
        id="testForm"
        method="POST"
        action="https://api.dev.walletone.com/p2p/v2/payer"
        @submit="handleForm"
      >
        <input name="WMI_MERCHANT_ID" value="151042422199" />
        <input name="WMI_PAYMENT_AMOUNT" value="100.00" />
        <input name="WMI_CURRENCY_ID" value="643" />
        <input name="WMI_DESCRIPTION" value="Оплата демонстрационного заказа" />
        <input name="WMI_SUCCESS_URL" value="https://myshop.ru/w1/paid.php" />
        <input name="WMI_FAIL_URL" value="https://myshop.ru/w1/fail.php" />

        <input type="submit" value="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Welcome from "./welcome/Welcome";
import User from "./user/UserPage";
import Projects from "./projects/Projects";
import Repos from "./repos/Repos";

import Header from "./Header";
import Login from "./Login";

//import sha256 from "js-sha256";

export default {
  name: "Home",
  components: {
    Header,
    Login,
    Welcome,
    Projects,
    Repos,
    User,
  },
  data: () => ({
    activePage: "Welcome",
    overlay: false,
  }),

  methods: {
    ...mapActions(["fetch_contracts"]),
    showOverlay() {
      if (!this.loginState) this.overlay = !this.overlay;
      else alert("dont");
    },
    changeComponent(pageName) {
      this.activePage = pageName;
    },
    async start_fetching() {
      this.fetch_contracts();
    },
    handleForm(e) {
      console.log(e);
    },
  },

  created() {
    this.start_fetching();
  },
  computed: {
    loginState() {
      return this.$store.state.username;
    },
  },
};
</script>
