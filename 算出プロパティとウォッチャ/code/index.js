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
    var watchExampleDM = new Vue({
        el: '#watch-example',
        data: {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        },
        watch: {
            question: function(newQuestion, oldQuestion){
                this.answer = 'Waiting for you to stop typing...'
                this.debouncedGetAnswer()
            }
        },
        created: function(){
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        },
        methods: {
            getAnswer: function(){
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
            }           
        }
    })
}
window.onload = tutorial;
