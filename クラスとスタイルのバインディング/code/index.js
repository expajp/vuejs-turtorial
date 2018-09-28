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
    var vm02 = new  Vue({
        el: '#vm02',
        data: {
            isRed: false,
            bigClass: 'big'
        }
    })
    var vm03 = new Vue({
        el: '#vm03',
        data: {
            redStyle: {
                color: 'red'
            },
            bigStyle: {
                fontSize: '32pt'
            },
            italicStyle: {
                fontStyle: 'italic'
            }
        }
    })
}
window.onload = tutorial;
