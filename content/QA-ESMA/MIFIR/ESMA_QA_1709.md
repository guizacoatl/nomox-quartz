---
surnom_texte_lvl1: MIFIR
---

# ESMA_QA_1709

> **Status:** ✅ Answer Published

> **Link to ESMA Q&A tool:** https://www.esma.europa.eu/publications-data/questions-answers/1709

---

## Regulatory Context
Regulation : MIFIR

**Linked Articles:** [[2014R0600_EN.26]]

**Level 1 Regulation:** Markets in Financial Instruments Regulation (MiFIR) Regulation (EU) No 600/2014- MDP

**Level 2 Regulation:** *No information available*

**Level 3 Regulation:** *No information available*

**Topic:** * Transaction reporting

**Subject Matter:** Transaction reporting


---

## Question

**Submission Date:** 14 November 2017

(a)	When are corporate events reportable?
(b)	Are corporate events resulting from a default option reportable?
(c)	Is an event still reportable where the investor has given a standing instruction?
(d)	What is meant by the investor not making an investment decision at the point in time of the creation, expiration or redemption of the financial instrument in article 2(5)(i) of Commission Delegated Regulation (EU) 2017/590?
(e)	Are lapsed rights reportable?
(f)	How should corporate events be reported?  
(g)	How should field 59 (Execution within the firm) be populated for corporate events?

---

## ESMA Answer

**Answer Date:** 14-11-2017

[ESMA 70-1861941480-56 MiFIR data reporting Q&A, Q&A 24.9]
(a) Corporate events are reportable where the investor has an opportunity to make an investment decision if the event does not come within one of the exclusions under article 2(5) of Commission Delegated Regulation (EU) 2017/590. In practice, because many corporate actions are effected through the mandatory issue of an intermediary instrument this brings them within the exclusions because the issue is mandatory and therefore not reportable under 2(5)(i) and the exercise of the intermediary instrument is excluded under 2(5)(h).
(b) Yes. This is regardless of whether the default option is actively selected or results from no action. This is because the investor may have taken no action in the knowledge that they would receive the default option. Therefore they are regarded as effectively taking an investment decision.
(c) Yes, where the investor has an opportunity to make an investment decision. This is because the investor had the opportunity to change their mind and revoke the instruction and may have chosen not to do so. Therefore they are regarded as effectively taking an investment decision. 
(d) This should be interpreted as the investor (or someone acting for them under a power of representation) not making an investment decision at the point in time when they could have made an investment decision for a particular corporate event. Thus it refers to the point of time of the initiation of the creation, expiration or redemption rather than the time of its completion. Consequently, if the investor did take a decision to initiate the creation, expiration or redemption or could have taken such a decision but received a default option or could have taken a decision despite a standing instruction being in place it does not come within the exclusion under article 2(5)(i) and the action is reportable unless it comes under one of the other exclusions in article 2(5). 
(e) No. This is considered to be within the exclusion in Article 2(5)(h) of Commission Delegated Regulation (EU) 2017/590.
(f) The transactions resulting from the event should be reported.

Where an investment firm, Firm A, is giving instructions to take up an event on behalf of itself or a client it should report the party initiating the event if it is executing with that entity directly or the intermediary it is executing with an intermediary. For example, consider a corporate event where an investor makes a choice of receiving cash or additional financial instruments without there being an intermediate financial instrument and receives the financial instruments. Assuming that Firm A is acting in an ‘any other’ trading capacity and is executing directly with the issuer, Firm A will report the buyer as the client and populate the seller field with the LEI of the issuer. If the client is also an investment firm, the client will report Investment Firm A as the seller and if the issuer is also an investment firm the issuer will report Investment Firm A as the buyer. If Firm A is executing with an intermediary Firm A will report the intermediary.
Where payment is made the price should reflect this. If there is no payment then the price field should be populated with ‘NOAP’. If there is a pending price it should be reported as ‘PNDG’ and updated when the price is known.
The trading date and time would be the date and time that the corporate action was completed by the entity initiating the event, so in the example above the date time in the confirmation of the transaction by the issuer.
(g) Where a client is making a decision for a corporate event, then the activity by an investment firm to action that decision is just an administrative function as the investment firm has no discretion on how to exercise and therefore field 59 should be populated with ‘NORE’. Where the investment firm is making the decision under a discretionary mandate it should be populated with a person or algorithm within the investment firm.

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*