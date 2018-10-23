var tutorial = function(){
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            bold: '<b>Bold</b>'
        }
    })
    var vm02 = new Vue({
        el: '#vm02',
        data: {
            bold: '<b>Bold</b>'
        }
    })
    var vm3 = new Vue({
        el: "#vm03",
        data: {
            styleSheet: "color: red;"
        }
    })
    var vm04 = new Vue({
        el: "#vm04",
        data: {
            isButtonDisabled: 0
        }
    })
    var vm05 = new Vue({
        el: "#vm05",
        data: {
            now: new Date()
        }
    })
}
window.onload = tutorial;
