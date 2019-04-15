module.exports = {
    base: '/vue-ui/',
    title: '自制UI',
    description: '一个自制的简易UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: ['/install/',
                    '/get-started/']
            },
            {
                title: '组件',
                children: ['/components/button',
                    '/components/grid',
                    '/components/tabs',
                    '/components/input',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover'

                ]
            }
        ]
    }
}