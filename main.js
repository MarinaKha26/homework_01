const ITCompany = {
    id: 12332129,
    сompanyName: 'Playtika',
    type: 'product',
    vacancies: [
        {
            frontEnd: {
                salary: 1200
            },
        },
        {
            backEnd: {
                salary: 1500
            },
        },
        {
            scramMaster: {
                salary: 500
            },
        },
        {
            tester: {
                salary: 600
            },
        }
    ]
}

let userName = prompt('Write your name')
let userPosition = prompt('Write your position')
let userSalary = +prompt('Write your desired salary')