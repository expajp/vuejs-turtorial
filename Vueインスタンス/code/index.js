var tutorial = function(){
    var vm = new Vue({
        data: {
            a: 1
        },
        created: function(){
            console.log("a is: " + this.a)
        }
    })
}
window.onload = tutorial;
