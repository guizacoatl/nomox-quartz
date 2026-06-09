---
surnom_texte_lvl1: EUROPEAN MARKET INFRASTRUCTURE REGULATION (EMIR) REGULATION (EU) NO 648/2012- MDP
---

# ESMA_QA_2202

> **Status:** ✅ Answer Published

---

## Regulatory Context

**Level 1 Regulation:** European Market Infrastructure Regulation (EMIR) Regulation (EU) No 648/2012- MDP

**Topic:** EMIR Reporting

**Subject Matter:** Reporting of accumulator contracts


---

## Question

**Submission Date:** 27-05-2024

(a) For the purpose of reporting under EMIR REFIT, how should OTC accumulator
contracts – i.e., derivative contracts in which the buyer enters into an agreement to
 predefined price, per day - over a specified ‘accumulation’ period, be classified?

(b) How should these contracts be reported under EMIR REFIT?

---

## ESMA Answer

**Answer Date:** 24-05-2024

(a) Under EMIR REFIT, accumulators shall be classified as either forwards or
options, depending on the presence of option features within these contracts. An
accumulator contract without any embedded option features should be reported as
a forward (‘forward accumulator’), whereas accumulator contracts embedding one
or more option features, should be reported as options accordingly.

(b) (i) Forward accumulators should be reported equivalently as forward contracts,
as illustrated by the below example.

In the event that a knockout event is triggered, the counterparty should regard it as
an early termination of the derivative. This scenario should be reported with Action
Type ‘Terminate’ and Event Type ‘Exercise’.

Example 1:
 

Tenor: 12 months

Shares per day: 5,000

Accumulation days: Assuming 20 trading days per month (total accumulation days =
240)

Settlement date: Monthly

Forward Price: EUR 10*

Maximum Notional Amount: EUR 12,000,000**

Price of Underlying Share: Month 1 - EUR 11 / Month 2 - EUR 9.50

Report at inception

 Reporting of accumulator contracts

 Table Item Field Example

 2 9 Product Classification JESXFC
 

 2 11 Asset Class EQUI

 2 41 Venue of execution XXXX

 2 43 Effective date 01/01/2024

 2 44 Expiration Date 31/12/2024

 2 46 Final contractual settlement date 03/01/2025

 2 48 Price 10

 2 49 Price Currency EUR

 2 55 Notional amount of leg 1 12,000,000

 2 56 Notional currency 1 EUR

Fields 2.57 to 2.60 below, are repeatable depending on the number of scheduling
 periods.

 Effective date of the notional amount of leg
 2 57 01/01/2024
 1
 

 Notional amount in effect on associated
 2 59 1,000,000***
 effective date of leg 1

 2 60 Total notional quantity of leg 1 12,000,000

 2 151 Action type NEWT

 2 152 Event type TRAD

 2 154 Level TCTN

* Initial forward price should be populated in Field 2.48

** Maximum Notional Amount = maximum number of shares x forward price

Maximum number of shares = shares per day x maximum number of accumulation
days

Maximum number of accumulation days = trading days x number of months within
tenor

*** On assumption of 20 trading days per month and 5,000 shared per
accumulation day.
 number of shares and notional amount.

Modification after 3rd month execution

 Reporting of accumulator contracts

 Table Item Field Example

 2 9 Product Classification JESXFC

 2 10 Contract type FORW

 2 11 Asset Class EQUI

 2 41 Venue of execution XXXX

 2 43 Effective date 01/01/2024

 2 44 Expiration Date 31/12/2024

 2 46 Final contractual settlement date 03/01/2025

 2 48 Price 10
 

 2 55 Notional amount of leg 1 12,000,000

 2 56 Notional currency 1 EUR

Fields 2.57 to 2.60 below, are repeatable depending on the number of scheduling
 periods.

 Effective date of the notional amount of leg
 2 57 01/02/2024
 1

 2 58 End date of the notional amount of leg 1 29/02/2024

 Notional amount in effect on associated
 2 59 1,000,000***
 effective date of leg 1

 2 60 Total notional quantity of leg 1 12,000,000

 Effective date of the notional amount of leg
 2 57 01/03/2024
 1

 2 58 End date of the notional amount of leg 1 31/03/2024
 2 59 950,000
 effective date of leg 1

 2 60 Total notional quantity of leg 1 12,000,000

 … … … …

 … … … …

 2 151 Action type MODI

 2 152 Event type TRAD

 2 154 Level TCTN

(ii) Option Accumulators should be reported as displayed below.

Example 2:

Underlying Share: XYZ Limited

Tenor: 6 months

Shares per month: 1,000
 

Option 1: Strike Price: EUR 100 (Expiry in 2 month)

Option 2: Strike Price: EUR 105 (Expiry in 6 months)

Total Notional Amount: EUR 620,000

Month 1: Market price EUR 110. Buy 1,000 shares at strike – EUR 100 (option 1);

Month 2: Market price EUR 108. Buy 1,000 shares at strike – EUR 100 (option 1);

Month 3: Market Price EUR 106. Buy 1,000 shares at strike – EUR 105 (option 2);

And so forth, until expiry.

Report at inception

 Reporting of accumulator contracts

 Table Item Field Example
 

 2 10 Contract type OPTN

 2 11 Asset Class EQUI

 2 41 Venue of execution XXXX

 2 43 Effective date 01/01/2024

 2 44 Expiration Date 28/06/2024

 2 46 Final contractual settlement date 02/07/2024

 2 55 Notional amount of leg 1 620,000

 2 56 Notional currency 1 EUR

Fields 2.57 to 2.60 below, are repeatable depending on the number of scheduling
 periods.

 Effective date of the notional amount of leg
 2 57 01/01/2024
 1

 2 58 End date of the notional amount of leg 1 31/01/2024
 2 59 100,000
 effective date of leg 1

2 60 Total notional quantity of leg 1 1000

2 132 Option type CALL

2 133 Option style EURO

2 134 Strike price 100

2 135 Effective date of the strike price 01/01/2024

2 136 End date of the strike price 29/02/2024

 Strike price in effect on associated effective
2 137 100
 date

2 138 Strike price currency/currency pair EUR

2 151 Action type NEWT
 

 2 154 Level TCTN

Modification after 3rd month exercise of the option

 Reporting of accumulator contracts

 Table Item Field Example

 2 9 Product Classification OCESCS

 2 10 Contract type OPTN

 2 11 Asset Class EQUI

 2 41 Venue of execution XXXX

 2 43 Effective date 01/01/2024
 

 2 46 Final contractual settlement date 02/07/2024

 2 55 Notional amount of leg 1 620,000

 2 56 Notional currency 1 EUR

Fields 2.57 to 2.60 below, are repeatable depending on the number of scheduling
 periods.

 Effective date of the notional amount of leg
 2 57 01/01/2024
 1

 2 58 End date of the notional amount of leg 1 31/01/2024

 Notional amount in effect on associated
 2 59 100,000
 effective date of leg 1

 2 60 Total notional quantity of leg 1 1000

 Effective date of the notional amount of leg
 2 57 01/02/2024
 1
 

 Notional amount in effect on associated
2 59 100,000
 effective date of leg 1

2 60 Total notional quantity of leg 1 1000

 Effective date of the notional amount of leg
2 57 01/03/2024
 1

2 58 End date of the notional amount of leg 1 31/03/2024

 Notional amount in effect on associated
2 59 105,000
 effective date of leg 1

2 60 Total notional quantity of leg 1 1000

2 132 Option type CALL

2 133 Option style EURO
 

2 135 Effective date of the strike price 01/01/2024

2 136 End date of the strike price 29/02/2024

 Strike price in effect on associated effective
2 137 100
 date

2 138 Strike price currency/currency pair EUR

2 135 Effective date of the strike price 01/03/2024

2 136 End date of the strike price 28/06/2024

 Strike price in effect on associated effective
2 137 105
 date

2 138 Strike price currency/currency pair EUR

2 151 Action type MODI
 

2 154 Level TCTN

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*