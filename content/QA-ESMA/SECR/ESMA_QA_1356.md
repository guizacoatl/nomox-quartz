---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1356

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1356

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Arrears Balance


---

## Question

**Submission Date:** 28 May 2020

How should this field be reported?

---

## ESMA Answer

**Answer Date:** 28-05-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.3.22]
The following illustrative example provides further context for how this field should be reported at different dates during the lifetime of a hypothetical underlying exposure.
Assume an underlying exposure with the following details: granted on 1 January 2019 and a EUR 1,000 arrangement fee due on the first payment date (1 February 2019). A total payment of EUR 2,500 is due on the first payment date of 1 February 2019 (equal to the EUR 1,500 mortgage payment + the already-mentioned EUR 1,000 arrangement fee), of which EUR 1,500 is paid and the EUR 1,000 is negotiated to be postponed to the following payment date. At this time, the ‘Payment Due’ field in the applicable template (i.e. RREL39; CREL105; CRPL50; AUTL37; CMRL36; CCDL28; LESL35; ESTL35, as applicable) must reflect this next payment amount (EUR 1,500).
A data submission for this underlying exposure at this cut-off date would report EUR 1,000 for an arrears balance for this underlying exposure, for the following reason: although the obligor has made the agreed mortgage payment on the due date of 1 February 2019, the capitalised arrangement fee has not yet been paid. This is represented by the calculation below as at 2 February 2019, and, accordingly, the ‘Account Status’ field in the applicable template (i.e. RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55) must reflect this situation, by being reported as ‘ARRE’ (meaning ‘Arrears’).




(A) Total payments due to date


EUR 1,500




(B) Total payments received to date


EUR 1,500




(C) Any amounts capitalised


EUR 1,000




(D) Any fees applied to the account


EUR 0




(A + C + D – B) Arrears Balance to report


EUR 1,000




Now assume that the obligor misses their scheduled payment of EUR 1,500 due on the second payment date (i.e. due on 1 March 2019). As a result of this missed payment, the originator applies a EUR 200 administrative fee for late payment. The underlying exposure, as a result, is now considered to be in arrears of EUR 2,700, for the following reason: the obligor has not made the EUR 1,500 second payment due, and furthermore also owes the EUR 200 administrative fee for late payment and, still, the capitalised EUR 1,000 arrangement fee.
At this time, the ‘Payment Due’ field in the applicable template (i.e. RREL39; CREL105; CRPL50; AUTL37; CMRL36; CCDL28; LESL35; ESTL35, as applicable) continues to reflect the next payment amount (EUR 1,500). At the same time, the ‘Account Status’ field in the applicable template (i.e. RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55) continues to reflect this situation, by being reported as ‘ARRE’ (meaning ‘Arrears’).
The following calculation illustrates the arrears balance on this second payment due date (i.e. 1 March 2019):




(A) Total payments due to date


EUR 3,000




(B) Total payments received to date


EUR 1,500




(C) Any amounts capitalised


EUR 1,000




(D) Any fees applied to the account


EUR 200




(A + C + D – B) Arrears Balance to report


EUR 2,700




 
Now, on the third payment date (1 April 2019), the obligor also misses this scheduled payment due at this time and the originator consequently agrees to restructure the underlying exposure in such a manner that the underlying exposure is no longer in arrears—in effect, the present arrears balance (i.e. including amounts (A), (B), (C), and (D) in the calculation above) is reduced to zero and, in exchange for this reduction, the obligor agrees to an increased regular monthly payment due of EUR 1,800.
In this situation, the arrears balance falls to EUR 0, while the ‘Payment Due’ field in the applicable template (i.e. RREL39; CREL105; CRPL50; AUTL37; CMRL36; CCDL28; LESL35; ESTL35, as applicable) must be updated to reflect this new payment amount (EUR 1,800). In addition, the ‘Account Status’ field in the applicable template (i.e. RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55) must reflect this new situation, by being reported as ‘RNAR’ (meaning ‘Restructured - No Arrears’).
Next, assume that, on the fourth payment date (1 May 2019), the obligor misses this new updated payment due of EUR 1,800. As a result, the originator applies a EUR 200 administrative fee for late payment. The underlying exposure, as a result, is now considered to be in arrears of EUR 2,000, for the following reason: the obligor has not made the EUR 1,800 payment due, and furthermore also owes the EUR 200 administrative fee for late payment.
For this date, the ‘Payment Due’ field in the applicable template (i.e. RREL39; CREL105; CRPL50; AUTL37; CMRL36; CCDL28; LESL35; ESTL35, as applicable) must still this new payment amount (EUR 1,800). In addition, the ‘Account Status’ field in the applicable template (i.e. RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55) must now reflect this new situation, by being reported as ‘RARR’ (meaning ‘Restructured - Arrears’).
The following calculation illustrates the arrears balance on this fourth payment due date (i.e. 1 May 2019).




(A) Total payments due to date


EUR 1,800




(B) Total payments received to date


EUR 0




(C) Any amounts capitalised


EUR 0




(D) Any fees applied to the account


EUR 200




(A + C + D – B) Arrears Balance to report


EUR 2,000

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*