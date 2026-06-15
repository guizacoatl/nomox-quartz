---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1699

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1699

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Complex trades


---

## Question

**Submission Date:** 04 February 2019

a)	Does a complex trade as defined under Article 12 of RTS 22 need to have a single price available for the transaction?
b)	If there are prices available for the components of a complex trade does it mean that it is not a complex trade?
c)	How should the TVTIC (field 3 of RTS 22) be populated in transaction reports of a complex trade?
d)	How should a complex trade be transaction reported under article 26 of MiFIR where the components contain reportable and non-reportable financial instruments?
e)	If a component instrument or a complex trade (e.g. strategy) has an ISIN, does it make it reportable under article 26 of MIFIR?
f)	How should a complex trade (e.g. a strategy or other instrument where a transaction in the instrument is a complex trade) be reported in the instrument reference data under article 27 of MiFIR and article 4 of MAR?
g)	For an instrument where a transaction is a complex trade (for example a strategy) should a component of the instrument be reported in the instrument reference data under article 27 of MIFIR and article 4 of MAR if it is not admitted to trading or traded on a trading venue?

---

## ESMA Answer

**Answer Date:** 04-02-2019

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 20.1]
(a) Yes as stated in 5.35.9 of the Guidelines, a transaction should only be considered to involve two or more financial instruments when there is one single transaction in multiple financial instruments simultaneously for one single price.
(b) No, there may be a price because the components may be traded separately. If there is a single price available for a single transaction in multiple financial instruments, then it is a complex trade.
(c) The TVTIC provided by the TV that is applicable for that leg of the complex trade should be reported in each leg. If the TV provides the same TVTIC for more than one leg of a complex trade, then that TVTIC should be used for each leg to which it is applicable. If a TV provides different TVTICs for some legs, then the TVTIC applicable for each leg should be reported. If a leg of a complex trade is not executed on a TV, then the TVTIC field will not be populated for that leg. 
(d) Only the legs for the components of a complex trade that are financial instruments that are reportable under article 26(2) should be transaction reported. The components to be reported include not only financial instruments that are admitted to trading or trading on a trading venue (reportable instruments under article 26(2)(a)), but also instruments that     are not admitted to trading or traded on a trading venue but are financial instruments that are reportable under article 26(2)(b) or (c), for example a future on an equity where the future is not admitted to trading or traded on a trading venue but the underlying equity is admitted to trading on a trading venue. Even where only one of the components is a reportable financial instrument, field 40 of RTS 22 should be populated with a complex trade ID since this indicates that the transaction in the reportable financial instrument is part of a complex trade and explains why the price reported may deviate from the price of the transaction in the reportable financial instrument itself.
(e) No. Just because an instrument or a complex trade (e.g. a strategy) has an ISIN it does not mean that it is a reportable financial instrument. Some instruments and complex trades may have ISINs but are not financial instruments under MIFID II. For example commodities such as gold may have an ISIN but are not financial instruments under Section C of Annex I of MIFID II. Other instruments may be financial instruments but not a reportable instrument under article 26(2). For example an interest rate derivative is a financial instrument under Section C of Annex I of MiFID II but unless the instrument is admitted to trading or traded on a trading venue it is not a reportable financial instrument under 26(2) regardless of whether it has an ISIN.  
(f) Rather than the instrument reference data for the complex trade (e.g. strategy or other instrument where a transaction in the instrument is a complex trade) being reported, the instrument reference data for the components that make up the strategy should be reported under article 27 of MiFIR and article 4 of MAR. This is because the strategy is not a financial instrument itself. This is the case even if the strategy happens to have an ISIN.  Each component should be reported as a separate record and in the same way as if it was not part of a strategy - all of the instrument reference data fields should be populated with the instrument reference data for the component. 
(g) No, only the components that are admitted to trading or traded on a trading venue should be reported in the instrument reference data.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*