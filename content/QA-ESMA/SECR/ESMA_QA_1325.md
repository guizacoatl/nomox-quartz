---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1325

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1325

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Arrears Breakdown and Number Of Days In Arrears fields


---

## Question

**Submission Date:** 28 May 2021

(a) Some reporting systems calculate arrears on a monthly basis. That means: 30 or 31 days = 1 month. How should the Arrears Breakdown and Number of Days in Arrears fields be completed in this situation? In certain jurisdictions, the practice is to count the number of unpaid monthly instalments in arrears.
(b) In the case of some trade receivables transactions, reporting systems do not track actual payment terms agreed with individual debtors, and therefore use days past the invoice date to estimate days past due. For example, if a seller has standard payment terms of 60 days, then the system will treat a receivable as 15 days past due if it is 75 days past the invoice date even though individual debtors might have agreed a different payment period.
(c) If the issuer does not classify a loan’s category as “in arrears” until the loan is 30/60/90 days past due (say 60 for example), is it ok to exclude those underlying exposures from the Arrears buckets until they pass that threshold?

---

## ESMA Answer

**Answer Date:** 28-05-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.6]
(a) If arrears are being calculated on a monthly basis, then

With respect to the Arrears Breakdown fields, less than one month in arrears should be treated as the equivalent of 1-29 days in arrears, one month in arrears should be counted as 30-59 days in arrears, two months in arrears as 60-89 days in arrears, etc.
With respect to the Number of Days in Arrears, if the practice is to count the number of unpaid monthly instalments in arrears, then the following convention should be used:

When the first month of arrears is recorded, then the Number of Days in Arrears entered should be ‘30’. In such situations, if the reporting entity is aware of arrears that occur before their systems have recorded a full month of arrears, then the Account Status field (RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55) should still be reported as Arrears (i.e. ‘ARRE’). For example, if the reporting entity is aware that an underlying exposure is 10 days in arrears (but its systems have not yet recorded these arrears, because these record arrears on a monthly basis), then the Account Status field should still be set still be reported as Arrears (i.e. ‘ARRE’).
When the second month of arrears is recorded, then the Number of Days in Arrears entered should be ‘60’.
When the third month of arrears is recorded, then the Number of Days in Arrears entered should be ‘90’.
Etc…



(b) For the underlying exposure type ‘trade receivables’, in the cases where the originator, sponsor and SSPE of the securitisation do not record the actual payment due date, the relevant ND option should be entered into this field.
(c) No. Arrears must always be counted and reported in relation to the payment due date and not a fixed set of days after that date.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*