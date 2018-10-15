var tutorial = function(){
    Vue.component('button-counter', {
        data: function(){
            return { count: 0 }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })
    var vm01 = new Vue({ el: '#vm01' })
}
window.onload = tutorial;
