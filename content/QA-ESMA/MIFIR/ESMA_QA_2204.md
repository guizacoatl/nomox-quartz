---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_2204

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/2204

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.26]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** RTS 22 - Regulation 2017/590 on the reporting of transactions to competent authorities

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Reporting of accumulator contracts


---

## Question

**Submission Date:** 27 May 2024

(a) How should accumulators - i.e. derivative contracts whereby the buyer commits to buy a predefined number of underlying financial instruments at a predefined price, per day, over a certain “accumulation” period - be classified? 

(b) Should the IF report the single transactions executed when settling the accumulator contract? 

(c) Should the IF report the transactions concluded with third parties to secure the financial instruments to be sold to the accumulator’s buyer? 

(d) How should the accumulator contract be reported?

---

## ESMA Answer

**Answer Date:** 24-05-2024

(a) For the purposes of transaction data reporting, accumulators should be classified as either forwards or options, depending as to whether they embed option features (e.g. knock-out price or gearing ratio).
(b) No. 
(c) Yes, they should be reported according to the general rules, as applicable. 
(d) Accumulators should be reported as displayed below: 






RTS 22 Field Number 






RTS 22 Field Name 






Content to be reported 








30 






Quantity 






Number of derivative contracts purchased. 








33 






Price 






Price at which the buyer has committed to purchase the underlying financial instruments during the accumulation period. 


[For contracts classified as options] 


The premium of the derivative contract per underlying. 








38 






Up-front payment 






If applicable, the monetary value of any up-front payment. 








42 






Instrument full name 






Full name of the financial instrument, which must contain the term "accumulator". 








43 






Classification 






JE**** or O***** 








46 






Price multiplier 






Maximum number of shares to be purchased over the entire accumulation period.  








47 






Underlying ISIN 






ISIN of the underlying. 








51 






Strike price 






[Only for contracts classified as options]  


Pre-determined price at which the holder will have to buy the underlying financial instrument.  








55 






Expiry date 






Expiration date of the accumulator.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*