---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1330

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1330

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.3]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Repositories

**Subject Matter:** Handling of corrections


---

## Question

**Submission Date:** 15 November 2019

(a) Where information in a past data submission is corrected, even for one underlying exposure, must the correction should be accompanied by a corresponding correction of other relevant templates, so that the integrity and consistency of data is maintained? 

(b) Where information in a past data submission is corrected, even for one underlying exposure, must a securitisation repository registered with ESMA recalculate the data completeness score set out in Article 3 of the RTS on operational standards? 

(c) What are the interactions between data completeness requirements and corrections/changes to previously-provided information? How should the repository proceed in the following situation:
Step 1: On 1 June 2020, a securitisation repository registered with ESMA receives a report with 1000 underlying exposures, investor report, significant event (i.e. a full quarterly submission), with a data cut-off date of 1 May 2020. The securitisation repository processes all the underlying exposures, checks whether the submission complies with the data completeness thresholds (regarding the use of No Data options in the underlying exposure templates), confirms that they do comply and, therefore, accepts the submission.
Step 2: On 1 June 2021, the same reporting entity sends a modification file report with 50 new loans and 50 loans to be modified, referring to the above data submission (i.e. the data submitted on 1 June 2020 with a data cut-off date of 1 May 2020). The repository re-checks whether, in light of these modifications to some of the underlying exposures, the overall submission (i.e. all 1000 underlying exposures) complies with the data completeness thresholds applicable as at 1 June 2020, and discovers that it no longer complies with those thresholds.

---

## ESMA Answer

**Answer Date:** 15-11-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 3.2]
(a) Yes, the information affected in any corresponding template fields must also be corrected and re-submitted. For example, if the current principal balance (e.g. field RREL30) for a given underlying is changed even for one underlying exposure, the corresponding summarised total current balance of the pool should be reflected in a corrected version of the significant event / inside information template at a tranche level (i.e. in field SEST9 or SEAT9, as applicable).
(b) Corrections to even one record could affect the resulting data completeness score (given the mapping from percentages of No Data options use to the score categories, such as A1). It is therefore indeed expected that a securitisation repository registered with ESMA recalculates the data completeness score following the receipt of a correction/change to underlying exposure information previously submitted to it.
(c) In this scenario, the securitisation repository should:

Reject the entire data submission for that specific data cut-off date (i.e. the data submission provided on 1 June 2020 and modified on 1 June 2021, with a data cut-off date of 1 May 2020).
Add the data submission to its report of rejections that are made available pursuant to Article 4 of the RTS on operational standards.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*