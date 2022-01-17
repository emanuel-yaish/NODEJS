const fs = require("fs");

const loadAccounts = () => {
  try {
    const dataBuffer = fs.readFileSync(`${__dirname}/../data/accounts.json`);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};

const saveAccounts = (accounts) => {
  const dataJson = JSON.stringify(accounts);
  fs.writeFileSync(`${__dirname}/../data/accounts.json`, dataJson);
};

const getAllAccounts = (req, res) => {
  try {
    const accounts = loadAccounts();
    res.status(200).json({
      status: "success",
      results: accounts.length,
      data: {
        accounts,
      },
    });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const addAccount = (req, res) => {
  try {
    const { passportid, cash, credit } = req.body;
    const accounts = loadAccounts();
    const account = accounts.find(
      (account) => account.passportid === passportid
    );
    if (account) throw Error("Account is already exist!");

    const newAccount = {
      passportid,
      cash: cash === "" ? 0 : cash,
      credit: credit === "" ? 0 : credit,
    };
    accounts.push(newAccount);
    saveAccounts(accounts);

    res.status(200).json({
      status: "success",
      results: "new account created",
      data: {
        newAccount,
      },
    });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const deposit = (accountId, depositAmount, res) => {
  const accounts = loadAccounts();

  const account = accounts.find((account) => account.passportid === accountId);

  if (!account) throw Error("Account not found!");

  account.cash = (+account.cash + +depositAmount).toString();

  saveAccounts(accounts);

  res.status(200).json({
    status: "success",
    results: `deposit ${depositAmount} to account`,
    data: {
      account,
    },
  });
};

const updateCredit = (accountId, newCreditAmmount, res) => {
  const accounts = loadAccounts();

  const account = accounts.find((account) => account.passportid === accountId);

  if (!account) throw Error("Account not found!");

  account.credit = newCreditAmmount;

  saveAccounts(accounts);

  res.status(200).json({
    status: "success",
    results: `the new credit is ${newCreditAmmount}`,
    data: {
      account,
    },
  });
};

const withdraw = (accountId, withdrowAmount, res) => {
  const accounts = loadAccounts();

  const account = accounts.find((account) => account.passportid === accountId);

  if (!account) throw Error("account not found!");

  if (+account.credit + +account.cash < +withdrowAmount)
    throw Error("insufficient funds!");

  account.cash = (+account.cash - +withdrowAmount).toString();

  saveAccounts(accounts);

  res.status(200).json({
    status: "success",
    results: `withdraw ${withdrowAmount} from account`,
    data: {
      account,
    },
  });
};

const transfer = (accountId, reciverAccontID, transferAmmount, res) => {
  const accounts = loadAccounts();

  const account = accounts.find((account) => account.passportid === accountId);
  if (!account) throw Error("Account not found!");

  const reciverAccount = accounts.find(
    (account) => account.passportid === reciverAccontID
  );
  if (!reciverAccount) throw Error("Account not found!");

  if (+account.credit + +account.cash < +transferAmmount)
    throw Error("insufficient funds for transferring!");

  account.cash = (+account.cash - +transferAmmount).toString();
  reciverAccount.cash = (+reciverAccount.cash + +transferAmmount).toString();

  saveAccounts(accounts);

  res.status(200).json({
    status: "success",
    results: `transfer ${transferAmmount} from account:${accountId} to account:${reciverAccontID}`,
    data: {
      account,
      reciverAccount,
    },
  });
};

const handleAccountAction = (req, res) => {
  try {
    const accountId = req.params.accountID;
    if (!accountId || accountId === "") throw Error("missing account Id");

    const { action, actionData } = req.body;

    switch (action) {
      case "deposit":
        const depositAmount = actionData.depositAmount;
        if (!depositAmount || depositAmount <= 0)
          throw Error(`invalid deposit ammount - ${depositAmount}`);
        deposit(accountId, depositAmount, res);
        break;

      case "updateCredit":
        const newCreditAmmount = actionData.newCreditAmmount;
        if (!newCreditAmmount || newCreditAmmount < 0)
          throw Error(`invalid new credit ammount - ${newCreditAmmount}`);
        updateCredit(accountId, newCreditAmmount, res);
        break;

      case "withdraw":
        const withdrawAmmount = actionData.withdrawAmmount;
        if (!withdrawAmmount || withdrawAmmount <= 0)
          throw Error(`invalid withdraw ammount - ${withdrawAmmount}`);
        withdraw(accountId, withdrawAmmount, res);
        break;

      case "transfer":
        const transferAmmount = actionData.transferAmmount;
        if (!transferAmmount || transferAmmount <= 0)
          throw Error(`invalid transfer ammount - ${transferAmmount}`);

        const reciverAccontID = actionData.reciverAccontID;
        if (!reciverAccontID || reciverAccontID === "")
          throw Error("missing reciver account Id");

        transfer(accountId, reciverAccontID, transferAmmount, res);
        break;

      default:
        throw Error("invalid action");
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const getAccount = (req, res) => {
  try {
    const accountId = req.params.accountID;
    if (!accountId || accountId === "") throw Error("missing account Id");

    const accounts = loadAccounts();
    const account = accounts.find(
      (account) => account.passportid === accountId
    );

    if (!account) throw Error(`account ${accountId} not found`);

    res.status(200).json({
      status: "success",
      results: "Account details:",
      data: {
        account,
      },
    });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports = {
  getAllAccounts,
  addAccount,
  handleAccountAction,
  getAccount,
};
