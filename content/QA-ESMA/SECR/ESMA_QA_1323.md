---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1323

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1323

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Completion of the collateral information section for guarantees and multiple items of collateral


---

## Question

**Submission Date:** 26 February 2021

(a) Must the collateral information section be completed if the underlying exposure is secured by a guarantee? 
(b) How should the section be completed for multiple collateral items? 
(c) How should the lien fields (e.g. RREC8, CREC10) be reported in this case?
(d) Where two underlying exposures are secured by the same collateral item, should the ‘Collateral Information Section’ be completed twice (i.e. once for each underlying exposure secured by that collateral)? and how should the fields relating to the valuation and sales price be completed?
(e) Where two underlying exposures are created against a single collateral item at different points in time, should the fields ‘Original Valuation Amount’; ‘Original Valuation Date’; ‘Original Loan-To-Value’ be identical, or is it necessary to provide a new updated “Original Valuation” each time a new loan is created against the property? How should the original loan-to-value ratio of the new loan be calculated?

---

## ESMA Answer

**Answer Date:** 26-02-2021

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.2.10]
(a) As set out in Article 4(1)(b)(i) of the RTS on disclosure, the collateral information section must also be completed if the underlying exposure is secured by a guarantee.
(b) As set out in Article 4(1)(b) of the RTS on disclosure, the collateral information section must be completed for each item of collateral securing the underlying exposure. Each item of collateral should be reported using the collateral information section (i.e. one section completed per collateral item). There is also a narrative explanation available in paragraph 33 (including the footnote therein) of ESMA’s CP on Disclosures Technical Standards. For example, if there is both a residential property and a guarantee securing the underlying exposure, then the collateral information section should be completed twice.
(c) In the event that a collateral item is secured by a guarantee, fields RREC8 and CREC10 should be completed according to the priority that the originator or other guarantee-holder will have on the guarantor to honour their commitment, which may simply be the first lien.
(d) Yes, the Collateral Information Section must be completed once for each underlying exposure item using the same collateral identifier (RREC3; CREC3; CRPC3; ESTC3; NPEC3) every time. Where there are multiple underlying exposures secured by a single collateral item, the fields ‘Current Valuation Amount’ (RREC13; CREC15; CRPC10; LESL75; ESTC10), ‘Original Valuation Amount’ (RREC17; CRPC13; AUTL60; LESL72; ESTC14); ‘Original Loan-To-Value’ (RREC16; CREL75; AUTL59; ESTC17) and ‘Sale Price’ (RREC21; CRPC17; AUTL77; ESTC19) must be completed on a pro-rata basis (see also point b of Q&A 1322).
(e) Where a new loan (‘Loan 2’) is taken out against a property with an existing loan (‘Loan 1’), Loan 2 should be reported as a separate underlying exposure with its own underlying exposure identifier. In addition, as set out above in the previous sub-point, the ‘Collateral Information Section’ should be completed once again for Loan 2 using the same collateral identifier as was used when the collateral section was completed for Loan 1.
The ‘Original Loan-To-Value’ (RREC16; CREL75; AUTL59; ESTC17) of loan 2 must be calculated based on up-to-date inputs, i.e. the current principal balance of Loan 1, the current principal balance of Loan 2 as well as the Current Valuation Amount of the collateral. 
When completing the Collateral Information Section for Loan 2, the fields ‘Original Valuation Amount’ (RREC17; CRPC13; AUTL60; LESL72; ESTC14); ‘Original Loan-To-Value’ (RREC16; CREL75; AUTL59; ESTC17), and ‘Original Valuation Date’ (RREC19; CRPC15; LESL74; ESTC16) should be based on up-to-date information and cannot be drawn from the same fields in the Collateral Information Section of Loan 1. If no updated valuation is available, the relevant ND option must be entered.
Where the Original Valuation Amount for Loan 2 is entered (i.e. no ND option is used), the field ‘Current Valuation Amount’ and ‘Current Valuation Date’ in the Collateral Information Section of Loan 1 must be updated accordingly, as per Q5.1.14. In this case, the Current Loan-To-Value of Loan 1 must also be updated as all the necessary elements are available to update it. Under no circumstances should the ‘Original Loan-To-Value’ (RREC16; CREL75; AUTL59; ESTC17), the ‘Original Valuation Date’ (RREC19; CRPC15; LESL74; ESTC16) or any other “original” value of a loan be changed over its lifetime.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*