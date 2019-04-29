pragma solidity >=0.4.22 <0.6.0;
contract owned {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner public {
        owner = newOwner;
    }
}

contract EtherstanCitizenship is owned {

    struct Citizen{
        string email ;
        string firstName ;
        string lastName ;
        address _address;
    }

    mapping(address => Citizen) public citizens;

    function register(string memory _email, string memory _firstName , string memory _lastName ) public
    {
        bytes memory _emailByte = bytes(_email);
        require(_emailByte.length != 0, "Email is empty");
        bytes memory _firstNameByte = bytes(_firstName);
        require(_firstNameByte.length != 0, "First Name is empty");
        bytes memory _lastNameByte = bytes(_lastName);
        require(_lastNameByte.length != 0, "Last Name is empty");
        citizens[msg.sender] =  Citizen(_email,_firstName, _lastName, msg.sender) ;
    }
}