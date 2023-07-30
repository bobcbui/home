let style = // css
`

`

let template = // html
	`
<el-container style='height:100%'>
    <!-- 顶栏容器 -->
    <el-header>
		<el-menu
			mode="horizontal"
			:ellipsis="false"
			@select="handleSelect"
			background-color="#409eff"
			text-color="#fff"
			active-text-color="#ffd04b"
		>
			<el-menu-item>NbTemplate</el-menu-item>
			<el-menu-item @click='isCollapse = !isCollapse'></el-menu-item>
			<div class="flex-grow" />
			<el-menu-item>消息</el-menu-item>
			<el-menu-item>我的</el-menu-item>
		</el-menu>
    </el-header>
    <el-container style='height:calc(100% - 60px)'>
		<!-- 侧边栏容器 -->
		<el-menu
			default-active="1"
			:collapse="isCollapse" 
			style='overflow-y: auto;'
		>
			<template v-for='(item, index) in menu'>
				<el-sub-menu :index="index" v-if='item.children && item.meta.menu'>
					<template #title>
						<el-icon>
							<component :is="item.meta.icon" />
						</el-icon>
						<span>{{item.meta.name}}</span>
					</template>
					<el-menu-item v-for='(item2, index2) in item.children' :index="index + '-' + index2" @click='$router.push({name:item2.name})'>
						<el-icon>
							<component :is="item2.meta.icon" />
						</el-icon>
						<span>{{item2.meta.name}}</span>
					</el-menu-item>
				</el-sub-menu>
				<el-menu-item :index="index" v-if='!item.children && item.meta.menu'  @click='$router.push({name:item.name})'>
					<el-icon>
						<component :is="item.meta.icon" />
					</el-icon>
					<span>{{item.meta.name}}</span>
				</el-menu-item>
			</template>
		</el-menu>
		<el-container style='display: block;'>
			<div style='border-bottom:1px solid var(--el-menu-border-color);background: white'>
				<div style='display: flex;'>
					<div style='display:flex;align-items: center;font-size: 22px;padding-left: 10px;' @click='isCollapse = !isCollapse'>
						<el-icon v-if='isCollapse' style=''><Expand /></el-icon>
						<el-icon v-if='!isCollapse' style=''><Fold /></el-icon>
					</div>
					<el-breadcrumb :separator-icon="ArrowRight" style='padding:10px'>
						<el-breadcrumb-item v-for='(item,index) in parent'>{{item.meta.name}}</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</div>
			
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
    </el-container>
  </el-container>
`
export default {
	template: template,
	style:style,
	data: () => {
		return {
			isCollapse: false,
		}
	},
	destroyed() {
		
	},
	computed: {
		menu(){
			// 返回 his.$router.options.routes 中 meta.start 为 true 的路由的子路由
			return this.$router.options.routes.filter(item => item.meta && item.meta.start)[0].children;
		},
		parent(){
			return this.$route.matched.filter(item => item.meta && item.meta.menu);
		}
	},
	methods: {

	},
	created() {

	},
	mounted() {
	}
}
