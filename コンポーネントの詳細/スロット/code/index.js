var tutorial = function(){
    Vue.component('navigation-link', {
        template: `
        <a
            v-bind:href="url"
            class="nav-link"
        >
        <slot></slot>
        </a>
        `
    })
    Vue.component('dummy-custom-factor', {
        template: `
            <div>hogehoge</div>
        `
    })
    let vm01 = new Vue({
        el: '#vm01'
    })
    Vue.component('base-layout', {
        template: `
        <div class="container">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
        </div>
        `
    })
    let vm02 = new Vue({
        el: '#vm02'
    })
}
window.onload = tutorial;
