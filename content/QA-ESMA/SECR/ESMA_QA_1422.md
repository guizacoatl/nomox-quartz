---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1422

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1422

---

## Regulatory Context
Regulation : SECR

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Annexes 12 and 13: Investor Reports - What type of tests/triggers need to be reported?


---

## Question

**Submission Date:** 28 May 2020

(a) Which events fall within the scope of tests, events, and triggers that should be reported, compared to the ones mentioned in prospectuses and/or transaction documentation? How should this be understood for ABCP securitisations?

(b) Should programme-level triggers be given the same unique identifier in IVAR2 and IVAR3 when completed for each ABCP transactions within that programme?

---

## ESMA Answer

**Answer Date:** 28-05-2020

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.14.1]
(a) As set out in Article 4(2)(c) of the RTS on disclosure, information on tests/events/triggers shall be made available “for each test/event/trigger set out in the securitisation transaction documentation that triggers changes in the priority of payments or the replacement of any counterparties’.
For ABCP securitisations, tests/events/triggers that are in either the ABCP programme or the ABCP transaction must be reported, so long as the consequence of the specific test/event/trigger meets the condition of Article 4(2)(c) of the RTS on disclosure (i.e. as per the above paragraph). In practice, this implies that all transaction-level tests/events/triggers meeting these conditions must be reported. In addition, programme-level tests/events/triggers meeting these conditions must be reported at the transaction level (i.e. field IVAR1 must reflect the transaction identifier as per field IVAN2). This implies that programme-level tests/events/triggers will be repeated for multiple transactions. 
This includes any counterparty replacement triggers that can lead to the termination of a counterparty, i.e. both credit ratings-related triggers as well as any other triggers with the same consequence of replacement.
This also includes any trigger whose breach leads to each class of tranche/bond/note becoming, immediately due and payable (at its outstanding principal amount with/without accrued interest). Common examples of such triggers are:

a default of the issuer/SSPE
the issuer/SSPE files a petition for a suspension of payments or for bankruptcy or is declared bankrupt or becomes subject to any other regulation having a similar effect
any order made by a competent court or other authority or a resolution passed for the dissolution or winding-up of the issuer/SSPE or for the appointment of a liquidator or receiver of the issuer/SSPE in respect of all or substantially all of its assets
a failure by the issuer, SSPE, or another entity involved in the securitisation to perform any of its obligations under the transaction documentation

This does not include triggers regarding underlying exposure-related counterparties, for example any replacement triggers relating to counterparties providing swaps directly on one or multiple underlying exposures.
(b) Yes. Since programme-level tests/events/triggers must be reported several times, once for each transaction within the programme, they should carry the same unique identifier in IVAR2 and IVAR3 each time it is reported.
While the RTS on disclosure does not set requirements to the development of the identifier of a test/event/trigger, ESMA recommends the following formula:

For a programme-level test/event/trigger: Unique Identifier - ABCP Programme (IVAL1/IVAS1/IVAN1/SEAS1/SEAR1/SEAT1) + the number 001 or, where there is more than one programme-level test/event/trigger, a three-digit sequential number.  
For a transaction-level test/event/trigger: Unique Identifier - ABCP Transaction (IVAR1) + the number 001 or, where there is more than one transaction-level test/event/trigger, a three-digit sequential number.

For information about the unique identifier of an ABCP Transaction and an ABCP Programme see Q&As 1262-1265.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*