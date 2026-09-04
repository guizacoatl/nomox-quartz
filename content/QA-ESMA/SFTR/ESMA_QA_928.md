---
surnom_texte_lvl1: SFTR
---

# ESMA_QA_928

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/928

---

## Regulatory Context
Regulation : SFTR

**Linked Articles:** [[2015R2365_EN.2]]

**Level 1 Regulation:** Securities Financing Transactions Regulation (SFTR) Regulation (EU) 2015/2365- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * EMIR Reporting

**Subject Matter:** Update of a Trade State Report belonging to an SFT


---

## Question

**Submission Date:** 28 January 2021

a)	Paragraph 83 of the Guidelines provides that the Trade Repositories (TRs) should apply changes to the Trade State Report only based on the reports sent with the event dates equal to the reporting date or the day preceding the reporting date. Should the TRs take into account if the day preceding the reporting date is a non-working day (in particular, a holiday in the jurisdiction of the reporting counterparty)?
b)	Is it possible to update an SFT after its maturity or an early termination?
c)	Is it possible to report lately a termination of an SFT?
d)	How should TRs proceed with the reconciliation of SFTs whose termination is reported after the reporting deadline?

---

## ESMA Answer

**Answer Date:** 28-01-2021

[ESMA74-362-893 SFTR Q&A 7]
a) Yes, the TRs when determining, based on the Event date, whether a given report should be taken into account for the update of the Trade State Report, should take into account the non-working days, including weekends as well as holidays in line with the national calendars of the reporting counterparties or of the entities responsible for reporting, as applicable.  For example, if a given counterparty reports a modification on 2 May, populating the field “Event date” with 30 April, and 1 May is a holiday in the jurisdiction of that counterparty, the TR should consider this report for the purpose of updating the Trade State Report.
b) The latest trade state of an SFT can only be updated by the TRs based on reports submitted with regards to SFTs that are outstanding. Otherwise, with regards to SFTs that are not outstanding, the TRs should record the information but not update the trade state of the SFT. Reopening an SFT is not possible. Furthermore, pursuant to paragraph 83 of the Guidelines TRs should not update the latest state of an SFT, if the Event Date is earlier that Reporting Date -1.
Example for a possible update of the latest state of an SFT: 
Maturity Date of the trade: December 31st, 2021
Date of the latest update of the SFT: January 11th, 2021 (Monday) 
Event Date: January 15th, 2021 (Friday)
Reporting Date: January 18th, 2021 (Monday)
Since the Event Date is not earlier than the Reporting Date -1 (January 15th, 2021) the TR should update the latest state of the SFT in the example.
Example for a possible report without update of the latest state of an SFT: 
Maturity Date of the trade: January 12th, 2021
Date of the latest update of the SFT: January 11th, 2021 (Monday) 
Event Date: January 12th, 2021 (Tuesday)
Reporting Date: January 18th, 2021 (Monday)
Since the Event Date (January 12th, 2021) is earlier than the Reporting Date -1 (January 17th, 2021) the TR should not update the latest state of the SFT in the example.
c) Yes, it is possible. As included under paragraph 83 of the Guidelines, “the TRs should not apply the reported change to the current Trade State Report (if the transaction is still outstanding) nor the past trade state report of the date for which the event was reported.” However if the counterparties need to report after the reporting deadline the termination of an SFT [which economically and/or contractually is not any longer outstanding), they should use action type “ETRM” and report fields “Event date” and “Termination date” with the relevant date in the past. This is also how counterparties should report after the reporting deadline a modification of the maturity date which is in the past. In either case, the TRs should update accordingly the latest trade state report and remove those SFTs.
d) TRs should remove those SFTs from reconciliation thirty calendar days after the termination is reported, as required under Article 2(2)(h) of Commission Delegated Regulation 2019/358 supplementing SFTR.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*