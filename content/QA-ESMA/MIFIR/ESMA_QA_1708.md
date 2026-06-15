---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1708

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1708

---

## Regulatory Context
Regulation : MIFIR

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Transaction reporting


---

## Question

**Submission Date:** 14 November 2017

(a)	What are the reporting obligations for a typical primary issuance (IPO)?
(b)	How should field 28 (Trading date time) be populated in this scenario?
(c)	How should field 59 (Execution within the firm) be populated in this scenario?
(d)	What would transaction reporting look like for a typical equity IPO example?

---

## ESMA Answer

**Answer Date:** 14-11-2017

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 24.8]
(a) Primary issuance occurs through a group of banks that form a syndicate. This is shown in the example below where Banks A, B and C form a syndicate. One client may receive calls from a number of syndicate banks to introduce the new issue and the client will in turn indicate their interest to buy the financial instrument being marketed through each of those banks. A single order book is maintained across the syndicate which results in a single allocation of the financial instrument to the client.
A ‘coordinating bank’ will buy from the issuer/seller and sell to another bank or banks in the syndicate that act as the ‘billing and delivering bank(s)’ (B&D-bank). A B&D-bank will then sell to the client. A ‘coordinating bank’ may also perform the role of a B&D-bank.
The example below shows two situations, one where Bank A is acting as a ‘coordinating bank’ and Banks B and C are acting as the B&D-bank and one where Bank A is acting as both the ‘coordinating bank’ and B&D bank. In this example Banks A, B and C are all investment firms acting in an own account trading capacity but it is also possible for these banks to act in any other capacity.
The executions that take place are indicated by legs no. 1, 2, 3 and 4. The direction of the arrows indicates the direction of flow of the financial instruments.

All of the execution legs that are applicable to the situation are reportable. So if Bank A is the ‘coordinating bank’ and Banks B and C are the B&D-banks then legs 1, 2 and 3 are reportable. If Bank A is both the ‘coordinating bank’ and the B&D–bank then legs 1 and 4 are reportable. If the issuer or the client are investment firms they will have to transaction report as well as Banks A, B and C. 
Settlement activity should not be reported.
If there are additional investment firms involved in the chain that are executing then they will also need to transaction report. 
(b) This should be the date time at which the pricing and the allocations are finalised between the issuer and the syndicate. This is normally before the first listing date.
(c) Where a client is making a decision for a primary issuance, then the activity by an investment firm to action that decision is just an administrative function as the investment firm has no discretion on how to exercise and therefore field 59 should be populated with ‘NORE’. Where the investment firm is making the decision under a discretionary mandate it should be populated with a person or algorithm within the investment firm.
(d) Issuing Company Z plans a primary issuance of 400 units of equity and engages a syndicate involving Investment Firm X and Investment Firm Y to run a book build on its behalf. Investment Firms X and Y are acting as B&D-banks responsible for recording the transactions in their books and records, confirming the purchase to the client and selling the units to the clients. Investment Firm Y is also acting as a ‘coordinating bank’.
Client A and B have placed subscription orders for 200 units and 100 units respectively with Investment Firm X. Client C has placed subscription orders for 100 units with Investment Firm Y. Investment Firm Y will buy from the issuer/seller and sell to Client C and to Investment Firm X. The request for admission takes place on 26-06-2018 and the listing date is 27-06-2018. The transaction price of 99 for a unit is agreed between the syndicate and the issuer and the pricing and allocations are finalised between Issuing Company Z and the syndicate on 26-06-2018 at 19:00:00.
Assuming for the purposes of this example that Investment Firms X and Y are dealing on own account, the reports that need to be made by X and Y are indicated by Reports no. 1 – 6 in the figure below. The direction of the arrows indicates the direction of flow of the financial instruments.
Settlement activity should not be reported.
 

 
How would Investment Firm X report?

How would Investment Firm Y report?

If Issuing Company Z or Clients A, B or C are investment firms they will also need to transaction report.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*