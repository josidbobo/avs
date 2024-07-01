// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface TVLInterface{
    function getTVL() external view returns(uint256);
    function setTVL(uint data) external;
}