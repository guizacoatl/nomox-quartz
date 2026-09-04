---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1506

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1506

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.27]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Reporting of Emission Allowances


---

## Question

**Submission Date:** 11 July 2022

How should Trading Venues and SIs report emission allowances (i.e., European Union Allowances (EUAs) and European Union Aviation Allowances (EUAAs)) auctioned for the phase 4 of the EU Emission Trading System (ETS)  (hereafter “phase 4 emission allowances” or derivatives thereof under MiFIR Article 27 and  RTS 23?

---

## ESMA Answer

**Answer Date:** 11-07-2022

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 19.1]
 
The ISIN displayed on European Commission’s website to phase 4 emission allowances should be reported in FIRDS under RTS 23. Field 1 – Instrument identification code should be reported with ISIN EU000A2QMW50 for EU allowances and EU000A2QMW68 for EU aviation allowances. In case of derivatives having as underlying a phase 4 emission allowance, Field 26 – Underlying instrument code should be populated with EU000A2QMW50 for EU allowances and EU000A2QMW68 for EU aviation allowances. The table below clarifies the different reporting scenarios based on the type of emission allowance. The fields displayed in the tables are all RTS 23 fields that are applicable to emission allowances or derivatives thereof in the FIRDS CFI validation rules.
Example 1 – Reporting of phase 4 EUA (spot)




RTS 23 Field number


RTS 23 Field name


Value


Content to be reported[1]




1


Instrument identification code


EU000A2QMW50


ISIN displayed on the European Commission’s website. 




2


Instrument full name


EUA Allowance Units Phase 4


 




3


Instrument classification


ITNXXX


 




4


Commodities or emission allowance derivative indicator


No


 




5


Issuer or operator of the trading venue identifier


LEI


LEI of the regulated market appointed as an auction platform pursuant to COMMISSION REGULATION (EU) No 1031/2010’




6


Trading Venue


Segment {MIC} of Trading Venue


 




8


Request for admission to trading by issuer


No


 




11


Date of admission to trading or date of first trade


10/04/2022


 




12


Termination date


10/04/2024


 




13


Notional currency 1


EUR


 




 
Example 2 – Reporting of a future on phase 4 emission allowance




RTS 23 Field number


RTS 23 Field name


Value


Content to be reported[2]




1


Instrument identification code


{ISIN} of financial instrument


 




2


Instrument full name


XXX FUTURE ON EEA


 




3


Instrument classification


 FCNPSX


 




4


Commodities or emission allowance derivative indicator


Yes


 




5


Issuer or operator of the trading venue identifier


{LEI} of issuer


 




6


Trading Venue


Segment {MIC} of Trading Venue


 




8


Request for admission to trading by issuer


No


 




11


Date of admission to trading or date of first trade


10/04/2022


 




12


Termination date


10/04/2023


 




13


Notional currency 1


EUR


 




24


Expiry date


10/04/2023


 




25


Price Multiplier


1000


Lot size /contract size , e.g. for exchange traded derivatives, 1 lot corresponds to 1,000 allowances or 1,000 tCO2. EUAs




26


Underlying Instrument code


EU000A2QMW50


ISIN displayed on the European Commission’s website. 




28


Underlying index name


 


Optional




29


Term of the underlying index


 


Optional




34


Delivery type


‘PHYS’


 




35


Base product


ENVR


 




36


Sub product


EMIS


 




37


Further sub product


EUAE


 




38


Transaction type


OTHR


 




39


Final price type


EXOF


 




 
Example 3 – Reporting of option on a future on phase 4 emission allowance




RTS 23 Field number


RTS 23 Field name


Value


Content to be reported[3]




1


Instrument identification code


{ISIN} of financial instrument


 




2


Instrument full name


XXX OPTION ON FUTURE - EEA


 




3


Instrument classification


 OPEFPS


 




4


Commodities or emission allowance derivative indicator


Yes


 




5


Issuer or operator of the trading venue identifier


{LEI} of issuer


 




6


Trading Venue


Segment {MIC} of Trading Venue


 




8


Request for admission to trading by issuer


No


 




11


Date of admission to trading or date of first trade


10/04/2022


 




12


Termination date


10/04/2023


 




13


Notional currency 1


EUR


 




24


Expiry date


10/04/2023


 




25


Price Multiplier


1000


Lot size /contract size , e.g. for exchange traded derivatives, 1 lot corresponds to 1,000 allowances or 1,000 tCO2. EUAs




26


Underlying Instrument code


{ISIN} of the underlying future contract


 
ISIN of the underlying future




28


Underlying index name


 


Optional




29


Term of the underlying index


 


Optional




30


Option type


‘PUTO’


 




31


Strike price


90.00


Price at which the underlying is purchased or sold when the option is exercised




31


Strike price currency


‘EUR’


 




33


Option exercise style


‘EURO’


 




34


Delivery type


‘PHYS’


 




35


Base product


ENVR


 




36


Sub product


EMIS


 




37


Further sub product


EUAE


 




38


Transaction type


OTHR


 




39


Final price type


EXOF


 




 
 


[1] In case of further clarification of the description of the fields are needed these are provided in this column


[2] In case of further clarification of the description of the fields are needed these are provided in this column


[3] In case of further clarification of the description of the fields are needed these are provided in this column

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*