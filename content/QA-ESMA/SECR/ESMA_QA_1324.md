---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1324

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1324

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Default Amount and Default Date fields


---

## Question

**Submission Date:** 26 February 2021

(a) Fields RREL71 Default Amount and RREL72 Default Date. These fields will only be reported once we register the values ‘Defaulted according to Article 178 or Regulation (EU) No 575/2013 (DFLT)’, ‘Not defaulted according to Article 178 or Regulation (EU) No 575/2013 but classified as defaulted due to another definition of default being met (NDFT)’, ‘Defaulted both according to Article 178 or Regulation (EU) No 575/2013 and according to another definition of default being met (DTCR)’ in field RREL69, is that correct?
(b) Should the Default Amount (RREL71) and Default Date (RREL72) only be reported once and not updated subsequently, even if the Account Status of the previously-defaulted underlying exposure changes to ‘Performing’? 
(c) Is the Default Amount field requesting the sum of principal (outstanding balance on the default date) and interests due or just the sum of principal without interest due?
(d) What types of fees should be included in the default amount reported?

---

## ESMA Answer

**Answer Date:** 26-02-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.5]
(a) Yes, this is correct. If an underlying exposure is classified as defaulted under the Account Status field (i.e. the values ‘DFLT’,’NDFT’,’DTCR’, or ‘DADB’ are entered, or, where connected with a default event ‘OTHR’ is entered), then the Default Amount and Default Date fields must also be completed. In all other cases ND5 must be entered. In case of ‘REDF’, see Q&A 1296 about reporting of inactive underlying exposures.
(b)  Neither the default amount (RREL71) nor the default date (RREL72) should change after it has been entered the first time, unless the defaulted amount has not yet been fixed/finalised and is subject to further adjustments (e.g. as further missed payments and fees are cumulated). These two fields should not change even if there are adjustments to the Account Status field, such as a change in the type of default (e.g. a switch from ‘DFLT’ representing ‘Defaulted according to Article 178 of Regulation (EU) No 575/2013’ to ‘DTCR’ representing ‘Defaulted both according to Article 178 of Regulation (EU) No 575/2013 and according to another definition of default being met’). Whereas RREL71 and RREL72 should not change, in contrast, allocated Losses (RREL73) should continually be updated to reflect the most recent situation as at the data cut-off date, i.e. as recoveries are collected and the work out process progresses.
The Default Amount and Default Date fields (RREL71 and RREL72) should not be changed in the event where the underlying exposure becomes performing again (i.e. the Account Status field code entered becomes ‘PERF’, whereas in previous data submissions the Account Status field indicated that the underlying exposure was in ‘default’). However, for second-order or further defaults (i.e. loans that have entered into a default status after being re-performing from a first or previous default), the default amount and default date should be updated and should reflect the latest information on the default event.
For example, assuming a hypothetical underlying exposure:

31/01/2019: The underlying exposure defaults due to arrears (1st default)
30/06/2019: All of the arrears are cured (re-performing loan)
30/04/2021: The underlying exposure defaults again (the underlying exposure has again entered into arrears beyond the threshold for being classified as defaulted) (2nd default)

In this example, between 31/01/2019 and 30/04/2021 the underlying exposure should be reported with the Default Date 31/01/2019 and a Default Amount of 31/01/2019. After 30/04/2021, the following data submissions should report the latest default event. So after that date this underlying exposure must report 31/04/2021 as the Default Date in field RREL72 and the updated Default Amount in field RREL71.
(c) The Default Amount field is requesting the sum of principal (outstanding balance on the default date) and interests due, and any other amounts due on the underlying exposure at the time of default (including any fees, commissions, late payment penalties, etc.).
(d) Fees that have been billed or have accrued must be included in this field, but not fees that may be anticipated but have not yet been billed or accrued

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*