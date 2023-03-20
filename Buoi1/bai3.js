let user = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },

]

function converted(user) {
    const convertToArray = user.map(users => {
        const { id, ...propierties } = users
        return { [id]: propierties }
    })
    console.log(convertToArray)
}

converted(user)