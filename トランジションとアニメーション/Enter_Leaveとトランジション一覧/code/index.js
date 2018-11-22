var tutorial = function(){
    let vm01 = new Vue({
        el: '#vm01',
        data: {
            show: true
        }
    })
    let vm02 = new Vue({
        el: '#vm02',
        data: {
            show: true
        }
    })
    let vm03 = new Vue({
        el: '#vm03',
        data: {
            show: true
        }
    })
    let vm04 = new Vue({
        el: '#vm04',
        data: {
            show: true
        }
    })
    let vm05 = new Vue({
        el: '#vm05',
        data: {
            show: true
        },
        methods: {
            beforeEnter: function(el){
                el.style.opacity = 0
                el.style.fontSize = '0.5em'
            },
            enter: function(el, done){
                Velocity(el, { opacity: 1 }, { duration: 300 })
                Velocity(el, { fontSize: '1.5em' }, { duration: 300 })
                Velocity(el, { fontSize: '1em' }, { complete: done })
            },
            leave: function(el, done){
                Velocity(el, { translateX: '5px', rotateZ: '50deg' }, { duration: 600 })
                Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
                Velocity(
                    el, 
                    { 
                        rotateZ: '45deg',
                        translateY: '10px',
                        translateX: '10px',
                        opacity: 0
                    }, 
                    { complete: done }
                )
            }  
        }
    })
    let vm06 = new Vue({
        el: '#vm06',
        data: {
            view: 'v-a'
        },
        components: {
            'v-a': {
                template: `<div>Component A</div>`
            },
            'v-b': {
                template: `<div>Component B</div>`
            }
        }
    })
    let vm07 = new Vue({
        el: '#vm07',
        data: {
          items: [1,2,3,4,5,6,7,8,9]
        },
        computed: {
            nextNum: function(){
                if(this.items.length == 0){
                    return 1
                }
                else {
                    return Math.max(...(this.items)) + 1
                }
            }
        },
        methods: {
            randomIndex: function(){
                return Math.floor(Math.random() * this.items.length)
            },
            add: function(){
                this.items.splice(this.randomIndex(), 0, this.nextNum)
            },
            remove: function(){
                this.items.splice(this.randomIndex(), 1)
            }
        }
    })
}
window.onload = tutorial;
