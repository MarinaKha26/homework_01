const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}
const showBalance = confirm('Подивитися баланс картки?');
function getMoney() {
    return new Promise((resolve, reject) => {
        if (showBalance === true) {
            const userCurrencies = Object.keys(userData);
            const selectedCurrency = prompt(`Виберіть валюту (${userCurrencies.join(', ')}):`);
            if (userCurrencies.includes(selectedCurrency)) {
                console.log(`Баланс становить: ${userData[selectedCurrency]} ${selectedCurrency}`);
                resolve();
            } else {
                alert('Ви ввели недоступну валюту. Будь ласка, спробуйте знову.');
                getMoney().then(resolve).catch(reject);
            }
        } else {
            const userCurrencies = Object.keys(userData);
            const bankCurrencies = Object.keys(bankData).filter(currency => bankData[currency].max > 0);
            const availableCurrencies = userCurrencies.filter(currency => bankCurrencies.includes(currency));

            if (availableCurrencies.length === 0) {
                console.log('Немає доступних валют для зняття.');
                resolve();
                return;
            }

            const selectedCurrency = prompt(`Виберіть валюту для зняття (${availableCurrencies.join(', ')}):`);
            if (availableCurrencies.includes(selectedCurrency)) {
                const maxWithdrawal = Math.min(bankData[selectedCurrency].max, userData[selectedCurrency]);
                const minWithdrawal = bankData[selectedCurrency].min;
                const withdrawalAmount = +prompt(`Введіть суму зняття (${minWithdrawal} - ${maxWithdrawal}):`);

                if (withdrawalAmount < minWithdrawal) {
                    console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minWithdrawal}`);
                    reject(new Error('Неправильна сума зняття'));
                } else if (withdrawalAmount > maxWithdrawal) {
                    console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${maxWithdrawal}`);
                    reject(new Error('Неправильна сума зняття'));
                } else {
                    console.log(`От Ваші гроші ${withdrawalAmount} ${selectedCurrency} ${bankData[selectedCurrency].img}`);
                    resolve();
                }
            } else {
                reject(new Error('Недоступна валюта'));
            }
        }
    })
}

getMoney()
    .then(() => console.log('Операція успішна'))
    .catch(error => console.error(`Помилка: ${error.message}`));