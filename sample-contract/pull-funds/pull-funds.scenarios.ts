import {Context} from '../context';
import {asHexMessage, UserTransactionObj} from 'signum-smartc-testbed';

export const PullFunds: UserTransactionObj[] = [
    {
        blockheight: 1,
        amount: 1_0000_0000n, // charge
        tokens: [
            { asset: 1n, quantity: 1000_0000n },
            { asset: 2n, quantity: 2000_0000n },
        ],
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageHex: asHexMessage([Context.Methods.PullFunds, 1n]),
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageHex: asHexMessage([Context.Methods.PullFunds, 2n]),
        recipient: Context.ThisContract,
    },
    {
        blockheight: 4,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageHex: asHexMessage([Context.Methods.PullFunds, 22n]),
        recipient: Context.ThisContract,
    },
    {
        blockheight: 6,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageHex: asHexMessage([Context.Methods.PullFunds]),
        recipient: Context.ThisContract,
    },
]

export const PullFundsNotAllowed: UserTransactionObj[] = [
    {
        blockheight: 1,
        amount: 1000_0000n,
        tokens: [
            { asset: 1n, quantity: 1000_0000n },
            { asset: 2n, quantity: 2000_0000n },
        ],
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 1000_0000n,
        sender: Context.SenderAccount1,
        messageHex: asHexMessage([Context.Methods.PullFunds]),
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 1000_0000n,
        sender: Context.SenderAccount1,
        messageHex: asHexMessage([Context.Methods.PullFunds, 1n]),
        recipient: Context.ThisContract,
    }
]
