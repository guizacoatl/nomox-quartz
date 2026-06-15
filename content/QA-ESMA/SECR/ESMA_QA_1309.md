---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1309

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1309

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Account Status RREL69; CREL136; CRPL79; AUTL70; CMRL55; CCDL37; LESL57; ESTL55.


---

## Question

**Submission Date:** 05 October 2020

(a) What is the definition of ‘performing’ underlying exposure? And does an exposure that has been restructured >3 years ago qualify as performing, in line with RREL14?
(b) Restructured – Arrears / No Arrears: When should an underlying exposure be considered as ‘restructured’. Should only currently restructured loans – i.e. due to credit impaired obligors - be reported and not loans that were ever in arrears/default (and have recovered since)? How about loans benefiting from a debt moratorium/payment holiday?
(c) For defaulted / foreclosed loans several fields are no longer (fully) applicable to report. For example ‘valuation amount’ in case a real-estate collateral has been sold but foreclosure proceeds still come in, as well as ‘current interest rate’ in case a borrower has ceased to pay. How should these fields be reported in such instances?
(d) With the new set of statuses we foresee that underlying exposures can have multiple options applicable. For example, an underlying exposure could be in ‘arrears’ AND ‘Repurchased by Seller – Special Servicing’. How should these situations should be reported?
(e) The value ‘Defaulted only under another definition of default being met (DADB)’, is referred to the default definition usually included in the transaction documentation? We understand that, in general terms, defaults can be cured if, for example, a defaulting loan becomes current again; however, if the default definition used in DADB is the one included in the transaction documentation, defaults may not be cured even if the obligor repays all debt (even if the loan stays performing for long periods): in this situation, we would maintain the loan in the DADB value, is that correct?
(f) What is the difference between the response options ‘NDFT’ (representing ‘Not defaulted according to Article 178 of Regulation (EU) No 575/2013 but classified as defaulted due to another definition of default being met’) and ‘DADB’ (representing ‘Defaulted only under another definition of default being met’)?
(g) In the event that an underlying exposure has been restructured, and is in default, how should this be reported in this field?

---

## ESMA Answer

**Answer Date:** 05-10-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.3.13]
(a) Performing: It is not possible to provide an exhaustive definition of performing, which will be determined by applicable regulatory/supervisory requirements that the originator is subject to.
(b) Restructured – Arrears / No Arrears: As set out in the description to this field, “Restructuring refers to any changes made to the contractual terms of the underlying exposure agreement due to forbearance, including payment holidays, arrears capitalisation, change of interest rate basis or margins, fees, penalties, maturity, and/or other generally-accepted measures of restructuring under forbearance.” The information on these underlying exposures is meant to reflect their current status—information should be up to date at all times unless indicated otherwise (for example in fields like “Original Valuation Amount”, which clearly indicate a historical dimension). Underlying exposures that have previously been restructured and are not currently in arrears should be reported as ‘RNAR’ (‘Restructured – No Arrears’) whereas those that are currently in arrears should be reported as ‘RARR’ (‘Restructured – Arrears’). Whereas only “payment holiday” is mentioned explicitly in the definition of restructuring quoted above, it should be understood as covering a “debt moratorium” as well.
(c) As indicated in the previous sub-answer, information should reflect the latest-available details on the loan. Thus, ‘valuation amount’ and ‘current interest rate’ should nevertheless reflect the information as at the data cut-off date. In these specific examples, such information may correspond to the valuation of the property at the time of sale (gross of any fees, penalties, etc.) and to the interest rate payable by the obligor at the data cut-off date (which may be 0% if this rate has been waived).
(d) With regards to multiple options being applicable, the purpose of the options ‘Repurchased by seller’  and ‘Redeemed’  relate to signalling some of the reasons for an underlying exposures to be considered an inactive underlying exposure. As per the example set out in the question above (see point d), if an underlying exposure is in arrears and has been repurchased then, by virtue of Article 2(5) of the RTS on disclosure, the underlying exposure would be treated as an inactive underlying exposure and would only need to be reported once subsequently (see also the response to question Q&A 1296). In this situation, reporting the underlying exposure as ‘Restructured’ would take precedence over other fields. The same considerations apply to ‘Redeemed’ exposures.
For example, if as at the data cut-off date an underlying exposure has been repurchased (i.e. it is now an inactive underlying exposure as at the data cut-off date) but and had been restructured prior to or as part of the repurchasing process, then the account status field should be completed with ‘Repurchased by Seller - Restructured’. The same logic applies if the underlying exposure had undergone any special servicing arrangements (i.e. being transferred to a special servicer, or undergoing any special collection procedures) at the time of restructuring (‘Repurchased by the Seller- Special Servicing’), or if the underlying exposure was repurchased as part of a discovery that it had breached the representations and warranties set out in the securitisation transaction documentation (‘Repurchased by the Seller – Breach of Representations and Warranties’), or had defaulted and was then repurchased (‘Repurchased by the Seller – Defaulted’), or finally was repurchased for any other reason (‘Repurchased by the Seller – Other Reason’).
(e) Yes, this is correct.
(f) ‘DABD’ (representing ‘Defaulted only under another definition of default being met’) should only be entered when the originator is not subject to the requirements of the Capital Requirements Regulation (Regulation (EU) No 575/2013). Otherwise, ‘NDFT’ (representing ‘Not defaulted according to Article 178 of Regulation (EU) No 575/2013 but classified as defaulted due to another definition of default being met’) should be entered.
(g) In this situation, the ‘default’ status takes priority and the appropriate ‘default’ code should be entered (i.e. either values ‘DFLT’,’NDFT’,’DTCR’, ‘DADB’, or ‘REDF’).

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*