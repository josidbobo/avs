// SPDX-License-identifier: MIT
pragma solidity 0.8.9;

import './interfaces/tvlFeedInterface.sol';

contract Consumer {
    TVLInterface currentTvl;

    constructor (address _tvlAddress){
        currentTvl = TVLInterface(_tvlAddress);
    }

    function getCurrentTVl() internal view returns(uint) {
        return currentTvl.getTVL();
    }

    function updateFeed(address _currentTVL) public{
        currentTvl = TVLInterface(_currentTVL);
    }

    function calculateYield (uint _amount) internal {
        uint tvl = currentTvl.getTVL();

        // Any other logic 
    } 
}