Vue.createApp({
    data() {
        return{
            text: null,
            result: null,
            result1: null,
            result2: null
        }

    },
    methods: {
        words()
        {
            this.result = this.text
            this.result1 = this.text.toLowerCase()
            this.result2 = this.text.toUpperCase()
        }
    }
}).mount("#app")