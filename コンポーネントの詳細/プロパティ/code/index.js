var tutorial = function(){
    Vue.component('blog-post', {
        props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            CommentIds: Array,
            author: Object
        },
        template: `
        <div class="blog-post">
            <h3>{{ title }}</h3>
            <hr />
            <p><slot></slot></p>
            <p>Likes: {{ likes }}</p>
            <p>CommentIds: {{ CommentIds }}</p>
            <p>author: {{ author }}</p>
        </div>
        `
    })
    var vm01 = new Vue({
        el: '#vm01',
        data: {
            samuraix: { title: 'るろうに剣心', likes: 28, isPublished: true, CommentIds: [1, 2, 3, 4, 5, 6, 7, 8, 9], author: { name: '和月伸宏', publisher: '集英社' } }
        }
    })
    
}
window.onload = tutorial;
