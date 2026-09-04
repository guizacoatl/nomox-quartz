---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_751

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/751

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.10]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Settlement location


---

## Question

**Submission Date:** 31 March 2023

Field 14 “Delivery/cash settlement location” in Table 2 of Annex IV of RTS 2 (transparency reference data), as amended by [Amending Regulation RTS 2], should be populated with a standard code (Energy Identification Code – “EIC”) for electricity and gas contracts. How should Field 14 “Delivery/cash settlement location” for electricity and gas contracts be reported for a) cash settled contracts; b) contracts for which an EIC is not available?  [MiFID II and MiFIR transparency topics, Section 3, Question 25]

---

## ESMA Answer

**Answer Date:** 31-03-2023

Field 14 “Delivery/cash settlement location” should be interpreted and reported in the same way for cash settled and physically settled contract with regards to electricity and gas contracts. For example, Field 14 “Delivery/cash settlement location” for a cash settled contract on German power should be reported in the same manner as if the contract was physically settled, i.e. with the EIC “10YDE-RWENET---I”.
The list of available EIC is managed and maintained by ENTSO-E[1]. Regarding electricity and gas contracts for which an EIC is not available or not appropriate (for example, a market area outside the Energy Internal European Market, or a contract referencing an index), Field 14 “Delivery/cash settlement location” should be populated with an ad-hoc code meeting the following requirements:

The format should be the same as the format of EIC, i.e. {ALPHANUM-16};
Generic values such as “CASH”, “UNKNOWN” or the name of the CCP clearing the contract should not be used;
The text in the ad-hoc code should provide a- clear indication of the reference of the contract. Valid ad-hoc codes that are currently in use, are provided in the table below. You may contact data-statistics@esma.europa.eu to request an update of the list.






Contract


Ad-hoc code for Field 14


Added on




Japanese Power Futures - Tokyo


10YJP-TOKYO---AR


31/03/2023




Japanese Power Futures - Kansai


10YJP-KANSAI--AR


31/03/2023




LNG Japan/Korea Futures


JP-KR-JKM----LNG


31/03/2023




 


[1] https://www.entsoe.eu/data/energy-identification-codes-eic/eic-approved-codes/

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*