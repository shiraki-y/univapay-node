/**
 *  @internal
 *  @module Types
 */

import { CardBrand } from './enums';
import { AmountWithCurrency } from './types';
import { RecurringTokenPrivilege } from '../TransactionTokens';

export interface PaymentTypeConfiguration {
    enabled?: boolean;
}

export interface CardBrandPercentFeesItem {
    americanExpress?: number;
    dinersClub?: number;
    discover?: number;
    jcb?: number;
    maestro?: number;
    mastercard?: number;
    unionPay?: number;
    visa?: number;
}

export type CardConfigurationMonthlyLimit = AmountWithCurrency;

export interface CardConfigurationItem extends PaymentTypeConfiguration {
    debitEnabled: boolean;
    prepaidEnabled: boolean;
    forbiddenCardBrands: CardBrand[];
    foreignCardsAllowed: boolean;
    failOnNewEmail: boolean;
    allowedCountriesByIp: string[];
    cardLimit: CardConfigurationMonthlyLimit;
    allowEmptyCvv: boolean;
    onlyDirectCurrency: boolean;
}

export interface QRScanConfigurationItem extends PaymentTypeConfiguration {
    forbiddenQrScanGateways: string[];
}

export type QRMerchantConfigurationItem = PaymentTypeConfiguration;

export type ConvenienceConfigurationItem = PaymentTypeConfiguration;

export type PaidyConfigurationItem = PaymentTypeConfiguration;

export interface InstallmentsConfiguration {
    enabled?: boolean;
    minChargeAmount?: number;
    maxPayoutPeriod?: string;
    failedCyclesToCancel?: number;
    onlyWithProcessor?: boolean;
}

export interface InstallmentsConfigurationItem extends PaymentTypeConfiguration, InstallmentsConfiguration {}

export interface SecurityConfiguration {
    inspectSuspiciousLoginAfter?: string;
    limitChargeByCardConfiguration?: {
        quantityOfCharges: number;
        durationWindow: string;
    };
    refundPercentLimit?: number;
}

export interface UserTransactionsConfiguration {
    enabled?: boolean;
    notifyCustomer?: boolean;
}

export interface RecurringTokenConfiguration {
    recurringType?: RecurringTokenPrivilege;
    chargeWaitPeriod?: string;
    cardChargeCvvConfirmation?: {
        enabled?: boolean;
        threshold?: AmountWithCurrency[];
    };
}

export interface SubscriptionsConfiguration {
    failedChargesToCancel: number;
    suspendOnCancel: boolean;
}

export interface DescriptorProvidedConfiguration {
    name: string;
    phoneNumber: string;
}

export interface ConfigurationItem {
    cardBrandPercentFees: CardBrandPercentFeesItem;
    cardConfiguration: CardConfigurationItem;
    convenienceConfiguration: ConvenienceConfigurationItem;
    paidyConfiguration: PaidyConfigurationItem;
    country: string;
    displayTimeZone: string;
    flatFees: AmountWithCurrency[];
    installmentsConfiguration: InstallmentsConfigurationItem;
    language: string;
    logoUrl?: string;
    maximumChargeAmounts: AmountWithCurrency[];
    minTransferPayout?: AmountWithCurrency;
    percentFee: number;
    qrScanConfiguration: QRScanConfigurationItem;
    qrMerchantConfiguration: QRMerchantConfigurationItem;
    recurringTokenConfiguration: RecurringTokenConfiguration;
    securityConfiguration: SecurityConfiguration;
    subscriptionConfiguration: SubscriptionsConfiguration;
    userTransactionsConfiguration?: UserTransactionsConfiguration;
    descriptorProvidedConfiguration?: DescriptorProvidedConfiguration;
}

export interface ConfigurationParams {
    logoUrl?: string;
    cardConfiguration?: Partial<CardConfigurationItem>;
    qrScanConfiguration?: Partial<QRScanConfigurationItem>;
    qrMerchantConfiguration?: Partial<QRMerchantConfigurationItem>;
    convenienceConfiguration?: Partial<ConvenienceConfigurationItem>;
    paidyConfiguration?: Partial<PaidyConfigurationItem>;
    installmentsConfiguration?: Partial<InstallmentsConfigurationItem>;
}

export type ConfigurationCreateParams = ConfigurationParams;
export type ConfigurationUpdateParams = ConfigurationParams;
