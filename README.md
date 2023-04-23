# POAP EX

POAP EX is the final puzzle piece, ingeniously filling the gap in the POAP ecosystem and bringing the POAP economic system to its ultimate perfection

## Contract

```bash
forge build
forge test
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/ERC6551Registry.sol:ERC6551Registry
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/ExampleERC6551Account.sol:ExampleERC6551Account
cast send --value 0 --rpc-url $RPC_URL --chain 100 --etherscan-api-key $GNOSISSCAN_API_KEY --private-key $PRIVATE_KEY $REGISTRY_ADDRESS "createAccount(address,uint256,address,uint256,uint256,bytes)" $IMPLEMENTATION_ADDRESS 100 $CONTRACT_ADDRESS $TOKEN_ID 0 ""

```

### Contract Address

- [ERC6551Registry](https://gnosisscan.io/address/0x49ca22a4cb2de5e8ec1edcbae9092c4971b8b957)
- [Accoount Implementation](https://gnosisscan.io/address/0x82aC997d69f2649bBD3B0FEfcAe800edC1aAcD67)
- [Sample ERC6551 Account](https://gnosisscan.io/address/0xb49090f95fe0f92f9e10d202c399a36f7951c9e7)

## Frontend

```bash
pnpm install
pnpm run dev
```
