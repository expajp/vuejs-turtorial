var tutorial = function(){
    Vue.component('button-counter', {
        data: function(){
            return { count: 0 }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })
    var vm01 = new Vue({ el: '#vm01' })

    Vue.component('blog-post', {
        props: ['title'],
        template: '<h3>{{ title }}</h3><button v-on:click="$emit("enlarge-text")">Enlarge text</button>'
    })
    var vm02 = new Vue({ 
        el: '#vm02', 
        data: {
            posts: [
                { id: 1, title: "Philosopher's Stone" },
                { id: 2, title: "Chamber Of Secrets" },
                { id: 3, title: "Prizoner Of Azkaban" },
            ]
        }
    })
    var vm03 = new Vue({ 
        el: '#vm03', 
        data: {
            posts: [
                { id: 1, title: "Philosopher's Stone" },
                { id: 2, title: "Chamber Of Secrets" },
                { id: 3, title: "Prizoner Of Azkaban" },
            ],
            postFontSize: 1
        }
    })
}
window.onload = tutorial;
