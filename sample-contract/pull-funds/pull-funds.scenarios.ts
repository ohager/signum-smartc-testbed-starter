import {Context} from '../context';
import {TransactionObj} from 'signum-smartc-testbed';

export const PullFunds: TransactionObj[] = [
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
        messageArr:[Context.Methods.PullFunds, 1n],
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageArr:[Context.Methods.PullFunds, 2n],
        recipient: Context.ThisContract,
    },
    {
        blockheight: 4,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageArr: [Context.Methods.PullFunds, 22n],
        recipient: Context.ThisContract,
    },
    {
        blockheight: 6,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        messageArr: [Context.Methods.PullFunds],
        recipient: Context.ThisContract,
    },
]

export const PullFundsNotAllowed: TransactionObj[] = [
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
        messageArr: [Context.Methods.PullFunds],
        recipient: Context.ThisContract,
    },
    {
        blockheight: 2,
        amount: 1000_0000n,
        sender: Context.SenderAccount1,
        messageArr: [Context.Methods.PullFunds, 1n],
        recipient: Context.ThisContract,
    }
]
