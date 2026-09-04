---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1697

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1697

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.27]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Interest Rate Swaps reporting


---

## Question

**Submission Date:** 26 September 2018

How should a transaction in an interest rate swap admitted to trading on a trading venue or traded on a trading venue be reported under Article 26 and Article 27 of MiFIR?

---

## ESMA Answer

**Answer Date:** 26-09-2018

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 16.2]
Example 1: CFI code SRC*S* fixed-floating with single currency
The principles for reporting of a fixed-floating swap are covered in the ESMA Q&A 1 in section 14 on financial instruments’ volatile attributes.
10 Years 3% EUR VS EURIBOR 6 MONTHS
Investment Firm X buys an interest rate swap (ISIN EZ0000000006) from Investment Firm Y at a notional amount of EUR 100,000,000 on Trading Venue M on 26 February 2018 at 12:05:41:567 UTC. The expiry date of the swap is 28 February 2028.
Firm X pays 3% while Firm Y pays EURIBOR 6 Months
Transaction report would be as follows[1]:

As set out in the RTS Table of fields (field 7 buyer identification code) the buyer is the counterparty paying the fixed rate.
X is paying the fixed rate so is the buyer.
The price field is populated with the amount of the fixed rate (3%).
Field 43 (Fixed rate of leg 1) is blank in the instrument reference data.
The instrument reference data would be as follows:

Example 2: CFI SRA*S*, Tenor basis swap (float-to-float single currency)
10 Years EUR EURIBOR 3 months + 2 basis points VS EURIBOR 6 MONTHS
In the buyer identification code field the RTS provides:
In the case of basis swaps (float to float) interest rate swaps the buyer shall be the counterparty that pays the spread 
Firm X Investment trades a basis swap (ISIN EZ0000000007) with Investment Firm Y at a notional amount of EUR 100,000,000 on Trading Venue M on 26 February 2018 at 12:05:41:567 UTC. The expiry date of the swap is 28 February 2028.
Investment Firm X pays 3 month EUR EURIBOR + 2 basis points while Investment Firm Y pays 6-month EUR EURIBOR.
Transaction report would be as follows[2]:

Firm X is paying the spread and is therefore populated as the buyer. 
If the spread was negative i.e. Firm X was paying 3 month EUR EURIBOR - 2 basis points then Firm X should still be reported as the buyer but the price would be reported as ‘-2’ in the reports of X and Y.
We are identifying the buyer as the payer of the spread
In the reference data the following should be shown:

Leg 1 (field 28/40 and 29) = the leg with the reference rate that is first when sorted alphabetically
Leg 2 (field 45 and 46) the other leg.
Notional currency 1 = the currency for the legs.

Should the reference data be identical as in the example being considered here then the following rules should be applied to determine which term applies to leg 1 and is to be populated in field 29:

if the term unit is the same order the term value numerically from lowest to highest
if the term unit is different order chronologically by the term unit.

The instrument reference data would be as follows:

As set out in the Commission Delegated Regulation field 46 is the reference period of the interest rate of leg 2.


[1] If this transaction is carried out outside the trading venue then field 36 should be populated with XOFF.


[2] If this transaction is carried out outside the trading venue then field 36 should be populated with XOFF.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*