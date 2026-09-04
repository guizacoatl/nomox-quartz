---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1371

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1371

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Prepayment lock-out end date and Prepayment fee end date


---

## Question

**Submission Date:** 15 November 2019

(a) How should field RREL60 be reported in case there is no explicit lock-out period/end date? Does RREL60 include a date after which the underlying exposure could be prepaid but with a fee/charge? 

(b) What is the difference between field RREL60 and field RREL62 (Prepayment lock-out end date)?

(c) If there are multiple prepayment fees in the terms and conditions of an underlying exposure and each of these fees have end dates, what should be reported? For example, if there is a prepayment fee (with an end date) on the first 10% of principal prepaid and a further fee (with an end date) on any further prepayments on the remaining principal of the underlying exposure.

---

## ESMA Answer

**Answer Date:** 15-11-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.4.1]
(a) RREL60 field allows ND5 (‘not applicable’) to be entered. Thus, if there is no explicit lock-out period/end date then ‘ND5’ should be entered. Prepayments after this date that are subject to fees/charges also imply that any ‘lock-out’ period has ended and, therefore, RREL60 should be completed for the date starting from which such prepayments (even if they include fees/charges) are possible.
(b) RREL62 refers to the date after which prepayments on the underlying exposure can be made without any fees charged (field RREL62 also allows ‘ND5’ to be entered). RREL60 refers to the date after which prepayments can be made regardless of whether any fees/charges are applied to those prepayments.
For example, consider an underlying exposure originated on 1 January 2010, where no prepayments are possible between 1 January 2010 and 31 December 2014, and where any prepayments between 1 January 2015 and 31 December 2017 are subject to a fee, after which there is no charge/fee for prepayments. In this example, field RREL60 would be completed with ‘1 January 2015’ and field RREL62 would be completed with ‘1 January 2018’.
(c) If there are multiple prepayment fees in the terms and conditions of an underlying exposure and each of these fees have end dates, then the last (i.e. date furthest into the future) end date should be reported. For example, if there is a prepayment fee with an end date of 01 January 2025 on the first 10% of principal prepaid and a further fee with an end date of 01 January 2030 on any further prepayments on the remaining principal of the underlying exposure, then the prepayment fee end date should be completed as 01 January 2030.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*