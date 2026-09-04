---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1322

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1322

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.4]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Calculation of loan-to-value ratios, debt service coverage ratios, and debt to income ratios


---

## Question

**Submission Date:** 26 February 2021

(a) How should loan-to-value ratios, debt service coverage ratios, and debt to income ratios be calculated? 
(b) How should the “Debt to Income Ratio” and the “Current Loan-to-Value” be calculated where multiple loan parts exist?
(c) How should the loan-to-value ratios be calculated in case a loan is backed by several first lien collateral properties? 
(d) How should the loan-to-value ratios be calculated in case a loan is backed by several collateral properties, including properties where the loan does not have the first lien over one of these properties?
(e) How should the original loan-to-value ratio be calculated for a new loan on a property which secures one or more existing loans?
(f) Must these fields be completed even when there is no covenant / triggers / etc. in the underlying exposure documentation that refers to any of these ratios?

---

## ESMA Answer

**Answer Date:** 26-02-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.4]
(a) It is expected that the methodology and approaches set out in the Recommendation of the European Systemic Risk Board of 31 October 2016 on closing real estate data gaps (ESRB/2016/14) should be followed, in particular those set out in section 2.
(b) As set out in Article 4(1)(a) of the Delegated Regulation on Disclosure “Regarding the granularity of the information set out in Annexes 2 to 10 and Annex 12, the reporting entity shall make available information on: (a) underlying exposures, for each individual underlying exposure. For these purposes, securitised loan parts shall be treated as individual underlying exposures. 
The “Debt to Income Ratio” and “Current Loan-to-Value” are fractions in which the numerator is the “Current Principal Balance” (RREL30; CREL23; ESTL28). Where there are multiple loan parts, the denominator, i.e. the value or the income, should be calculated on a pro-rata basis.
For example: An obligor with an annual income of EUR 50,000 has obtained two loans with a total current principal balance as at the data cut-off date of EUR 100,00: loan A (EUR 60,000) and loan B (EUR 40,000), each of which have different interest rates and maturity. Both loan A and B are collateralised on the same property with a value of EUR 150,000 as at the data cut-off date. 
The “Debt to Income Ratio” for

loan A is 200%, i.e. 100 * EUR 60,000 / (EUR 50,000 * 0.60); and
loan B is also 200%, i.e. 100 * EUR 40,000 / (EUR 50,000 * 0.40).

Similarly, the “Current Loan-to-Value” for

loan A is 67%, i.e. 100 * EUR 60,000 / (EUR 150,000 * 0.60); and
loan B is also 67%, i.e. 100 * EUR 40,000 / (EUR 150,000 * 0.40).

(c) Assume that, at the time of origination, the underlying exposure principal balance is equal to EUR 100,000 and is backed by three properties, with a respective value of EUR 50,000, EUR 100,000 and EUR 150,000. As mentioned in the question, assume that the underlying exposure has the first lien on each of these three properties. In this scenario, the original loan-to-value ratio is entered as simply 100 multiplied by the value of the underlying exposure (EUR 100,000) divided by the sum of the three property values (i.e. EUR 300,000 = EUR 50,000 + EUR 100,000 + EUR 150,000), for a total original loan-to-value ratio of 33. The current loan-to-value ratio is calculated in the same manner, using updated numbers for each property and the underlying exposure outstanding principal balance.
(d) Assume that, at the time of origination, the underlying exposure (‘underlying exposure A’) principal balance is equal to EUR 100,000 and is backed by three properties, with a respective value of EUR 50,000, EUR 100,000 and EUR 150,000. Assume that the underlying exposure has the first lien on properties 1 and 2, but not on property 3. For property 3, assume that the underlying exposure only has the second lien, following another underlying exposure (‘underlying exposure B’, which may or may not be held with a different originator) worth EUR 80,000 at the time of origination of the underlying exposure A .
In this scenario, the original loan-to-value is calculated using the following inputs:

The outstanding principal amount of underlying exposure A, equal to EUR 100,000
The value of property 1, i.e. EUR 50,000
The value of property 2, i.e. EUR 100,000
The value of property 3 after deducting the portion of the property allocated as a first lien to underlying exposure B, i.e. EUR 70,000 (equal to EUR 150,000 less EUR 80,000)

Consequently, the original loan-to-value ratio is equal to 45, i.e. 100 * EUR 100,000 / (EUR 50,000 + EUR 100,000 + EUR 70,000).
The current loan-to-value ratio is calculated in the same manner, using updated numbers for each property and the outstanding principal balances of both underlying exposure A and underlying exposure B. Where underlying exposure B is held with a different originator and this information is not readily available, the reporting entity should treat the underlying exposure B outstanding balance as at the latest known date—i.e. this balance must not be updated (this ensures a conservative estimate of the loan-to-value ratio as per the calculations above).
(e) See Q&A 1323.
(f) These fields refer to calculations that are expected to be performed by the originator/original lender, regardless of the whether the terms and conditions governing the underlying exposure include covenants referring to these fields. If such information was not available at the time of origination of the underlying exposure or is not available now, then the most appropriate ‘No Data’ option must be entered.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*