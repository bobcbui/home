let style = // css
`
.setting{
    color: #ff0000;
}

`

let template = // html
    `
<div class="setting" >
你好，这里用到了js写样式模块修改了文字颜色
</div>
`
export default {
    template: template,
    style: style,
    data: () => {
        return {
            height:0
        }
    },
    components: {
     
    },
    wathc: {

    },
    computed: {
        
    },
    methods: {
        aotoSize(){
			const self = this;
			let el = document.querySelector("body"),
			elParent = el.parentNode;
			self.$nextTick(() => {
				self.height = (elParent.clientHeight - 170) + "px";
			});
		}
    },
    created() {
        const self = this;
		window.onresize = function() {
			self.aotoSize();
		};
		self.aotoSize();
    }
}
