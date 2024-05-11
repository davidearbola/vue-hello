const { createApp } = Vue;

createApp({
	data() {
		return {
			titolo: "Benvenuto",
			sottotitolo: "nel mondo di VueJS!",
			img: "./img/logo.webp",
			firstName: "",
			lastName: "",
			classe: "red",
		};
	},
	methods: {
		cambiaColore() {
			if (this.classe == "red") {
				this.classe = "green";
			} else if (this.classe == "green") {
				this.classe = "red";
			}
			if (this.img == "./img/logo.webp") {
				this.img = "./img/logo2.jpeg";
			} else if (this.img == "./img/logo2.jpeg") {
				this.img = "./img/logo.webp";
			}
		},
	},
}).mount("#app");
