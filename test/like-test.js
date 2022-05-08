// const { ethers } = require("hardhat");
// const { expect, assert } = require("chai");

// let like;


// beforeEach(async function () {
//   [origin] = await ethers.getSigners();

//   const likeContract = await ethers.getContractFactory("like");
//   like = await likeContract.deploy();
//   await like.deployed();
// });

// describe("like contract", function () {
//   it("Should fail if sender doesn’t have enough tokens or zero", async function () {
//     try {
//       await like.remove();
//       assert.fail("Should fail");
//     }
//     catch (error) {
//       assert.include(error.message, 'subtraction overflow', "Reverted with reason string 'SafeMath: subtraction overflow");
//     }
//   });


//   it("Add and remove", async function () {
//     await like.add();
//     expect(await like.likes()).to.equal(1);

//     await like.remove();
//     expect(await likable.likes()).to.equal(0);
//   });
// });
