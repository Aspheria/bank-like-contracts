// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "./safeMath.sol";

contract Bank {
    using SafeMath for uint256;
    
    mapping(address => uint256) public userBalance;

    function getBalance(address user) public view returns (uint256 balance) {
        return userBalance[user];
    }

    function addToBalance() public payable {
        userBalance[msg.sender] = userBalance[msg.sender].add(msg.value);
    }

    function withdrawBalance() public {
        uint256 UserBalanceResult = userBalance[msg.sender];
        userBalance[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: UserBalanceResult}(
            "Withdraw started"
        );
        require(success, "Transfer failed.");
    }
}
