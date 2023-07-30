let style = // css
`

`

let template = // html
`
<div class='p-10'>
    注册
    <p class='m-b-2'>用户名：</p>
    <input type="text" class='w-100' v-model="loginForm.username" placeholder="用户名">
    <p class='m-b-2'>密码：</p>
    <input type="password" class='w-100' v-model="loginForm.password" placeholder="密码" />
    <br><br>
    <button class='w-100' @click="register()">注册</button>
    <br>
    <a href="/#/login">登录</a>
</div>
`
export default {
    template: template,
    style:style,
    data: () => {
        return {
            loginForm: {

            }
        }
    },
    methods: {
        
    }
}
