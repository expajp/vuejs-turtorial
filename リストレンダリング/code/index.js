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
}
window.onload = tutorial;
