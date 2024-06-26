import {Context} from '../context';
import {TransactionObj} from 'signum-smartc-testbed';

export const SetMapValue: TransactionObj[] = [
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.SetMapValue, 1n, 1n],
    },
    {
        blockheight: 4,
        amount: 2000_0000n,
        sender: Context.SenderAccount2,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.SetMapValue, 2n, 2n],
    },
    {
        blockheight: 6,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.SetMapValue, 3n, 3n],
    },
]
