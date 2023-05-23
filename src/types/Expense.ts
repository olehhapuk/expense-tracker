import { Transaction } from './Transaction';

export interface Expense extends Transaction {
  budget: number;
}
