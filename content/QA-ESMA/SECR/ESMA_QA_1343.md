---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1343

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1343

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Deposit amount


---

## Question

**Submission Date:** 15 November 2019

(a) Several jurisdictions – among which the Netherlands – have a so-called ‘DGS’ or bank failure safeguard, currently EUR 100k per obligor per bank in the Netherlands. The Deposit Amount field (e.g. RREL77) refers to ‘excluding the benefit of any national deposit’. The interpretation of ‘excluding’ is unclear. If an obligor has EUR 120k of off-settable deposit, then should the whole amount of EUR 120k be used in the pro-rata calculation for this field?
(b) Should so-called ‘construction deposits’ also be included in this field?
(c) Should so-called ‘savings deposits’ as part of sub-participations be included in this field? How does this affect the reporting of the original and current principal balance of the underlying exposure?
(d) According to the law in some jurisdictions including for example Spain, only amounts in arrears are off-settable. Does that mean that the deposit amount (checking accounts or daily renewable deposits) as reported in this field should always be capped by the amount in arrears?
(e) Additionally, in some jurisdictions including for example Spain, the offset can only be done against liquid assets (checking accounts or daily renewable deposits). In other words, the offset cannot be done against a term deposit. What should be reported for this field in such situations?

---

## ESMA Answer

**Answer Date:** 15-11-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.3.5]
(a) Yes, in this example provided, EUR 120k should be used regardless of whether the deposit is covered by a deposit guarantee scheme or not.
(b) With respect to a mortgage underlying exposure, ‘construction deposits’ are understood to refer to that part of the mortgage underlying exposure which the obligor has requested to be disbursed into a blocked account held in the obligor’s name with the originator, the proceeds of which may be applied towards construction of, or improvements to, the relevant mortgaged asset. ‘Construction deposits’ should be included in the deposit amount field (RREL77, in this example), because they can be used to offset  any amounts owed by the obligor to the originator (i.e. used to offset the underlying exposure).
(c) ‘Savings deposits as part of sub-participations’ are understood to refer to accounts that accumulate (as part of payments from the obligor to the account) the full or partial amount of the corresponding outstanding principal balance of the underlying exposure. Such accounts then redeem the full amount due on the underlying exposure at maturity (or another agreed-upon date). In such arrangements, the underlying exposure does not amortise over its lifetime but is instead redeemed at maturity (or another agreed-upon date). In this situation, reporting entities can choose to report either of the following options:

Include the value of such savings accounts in the Deposit Amount field AND subtract the value of such savings accounts from the underlying exposure current principal balance (i.e. subtract this value from the value reported in field RREL30; CREL23; CRPL39; AUTL30; CMRL28; CCDL22; LESL28; or ESTL28). Under this arrangement the underlying exposure current principal balance as at the data cut-off date is ‘net’ of the savings amount (i.e. sub-participation). If this option is chosen (rather than option 2 below), then the original principal balance of the underlying exposure (i.e. field RREL29; CREL24; CREL25; CRPL38; AUTL29; CMRL27; LESL27; or ESTL27) must also be reported consistently, i.e. ‘net’ of any savings amount that existed at the time of origination of the underlying exposure.;                    or
Do not include the value of such savings accounts in the Deposit Amount field AND include the value of such savings accounts in the underlying exposure current principal balance (i.e. include this value in the value reported in field RREL30; CREL23; CRPL39; AUTL30; CMRL28; CCDL22; LESL28; or ESTL28). Under this arrangement the underlying exposure current principal balance as at the data cut-off date is ‘gross’ of the savings amount (i.e. sub-participation). If this option is chosen (rather than option 1 above), then the original principal balance of the underlying exposure (i.e. field RREL29; CREL24; CREL25; CRPL38; AUTL29; CMRL27; LESL27; or ESTL27) must also be reported consistently, i.e. ‘gross’ of any savings amount that existed at the time of origination of the underlying exposure.

(d) As set out in the content to report for each field, the ‘Deposit Amount’ refers to “The sum of all obligor amounts held by the originator or seller that are potentially off-settable against the underlying exposure balance, excluding the benefit of any national deposit compensation scheme.” In this regard, the term “potentially” should be understood as what is potentially off-settable within the applicable national legal framework.
The following table illustrates an example for two underlying exposures held by an originator with a single obligor (the values for columns 1 and 4 are taken from the ‘Content to Report’ for the Deposit Amount field—see the relevant Annexes in the RTS on disclosure).




1


2


3


4




 


Balance (EUR) at the data cut-off date


Amount in arrears (EUR) at the data cut-off date


Reporting for ‘Deposit Amount’ field




Liquid assets: Checking account or 1 day term deposit


100


N/A


N/A




Underlying exposure 1


60


5


5




Underlying exposure 2


75


0


0




In this situation, it is appropriate to report the amounts shown in column. The reason is that what is relevant for investors is to know the maximum potential amount owed by the obligor that could be off-set by deposits. If this maximum amount is capped by a jurisdictional legal framework, then it is appropriate to report the maximum amount subject to that cap.
(e) In this situation, it is appropriate to report the Deposit Amount only reflecting liquid assets, and to not include term deposits. As described in point (d) above and in the field Content to Report, the motivation for this field is to show investors what could potentially be used to offset amounts owed to the originator. If, because of a national legal framework, term deposits cannot be used for this purpose, then term deposits should not be considered for the purpose of reporting the Deposit Amount.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*