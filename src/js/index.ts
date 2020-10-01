var vm = new Vue({
    el: "#app",
    data: {
        input: "",
        output: "",
        str: "",
        buttons: ["Upper case", "Lower case", "Reverse",],
        button: "Upper case",
        totalcharacter: 0,
        totalword: 0,
    },
    methods: {
        changeSetting: function (index: string | number) {
            this.button = this.buttons[index];

            if (this.input == 0) {
                this.output = "Du skal skrive noget tekst i textareaet min lille ven :)";
            }
            else if (this.button == "Upper case") {
                this.output = this.input.toUpperCase();
            }
            else if (this.button == "Lower case") {
                this.output = this.input.toLowerCase();
            }
            else if (this.button == "Reverse") {
                this.output = this.input.split("").reverse().join("");
            }
        },
        charCount: function (input : string) {
            this.totalcharacter = this.input.length;
        },
        countWords: function () {
            for(let i = 0; i < this.input.length; i++) {
                const array = this.input.split(" ");
                array[i].split("");
                this.totalword = i;
        }
    }
    }
});