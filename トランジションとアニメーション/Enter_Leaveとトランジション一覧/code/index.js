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
}
window.onload = tutorial;
