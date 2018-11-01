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
    Vue.component('base-input', {
        inheritAttrs: false,
        props: ['label', 'value'],
        computed: {
            inputListeners: function(){
                var vm = this
                // 複数のオブジェクトをObject.assignでマージ
                return Object.assign({},
                    // すべてのイベントリスナを追加
                    this.$listeners,
                    {
                        // inputイベントを下に送ることでコンポーネントがv-modelと動作する
                        input: function(event){
                            vm.$emit('input', event.target.value)
                        }
                    }
                )
            }
        },
        template: `
            <label>
                {{ label }}
                <input 
                    v-bind="$attrs"
                    v-bind:value="value"
                    v-on="inputListeners"
                />
                {{ value }}
            </label>
        `
    })
    let vm02 = new Vue({
        el: '#vm02',
        data: {
            label: 'message',
            value: 'Hello, world!'
        }
    })
}
window.onload = tutorial;
