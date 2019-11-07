export default [
	{path: '/', redirect: 'home'}, //默认路径
	{
		path: '/home',
		name: 'home',
		meta: {
			title: 'home'
		},
		component: resolve => require(['../views/home/home.vue'], resolve)
	},
	{
		path: '/mine',
		name: 'mine',
		meta: {
			title: '我的'
		},
		component: resolve => require(['../views/mine/mine.vue'], resolve)
	},
	{
		path: '/rank',
		name: 'rank',
		meta: {
			title: 'rank'
		},
		component: resolve => require(['../views/rank/rank.vue'], resolve)
	},
	{
		path: '/rule',
		name: 'rule',
		meta: {
			title: '我的'
		},
		component: resolve => require(['../views/rule/rule.vue'], resolve)
	},
	{
		path: '/news',
		name: 'news',
		meta: {
			title: '新闻'
		},
		component: resolve => require(['../views/news.vue'], resolve)
	}
]
