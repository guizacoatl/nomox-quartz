---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1698

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1698

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** FX forward reporting


---

## Question

**Submission Date:** 07 October 2019

How should a transaction carried out on a trading venue on a FX forward be reported under Article 26 and Article 27 of MiFIR?

---

## ESMA Answer

**Answer Date:** 07-10-2019

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 17.1]
Example:
On March 13th, 2018, investment firms A and B enter in a EUR/GBP (the currency mentioned first is the ‘base’ currency, while the other currency is the ‘terms’ or ‘quote’ currency) FX forward instrument on a trading venue. The instrument has the following characteristics:

Notional of the instrument: €1M;
Effective date of the transaction: March 15th 2018 (T+2);
Expiry date of the instrument: September 15th 2018;
The tenor of this instrument is 6 months;
ISIN code of the financial instrument: EZ1234567891;
The price of the instrument is the FX forward rate expressed as a price of base currency in the quoted currency according to the market convention for the currency pair;
The EUR/GBP FX forward rate reference is 0.8200.

The counterparty that is receiving the currency which is first when sorted alphabetically by ISO 4217 standard should be identified as the buyer[1].
In our example, investment firm A who will (in 6 months) deliver the GBP and receive the EUR is the buyer of the FX forward, while investment firm B who will (in 6 months) receive the GBP and deliver the EUR is the seller of the FX forward.

(A) The relevant fields in the transaction reporting as per article 26 of MiFIR should be[2]:

The price should be populated with the forward rate expressed as a price of base currency in the quoted currency and the monetary value XML tag should be used[3].
In the quantity field #30 the executing entities (buyer and seller) should report the amount of the FX forward in the base currency. The quantity in field #30 in the transaction report is always shown as positive.
In the quantity currency field #31, the executing entities (buyer and seller) should report the base currency of the FX forward.
The price currency field should be populated with the term / quote currency (i.e. GBP in this example). 
Although the examples show the reports of firm A, the reports of firm B would be identical.
B) As per article 27 of MiFIR, the trading venue or SI admitting to trade or trading this instrument shall report it in FIRDS. The following table shows the expected reporting of the instrument reference data by trading venues or SIs (only the relevant fields are displayed):


Notional currency 1 should be populated with the 1st currency when sorted alphabetically by ISO 4217 standard.
Notional currency 2 should be populated with the second currency when sorted alphabetically by ISO 4217 standard.


 




[1] As per field 7 (Buyer identification code) on table 2 of Annex 1 of RTS 22
[2] If this transaction is carried out outside a trading venue then field 36 should be populated with XOFF.
[3] Notional currency 1 may not be the base currency of the contract.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*