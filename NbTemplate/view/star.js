let style = // css
`

`

let template = // html
    `
星球管理系统
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
