---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1505

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1505

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.26]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Instrument Reference data

**Subject Matter:** MiFIR data reporting - Reporting of reference rates not included in RTS 23 and 22


---

## Question

**Submission Date:** 28 May 2021

Following the creation of new risk-free rates, it is important to clarify how:
(a) Trading Venues and SIs should report financial instruments based on this rate under RTS 23;
(b) MiFID investment firms should report this rate in transaction reports where the reference data fields have to be reported under RTS 22; and
(c) How other reference rates should be reported that are not explicitly included in RTS 23 and RTS 22.
(d) Are voluntary switch to risk-free rates considered reportable transactions under MiFIR Article 26? 
(e) In case a financial instrument with a fallback rate is assigned a new ISIN, should reporting entities populate Field 1 with the new ISIN under RTS23?

---

## ESMA Answer

**Answer Date:** 28-05-2021

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 18.1]
At the time RTS 23 and RTS 22 were developed, risk-free rates were not yet widely used in contracts, therefore the list of standardised codes for reporting of reference rates specified in these Regulations did not include the code for these rates. Since there is no code, the free-text format is applicable for fields where the name of the rate should be populated. However, in order to ensure consistent reporting and enable the reconciliation of the reports in question, the 4-letter code assigned to risk-free rates, in the ISO 20022 standard should be populated in these fields. For instance, in the case of €STR it should be reported ‘ESTR’.
(a) RTS 23 reporting by trading venues and SIs
Where applicable, the ISIN assigned for risk-free rates should be reported. For instance, in the case of €STR it should be reported as ISIN ‘EU000A2X2A25’. This should be in addition to the 4-letter code of the rate ‘ESTR’.
This would apply to the following fields:




Instrument type


RTS 23 Field number


RTS 23 Field name


Value




 
Bonds or other forms of securitised debt


19


Identifier of the index/bench-mark of a floating rate bond


‘EU000A2X2A25’




20


Name of index/ bench-mark of a floating rate bond


N/A[1]




Derivative and Securitised Derivatives


26


Underlying instrument code


‘EU000A2X2A25’




28


Underlying index name


‘ESTR’




Interest Rate Derivatives


40


Reference rate


‘ESTR’




45


Floating rate of leg 2


‘ESTR’




 
(b) RTS 22 reporting by MiFID investment firms
The ISIN assigned to a given rate should be reported, e.g. in the case of €STR, “EU000A2X2A25” would be populated in the Underlying instrument code (field 47). If an ISIN is not available for a given rate, this field should not be populated. The Underlying index name (field 48) should be reported as “ESTR” in the free-text field, regardless of whether the ISIN is also reported in field 47.
(c)  Reporting of other reference rates not included in RTS 22/23
Similarly, for other reference rates that are not included in the list of standardised codes in RTS 22 or RTS 23, the 4-letter code assigned to that reference rate in the ISO 20022 standard should be reported as described in ISO 20022 Benchmark Curve Name Code at the following link. This is to the extent that such codes are available and the field(s) referred in the answers to questions (a) and (b) requiring ALPHANUM-25 values are applicable.
(d) Voluntary switch to risk-free rates 
No, the voluntary switch to risk-free rates is not considered a reportable transaction under MiFIR Article 26 as it would fall under RTS 22 Article 2(5)(i) exemption (the creation, expiration or redemption of a financial instrument as a result of pre-determined contractual terms, or as a result of mandatory events which are beyond the control of the investor where no investment decision by the investor takes place at the point in time of the creation, expiration or redemption of the financial instrument).
(e) Fallback of the reference rate 
Yes. If the financial instrument based on the fallback rate is assigned a different ISIN than the equivalent financial instrument based on LIBOR, the reporting entities should:

Terminate the financial instrument in FIRDS, when the instrument ceases referring to LIBOR, and
Resubmit to FIRDS the financial instrument reference data with the new ISIN when switching to a different rate in case the new financial instrument with its ISIN is admitted to trading or is traded in accordance with Article 2 of RTS 23.




[1] This field should only be populated where no identifier exists, as per RTS 23.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*