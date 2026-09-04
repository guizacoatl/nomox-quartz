---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1310

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1310

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Merging and splitting underlying exposures


---

## Question

**Submission Date:** 28 February 2021

a) How should various fields be completed when two or more underlying exposures are merged?

b) How should various fields be completed when an underlying exposure is split into two or more new underlying exposures?

c) What are the general rules in more complex situations e.g. where two loans are merged and then split to create two new loans?

---

## ESMA Answer

**Answer Date:** 28-02-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.1.26]
(a) As a general rule, in the interest of simplicity and traceability, underlying exposures should never be merged for reporting purposes, even when they in legal terms are merged into a single contract.
Take the example of the merger of two underlying exposures, X1 and X2, with the following characteristics:




Original Underlying Exposure Identifier


Original Principal Balance


Current principal balance


Current interest rate


Account status


Allocated losses




X1


€ 100000


€ 100000


2%


Arrears


€ 0




X2


€ 200000


€ 200000


5%


Arrears


€ 0




As a part of a restructuring agreement, the bank agrees with the obligor to replace these two loans with a single loan. The principal balance of the new loan writes of 5% of the sum of the principal balance of the two previous loans resulting in a new current principal balance of € 285,000. However, instead a higher interest rate is agreed: 10%.
Rather than creating a new loan in the reporting template, e.g. Y1, the new situation should be reported using the previous loan parts as follows: The original identifier and original principal balance stay unchanged. The current principal balance and allocated losses fields reflect the 5% write-off. The reporting entity may freely choose whether the write-off should be allocated evenly between the two underlying exposures (as in the example below) or reported just for one of them. Under any circumstances, the account status should for both underlying exposures now reflect that the loans have been restructured:




Original Underlying Exposure Identifier


Original Principal Balance


Current principal balance


Current interest rate


Account status


Allocated losses




X1


€ 100000


€ 95,000


10%


Restructured_performing


€ 5,000




X2


€ 200000


€ 190,000


10%


Restructured_performing


€ 10,000




 
(b) When an underlying exposure is split into two separate loan parts with different characteristics, the original underlying exposure identifier remains unchanged, whereas the field “New Underlying Exposure Identifier” is completed using a fixed formula:
In the example, where the underlying exposure X1 is split into two loan parts, the new loan parts will carry the following new identifiers:




Original Underlying Exposure Identifier


New Underlying Exposure Identifier




X1


X1_split_1




X1


X1_split_2




If X1_split_1 in turn is split into another two loan parts they will be presented as follows:




Original Underlying Exposure Identifier


New Underlying Exposure Identifier




X1


X1_split_1_split_1




X1


X1_split_1_split_2




Where a loan is split, the Original Principal Balance field should be completed in the two new loan parts on a pro-rata basis.
 
(c) For more complex situations where the guidance set out in points (a) and (b) cannot be applied, the following general rules apply:

No two underlying exposures in a pool can have the same “New Underlying Exposure Identifier”.
The only situation where two underlying exposures in a pool can have the same “Original Underlying Exposure Identifier” is following a split as set out in point (b) above.
No underlying exposure can be “replaced”, i.e. unless an underlying exposure has defaulted, matured or been repurchased, it must continue to be reported as a part of the pool without changing the “Original Underlying Exposure Identifier”.
The “Original Underlying Exposure Identifier” of an underlying exposure can never be changed.

As long as these rules are respected, the reporting entity is free to report the situation in the way it finds easiest. Take as an example, the two underlying exposures X1 and X2 with the following characteristics:




Original Underlying Exposure Identifier


Original Underlying Exposure Identifier


Original Principal Balance


Current principal balance


Current interest rate


Account status




X1


X1


€ 100000


€ 100000


2%


Arrears




X2


X2


€ 200000


€ 200000


5%


Arrears




Due to a restructuring event, the two loan X1 and X2 are from a legal standpoint first merged into a single loan and then subsequently split into two new loan parts with a principal balance of, respectively, € 300,000 (5% interest) and € 30,000 (1% interest). This could be reported by splitting the two initial loans following the principles established in point (b) above.




Original Underlying Exposure Identifier


New Underlying Exposure Identifier


Original Principal Balance


Current principal balance


Current interest rate


Account status




X1


X1_split_1


€ 91,000


€ 100000


5%


Restructured_performing




X1


X1_split_2


€ 9,000


€ 10000


1%


Restructured_performing




X2


X2_split_1


€ 182,000


€ 200000


5%


Restructured_performing




X2


X2_split_2


€ 18,000


€ 20000


1%


Restructured_performing




However, if the reporting entity finds it easier to reconcile with its internal IT system, it would also be acceptable to report this situation by retaining the original two underlying exposures and adding a third new underlying exposure. In this case, the newly created loan part Y1 should have the account status Restructured_Performing to signal that it was created as a result of a renegotiation of an existing loan.




Original Underlying Exposure Identifier


New Underlying Exposure Identifier


Original Principal Balance


Current principal balance


Current interest rate


Account status




X1


X1


€ 100000


€ 100000


5%


Restructured_performing




X2


X2


€ 200000


€ 200000


5%


Restructured_performing




Y1


Y1


€ 10,000


€ 10000


1%


Restructured_performing

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*