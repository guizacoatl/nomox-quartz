---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1696

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1696

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.27]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Interest Rate Swaps reporting


---

## Question

**Submission Date:** 26 September 2018

What is the relationship between the interest rate term of the interest rate swap contract (tenor) field 41 (of Table 3 of Commission Delegated Regulation 2017/585 ) and expiry date and the ISIN?

---

## ESMA Answer

**Answer Date:** 26-09-2018

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 16.1]
If the expiry date and the interest rate term of the contract (tenor) are the same and the other fields in the reference data are the same then the instrument will have the same ISIN. So, for example, a forward starting contract that has the same expiry date and tenor and the same other characteristics as a contract starting immediately will have the same ISIN (see Examples 1-3 in the table below) and if the tenor and/or expiry of two instruments that otherwise share the same characteristics differ then they will have a different ISIN (see Examples 3-7 in the table below).
Examples




Scenario


Trading  date


Amount of forward start/effective from date


Field 41 (IR term of contract)[1]


Expiry date 


ISIN




1


28/02/2018


2 years (28/02/2020)


8 YEARS


28/02/2028 (28/02/2018 + 2 Y + 8Y)


EZ0000000001




2


28/02/2019


1 year (28/02/2020)


8 YEARS


28/02/2028 (28/02/2019+1Y+8Y)


EZ0000000001




3


28/02/2020


None (28/02/2020)


8 YEARS


28/02/2028 (28/02/2020+8Y)


EZ0000000001




4


26/02/2018


2 years (26/02/2020)


8 YEARS


26/02/2028 (26/02/2018+2Y+8Y)


EZ0000000002




5


28/02/2018


5 years (28/02/2023)


5 YEARS


28/02/2028 (28/02/2018+5Y+5Y)


EZ0000000003




6


28/02/2018


6 years (28/02/2024)


4 YEARS


28/02/2028 (28/02/2018+6Y+4Y)


EZ0000000004




7


28/02/2020


2 years (28/02/2022)


8 YEARS


28/02/2030 (28/02/2018+ 2Y+8Y)


EZ0000000005




 
The instrument reference data would be as follows:




Rules for population of fields


Field no.


Field Name




 


1


Instrument identification code




 


3


Instrument classification




The currency of leg 1[2]


13


Notional currency 1




 


24


Expiry date




 


25


Price multiplier




the floating rate in case of a fixed/floating IRS or the floating rate of leg 1[3] in a floating/floating IRS


28


Underlying index name




29


Term of the underlying index




The value P - Physical is to be used when an interest rate swap is Deliverable where Deliverable means that the settlement, i.e. payment, currency amounts are paid in the respective reference currency for each leg of the swap for which the payments are being made.
The value C - Cash is to be used when an interest rate swap is Non-Deliverable where Non-Deliverable means that the settlement, i.e. payment, currency amounts are paid in a currency other than the respective reference currency for each leg of the swap for which the payments are being made.


34


Delivery type




This field should replicate field 28


40


Reference rate




Field populated as the original interest rate term/tenor of the contract[4][5]


41


IR Term of contract




 


42


Notional currency 2




 


43[6]


Fixed rate of leg 1




 


44[7]


Fixed rate of leg 2




The information of the floating rate of leg 2 (the other leg) in floating/floating IRS


45


Floating rate of leg 2




46


IR Term of contract of leg 2




 
 


[1] When calculating the tenor, reporting parties should use the effective date as the basis (i.e. column 3).


[2] Leg 1 is determined according to the criteria set out in Examples 1-2 in this Q&A


[3] Leg 1 is determined according to the criteria set out in Examples 1-2 in this Q&A


[4] This should remain unchanged in FIRDS throughout the life of the instrument – trading venues and SIs should not amend the instrument reference data to show the remaining interest rate term/tenor of the interest rate swap.


[5] The population of term for field 41 has a limitation in the format since only integers may be used. Therefore the following approach is to be taken:
1) If the contract duration fits a standard term, the standard term should be populated in field 41. This approach requires starting with the largest term unit and working downwards:
- If the duration is a whole number of years, that value should be populated in field 41.
- If the duration is a whole number of months (based on actual dates not notional 30-day month), that value should be populated in field 41.
- If the duration is a whole number of weeks, that value should be populated in field 41.
- If none of the above applies, the correct number of days should be populated in field 41.
2) When it is not possible to populate field 41 (term of the contract) with the correct number of days due to the restriction of a maximum of 999 days, an investment firm should calculate the duration of the contract in the next major unit (i.e. weeks) using a standard week of 7 days. If this still exceeds the maximum number of weeks to populate (i.e. 999 weeks) then calculate in the next major unit (i.e. months) using the number of days in the actual month referred in the term/tenor.   The remainder can then be calculated based on a standard 30 day month. E.g. if the remainder is >=15 days, then round up and if the remainder is

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*