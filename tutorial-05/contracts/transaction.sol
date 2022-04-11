pragma solidity ^0.8.0;

contract Transaction {
    
    event SenderLogger(address);
    event ValueLogger(uint);
    
    address private owner;
    
    modifier isOwner {
        require(owner == msg.sender);
        _;
    }
    
    modifier validValue {
        assert(msg.value >= 1 ether);
        _;
    }
    
    constructor() public {
        owner = msg.sender;
    }
    
    function test() public payable isOwner validValue {
        emit SenderLogger(msg.sender);
        emit ValueLogger(msg.value);
    }
}
