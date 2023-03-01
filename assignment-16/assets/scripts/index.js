// Function holding the banking functionalities
function bank() {
  // stored accounts
  var accounts = [
    {
      acc_no: 1,
      card_no: 1,
      pin: 1,
      balance: 0,
    },
    {
      acc_no: 2,
      card_no: 2,
      pin: 2,
      balance: 0,
    },
    {
      acc_no: 3,
      card_no: 3,
      pin: 3,
      balance: 0,
    },
    {
      acc_no: 4,
      card_no: 4,
      pin: 4,
      balance: 0,
    },
    {
      acc_no: 5,
      card_no: 5,
      pin: 5,
      balance: 0,
    },
  ];
  // Function to validate PIN Number
  function validate(card_no, pin) {
    for (let account of accounts) {
      if (account.card_no === card_no) {
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
  // Function to deposit amount
  function deposit(card_no, pin) {
    function _deposit(card_no, pin) {
      if (validate(card_no, pin)) {
        let amount = Number(prompt("Enter amount to be deposited:"));
        for (let account of accounts) {
          if (account.card_no === card_no) {
            account.balance += amount;
            alert(`Deposited: ${amount}\nBalance: ${account.balance}`);
            return;
          }
        }
      }
    }
    return _deposit(card_no, pin);
  }
  // Function to withdraw amount
  function withdraw(card_no, pin) {
    function _withdraw(card_no, pin) {
      if (validate(card_no, pin)) {
        let amount = Number(prompt("Enter amount to be withdrawed:"));
        for (let account of accounts) {
          if (account.card_no === card_no) {
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
    return _withdraw(card_no, pin);
  }
  // Function to check balance
  function checkBalance(card_no, pin) {
    function _checkBalance(card_no, pin) {
      if (validate(card_no, pin)) {
        for (let account of accounts) {
          if (account.card_no === card_no) {
            alert(`Balance : ${account["balance"]}`);
            return;
          }
        }
      }
    }
    return _checkBalance(card_no, pin);
  }
  // To Start the CDM Machine
  while (true) {
    // Getting the user input for service required
    let choice = prompt(
      "Choose service required:\n1.Deposit 2.Withdraw\n3.Balance Enquiry 4.Cancel"
    );
    // General validations
    if (choice === "") break;
    choice = Number(choice);
    if (choice < 1 && choice > 4) break;
    if (choice === 4) break;
    // Getting card number and PIN
    let card_no = Number(prompt("Enter your card no:"));
    let pin = Number(prompt("Enter you PIN:"));
    // Selecting the action to be performed
    switch (choice) {
      case 1:
        deposit(card_no, pin);
        break;
      case 2:
        withdraw(card_no, pin);
        break;
      case 3:
        checkBalance(card_no, pin);
        break;
    }
  }
}

// Function call to start the banking services
bank();
