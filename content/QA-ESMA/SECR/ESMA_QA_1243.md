---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1243

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1243

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Repositories

**Subject Matter:** Processing of data queries by securitisation repositories


---

## Question

**Submission Date:** 28 May 2020

How should the query provisions set out in Article 6(4) of the operational standards RTS be understood? (“Securitisation repositories shall grant the entities referred to in Article 17(1) of Regulation (EU) 2017/2402 access to the information referred to in Article 5, based on any combination of the following criteria:…”)

The search criteria contain elements at an underlying exposure record level (e.g. geographic region, origination/maturity date). For example, if a user submits a request, on all underlying exposures with origination year = 2019 and geographic region = Spain, then all underlying exposures meeting the above criteria must be transmitted. 

Should the repository make available the full underlying exposure XML files received, that have AT LEAST ONE exposure meeting the above criteria?

Or 

Only the relevant underlying exposure records that meet the above criteria (i.e. parse the XML file received, keep only the records relating to those exposures meeting the above criteria, and information only on those exposures)?

---

## ESMA Answer

**Answer Date:** 28-05-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 3.3]
It is up to data users to specify, using the available fields for queries, what information they are interested in receiving. The query parameters set out in Article 6(4) of the RTS on operational standards are designed to result in all details of a securitisation being provided to users.
Therefore, taking the above example, if a user requests information on all underlying exposures originated during the year 2019 and with a obligor geographic region located in Spain, then a securitisation repository should provide information on all securitisations that meet this criteria, i.e. all securitisations containing at least one underlying exposure having been originated in 2019 and with an obligor geographic region located in Spain (and including all fields associated with those underlying exposures, including securitisation identifiers). If the user has not specified a data cut-off date in their data request, then the results would also cover all securitisation data submissions across all possible data cut-off dates.
Furthermore, in this example, the information on these securitisations that should be provided would be on all underlying exposures of each securitisation, i.e. information on underlying exposures originated during the year 2019 and with an obligor geographic region in Spain AND information on any other underlying exposures that have also been securitised in any deal meeting the search criteria.
The purpose of these search criteria is to provide a common set of criteria by which users can make targeted data queries. However, these provisions do not exclude that a securitisation repository makes available additional functionalities for data users, where this may appear to add convenience.
For example, to the extent that a securitisation repository ensures that its functionalities permit the above-mentioned example to be fulfilled as described above, that repository could also make available additional choices for data users. One such choice could indeed allow a user searching for information on underlying exposures having been originated in 2019 and with an obligor geographic region located in Spain to indicate that the user only wishes to receive information on those specific underlying exposures.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*