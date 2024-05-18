import {Context} from '../context';
import {TransactionObj} from 'signum-smartc-testbed';

export const UpdatePercentage: TransactionObj[] = [
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.UpdatePercentage, 50n]
    },
    {
        blockheight: 4,
        amount: 10_2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.ForwardPercentage, Context.SenderAccount2],
    },
]

export const UpdatePercentageNotAllowed: TransactionObj[] = [
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.UpdatePercentage, 50n],
    },
    {
        blockheight: 4,
        amount: 10_2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageArr: [Context.Methods.ForwardPercentage, Context.SenderAccount2],
    },
]
