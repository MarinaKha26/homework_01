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

function checkApplicant(name,position,salary) {
    const vacancies = ITCompany.vacancies
  
    for (let i = 0; i < vacancies.length; i++) {
      const vacancy = vacancies[i]
      const vacancyPosition = Object.keys(vacancy)[0]
      const vacancySalary = vacancy[vacancyPosition].salary
  
      if (position.toLowerCase() === vacancyPosition.toLowerCase() && salary <= vacancySalary) {
        const applicantObj = Object.create(ITCompany)
        applicantObj.applicantName = name
        applicantObj.positionName = position
        applicantObj.salary = salary
        applicantObj.greeting = function() {
          document.write(`hello my name is ${this.applicantName}, im ${this.positionName} in ${this.сompanyName}`)
        };
        applicantObj.greeting()
        return applicantObj
      }
    }

    document.write(`${name}, you have significant skills at ${position} but we hired another developer, let's keep contact !`)
  
}

checkApplicant(userName, userPosition, userSalary)