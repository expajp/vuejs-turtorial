var tutorial = function(){
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            counter: 0
        }
    })
    var vm02 = new Vue({
        el: '#vm02',
        data: {
            name: 'Vue.js'
        },
        methods: {
            greet: function(event){
                alert('Hello, '+this.name+'!!');
                if(event) {
                    alert(event);
                }
            }
        }
    })
}
window.onload = tutorial;
