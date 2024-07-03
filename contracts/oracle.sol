// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './interfaces/tvlFeedInterface.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract TVLFeed is Ownable, TVLInterface {
    uint private tvl;

    constructor() Ownable(msg.sender){  }

    function getTVL() public view returns (uint){
        return tvl;
    }

    function setTVL(uint _newTvl) external onlyOwner{
        tvl = _newTvl;
    }
}
