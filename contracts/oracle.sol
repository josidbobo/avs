// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './interfaces/tvlFeedInterface.sol';

contract TVLFeed is Ownable, TVLInterface {
    uint private tvl;

    function getTVL() public view returns (uint){
        return tvl;
    }

    function setTVL(uint _newTvl) external onlyOwner{
        tvl = _data;
    }
}
