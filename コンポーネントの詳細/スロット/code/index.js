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
    Vue.component('todo-list', {
        props: ['todos'],
        template: `
        <ul>
            <li 
                v-for="todo in todos"
                v-bind:key="todo.id"
            >
                <slot v-bind:todo="todo">
                    {{ todo.text }}
                </slot>
            </li>
        </ul>
        `
    })
    let vm03 = new Vue({
        el: '#vm03', 
        data: {
            doraemons: [
                { id: 1, text: 'のび太の恐竜', isCompleted: false },
                { id: 2, text: 'のび太の宇宙開拓史', isCompleted: false },
                { id: 3, text: 'のび太の大魔境', isCompleted: false },
            ],
            pokemons: [
                { id: 1, text: 'ミュウツーの逆襲', isCompleted: true },
                { id: 2, text: 'ルギア爆誕', isCompleted: false },
                { id: 3, text: '結晶塔の帝王', isCompleted: false },
            ]
        }
    })
}
window.onload = tutorial;
