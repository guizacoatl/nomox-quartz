---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1694

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1694

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Financial instruments’ volatile attributes


---

## Question

**Submission Date:** 05 October 2017

(a)	How to complete reference data and transaction reports for financial instruments with a fixed rate that is a volatile attribute. 
(b)	How to complete reference data and transaction reports for financial instruments with a strike price that is a volatile attribute.

---

## ESMA Answer

**Answer Date:** 05-10-2017

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 14.1]
(a) Where a swap rate or forward rate financial contract is quoted as the fixed rate and it is considered to be an attribute of the transaction rather than an attribute of the financial instrument, the respective reports should be completed as follows:
Transaction report[1] - the price (field 33) of the transaction should be populated with the fixed rate value. The upfront payment (field 38) should be populated with a value of zero.
Reference data report[2] - the relevant fixed rate leg (field 43 or 44) of the financial contract should not be populated 
The above is applicable to the financial instruments with specific CFI codes for which the fixed rate is considered as a volatile attribute. The CFI validation document will be kept up to date to reflect that the fixed rate related fields should be non-applicable for the relevant CFI codes.
(b) Where the strike price of a financial contract is considered to be an attribute of the transaction rather than an attribute of the instrument then the respective reports shall be completed as follows:
Transaction report - the price (field 33) of the transaction shall be populated with the strike price value. The upfront payment (field 38) shall be populated with the value of the option premium.
Reference data – the strike price field shall not be populated. 
The above is applicable to the financial instruments with specific CFI codes for which the strike price is considered as a volatile attribute. The CFI validation document will be kept up to date to reflect that this field should be non-applicable for these codes.
If the trading model deviates from (a) and (b) above then the transaction report shall be completed in line with ESMA’s published guidelines for transaction reporting, order record keeping and clock synchronisation under MiFID II[3]. In all cases transaction reports must be reported consistently with reference data.



[1] COMMISSION DELEGATED REGULATION (EU) 2017/590 with regard to regulatory technical standards for the reporting of transactions to CAs. Available at the following link


[2] COMMISSION DELEGATED REGULATION (EU) 2017/585 with regard to regulatory technical standards for the data standards and formats for financial instrument reference data. Available at the following link


[3] https://www.esma.europa.eu/sites/default/files/library/2016-1452_guidelines_mifid_ii_transaction_reporting.pdf

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*