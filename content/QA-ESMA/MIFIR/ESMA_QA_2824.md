---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_2824

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/2824

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.22a]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- Secondary Markets

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Data reporting services providers

**Subject Matter:** Consolidated Tape Provider (CTP)


---

## Question

**Submission Date:** 01 April 2026

What status must be reported when an instrument is reported for the first time to the CTP?

---

## ESMA Answer

**Answer Date:** 01-04-2026

The initial status of individual financial instruments is reported for the first time from data contributors to the CTP in the following cases:
(i) when the activities of the CTP start (i.e. the status should be ACTV, unless the instrument is already suspended or halted); and
(ii) when an instrument is newly admitted to trading (i.e, the status should be ACTV); 
In essence, the initial message establishes the baseline status that the CTP will disseminate until a subsequent change is reported. Please find below some examples:



Instrument
Publication venue
Status prior to go live T-1
CTP go live date: T
…/… other phase changes sent throughout T
T+1
T+N


ABC
MIC1
ACTV
MIC1 sends a message with Trading phase set to ‘SOAU’ and status set to ‘ACTV’
MIC1 sends a message with Trading phase set to new values
MIC1 sends a message with Trading phase set to ‘SOAU’
MIC1 sends a message with status set to ‘RMOV’


CTP
N/A
CTP sends a message with Trading phase set to ‘SOAU’ and status set to ‘ACTV’
CTP sends a message with Trading phase set to those values and status set to ‘ACTV’
CTP sends a message with Trading phase set to ‘SOAU’ and status set to ‘ACTV’
CTP sends a message with status set to ‘RMOV’


DEF
MIC2
SUSP
MIC2 sends a message with status set to ‘SUSP’
No messages sent
MIC2 sends a message with Trading phase set to ‘SOAU’ and instrument status set to ‘ACTV’
 


CTP
N/A
CTP sends a message with status set to ‘SUSP’
CTP sends a message with status set to ‘SUSP’
CTP sends a message with Trading phase set to ‘SOAU’ and status set to ‘ACTV’

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*