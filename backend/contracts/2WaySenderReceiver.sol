//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {AxelarExecutable} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol";
import {IAxelarGateway} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol";
import {IAxelarGasService} from "@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol";

contract TwoWaySenderReceiver is AxelarExecutable {
    IAxelarGasService public immutable gasService;
    string public message;
    // for fvm chain
    address gateway_ = 0xe432150cce91c13a887f7D836923d5597adD8E31;
    address gasService_ = 0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6;

    constructor() AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasService_);
    }

    function sendMessage(
        string calldata destinationChain,
        string calldata destinationAddress,
        string calldata message_
    ) external payable {
        bytes memory payload = abi.encode(message_);
        gasService.payNativeGasForContractCall{value: msg.value}(
            address(this),
            destinationChain,
            destinationAddress,
            payload,
            msg.sender
        );

        gateway.callContract(destinationChain, destinationAddress, payload);
    }

    function _execute(
        string calldata sourceChain,
        string calldata sourceAddress,
        bytes calldata payload_
    ) internal override {
        message = abi.decode(payload_, (string));
        if (
            keccak256(abi.encodePacked(message)) == keccak256(abi.encodePacked("hello"))
        ) {
            gateway.callContract(
                sourceChain,
                sourceAddress,
                abi.encode("Hi, your message is recieved!")
            );
        }
    }
}
