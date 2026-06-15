---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1695

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1695

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** FX Swaps reporting


---

## Question

**Submission Date:** 26 September 2018

How should a transaction in an FX swap admitted to trading on a trading venue or traded on a trading venue be reported under Article 26 and Article 27 of MiFIR?

---

## ESMA Answer

**Answer Date:** 26-09-2018

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 15.1]
If the instrument executed on a trading venue was an FX swap, it should be reported as an executed FX swap based on the requirement of Article 26(1) and in accordance with this Q&A. The same principle will apply to trading carried out outside of the trading venue.
If the instrument executed on a trading venue was an FX forward, it should be reported as an executed FX forward based on the requirement of Article 26(1). The same principle will apply to trading carried out outside of the trading venue.
If the instrument admitted to trading or traded on a trading venue was an FX swap, it should be reported as an FX swap based on the requirement of Article 27(1) and in accordance with this Q&A.
If the instrument admitted to trading or traded on a trading venue was an FX forward, it should be reported as an FX forward based on the requirement of Article 27(1).
Examples
On March 13th 2018, investment firms A and B enter in a EUR/GBP (the currency mentioned first is the ‘base’ currency. The other currency is the ‘terms’ or ‘quote’ currency) spot-forward swap or a forward starting swap instrument on a trading venue regardless of how the instrument has been subsequently confirmed or settled. The instrument has the following characteristics:

notional of the instrument: 1M€;
maturity date of the instrument: September 15th 2018;
the tenor of this instrument is 6 months
ISIN code of the financial instrument: EZ0123456789;
the price of the instrument is given in 5 swap points[1] expressed in units of terms currency per unit of base currency according to the market convention for the currency pair which is this example is 0.0001£ per 1€;
The EURGBP FX spot rate reference is 0.8200.

 
The counterparty[2] that for the far leg (which is closer to the maturity date) is delivering the currency which is first when sorted alphabetically by ISO 4217 standard should be identified as seller. Therefore, the party which, on the near leg, delivers the currency which is first when sorted alphabetically should be identified as buyer.
In our example, investment firm B who will (in 6 months) receive the GBP and deliver the EUR is the seller of the FX Swap. Investment firm A who will (in 6 months) deliver the GBP and receive the EUR is the buyer of the FX swap.

The relevant fields in the transaction reporting as per article 26 of MIFIR should look like:

The price should be populated with the swap points and the monetary value XML tag should be used[3].
In the quantity field #30 the executing entity (buyer and seller) should report the amount of the FX SWAP in the base currency for the front (near) leg.  
In the quantity currency field #31, the executing entity (buyer and seller) should report the base currency of the FX SWAP.
The price currency field should be populated with the terms currency i.e. GBP in this example.
The below table shows how the transaction reports would change if the amount or currency of the notional differed. The fields 13 and 47 (see next page) in the reference data (RTS 23) will remain unchanged.

The quantity in field 30 in the transaction report is always shown as positive.
The examples show the reports of firm A but the reports of firm B would be identical.
As per article 27 of MiFIR, the trading venue or SI admitting to trade or trading this instrument shall report it in FIRDS. The following table shows the expected reporting of the instrument reference data by trading venues or SI (only the relevant fields are displayed):

Notional currency 1 should be populated with the 1st currency when sorted alphabetically by ISO 4217 standard.
Notional currency 2 should be populated with the second currency when sorted alphabetically by ISO 4217 standard.

[1] The swap points are the difference between the rate for the near leg and the rate for the far leg
[2] As per Article 9 EMIR, and Question 24 of the Q&A No 648/2012 on OTC derivatives
[3] Notional currency 1 may not be the base currency of the contract.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*