---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1320

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1320

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** New Identifier Fields  RREL3; RREL5; RREC4; CREL3; CREL5; CREC4; CRPL3; CRPL5; CRPC4; AUTL3; AUTL5; CMRL3; CMRL5; CCDL3; CCDL5; LESL3; LESL5; ESTL3; ESTL5; ESTC4; NPEL3; NPEL5; NPEC4; IVAL4; IVSR3; IVSF3; IVAR3; SEST3; SESA3; SESI4; SEAT3; SEAA3


---

## Question

**Submission Date:** 26 February 2021

What is the purpose of the ‘new identifier’ fields?

---

## ESMA Answer

**Answer Date:** 26-02-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.3]
These fields have been created because it is understood that, in certain limited cases (e.g. database migrations), it may not be possible to continue using the ‘original’ identifier required for the particular underlying exposure or other item.
For example, an originator may not be able to continue using the identifier for an underlying exposure in field RREL2 following a change to its database systems. In these situations, field RREL2 should continue to be reported with the ‘old’ underlying exposure identifier throughout the lifetime of the securitisation. The ‘new’ identifier should be reported in field RREL3.
However, if this issue does not arise (i.e. the original underlying exposure identifier can be maintained and there are no database problems), then field RREL3 should include the same identifier as RREL2 (i.e. the same identifier is reported twice, once in field RREL2 and again in field RREL3).
Thus, field RREL3 should never be left blank.
The same rationale holds for all other identifier fields in the disclosure templates listed above in this question.
Changes to the terms, collateral or obligor (e.g. following divorce) of a loan can never cause a change to the original or new underlying exposure identifiers. In these cases, one of the response options including the word “restructured” should be entered into the field “Account Status” and all the fields containing the word “original” such as the “original principal balance” should remain unchanged.
The original collateral identifier of an existing collateral item should never change unless the obligor of a loan changes.
The new underlying exposure identifier may change when a loan is split into two loan parts (Q&A 1310).

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*