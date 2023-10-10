import {Context} from '../context';
import {asHexMessage, UserTransactionObj} from 'signum-smartc-testbed';

export const UpdatePercentage: UserTransactionObj[] = [
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.CreatorAccount,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([Context.Methods.UpdatePercentage, 50n]),
    },
    {
        blockheight: 4,
        amount: 10_2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([Context.Methods.ForwardPercentage, Context.SenderAccount2]),
    },
]

export const UpdatePercentageNotAllowed: UserTransactionObj[] = [
    {
        blockheight: 2,
        amount: 2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([Context.Methods.UpdatePercentage, 50n]),
    },
    {
        blockheight: 4,
        amount: 10_2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([Context.Methods.ForwardPercentage, Context.SenderAccount2]),
    },
]
