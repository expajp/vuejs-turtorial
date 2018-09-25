var tutorial = function(){
    var vm01 = new Vue({
        el: "#vm01",
        data: {
            red: false,
            big: false
        },
        computed: {
            classObject: function(){
                return {
                    red: this.red && !this.big,
                    big: !this.red && this.big,
                    italic: !this.red && !this.big
                }
            }
        }
    })
}
window.onload = tutorial;
