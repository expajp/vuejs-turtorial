var tutorial = function(){
    Vue.component('base-checkbox', {
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        },
        template: `
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
         />
        `
    })
    let vm01 = new Vue({
        el: '#vm01',
        data: {
            lovingVue: true
        }
    })
}
window.onload = tutorial;
