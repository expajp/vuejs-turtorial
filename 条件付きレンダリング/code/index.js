var tutorial = function(){
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            ok: true
        }
    })
    var vm02 = new Vue({
        el: '#vm02',
        data: {
            ok: true
        }
    })
    var vm03 = new Vue({
        el: '#vm03',
        data: {
            show: false
        }
    })
}
window.onload = tutorial;
