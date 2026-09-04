---
surnom_texte_lvl1: SECR
---

# ESMA_QA_1430

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1430

---

## Regulatory Context
Regulation : SECR

**Linked Articles:** [[2017R2402_EN.4]]

**Level 1 Regulation:** Securitisation Regulation (EU) 2017/2402

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Securitisation Disclosure Templates

**Subject Matter:** Annexes 12 and 13: Investor Reports - Cashflow information section


---

## Question

**Submission Date:** 15 November 2019

(a) How should the cashflow information section be completed—is this for every item in  the main funding waterfall or only those included by the issuer in the Investor Report? What waterfall is referred to, in the event that there are multiple waterfalls? 
(b) Can you provide clarifications for handling situations where there are several waterfalls taking place in the securitisation including master trust securitisations? What if there are several Securitisation Special Purpose Entities in the securitisation that are disbursing funds?

---

## ESMA Answer

**Answer Date:** 15-11-2019

[ESMA 33-128-563 Securitisation Q&A, Q&A 5.14.8]
(a) As set out in Article 4(1) of the RTS on disclosure, the item corresponding to each category of receipt or disbursement of funds in the securitisation, according to the applicable priority of payments as at the data cut-off date, must be reported. This is regardless of whether the item is reported or not in the issuer’s own (i.e. different from Annex 12) Investor Report.
Some further clarifications include:

Every item of both source and application of funds must be included in this section even if the amount of the items is equal to zero.
These items must be listed in the same order as specified in the transaction documentation.
Every Cash flow item (IVSF4), Amount Paid During Period (IVSF5) and Available Funds Post (IVSF6) must be reported in different cells. Therefore, all the cash flow items (IVSF4), the amounts paid during period (IVSF5) and all the available funds post (IVSF6) do not have to be populated in one cell but instead one cell must be used for the individual item, one cell for the corresponding payment during, and lastly one cell for the corresponding available funds post. With regards to the ‘content of report’ in the cash-flow information section there is an example mentioning line A and line B in fields IVSF5 and IVSF6. Thus, each line (A and B in the above example) is expected to have a separate unique identifier and it is not allowed to list multiple amounts / entries in one field.
The Cash inflow item must be populated with positive values and the funds paid out in negative values in the field Amount Paid During Period (IVSF5).
The field Unique Identifier (IVSF1) must be repeated as many times as items you are reporting in this section.

Please find below an example:




IVSF1


IVSF2


IVSF4


IVSF5


IVSF6




Unique Identifier


Original Cashflow Item Identifier


Cashflow Item


Amount Paid During Period


Available Funds Post




Equal to IVSS1


Unique cashflow item identifier


Revenue receipts on the loans


10,602,879.00


10,602,879.00




Equal to IVSS1


Unique cashflow item identifier


Interest payable on the the mortgages trustee
			GIC account


166,190.00


10,769,069.00




Equal to IVSS1


Unique cashflow item identifier


Contributions by the seller to the mortgages trustee to fund any non-cash re-draw


0.00


10,769,069.00




Equal to IVSS1


Unique cashflow item identifier


Offset benefit contribution amount


384,379.00


11,153,448.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to third parties


0.00


11,153,448.00




Equal to IVSS1


Unique cashflow item identifier


Amounts distributed on earevioususe distribution date


0.00


11,153,448.00




Equal to IVSS1


Unique cashflow item identifier


Third parties due amount


0.00


11,153,448.00




Equal to IVSS1


Unique cashflow item identifier


Servicer and cash manager due amount


-316,729.00


10,836,719.00




Equal to IVSS1


Unique cashflow item identifier


Allocation and payment of available revenue receipts to the seller and funding


-10,836,719.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Allocation and payment to the seller of the remainder.


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


All principal receipts received


92,526,213.00


92,526,213.00




Equal to IVSS1


Unique cashflow item identifier


Payment to the Seller of initial purchase price or special distribution


-52,051,781.00


40,474,432.00




Equal to IVSS1


Unique cashflow item identifier


Payment to Funding of special distribution


0.00


40,474,432.00




Equal to IVSS1


Unique cashflow item identifier


Payment to Funding of the lesser of any repayment requirement and its share of the mortgages trustee available principal receipts.


-40,474,432.00


0.00




Equal to IVSS1


Unique cashflow item identifier


To the extent not paid in the previous point, payment to Funding of an amount up to the amount required


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Remainder Seller amount


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Revenue receipts


8,915,522.00


8,915,522.00




Equal to IVSS1


Unique cashflow item identifier


Interest received on the Funding bank accounts


0.00


8,915,522.00




Equal to IVSS1


Unique cashflow item identifier


Amounts received from basis rate swap agreement


8,624,331.00


17,539,853.00




Equal to IVSS1


Unique cashflow item identifier


Funding principal ledger or Funding cash accumulation ledger


0.00


17,539,853.00




Equal to IVSS1


Unique cashflow item identifier


Reserve fund


54,812,076.00


72,351,929.00




Equal to IVSS1


Unique cashflow item identifier


Liquidity reserve fund


50,957,496.00


123,309,425.00




Equal to IVSS1


Unique cashflow item identifier


Security trustee


0.00


123,309,425.00




Equal to IVSS1


Unique cashflow item identifier


Issu‘r 's obligations


-32,397.00


123,277,028.00




Equal to IVSS1


Unique cashflow item identifier


Third party creditors


-450.00


123,276,578.00




Equal to IVSS1


Unique cashflow item identifier


Cash manager


-8,333.00


123,268,245.00




Equal to IVSS1


Unique cashflow item identifier


Account banks and servicer provider


0.00


123,268,245.00




Equal to IVSS1


Unique cashflow item identifier


Basis rate swap provider


-8,608,457.00


114,659,788.00




Equal to IVSS1


Unique cashflow item identifier


Interest AAA loan tranches


-3,879,367.00


110,780,421.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the AAA principal deficiency sub-ledger


0.00


110,780,421.00




Equal to IVSS1


Unique cashflow item identifier


Interest AA loan tranches


0.00


110,780,421.00




Equal to IVSS1


Unique cashflow item identifier


Funding liquidity reserve required


-50,957,496.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the AA principal deficiency sub-ledger


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Interest A loan tranches


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the A principal deficiency sub-ledger


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Interest BBB loan tranches


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the BBB principal deficiency sub-ledger


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Interest BB loan tranches


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the BB principal deficiency sub-ledger


0.00


59,822,925.00




Equal to IVSS1


Unique cashflow item identifier


Funding reserve required amount


-54,812,075.00


5,010,850.00




Equal to IVSS1


Unique cashflow item identifier


Credit to the Z principal deficiency sub-ledger


0.00


5,010,850.00




Equal to IVSS1


Unique cashflow item identifier


Profit retain of Issuer


-2,000.00


5,008,850.00




Equal to IVSS1


Unique cashflow item identifier


Interest Z loan tranches


-1,046,778.00


3,962,072.00




Equal to IVSS1


Unique cashflow item identifier


Start-up loan amount due to issuer


-11,922.00


3,950,150.00




Equal to IVSS1


Unique cashflow item identifier


Interest amount due to subordinated loan


-1,496.00


3,948,654.00




Equal to IVSS1


Unique cashflow item identifier


Swap termination payment


0.00


3,948,654.00




Equal to IVSS1


Unique cashflow item identifier


Issuer swap excluded termination amount; and the Funding basis rate swap provider


0.00


3,948,654.00




Equal to IVSS1


Unique cashflow item identifier


Principal subordinated loan


-1,108,592.00


2,840,062.00




Equal to IVSS1


Unique cashflow item identifier


Mortgage Trustee Deferred contribution


-2,840,062.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Interest, fees and other received from Funding


4,976,316.00


4,976,316.00




Equal to IVSS1


Unique cashflow item identifier


Interest received on the Funding bank accounts


0.00


4,976,316.00




Equal to IVSS1


Unique cashflow item identifier


Reserve fund


0.00


4,976,316.00




Equal to IVSS1


Unique cashflow item identifier


Other net income


0.00


4,976,316.00




Equal to IVSS1


Unique cashflow item identifier


Issuer Note and Security Trustee


-100.00


4,976,216.00




Equal to IVSS1


Unique cashflow item identifier


Agent and paying bank fees


-417.00


4,975,799.00




Equal to IVSS1


Unique cashflow item identifier


Third party creditors


-27,950.00


4,947,849.00




Equal to IVSS1


Unique cashflow item identifier


Cash management and corporate Service fees


-8,783.00


4,939,066.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the A notes and A note swap provider


-3,879,366.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the B notes and B note swap provider


0.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the C notes and C note swap provider


0.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the D notes and D note swap provider


0.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the E notes and E note swap provider


0.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Issuer Reserve Fund


0.00


1,059,700.00




Equal to IVSS1


Unique cashflow item identifier


Issuer profit amount


-1,000.00


1,058,700.00




Equal to IVSS1


Unique cashflow item identifier


Amounts due to the Z notes and Z note swap provider


-1,046,778.00


11,922.00




Equal to IVSS1


Unique cashflow item identifier


Interest and principal start-up loan due


-11,922.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Issuer bank account charges


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Issuer swap excluded termination amount


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Principal Start-up loan 


0.00


0.00




Equal to IVSS1


Unique cashflow item identifier


Funding intercompany loan surplus amount


0.00


0.00




 
(b)        Securitisations (such as certain Master Trust structures) may contain several waterfalls. In such circumstances, each waterfall must be reported one after the other, without any separations between each waterfall.
In cases when one of the waterfalls, e.g. the Mortgage Trustee waterfall, runs monthly while another waterfall (e.g. Funding and/or Issuer waterfalls) runs on a quarterly basis, then the reporting should be aligned with the frequency of the information being reported.
In other words, if the securitisation is submitting data on underlying exposures, investor reports, and significant events / inside information on a monthly basis, then the reporting of the cashflow information section should be set at a monthly basis as well. This implies that, for two out of every three months in the quarter, the monthly waterfall is completed and zero amounts are provided for the quarterly-frequency waterfalls (but the cashflow items for those two waterfalls, i.e. field IVSF4, is still completed).
If the securitisation is submitting data on underlying exposures, investor reports, and significant events / inside information on a quarterly basis, then the reporting of the cashflow information section should be set at a quarterly basis as well. This implies that, for the monthly waterfall (e.g. the Mortgage Trustee waterfall in the above example), the amount generated for that waterfall should be aggregated for three months, while the information on the quarterly waterfalls (e.g. the Funding and/or Issuer waterfalls in the above example) is reported for that quarter.
If there are several Securitisation Special Purpose Entities, all allocations that take place must be reported. The purpose is to allow any entity to observe the flows of funds from all sources throughout the securitisation. Therefore, taking as an example a securitisation operating according to the diagramme below, the cashflow information section must be completed for cash flows that are associated with SSPE 1 and/or SSPE 2.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*