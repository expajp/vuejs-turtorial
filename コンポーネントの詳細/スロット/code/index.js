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
}
window.onload = tutorial;
