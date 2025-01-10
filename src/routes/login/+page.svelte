<svelte:head>
	<title>登录页面</title>
	<meta name="description" content="多人聊天室登陆页面-千叶-千叶公司" />
</svelte:head>

<style>
	#login {
		background-image: url('@/images/login/login_bg.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.login-content {
		width: 608px;
		height: 540px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 8px;
	}
	.login-content .title {
		padding-top: 63px;
		padding-bottom: 26px;
		color: #333333;
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
	}
	.form-item {
		margin-bottom: 18px;
		position: relative;
	}
	.form-item .front-icon {
		position: absolute;
		left: 15px;
		width: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
	.form-item .behind-icon {
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		width: fit-content;
		background-color: #fff;
		border: none;
	}
	.form-item input {
		width: 332px;
		height: 42px;
		border-radius: 7px;
		border: 1px solid #dddfe2;
		padding-left: 46px;
		font-size: 16px;
		transition: border 0.4s;
		box-sizing: border-box;
	}
	.form-item input:hover {
		box-shadow: 0px 0px 8px 5px rgb(235 235 235 / 90%);
		transition: box-shadow 0.4s;
	}
	.form-item input:focus-visible {
		border: 1px solid #1599ff;
		box-shadow: 0 0 2px 1px #1599ff;
		outline: none;
	}
	.login-button {
		background-color: #1599FF;
		color: #fff;
		font-size: 20px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 333px;
		height: 44px;
		border-radius: 7px;
		border: none;
		cursor: pointer;
	}
	.login-button:hover {
		background: linear-gradient(to bottom,  #1599ffB3 ,#1599ff);
		transition: all 0.4s;
	}
</style>

<div id="login">
	<div class="login-content">
		<div class="title">账号登录</div>
		<form id="login-form">
			<div class="form-item">
				<img class="front-icon" src={user} alt="">
				<input type="text" placeholder="账号" >
			</div>
			<div class="form-item">
				<img class="front-icon" src={password} alt="">
				<input type={show ? 'password' : 'text'} placeholder="密码">
				<button class="behind-icon" on:click={toggleIcon} ><img  src={show ? close : open} alt="" /></button>
			</div>
			<div class="login-slide"></div>
			<button class="login-button" type="submit">登录</button>
		</form>
	</div>
</div>
<script lang="ts">
import user from '@/images/login/user.png'
import password from '@/images/login/password.png'
import close from '@/images/login/open.png'
import open from '@/images/login/show.png'
import { onMount } from 'svelte';
let show = true;
function toggleIcon() {
	show = !show;
}

onMount(() => {
	function verifyCallBack(value: string): void {
		if (slideVerify?.verifyResult?.isPass) {
			console.log(value)
		}
	}
	// 初始化 SlideVerify 实例
	let slideVerify = new SlideVerify(
			{
				bgColor: '#1599ff',
				roundColor: '#1599ff',
				width: 332,
				height: 38,
				lang: 'RMB'
			},
			verifyCallBack
	);

	// 初始化拖拽功能
	slideVerify.initDrag();
});


</script>