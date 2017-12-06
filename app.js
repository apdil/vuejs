let app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue!'
    }
})

let app2 = new Vue({
    el: "#app2",
    data: {
        message: 'vous avez affichez cette page le ' + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el: "#app3",
    data: {
        seen: 'true'
    }
})

let app4 = new Vue({
    el: "#app4",
    data: {
        todos: [ 'pomme', 'poire', 'ananas']
    }
})

let app5 = new Vue({
    el: "#app5",
    data: {
        message: "coucou"
    },
    methods: {
        methode: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el: "#app6",
    data: {
        message: "test"
    }
})