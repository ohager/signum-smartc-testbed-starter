import {expect, test, describe} from 'vitest'
import {SimulatorTestbed} from 'signum-smartc-testbed';
import {Context} from '../context';
import {PullFunds, PullFundsNotAllowed} from './pull-funds.scenarios';


describe('Sample Contract - Pull Funds', () => {
    test('should pull funds correctly', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(PullFunds);
        const transactions = testbed.getTransactions();
        expect(transactions[3]).toMatchObject({
            recipient: Context.CreatorAccount,
            tokens: [
                { asset: 1n, quantity: 1000_0000n }
            ]
        })
        expect(transactions[4]).toMatchObject({
            recipient: Context.CreatorAccount,
            tokens: [
                { asset: 2n, quantity: 2000_0000n }
            ]
        })
        expect(transactions[7]).toMatchObject({
            amount: 7770_0000n,
            recipient: Context.CreatorAccount
        })

        expect(testbed.getAccount(Context.ThisContract)!.balance).toBe(0n);
        expect(testbed.getAccount(Context.ThisContract)!.tokens).toEqual([
            {
                asset: 1n,
                quantity: 0n
            },
            {
                asset: 2n,
                quantity: 0n
            }
        ]);
    })
    test('should not allow to pull funds', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(PullFundsNotAllowed);
        const transactions = testbed.getTransactions().filter( t => t.recipient === Context.SenderAccount1 || t.recipient === Context.CreatorAccount);
        expect(transactions).toHaveLength(0);
        expect(testbed.getAccount(Context.ThisContract)!.balance).toBe(3000_0000n);
        expect(testbed.getAccount(Context.ThisContract)!.tokens).toEqual([
            {
                asset: 1n,
                quantity: 1000_0000n
            },
            {
                asset: 2n,
                quantity: 2000_0000n
            }
        ]);
    })
})
