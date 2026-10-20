export interface Account {
  id: string;
  name: string;
  tier: 'STANDARD' | 'PREMIUM' | 'ENTERPRISE';
  balanceUsd: number;
  active: boolean;
}
