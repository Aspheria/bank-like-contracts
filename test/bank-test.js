const { ethers } = require("hardhat");

const { expect } = require("chai");

let origin;
let bank;
let owner;

//run:  npx hardhat test

beforeEach(async function () {

  [origin] = await ethers.getSigners();

  const bankContract = await ethers.getContractFactory("Bank");

  bank = await bankContract.deploy();

  await bank.deployed();
});


  it("Deployment should add Balance to total amount account", async function () {
    const amountToSend = ethers.utils.parseEther("1.5");
    await bank.addToBalance({ from: origin.address, value: amountToSend });

    expect(await bank.getBalance(origin.address)).to.equal(amountToSend)
  });



describe("Likable", function () {
  it("should return withraw balance", async function () {
    const amountToSend = ethers.utils.parseEther("1.5");
    await bank.addToBalance({ from: origin.address, value: amountToSend });

    expect(await bank.getBalance(origin.address)).to.equal(amountToSend)

    await bank.withdrawBalance({ from: origin.address });

    expect(await bank.getBalance(origin.address)).to.equal(0)
  });
});




