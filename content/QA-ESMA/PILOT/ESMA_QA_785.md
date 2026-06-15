---
surnom_texte_lvl1: PILOT
---

# ESMA_QA_785

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/785

---

## Regulatory Context
Regulation : PILOT

**Level 1 Regulation:** Regulation (EU) 2022/858 - DLT Pilot Regime Regulation (DLTR)

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** DLT Pilot Regime

**Subject Matter:** Transaction reporting


---

## Question

**Submission Date:** 16 December 2022

According to Article 26(5) of MiFIR, TVs shall report on behalf of firms that are not subject to the transaction reporting regime. In a DLT MTF or TSS operating under the DLT Pilot regime, the DLT MTF or DLT TSS may admit natural persons as members executing transactions. How should DLT MTFs or DLT TSS report on behalf of natural persons that are not subject to Article 26 of MiFIR?

---

## ESMA Answer

**Answer Date:** 16-12-2022

[DLT Transaction reporting Q&A 6]
In case the reporting exemption[1] is granted by the NCA to the DLT MTF/TSS in the context of the DLTR, NCAs can request the DLT MTF/TSS to provide the access to all relevant data concerning natural persons executing transactions.
NCAs should request as a compensatory measure that DLT MTFs/TSSs provide the relevant regulatory information through an adapted version of RTS 22. The adapted RTS 22 template would require DLT MTFs/TSSs to populate its LEI in Field 4 “Executing entity identification code” and, given that natural persons are expected to always trade on own account on these platforms, the template would require the National ID[2] of the natural person executing the transaction to be populated in the respective Field 7 “Buyer identification code” and/or Field 16 “Seller identification code” as described in the tables below[3].





#


Field


Values 




Example 1




4


Executing entity identification code


{LEI} of the DLT MTF/TSS




5


Investment Firm covered by Directive 2014/65/EU


TRUE




6


Submitting entity identification code


{LEI} of the DLT MTF/TSS




7


Buyer identification code


{National_ID} of the natural person




9


Buyer – first name


{ALPHANUM-140}




10


Buyer – surname


{ALPHANUM-140}




11


Buyer – date of birth


{DATEFORMAT}




16


Seller identification code


{MIC} of DLT MTF/TSS




29


Trading capacity


 ’AOTC’




59


Execution within the firm


 ‘NORE’




Example 2




4


Executing entity identification code


{LEI} of the DLT MTF




5


Investment Firm covered by Directive 2014/65/EU


TRUE




6


Submitting entity identification code


{LEI} of the DLT MTF/TSS




7


Buyer identification code


{MIC} of DLT MTF




16


Seller identification code


{National ID} of the natural person




18


Seller – first name


{ALPHANUM-140}




19


Seller – surname


{ALPHANUM-140}




20


Seller – date of birth


{DATEFORMAT}




29


Trading capacity


’AOTC’




59


Execution within the firm


‘NORE’




 


[1] ESMA Report on DLT Pilot regime. Paras 141: ESMA considers that while private individuals will not be subject to transaction reporting, a legal gap remains due to the fact that MiFIR Article 26(5) imposes an obligation on Trading Venues to report transactions on behalf of “firms” and not “natural persons”. A solution to address this gap would be for NCAs to grant the reporting exemption and request DLT MTFs to give access to all relevant data concerning natural persons executing transactions as a compensatory measure in exchange for the exemption.


[2] The concept of National ID in the transaction reporting regime is defined by RTS 22 Article 6. Annex II in RTS 22 provides the national client identifiers for natural persons to be used in transaction reports.


[3] ESMA Report on DLT Pilot regime. Paras 161: “a more robust solution to address this information gap that would not imply system changes affecting the whole market would be for NCAs to grant the reporting exemption and request DLT MTFs to give access to an adapted version of the RTS 22 template which would allow for the LEI of the DLT MTF to be included in the executing entity field while the IDs of natural persons would be populated in the respective buyer/seller fields as a compensatory measure in exchange for the reporting exemption.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*