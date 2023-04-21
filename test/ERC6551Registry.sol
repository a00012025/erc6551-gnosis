// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../contracts/ERC6551Registry.sol";
import "./mocks/MockERC721.sol";
import "./mocks/MockERC6551Account.sol";

contract RegistryTest is Test {
    ERC6551Registry public registry;
    MockERC6551Account public implementation;

    function setUp() public {
        registry = new ERC6551Registry();
        implementation = new MockERC6551Account();
    }

    function testDeploy() public {
        uint256 chainId = 100;
        address tokenAddress = address(200);
        uint256 tokenId = 300;
        uint256 salt = 400;
        address deployedAccount;

        vm.expectRevert(
            abi.encodeWithSelector(bytes4(keccak256("InitializationFailed()")))
        );
        deployedAccount = registry.createAccount(
            address(implementation),
            chainId,
            tokenAddress,
            tokenId,
            salt,
            abi.encodeWithSignature("initialize(bool)", false)
        );

        deployedAccount = registry.createAccount(
            address(implementation),
            chainId,
            tokenAddress,
            tokenId,
            salt,
            abi.encodeWithSignature("initialize(bool)", true)
        );

        MockERC6551Account accountInstance = MockERC6551Account(
            payable(deployedAccount)
        );

        (
            uint256 chainId_,
            address tokenAddress_,
            uint256 tokenId_
        ) = accountInstance.token();
        assertEq(chainId_, chainId);
        assertEq(tokenAddress_, tokenAddress);
        assertEq(tokenId_, tokenId);

        assertEq(salt, accountInstance.salt());

        address accountImplementation = IERC6551AccountProxy(deployedAccount)
            .implementation();

        assertEq(accountImplementation, address(implementation));
    }
}