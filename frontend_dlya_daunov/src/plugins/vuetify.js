import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#383D3B",
        secondary: "#92DCE5",
        accent: "#52DEE5",
        error: colors.red.accent3,
        background: "#EDF4ED", // Not automatically applied
      },
    },
  },
});
