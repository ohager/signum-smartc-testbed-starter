import {Context} from '../context';
import {asHexMessage, UserTransactionObj} from 'signum-smartc-testbed';

export const ForwardPercentage: UserTransactionObj[] = [
    {
        blockheight: 1,
        amount: 10_2000_0000n,
        sender: Context.SenderAccount1,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([
            Context.Methods.ForwardPercentage,
            Context.SenderAccount2
        ]),
    },
    {
        blockheight: 2,
        amount: 20_2000_0000n,
        sender: Context.SenderAccount2,
        recipient: Context.ThisContract,
        messageHex: asHexMessage([Context.Methods.ForwardPercentage, Context.SenderAccount1]),
    },
]
