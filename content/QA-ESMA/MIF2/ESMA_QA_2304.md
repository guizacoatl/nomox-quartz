---
surnom_texte_lvl1: MIF2
---

# ESMA_QA_2304

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/2304

---

## Regulatory Context
Regulation : MIF2

**Level 1 Regulation:** Markets in Financial Instruments Directive II (MiFID II) Directive 2014/65/EU- Secondary Markets

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** Position limits

**Subject Matter:** Q&A on lot sizes and position limits


---

## Question

**Submission Date:** 11 October 2024

In the gas derivatives market, lot sizes defined in the contract specification by trading venues do not represent a standard quantity of the underlying across all market areas, for the same maturity. How should the open interest in lots be calculated for gas derivatives, for the application of position limits in Article 57(1) of MiFID II?

---

## ESMA Answer

**Answer Date:** 11-10-2024

In most European gas market areas, the unit of trading is MWh/h. However, in some market areas the market trading convention is different. For example, the unit of trading is MWh/day in French PEG and Spanish PVB and Ktherms/day in UK NBP. Those differences are reflected in the unit of trading of associated derivatives contracts and their lot sizes: one lot of PEG or PVB gas derivative contract is 24 times smaller than one lot of the TTF gas derivative contact, for the same maturity. Taking the example of a monthly contract, one lot of TTF represents 720MWh while one lot of PEG and PVB represent 30MWh.
Gas derivatives are traded on EU trading venues and therefore subject to positions limits where the open interest equals or exceeds 300,000 lots over a one-year period, in accordance with Article 57(1) of MiFID II.
Due to the differences in unit of trading explained above, the open interest of contracts with smaller lot sizes may exceed the 300,000 lot threshold even though, when converted to MWh, their open interest is much smaller compared to contracts with larger lot sizes. In other words, those contracts may exceed the threshold due to historical market conventions rather than actual liquidity. This goes against the original intention of the position limit regime, which aims to set position limits only on contracts with significant liquidity. 
Therefore, it is necessary to ensure a consistent calculation of open interest in gas derivatives contracts to assess the 300 000 lot threshold and set position limits for critical or significant commodity derivatives under Articles 11(1) and 13 of RTS 21a. For such position limit assessment, the open interest should be calculated “equivalent lot”, where one equivalent lot of all gas derivative contracts represent the same quantity of MWh as the benchmark TTF derivative contract for the same maturity. 
The conversion from lots to equivalent lots, based on contracts existing in August 2024, is provided below for illustration purposes:




Hub


Unit of trading


Lot size set by venues


Conversion of lot size in MWh


Equivalent lot for the application of position limits




THE, PSV, TTF, CEGH VTP, ETF, ZTP, CZ VTP, MGP


MWh/h


1 lot = 1MW


Daily contract: 
1 lot = 1MW*24 hours = 24MWh
Monthly contract:
1 lot = 1MW*24hours*30days = 720MWh


1 equivalent lot = 1 lot (no conversion)
 
[Monthly contract] 
1 equivalent lot = 720MWh




PEG, PVB


MWh/d


1 lot = 


Daily contract: 
1 lot =   * 24 hours = 1MWh
Monthly contract:
1 lot =   *30days = 30MWh


1 equivalent lot =  = 24 lots
 
[Monthly contract] 
1 equivalent lot = 24 lots = 24 * 30MWh = 720MWh




NBP


Ktherms/d


1 lot =1,000therms/d
1 therm ~ 29.31KWh


Daily contract: 
1 lot = 1000terms/d*1day~29.31MWh
Monthly contract:
1 lot =  1000terms/d*30days ~ 879.21MWh


1 equivalent lot =  ~ 0.82 lot
 
[Monthly contract] 
1 equivalent lot = 0.82 lots = 0.82 * 879.21MWh ~720MWh




LNG JKM


MMBtu


1 lot = 10,000MMBtu


Monthly contract:
1 lot = 10,000MMBtu = 2,930.710701722MWh


1 equivalent lot =  ~ 0.25 lots
 
[Monthly contract] 
1 equivalent lot = 0.25 lots = 0.25 * 2,930MWh ~ 720MWh

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*