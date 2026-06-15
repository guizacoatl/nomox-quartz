---
surnom_texte_lvl1: CSDR
---

# ESMA_QA_1219

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1219

---

## Regulatory Context
Regulation : CSDR

**Level 1 Regulation:** Central Securities Depositories Regulation (CSDR) Regulation (EU) No 909/2014- PTR- CSDR

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Settlement discipline - Other topics

**Subject Matter:** Settlement instructions sent by CCPs


---

## Question

**Submission Date:** 16 December 2021

[ESMA70-156-4448 CSD Settlement Q&A 6]

(a) Where a netted settlement instruction sent by a CCP to a CSD stems from the netting of transactions having different trade dates, how should the settlement instruction field indicating the trade date be populated?  

(b) Where a netted settlement instruction sent by a CCP to a CSD stems from the netting of different types of transactions (belonging to more than one of the categories listed in points (a) to (d) of Article 5(4) of the RTS on Settlement Discipline), how should the settlement instruction field indicating the transaction type be populated?

(c) Under CSDR, is there a requirement for settlement instructions to include a field indicating the place of trading of the respective securities transaction?

(d) How should a CCP sending a settlement instruction stemming from the netting of transactions executed in various trading places populate a field with the ‘place of trading’?

(e) Article 13(1) of the RTS on Settlement Discipline provides that “CSDs shall establish a system that enables them to monitor the number and value of settlement fails” and that such “system shall, for each settlement fail, collect information” relating to, inter alia, “(e) the place of trading and of clearing of the affected financial instruments, where applicable”. What is the responsibility of CSDs in relation to this requirement, specifically as regards the “place of trading”?

(f) Are all settlement fails involving CCPs captured by the exemption provided for in Article 7(11) of CSDR?

---

## ESMA Answer

**Answer Date:** 16-12-2021

(a) Subject to the CCP being able to retrieve the original trade date for each constituent transaction, the relevant field could be populated with a date chosen by the CCP, such as the ‘ISD’, ‘ISD - 1’, the date in which the instructions are sent to the CSD, or the date of the first trade.
(b) Subject to the CCP being able to retrieve the original transaction type for each constituent transaction, the relevant field should identify the transaction type as “other transactions” as per point (e) of Article 5(4) of the RTS on Settlement Discipline and the ISO transaction type code “NETT” or equivalent code could be used to populate such a field, as provided by the CSD.
(c) No, there is no such obligation in CSDR nor in the RTS on Settlement Discipline. A CSD could however provide such a field for it to be populated, in particular to identify transactions traded on SME growth markets for the purpose of benefitting from the penalty rate for financial instruments traded on SME growth markets (as set out in the Annex to the Commission Delegated Regulation (EU) 2017/389) and of the extension period mentioned in the second paragraph of Article 7(3) of CSDR.  
(d) Subject to the CCP being able to retrieve the original place of trading for each constituent transaction, a CCP’s netted settlement instruction ‘place of trading’ field could be populated with the ‘place of trading’ chosen by the CCP. Please note that, in order to benefit from the penalty rate applicable to financial instruments traded on SME growth markets (as set out in the Annex to the Commission Delegated Regulation (EU) 2017/389), transactions traded on SME growth markets should not be netted with transactions traded in other trading places (see also Settlement Discipline Question 3(d)).
(e) CSDs’ responsibility in relation to Article 13(1)(e) of the RTS on Settlement Discipline, specifically as regards the “place of trading”, is to collect information to the extent that such information is included in the settlement instruction (i.e. for those settlement instructions which do not contain the relevant information, specifically the “place of trading”, such information cannot be collected by CSDs).
(f) Answer provided by the European Commission in accordance with Article 16b(5) of the ESMA Regulation
No. The definition of a CCP in Article 2(1)(16) of CSDR refers to the definition in Article 2(1) of EMIR, i.e. “a legal person that interposes itself between the counterparties to the contracts traded on one or more financial markets, becoming the buyer to every seller and the seller to every buyer”. 
Therefore, only the settlement fails relating to transactions for which a CCP interposes itself between the counterparties (i.e. transactions cleared by the concerned CCP) should be captured by the exemption under Article 7(11) of CSDR, whereas settlement fails relating to transactions entered into by a CCP for which it does not interpose itself between the counterparties (e.g. its own treasury activity, collateral transactions or transactions entered into to liquidate a defaulting clearing member’s positions) should not be covered by Article 7(11) of CSDR.
Disclaimer in relation to the answers provided by the European Commission in accordance with Article 16b(5) of the ESMA Regulation: these answers clarify provisions already contained in the applicable legislation. They do not extend in any way the rights and obligations deriving from such legislation nor do they introduce any additional requirements for the concerned operators and competent authorities. The answers are merely intended to assist natural or legal persons, including competent authorities and Union institutions and bodies in clarifying the application or implementation of the relevant legal provisions. Only the Court of Justice of the European Union is competent to authoritatively interpret Union law. The views expressed in the internal Commission Decision cannot prejudge the position that the European Commission might take before the Union and national courts.

      

    English

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*