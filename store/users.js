export const state = () => ({
    users: [
        {
            id: 1,
            name: 'Sveta Key',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3leiaKcI6vmSvo03T9Gt2gJXQDjjUmwbqsA&usqp=CAU',
            email: 'sdsa@gh.com',
            social: '@svetaKey'
        },
        {
            id: 2,
            name: 'Kristy Tomas',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjgrGl1FfdoR9EEGbOgPYQGD2EnB2Zm148zX1_e3GMutLBZvm-OZ6akwC9QKpcTeuobY&usqp=CAU',
            email: 'kristyTo@gh.com',
            social: '@Krist*t'
        },
        {
            id: 3,
            name: 'Lada Krus',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkL4FPWeQmETLX_kUntiwzr0XhYVKVG_byke9Fi486Kj0IluKQpxCaPh3XVl1ck1a2lxs&usqp=CAU',
            email: 'LaKru@gh.com',
            social: '@ladaKru'
        }
    ]  
})

export const getters = {
    getUsers: state => state.users

}