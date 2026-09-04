---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1707

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1707

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.26]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Transaction reporting


---

## Question

**Submission Date:** 17 November 2017

How should transactions be transaction reported where portfolio management has been outsourced?

---

## ESMA Answer

**Answer Date:** 17-11-2017

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 24.7]Consider the following example, where Banks A, B and Firm Z are investment firms:

Client has a portfolio at Bank B.
The client is a German national, Max Mustermann. His date of birth is 01/04/1974.
Bank B has outsourced the portfolio management (discretionary mandate) to Firm Z, which is an investment firm undertaking portfolio management.
Firm Z sends a purchase order to Bank A for execution without meeting the conditions for transmission under article 4 of Commission Delegated Regulation (EU) 2017/590. Firm Z is acting in an ‘any other’ trading capacity.
Firm Z does not have a contract with the Client.
Bank A executes the order on a Trading Venue.
Bank A transfers the financial instruments from its own account to the account of Bank B just for settlement purposes.
Bank B books the financial instruments from its account into the account of the Client.



Bank A and Bank B are acting in an own account trading capacity

The reports by Bank A and Bank B will be as follows:

Bank A is receiving instructions from Firm Z without the transmission requirements being met so it will report Firm Z as the buyer in its client side report.
Bank B’s counterparty for execution purposes is Firm Z and since Bank B has not met the transmission conditions it will report its client as the buyer and itself, Bank B, as the seller. 
Bank B has outsourced the discretionary management for its client to Firm Z so there is a power of representation. However, field 12 is only populated where the decision is made under a power of representation and the buyer is a client of the executing entity. Therefore field 12 is only populated in Report 2 of Bank B, since in Report 1 Bank B is itself the buyer.
Even though Firm Z is making the investment decision on behalf of Firm B, field 57 is a mandatory field where a firm is acting in an own account trading capacity since the firm is accepting the risk. Therefore this should be populated with the algo or person in Bank B that is primarily responsible for the decision to delegate.
Field 59 is a mandatory field but where the execution decision is made outside the firm it is populated with ‘NORE’. In this scenario the execution decision is being made by Firm Z as it is deciding when and how to execute (by sending orders to Firm A) and therefore this field is populated with ‘NORE’ in Bank B’s reports . 
Reporting by Firm Z

Firm Z is acting on behalf of Bank B and since Bank B has not met the transmission conditions it will report Bank B as the buyer and Bank A as the seller. 
Firm Z is making an investment decision on behalf of Bank B so it will populate field 12 with its LEI and will populate field 57 with the algo or national ID of the person responsible for the investment decision within the firm.

Bank A and Bank B are acting in any other trading capacity and Bank B is not meeting the conditions for transmission under article 4 of the Commission Delegated Regulation (EU) 2017/590.


Since the buyer in Bank B’s report is its client and there is a power of representation field 12 is populated with the LEI of Firm Z in Bank B’s report.
Since the execution decision is made outside the firm (being made by Firm Z) field 59 is populated with ‘NORE’ in Bank B’s report.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*