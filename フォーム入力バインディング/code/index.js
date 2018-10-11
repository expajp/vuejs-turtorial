var tutorial = function(){
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            message: 'default'
        }
    })    
    var vm02 = new Vue({
        el: '#vm02',
        data: {
            message: 'default\ndefault'
        }
    })
    var vm03 = new Vue({
        el: '#vm03',
        data: {
            checked: false
        }
    })
    var vm04 = new Vue({
        el: '#vm04',
        data: {
            checked: []
        }
    })
}
window.onload = tutorial;
