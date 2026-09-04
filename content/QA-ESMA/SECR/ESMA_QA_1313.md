---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1313

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1313

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Reporting of Geographic Region fields


---

## Question

**Submission Date:** 28 May 2021

(a) NUTS3 code entered for the fields “Geographic Region - Obligor (RREL11, CREL12…etc.)” is accompanied with the “Geographic Region Classification” to identify the exact NUTS code whereas this is not the case for the “Geographic Region – Collateral” in the relevant asset classes.

(b) How can one enter the year of the NUTS3 classification used for the graphic region fields in RREL12 (Geographic Region Classification) when all underlying exposures are located outside the Union and no NUTS3 codes are used, only third-country codes such as “AUZZZ” are entered into RREL11 (Geographical Region – Obligor)?

(c) Should field geographic fields such as RREL11 always be populated with data from the primary borrower or are we allowed to apply a business rule like for example if the primary borrower is outside of the Union and the second borrower in the Union we are allowed to report the NUTS code of the second borrower here?

---

## ESMA Answer

**Answer Date:** 28-05-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.1]
(a) As per the description of the Geographic Region Classification field, “All geographic region fields must use the same classification consistently for each underlying exposure and across all underlying exposures in the data submission.” Insofar as collateral is provided for the underlying exposures, then the same classification reported for the underlying exposure fields (e.g. in field RREL11) should be extended and used for the collateral fields (e.g. in field RREC6).
(b) In this case, any year may be entered into this field. However, as soon as a single obligor or collateral is included in the pool which is located in a location with an eligible NUTS code, this field must be updated to reflect the relevant classification.
(c) The geographic region fields should be populated with information relating to the primary obligor in case of multiple obligors (see also Q&A 1314). This is still the case where the main obligor is located outside the Union and a secondary obligor is located inside the Union.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*