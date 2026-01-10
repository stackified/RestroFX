export interface AccountType {
  id: string;
  name: string;
  spread: string;
  commission: string;
  leverage: string;
  executionType: string;
  minimumDeposit: string;
  popular?: boolean;
}

export interface TradingPlatform {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface Market {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface TrustMetric {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

