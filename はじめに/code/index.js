var tutorial = function(){
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    })
    var app2 = new Vue({
        el: "#app2",
        data: {
            message: "You loaded this page on " + new Date().toLocaleString()
        }
    })
    var app3 = new Vue({
        el: "#app3",
        data: {
            seen: true
        }
    })
}
window.onload = tutorial;
