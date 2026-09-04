---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1297

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1297

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Rounding numerical fields


---

## Question

**Submission Date:** 31 January 2019

For fields that have a {MONETARY} or {NUMERIC} field format, how should they be rounded?

---

## ESMA Answer

**Answer Date:** 31-01-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.1.16]
It is not acceptable to round fields, including {INTEGER}, {MONETARY}, and {NUMERIC} fields. The only exception concerns, for {MONETARY} and {NUMERIC} fields, where the number includes more than the 5 decimals permitted in these fields formats. As set out in Table 1 in Annex 1 of the ITS on disclosure, {MONETARY} and {NUMERIC} fields may contain “0-18 digits, of which up to 5 may be fractional digits”. Therefore, any information with a higher degree of precision than 5 fractional digits should be rounded to the nearest fifth digit.
For example, the number 123.456789 should be entered in the following way, depending on the field format:

For {INTEGER} fields, the number must be entered as 123
For {MONETARY} and {NUMERIC} fields, the number must be entered as 123.45679 (i.e. 123.456789 must be rounded to the 5th decimal point)

As another example, the number 123.456 should be entered in the following way, depending on the field format:

For {INTEGER} fields, the number must be entered as 123
For {MONETARY} and {NUMERIC} fields, the number must be entered as 123.456 (i.e. 123.456 has less than 5 decimal points and therefore can be entered exactly as it is and does not need to be rounded.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*