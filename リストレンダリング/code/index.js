var tutorial = function(){
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    })
    var vm02 = new Vue({
        el: '#vm02',
        data: {
            parentMessage: 'hoge',
            object: {
                firstName: 'John', 
                lastName: 'Lennon',
                age: 30
            }
        }
    })
    var vm03 = new Vue({
        el: '#vm03',
        data: {
            numbers: [1, 2, 3, 4, 5, 6, 7]
        },
        computed: {
            evenNumbers: function(){
                return this.numbers.filter(function(number){
                    return number % 2 == 0
                })
            }
        }
    })
    var vm04 = new Vue({
        el: '#vm04',
        data: {
            numbers: [1, 2, 3, 4, 5, 6, 7].reverse()
        },
        methods: {
            even: function(numbers){
                return numbers.filter(function(number){
                    return number % 2 == 0
                })
            }
        }
    })
}
window.onload = tutorial;
