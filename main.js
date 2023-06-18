document.addEventListener("alpine:init", () => {
  Alpine.store("accordion", {
    tab: 0,
  });

  Alpine.data("accordion", (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab =
        this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? "rotate-180" : "";
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx
        ? `max-height: ${this.$refs.tab.scrollHeight}px`
        : "";
    },
  }));
});

const form = document.querySelector("#contact_form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

function SendMail() {
  let params = {
    from_name: name.value,
    email_id: email.value,
    message: msg.value,
  };

  emailjs.send("service_3vmewdb", "template_lm2icej", params).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
  name.value = "";
  email.value = "";
  msg.value = "";
}

let loader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
