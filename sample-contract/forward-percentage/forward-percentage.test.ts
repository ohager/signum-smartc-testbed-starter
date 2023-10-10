import {expect, test, describe} from 'vitest'
import {SimulatorTestbed} from 'signum-smartc-testbed';
import {Context} from '../context';
import {ForwardPercentage} from './forward-percentage.scenarios';

describe('Sample Contract - Forward Percentage', () => {
    test('should forward percentage as expected - 20%', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(ForwardPercentage);
        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(2)
        expect(outgoingTxs[0]).toMatchObject({
            amount: 2_0000_0000n,
            recipient: Context.SenderAccount2,
        })
        expect(outgoingTxs[1]).toMatchObject({
            amount: 4_0000_0000n,
            recipient: Context.SenderAccount1,
        })
    })
    test('should forward percentage as expected - 33%', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 33})
            .runScenario(ForwardPercentage);
        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(2)
        expect(outgoingTxs[0]).toMatchObject({
            amount: 3_3000_0000n,
            recipient: Context.SenderAccount2,
        })
        expect(outgoingTxs[1]).toMatchObject({
            amount: 6_6000_0000n,
            recipient: Context.SenderAccount1,
        })
    })
    test('should forward percentage as expected - 100%', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 100})
            .runScenario(ForwardPercentage);
        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(2)
        expect(outgoingTxs[0]).toMatchObject({
            amount: 10_0000_0000n,
            recipient: Context.SenderAccount2,
        })
        expect(outgoingTxs[1]).toMatchObject({
            amount: 20_0000_0000n,
            recipient: Context.SenderAccount1,
        })
    })
    test('should forward percentage as expected - 0%', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 0})
            .runScenario(ForwardPercentage);
        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(0)
    })
})
