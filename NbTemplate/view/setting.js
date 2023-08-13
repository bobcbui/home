let template = // html
    `
<div style='height:calc(100% - 50px)'>
	<el-table :data="tableData" style="width: 100%" height="100%">
		<el-table-column fixed prop="date" label="Date" width="150" />
		<el-table-column prop="name" label="Name" width="120" />
		<el-table-column prop="state" label="State" width="120" />
		<el-table-column prop="city" label="City" width="320" />
		<el-table-column prop="address" label="Address" width="600" />
		<el-table-column prop="zip" label="Zip"/>
	</el-table>
</div>
<el-pagination background layout="prev, pager, next" :total="1000" style='padding: 5px;border: 1px solid #e6e6e6;border-radius: 5px;background: white;margin-top: 5px;'/>
`
export default {
    template: template,
    data: () => {
        return {
            height: 0
        }
    },
    components: {

    },
    wathc: {

    },
    computed: {

    },
    methods: {
        aotoSize() {
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
        window.onresize = function () {
            self.aotoSize();
        };
        self.aotoSize();
    },
    style:// css
        `
   
	`,
}
