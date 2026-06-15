---
surnom_texte_lvl1: EMIR
---

# ESMA_QA_1461

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1461

---

## Regulatory Context
Regulation : EMIR

**Level 1 Regulation:** European Market Infrastructure Regulation (EMIR) Regulation (EU) No 648/2012- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * EMIR Reporting

**Subject Matter:** EMIR Q&As on Reporting of Corrections of Transactions with no Event Date


---

## Question

**Submission Date:** 11 July 2023

Paragraph 558 of the Guidelines (p.289) clarifies that ‘TRs should update the TSR based on the latest information for a given derivative as derived from the field ‘Event date’.  Use case 4 in the Guidelines (p. 291) further illustrates that in the case of late reporting of historic events, the relevant information should be updated in the TR’s database only until the Event date of the subsequent event to avoid overwriting the information from more recent reports. 

In this context, how should counterparties report historic corrections on outstanding derivatives that were not yet upgraded after EMIR Refit go-live (and thus no Event Date was previously reported for those derivatives)? How should trade repositories consider the sequencing of submissions to determine the validity of historic corrections?

---

## ESMA Answer

**Answer Date:** 11-07-2023

In this specific scenario where a lifecycle event with a corresponding Event date has not yet been reported for a given outstanding derivative, the historic corrections should be applied by the TRs in their database from the Event Date specified in the correction report until the day of reporting. If necessary, counterparties can submit another correction report (with the appropriate Event date) to limit the timespan for which the first correction will be applied.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*