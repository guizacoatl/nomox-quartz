---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1342

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1342

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.7]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Amortisation Type


---

## Question

**Submission Date:** 15 November 2019

(a) How should these fields be completed for different types of bullet loans? For example, the Dutch market has a substantial amount of mortgages with a redemption type of ‘bullet + savings’. (RREL35; CREL87; CRPL46; AUTL32; CMRL32; LESL31; ESTL31)
(b) How should this field be completed for ABCP transactions (IVAL21)?
(c) How should the description of the German amortisation type be understood. According to the definition, it seems to be like a French Amortisation Type with one grace period, is that correct?
(d) How should Rising Instalments be categorised (i.e. where the principal part of the instalment increases periodically according to a percentage)?
(e) How should this field be completed for underlying exposures that are repaid within one month, such as some trade receivables?

---

## ESMA Answer

**Answer Date:** 15-11-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.3.4]
(a) In this situation, the amortisation type field should be completed with ‘Bullet’.
(b) With respect to field IVAL21, it is recalled that this is not a {LIST} field but instead a {MONETARY} field. As per the Content to Report for this field, the total outstanding principal amount of the underlying exposures of this type (such as all trade receivables underlying exposures in the ABCP transaction) must be aggregated across all underlying exposures that have an amortisation type of either ‘Bullet’, or ‘Balloon’, or some other arrangement besides ‘French Amortisation’, ‘German Amortisation’, or a ‘Fixed Amortisation Schedule’.
For example, consider an ABCP transaction that has 1,000 underlying exposures each of which are worth exactly EUR 10,000. Of these 1,000 underlying exposures, 750 are trade receivables and 250 are automobile loans and leases. Therefore, Annex 11 (‘ABCP underlying exposures template’) must be completed twice—once for the 750 trade receivables and once for the 250 automobile loans and leases. Focussing on the 250 automobile loans and leases, assume that according to the definition set out in field IVAL21, there are

100 loans/leases classified as ‘Bullet’,
50 loans/leases classified as ‘Balloon’,
25 loans/leases classified as ‘French Amortisation’,
25 loans/leases classified as ‘Fixed Amortisation Schedule’, and
25 loans/leases classified as ‘Other Amortisation’.

Recall that each underlying exposure in this example is worth EUR 10,000. Therefore, taking this example, field IVAL21 would be completed with the value EUR 1,750,000, which is equal to the value of all auto loans and leases classified as either ‘Bullet’, ‘Balloon’, or ‘Other’ (i.e. (100 + 50 + 25) * EUR 10,000).
(c) The difference between the German and the French amortisation type lies in the first instalment. In the German amortisation type the first instalment is interest only whilst the French amortisation type the first instalment includes both principal and interest payments. Hence, both amortisation types can be identical if a grace period is applicable in the first instalment only to the principal payment. 
(d) These types of instalments should be categorised as ‘OTHR’ (representing ‘Other’).
(e) For such underlying exposures, the Amortisation Type should be reported as Bullet ‘BLLT’ (corresponding to “Amortisation in which the full principal amount is repaid in the last instalment.”)

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*