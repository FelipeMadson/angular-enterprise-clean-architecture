import { signal, computed } from '@angular/core';
import { Account } from '../models/account.js';
import { Result, ok, fail } from '../models/result.js';

export class AccountStateService {
  private readonly _accounts = signal<Account[]>([]);
  private readonly _selectedId = signal<string | null>(null);

  readonly accounts = this._accounts.asReadonly();
  readonly totalBalance = computed(() => 
    this._accounts().reduce((sum, acc) => sum + acc.balanceUsd, 0)
  );
  readonly selectedAccount = computed(() => 
    this._accounts().find(acc => acc.id === this._selectedId()) ?? null
  );

  setAccounts(accounts: Account[]): void {
    this._accounts.set([...accounts]);
  }

  selectAccount(id: string): void {
    this._selectedId.set(id);
  }

  updateBalance(id: string, deltaUsd: number): Result<Account, string> {
    const list = this._accounts();
    const idx = list.findIndex(a => a.id === id);
    if (idx === -1) {
      return fail('Account not found');
    }
    const current = list[idx];
    if (current.balanceUsd + deltaUsd < 0) {
      return fail('Insufficient balance');
    }
    const updated: Account = { ...current, balanceUsd: current.balanceUsd + deltaUsd };
    const nextList = [...list];
    nextList[idx] = updated;
    this._accounts.set(nextList);
    return ok(updated);
  }
}
