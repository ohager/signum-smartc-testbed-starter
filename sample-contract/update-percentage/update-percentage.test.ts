import {expect, test, describe} from 'vitest'
import {SimulatorTestbed} from 'signum-smartc-testbed';
import {Context} from '../context';
import {UpdatePercentage, UpdatePercentageNotAllowed} from './update-percentage.scenarios';

describe('Sample Contract - Update Percentage', () => {
    test('should update percentage as expected', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(UpdatePercentage);
        const percentage = testbed.getContractMemoryValue("percentage");
        expect(percentage).toBe(50n)

        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(1)
        expect(outgoingTxs[0].amount).toBe(5_0000_0000n)
    })
    test('should not update percentage as sender is not creator', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(UpdatePercentageNotAllowed);
        const percentage = testbed.getContractMemoryValue("percentage");
        expect(percentage).toBe(20n)
        const outgoingTxs = testbed.getTransactions().filter( t => t.sender === Context.ThisContract)
        expect(outgoingTxs).toHaveLength(1)
        expect(outgoingTxs[0].amount).toBe(2_0000_0000n)
    })
})
