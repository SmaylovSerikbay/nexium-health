/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ConfiguratorInputs {
  employees: number;
  terminals: number;
}

export interface ConfiguratorOutputs {
  pricePerCheckup: number;
  turnkeyMonthlyTotal: number;
  leaseMonthlyTotal: number;
  purchaseTotal: number;
}

export interface HardwareFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  longDescription: string;
  techSpecs: string[];
}

export interface ServiceFeature {
  id: string;
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
}
