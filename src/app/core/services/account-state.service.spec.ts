import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { AccountStateService } from './account-state.service.js';

describe('AccountStateService Reactive Signals Test Suite', () => {
  test('should compute total balance reactively from accounts signal', () => {
    const service = new AccountStateService();
    service.setAccounts([
      { id: 'acc-1', name: 'Alpha Corp', tier: 'ENTERPRISE', balanceUsd: 150000, active: true },
      { id: 'acc-2', name: 'Beta Ltd', tier: 'PREMIUM', balanceUsd: 75000, active: true }
    ]);

    assert.strictEqual(service.totalBalance(), 225000);
    assert.strictEqual(service.accounts().length, 2);
  });

  test('should enforce balance constraint and update signal state on ok', () => {
    const service = new AccountStateService();
    service.setAccounts([
      { id: 'acc-1', name: 'Alpha Corp', tier: 'ENTERPRISE', balanceUsd: 1000, active: true }
    ]);

    const failRes = service.updateBalance('acc-1', -1500);
    assert.strictEqual(failRes.success, false);
    assert.strictEqual(service.totalBalance(), 1000);

    const okRes = service.updateBalance('acc-1', 500);
    assert.strictEqual(okRes.success, true);
    assert.strictEqual(service.totalBalance(), 1500);
  });
});
