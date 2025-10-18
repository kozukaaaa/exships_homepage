<template>
  <v-app>
    <v-main>
      <v-app-bar app color="transparent" dark class="app-bar-bg">
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item
            prepend-icon="mdi-ferry"
            title="Home"
            value="home"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-badge-account-horizontal-outline"
            title="About"
            value="about"
            to="/about"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-domain"
            title="Company"
            value="company"
            to="/company"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Contact"
            value="contact"
            v-on:click="hideDrawer"
            to="/contact"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-container fluid>
        <v-subheader>お問い合わせ</v-subheader>
        <div class="title">
          <v-card
            width="90%"
            height="auto"
            class="mx-auto"
            style="padding-bottom: 100px; margin-bottom: 100px"
          >
            <v-card height="auto" class="mx-auto" flat>
              <v-card-title
                color="primary"
                style="font-size: 22px; color: #1867c0"
                ><span
                  style="
                    background: linear-gradient(transparent 60%, #ffebee 60%);
                  "
                >
                  件名（必須）
                </span></v-card-title
              >

              <v-textarea
                v-model="modelsubject"
                class="mx-2"
                rows="1"
                no-resize
                id="subject"
              >
              </v-textarea>

              <v-card-title
                class=""
                color="primary"
                style="font-size: 22px; color: #1867c0"
                ><span
                  style="
                    background: linear-gradient(transparent 60%, #ffebee 60%);
                  "
                >
                  会社名または団体名
                </span></v-card-title
              >

              <v-textarea
                class="mx-2"
                rows="1"
                no-resize
                id="organization"
              ></v-textarea>

              <v-card-title
                class=""
                color="primary"
                style="font-size: 22px; color: #1867c0"
                ><span
                  style="
                    background: linear-gradient(transparent 60%, #ffebee 60%);
                  "
                >
                  お名前（必須）
                </span></v-card-title
              >

              <v-textarea
                v-model="modelname"
                class="mx-2"
                rows="1"
                no-resize
                id="name"
              ></v-textarea>

              <v-card-title
                class=""
                color="primary"
                style="font-size: 22px; color: #1867c0"
                ><span
                  style="
                    background: linear-gradient(transparent 60%, #ffebee 60%);
                  "
                >
                  メールアドレス（必須）
                </span></v-card-title
              >

              <v-textarea
                v-model="modelmail"
                class="mx-2"
                rows="1"
                no-resize
                id="mail"
              ></v-textarea>

              <v-card-title
                class=""
                color="primary"
                style="font-size: 22px; color: #1867c0"
                ><span
                  style="
                    background: linear-gradient(transparent 60%, #ffebee 60%);
                  "
                >
                  内容（必須）
                </span></v-card-title
              >

              <v-textarea
                v-model="modelcontent"
                class="mx-2"
                outlined
                auto-grow
                rows="4"
                row-height="30"
                shaped
                id="content"
              ></v-textarea>

              <v-card class="mx-auto" flat>
                <v-btn
                  rounded
                  color="red darken-1"
                  dark
                  v-on:click="request"
                  :disabled="
                    !modelsubject || !modelname || !modelmail || !modelcontent
                  "
                  style="font-size: 22px"
                  clas="justify-center"
                  to="/thank"
                  >送信</v-btn
                >
                <Loading v-show="loading"></Loading>
              </v-card>
            </v-card>
          </v-card>
        </div>
      </v-container>
      <v-footer color="primary" app> © 2020 - 2025 exships LLC. </v-footer>
    </v-main>
  </v-app>
</template>

<script scaped>
import axios from "axios";

export default {
  data: () => ({
    drawer: null,
    modelsubject: "",
    modelname: "",
    modelmail: "",
    modelcontent: "",
  }),
  methods: {
    hideDrawer: function () {
      this.drawer = false;
    },
    request: async function () {
      var Sub =
        "entry.71885439" + "=" + document.getElementById("subject").value;
      var Org =
        "entry.60286043" + "=" + document.getElementById("organization").value;
      var Nam =
        "entry.1775750585" + "=" + document.getElementById("name").value;
      var Mai = "entry.812097791" + "=" + document.getElementById("mail").value;
      var Con =
        "entry.1398375857" + "=" + document.getElementById("content").value;

      var url =
        "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfJElGFNeRBlUdVLKNarXmU32rRFQ6cgV46DPqwNbHcZCrztw/formResponse?" +
        Sub +
        "&" +
        Org +
        "&" +
        Nam +
        "&" +
        Mai +
        "&" +
        Con;
      try {
        await axios.get(url);
      } catch (error) {
        if (error.code === "ECONNABORTED") {
          // タイムアウト発生
          console.log("time out");
        } else {
          // その他エラー
          console.log(error);
        }
      } finally {
        console.log("finally");
      }
    },
  },
};
</script>

<style scoped>
.app-bar-bg {
  background-image: url("https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg");
  background-size: cover;
  background-position: center;
}
</style>
