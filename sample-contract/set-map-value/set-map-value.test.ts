import {expect, test, describe} from 'vitest'
import {SimulatorTestbed} from 'signum-smartc-testbed';
import {Context} from '../context';
import {SetMapValue} from './set-map-value.scenarios';

describe('Sample Contract - Set Map Value', () => {
    test('should set map values as expected', () => {
        const testbed = SimulatorTestbed
            .loadContract(Context.ContractPath, {percentage: 20})
            .runScenario(SetMapValue);
        const maps = testbed.getMapsPerSlot();
        expect(maps).toEqual([
            {k1: 1n, k2: 1n, value: 1n},
            {k1: 1n, k2: 2n, value: 2n},
            {k1: 1n, k2: 3n, value: 3n},
        ])
    })
})

