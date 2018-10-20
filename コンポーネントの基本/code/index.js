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
        template: `
        <div class="blog-post">
            <h3>{{ title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.5)">
                Enlarge text
            </button>
        </div>
        `
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
                { id: 4, title: "Goblet Of Fire" },
                { id: 5, title: "Order Of Phoenix" },
                { id: 6, title: "Half-Blood Prince" },
            ],
            postFontSize: 1
        },
        methods: {
            enlargeFontSize: function(val) {
                this.postFontSize += val
            }
        }
    })
    Vue.component('custom-input', {
        props: ['value'],
        template: `
            <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
        >
        `
    })
    var vm04 = new Vue({
        el: '#vm04',
        data: {
            searchText: 'hoge'
        }
    })
    Vue.component('alert-box', {
        template: `
        <div class="demo-alert-box">
            <strong>Error!</strong>
            <slot></slot>
        </div>
        `
    })
    var vm05 = new Vue({
        el: '#vm05'
    })
}
window.onload = tutorial;
