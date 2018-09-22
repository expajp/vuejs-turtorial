var tutorial = function(){
    var vm = new Vue({
        el: "#example",
        data: {
            message: "Hello!"
        },
        computed: {
            reversedMessage: function(){
                return this.message.split('').reverse().join('')
            }
        }
    })
    var vm01 = new Vue({
        el: "#example01",
        data: {
            firstName: "Foo",
            lastName: "Bar",
            fullName: "Foo Bar"
        },
        watch: {
            firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
            }
        }
    })
    var vm02 = new Vue({
        el: "#example02",
        data: {
            firstName: "Foo",
            lastName: "Bar"
        },
        computed: {
            fullName: {
                get: function(){
                    return this.firstName + ' ' + this.lastName
                },
                set: function(newValue){
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length-1]
                }
            }
        }

    })
}
window.onload = tutorial;
