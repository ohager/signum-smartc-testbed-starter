# Sample Contract

This smart contract is an example and this documents is a suggestion how to describe basic parameters of your contract.

|                    |                         |
|--------------------|-------------------------|
| Code Hash          |                         |
| Testnet Account Id |                         |
| Mainnet Account Id |                         |

## Data Stack

| Name       | Stack Index (0-based) | Initializable | Values | Description            |
|------------|-----------------------|---------------|--------|------------------------|
| Percentage | 4                     | yes           | 0-100  | Percentage for Forward |

## Methods:

| Method             | Arg0 | Arg1         | Arg2  | Role/Permission | Description                                               |
|--------------------|------|--------------|-------|-----------------|-----------------------------------------------------------|
| Forward Percentage | 1    | Recipient Id |       | Creator         | Sends a percentage of given SIGNA amount to recipient     |
| Update Percentage  | 2    | Percentage   |       | Creator         | Updates percentage to be sent                             |
| Set Map Value      | 3    | 2nd Key      | Value | Everybody       | Sets a map value with 2nd key and 3rd value               |
| Pull Funds         | 4    | TokenId      |       | Creator         | Sends the given token (0 = SIGNA) balances to the creator |

## Maps

| Description | Key 1 | Key 2 | Value |
|-------------|-------|-------|-------|
| Map Key 1   | 1     | free  | free  |
