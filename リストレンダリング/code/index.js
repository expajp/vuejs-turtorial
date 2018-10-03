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
}
window.onload = tutorial;
