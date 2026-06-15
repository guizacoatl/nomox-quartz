---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1304

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1304

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Provision of multiple underlying exposure XML files as part of a submission of information


---

## Question

**Submission Date:** 28 May 2020

Would it be acceptable to provide multiple underlying exposure XML files as part of a single submission of information for the purposes of complying with the Securitisation Regulation? Taking an example of a securitisation with 500,000 underlying exposure records. Upon conversion of information to an XML file, there may be a technical limit in some languages used for the conversion (e.g. a technical limit when using SQL). This may mean that a reporting entity is unable to provide a single file to either a repository or a website (as per the fourth subparagraph of Article 7(2) of the Securitisation Regulation) or some other destination (e.g. for private securitisations).

---

## ESMA Answer

**Answer Date:** 28-05-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.1.24]
Yes. It is acceptable to break the file down into multiple files (e.g. five files of 100,000 records each). The XSD schema has been designed to handle splitting XML files. All the split XML files will contain the securitisation identifier that will allow a reporting entity or other user to link the underlying exposure records across the submitted files. For further information, please consult the dedicated page on ESMA’s website, where there is information about XML schema and validation rules.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*