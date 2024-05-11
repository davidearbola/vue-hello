const { createApp } = Vue;

createApp({
	data() {
		return {
			titolo: "Benvenuto nel mondo di VueJS!",
			sottotitolo: "Ora sei pronto a diventare pazzo veramente",
			img: "https://picsum.photos/200/300",
		};
	},
}).mount("#app");
