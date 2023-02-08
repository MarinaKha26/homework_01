let countTries = 3

while(countTries > 0)
{
    let errors = ''
    let email = prompt('Write your email')

    if (email.startsWith(" ") || email.startsWith('@')){
        errors = errors + ('\n your email must start without "@" and space ')
    }else{
        correct=('')
    }

    if (email.endsWith(" ") || email.endsWith('@')){
        errors =  errors + ('\n your email must end without "@" and space ')
    }else{
        correct=('')
    }

    if (email.includes('@')){
        correct=('')
    }else{
        errors =  errors + ('\n your email must includes "@"')
    }

    if (email.length <= 15 ){
        correct=('')
    } else{
        errors =  errors + ('\n you email must be up to 15 characters long')
    }

    if (email.endsWith('.com')){
        correct=('')
    } else{
        errors =  errors + ('\n your email must end with ".com')
    }


}