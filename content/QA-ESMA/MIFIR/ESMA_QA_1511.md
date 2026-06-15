---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1511

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1511

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Transaction reporting


---

## Question

**Submission Date:** 28 September 2020

Consider a scenario where an Investment Firm A executes a reportable transaction through an execution algorithm provided by another Investment Firm B .
a)	How should field 59 (Execution within firm) of RTS 22 be reported when Investment Firm A uses the execution algorithm provided by Investment Firm B?
b)	Would Investment Firm A’s reporting differ if Firm B was not a MiFID II Investment Firm and therefore did not have the obligation to report this transaction under Art. 26 MiFIR?
c)	Where Investment Firm B is using Investment Firm A’s membership to access the market, is Investment Firm B executing the transaction and does Investment Firm B have to transaction report?

---

## ESMA Answer

**Answer Date:** 28-09-2020

(a) The reporting obligations are the same as where Investment Firm A decides to send an order for execution to Investment Firm B. Investment Firm A should populate field 59 with the person or algorithm identifier within their firm that is primarily responsible for using Investment Firm B’s algorithm. Investment Firm A shall not populate a code for Investment Firm B’s algo, only its own information.
The scenario is:
IF A → IF B (algorithm) → CCP (Trading Venue or Investment Firm)
Assuming that Investment Firm A is buying an instrument and dealing on own account trading capacity, and Investment Firm B is acting in “any other” trading capacity, the respective reports should be completed as follows:



N
Field
Investment Firm A’s report
Investment Firm B’s report




4
Executing entity identification code
{LEI} of Investment Firm A
{LEI} of Investment Firm B


7
Buyer identification code
{LEI} of Investment Firm A
{LEI} of Investment Firm A


16
Seller identification code
{LEI} of Investment Firm B
{LEI} of CCP


29
Trading capacity
‘DEAL’
‘AOTC’


59
Execution within firm
Natural person’s ID or code of algorithm within Investment Firm A
Code for Investment Firm B’s execution algorithm



 
(b) No. Investment Firm A’s reporting is the same as specified in a).
(c) Yes. Investment Firm B is conducting the activity of executing a client order according to Art. 3 of RTS 22[1]. The scenario is:
IF A → IF B (algorithm) → IF A (membership) → CCP (Trading Venue)
Assuming that both Investment Firm A is buying an instrument and dealing on own account, and the subsequent steps in Investment Firm B and A are in “any other” trading capacity, the respective reports should be completed as follows:



N
Field
IF A’s report 1
IF B’s report
IF A’s report 2




4
Executing entity identification code
{LEI} of Investment Firm A
{LEI} of Investment Firm B
{LEI} of Investment Firm A


7
Buyer identification code
{LEI} of Investment  Firm A
{LEI} of Investment Firm A
{LEI} of Investment Firm B


16
Seller identification code
{LEI} of Investment Firm B
{LEI} of Investment Firm A
{LEI} of CCP


29
Trading capacity
‘DEAL’
‘AOTC’
‘AOTC’


59
Execution within firm
Natural person’s ID or code of algorithm within Investment Firm A
Code for Investment Firm B’s execution algorithm
‘NORE’



 
In order to match Investment Firm B’s reports and reflect its involvement in more than one part of ‘the chain’, Investment Firm A has to submit two reports:

one for its trade as a client with Investment Firm B (Report 1). 
one for its market-side trade with the Central Counterparty or another Investment Firm (Report 2).




[1] Commission Delegated Regulation (EU) 2017/590.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*