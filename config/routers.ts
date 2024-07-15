const routes=[
    {
        path: '/',
        routes: [
            { path: '/', redirect: '/index' },
            { path: '/index', component: '@/pages/Page1/index' },
            { path: '/page2', component: '@/pages/Page2/index' },
        ],
    },
]
export default routes