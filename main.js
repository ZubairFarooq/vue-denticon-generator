let app = new Vue({
    el: '#app',
    data: {
        inputText : ''
    },
    computed:{
        denticon : function(){
            return jdenticon.toSvg(this.inputText, 200)
        }
    },
    methods: {
        onChangeInput : function(event){
            this.inputText = event.target.value
        }
    }
})