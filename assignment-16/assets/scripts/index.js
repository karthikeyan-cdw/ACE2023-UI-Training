// Function holding the banking functionalities
(function () {
  // stored accounts
  var accounts = [
    {
      accountNo: 1,
      cardNo: 1,
      pin: 1,
      balance: 0,
    },
    {
      accountNo: 2,
      cardNo: 2,
      pin: 2,
      balance: 0,
    },
    {
      accountNo: 3,
      cardNo: 3,
      pin: 3,
      balance: 0,
    },
    {
      accountNo: 4,
      cardNo: 4,
      pin: 4,
      balance: 0,
    },
    {
      accountNo: 5,
      cardNo: 5,
      pin: 5,
      balance: 0,
    },
  ];

  // Function to validate whether the entered value number
  function isNum(val) {
    if (isNaN(val)) {
      alert("Enter only Number");
      return false;
    }
    return true;
  }
  // Function to validate PIN Number
  function validate(cardNo, pin) {
    for (let account of accounts) {
      if (account.cardNo === cardNo) {
        if (account.pin === pin) {
          return true;
        } else {
          alert("Invalid PIN Number");
          return false;
        }
      }
    }
    alert("Card Not Found");
    return false;
  }
  // Function to validate valid amount
  function isValidAmount(amount) {
    if (!isNum(amount)) return false;
    else if (amount < 1) {
      alert("Enter a valid amount");
      return false;
    }
    return true;
  }
  // Function to deposit amount
  function deposit(cardNo, pin) {
    function _deposit(cardNo, pin) {
      if (validate(cardNo, pin)) {
        do {
          amount = prompt("Enter amount to be deposited:");
        } while (!isValidAmount(amount));
        amount = Number(amount);
        for (let account of accounts) {
          if (account.cardNo === cardNo) {
            account.balance += amount;
            alert(`Deposited: ${amount}\nBalance: ${account.balance}`);
            return;
          }
        }
      }
    }
    return _deposit(cardNo, pin);
  }
  // Function to withdraw amount
  function withdraw(cardNo, pin) {
    function _withdraw(cardNo, pin) {
      if (validate(cardNo, pin)) {
        do {
          amount = prompt("Enter amount to be withdrawed:");
        } while (!isValidAmount(amount));
        amount = Number(amount);
        for (let account of accounts) {
          if (account.cardNo === cardNo) {
            if (account.balance < amount) {
              alert("Insufficient balance");
              return;
            }
            account.balance -= amount;
            alert(`Withdrawed: ${amount}\nBalance: ${account.balance}`);
            return;
          }
        }
      }
    }
    return _withdraw(cardNo, pin);
  }
  // Function to check balance
  function checkBalance(cardNo, pin) {
    function _checkBalance(cardNo, pin) {
      if (validate(cardNo, pin)) {
        for (let account of accounts) {
          if (account.cardNo === cardNo) {
            alert(`Balance : ${account["balance"]}`);
            return;
          }
        }
      }
    }
    return _checkBalance(cardNo, pin);
  }
  // To Start the CDM Machine
  while (true) {
    // Getting the user input for service required
    let choice = prompt(
      "Choose service required:\n1.Deposit 2.Withdraw\n3.Balance Enquiry 4.Exit"
    );
    // General validations
    if (!isNum(choice)) continue;
    choice = Number(choice);
    if (choice < 1 || choice > 4) {
      alert("Choose between 1 and 4");
      continue;
    }
    if (choice === 4) break;
    // Getting card number and PIN
    do {
      cardNo = prompt("Enter your card no:");
    } while (!isNum(cardNo));
    do {
      pin = prompt("Enter you PIN:");
    } while (!isNum(pin));
    cardNo = Number(cardNo);
    pin = Number(cardNo);
    // Selecting the action to be performed
    switch (choice) {
      case 1:
        deposit(cardNo, pin);
        break;
      case 2:
        withdraw(cardNo, pin);
        break;
      case 3:
        checkBalance(cardNo, pin);
        break;
    }
  }
})();
