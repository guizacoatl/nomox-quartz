---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1418

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1418

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Annex 11: Underlying Exposures - ABCP - Scheduled Principal and Interest Payment Frequency Above One Month


---

## Question

**Submission Date:** 28 May 2020

(a) Should an underlying exposure with a “single instalment” (i.e. bullet) and hence without a regular payment frequency be counted towards this field? What if that single instalment is scheduled for payment within less than a month? 

(b) What should be reported if some, but not all the underlying exposures within a single asset type is single instalment? 

(c) What should be reported if an underlying exposure does not have fixed periods between instalments, for example there is a schedule of instalment dates and the period between them is different, or if an exposure has an initial payment holiday of three months, reverting to monthly payment, how should this field be completed?

---

## ESMA Answer

**Answer Date:** 28-05-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.13.10]
(a) For the purposes of this field, bullet and zero-coupon underlying exposures should be treated as underlying exposures with a frequency of principal payments “greater than one month”, except when the maturity of such underlying exposures is less than a month.
(b) As set out in the “Content to Report”, this field should contain ”The total outstanding principal balance of exposures of this type where the frequency of principal payments due, i.e. period between payments, is greater than one month (e.g. quarterly, semi-annual, annual, bullet, zero-coupon, other).” Any underlying exposure which does not meet this condition should be ignored for the purposes of this field.  See also Q&A 1350.
(c) An underlying exposure should be counted towards this field where the period between the most recent scheduled payment (interest for IVAL23 or principal for IVAL22) prior to the data cut-off date and the subsequent scheduled payment (interest for IVAL23 or principal for IVAL22) is more than one month. Where this period is less than one month for an underlying exposure, that underlying exposure must not be included in the total referred to in these two fields.
See, for example, below the payment schedule of two underlying exposures of the same type (UE1 and UE2):




 
 


UE1


UE2




Current Principal Balance
 


€ 500


€ 1000




Payment schedule (interest + principal)


First payment
 


15 February


15 February




Second payment
 


5 March


25 March




Third payment
 


1 May


5 April




 

Data cut-off date of the first report is 1 March: The period between the first and the second payment of UE1 is less than one month whereas for UE2 it is more than one month. Consequently, only UE2 is included in the total referred to in these two fields. In other words, € 1000 should be entered int fields IVAL22 and IVAL23 in the first report.
Data cut-off date of the second report is 1 April: The period between the second and the third payment of UE1 is more than one month whereas for UE2 it is less than one month. Consequently, only UE1 is included in the total referred to in these two fields. In other words, € 500 should be entered into fields IVAL22 and IVAL23 in the second report.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*