---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1690

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1690

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** ESMA70-1861941480-56 Questions and Answers on MiFIR reporting

**Subject Matter:** Business Case: Inflation Indexed bond


---

## Question

**Submission Date:** 03 April 2017

How should transactions on “inflation indexed bonds” be reported under RTS 22?

---

## ESMA Answer

**Answer Date:** 03-04-2017

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 10.1] 


Example of transaction report on “inflation indexed bonds”:
An investment firm acquires a DBRI 0.1% 04/15/2026 (ISIN Code DE0001030567) by trading over the counter at 110.00%. The nominal value of the transaction is 1000000 EUR.
The net amount for this transaction is 1111274.01 EUR.
Considering that for the purpose of this example:
The static characteristics (as defined upon the issue of the financial instrument) are:

Maturity Date: April 15th 2026
Coupon frequency: Annual
Day Count Convention: ACT/ACT
Day to Settle Convention: 2 business days after the trade date

The variables (dynamic characteristics depending on the market conditions) are:

Trade Date: July 25th  2016
Settlement Date: July 27th 2016 (as per the Day to Settle Convention)
Last Coupon Date: April 15th  2016
Next Coupon Date:  April 15th  2017
Accrued number of days: 103 (i.e., the number of days between the Last Coupon Date and the Settlement Date)
Period basis: 365 (i.e., the total number of days between the Last Coupon Date and the Next Coupon Date)
Quantity: 1000000 (i.e., the nominal or monetary value of the transaction)
Clean price: 110.00
Index ratio: 1.009990
Accrued interest:  0.02821918 (i.e., Nominal Coupon / Annual Coupon Frequency  x Accrued Number of Days / Period basis   =  0.1/1 x 103/365  )

The net amount will be calculated as follows (pursuant to the formula provided in field 35 of RTS 22):
Net amount[1] = [(Clean price x Nominal value) + (Accrued coupons x Nominal value)] x Index ratio i.e. [((110/100 x 1000000 EUR) + (0.02821918/100  x 1000000 EUR))] x 1.009990 =1111274.01 EUR.





N


Field name


Values


XML representation




30


Quantity


‘1000000’



  
   …
    
      …
      
       1000000
      
     
       110.00
      
      1111274.01
      XOFF
      ...
    
    
      DE0001030567
   
    …
  







[1] Please note that this example differs from example 92 within the Guidelines by the index ratio that needs to be taken into account in the calculation of the Net Amount.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*