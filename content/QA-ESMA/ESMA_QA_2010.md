---
surnom_texte_lvl1: REGULATION 648/2012 - OTC DERIVATIVES, CENTRAL COUNTERPARTIES AND TRADE REPOSITORIES (EMIR) - CCPS  LEVEL 2 REGULATION COMMISSION DELEGATED REGULATION (EU) NO 153/2013 REGULATORY TECHNICAL STANDARDS ON REQUIREMENTS FOR CENTRAL COUNTERPARTIES
---

# ESMA_QA_2010

> **Status:** ✅ Answer Published

---

## Regulatory Context

**Level 1 Regulation:** Regulation 648/2012 - OTC derivatives, central counterparties and trade repositories (EMIR) - CCPs  Level 2 Regulation COMMISSION DELEGATED REGULATION (EU) No 153/2013 Regulatory technical standards on requirements for central counterparties

**Topic:** EU-CCPs

**Subject Matter:** Calibration of confidence interval for CCP margin requirements


---

## Question

**Submission Date:** 10-11-2023

We would appreciate to clarify the two issues referred below in the context of the
calibration of the confidence interval for CCP margin requirements.

Q1. Article 24(1) of Commission Delegated Regulation (EU) No 153/2013 (RTS on
CCP requirements) sets out the minimum confidence intervals for the calculation of
the initial margins of a CCP to 99,5% for OTC derivatives and 99% for financial
instruments other than OTC derivatives. Can a CCP rely on the back testing
performance of its margin model as sole proof of compliance with Article 41 of
EMIR and Article 24 of the RTS on CCP requirements?

Q2. If a margin model has several components, does each component need to be
calibrated to the confidence interval set out under Article 24 of the RTS on CCP
requirements?

---

## ESMA Answer

**Answer Date:** 03-01-2025

A1. No. Article 41 of EMIR, and the related Article 24 of the RTS on CCP
requirements, contain several requirements on CCPs, including to impose, call and
collect margins, to specify what the margin requirements shall cover, as well as to
list what the adopted models and parameters shall capture.
Pursuant to Article 41 of EMIR and Article 24 of the RTS on CCP requirements, the
 model designed to anticipate potential future exposure ex-ante to meet at least the
required confidence interval.
To note that Article 41 and the related Article 24 of the RTS on CCP requirements
establish that a CCP shall calculate the initial margins to cover the potential
exposures arising from market movements for each financial instrument that is
collateralised on a product basis, over the time period defined in Article 25 of the
RTS on CCP requirements and assuming a time horizon for the liquidation of the
position as defined in Article 26, respecting at least the confidence intervals of
99,5% for OTC derivatives and 99 % for other financial instruments.
Furthermore, according to Article 47(1) of the RTS on CCP requirements, a CCP
shall conduct a comprehensive validation of its models, methodologies and liquidity
risk management framework. In the context of such comprehensive validation and
in accordance with Article 47(3) of the RTS on CCP requirements, a CCP must
ensure (inter alia) the conceptual soundness of its models. To do so, the CCP must
ensure that the method applied for calibration is consistent with the model to which
it is applied.
Hence, relying solely on back testing as sole proof of compliance with Article 41 of
EMIR, and the related Articles of the RTS on CCP requirements (including in
particular Article 24) would not be sufficient as the requirements are wider in scope
and cover several aspects as noted above. In addition, and more importantly, the
results/outcome of applying the back-testing model(s) is limited and does not
provide assurance of the model's future performance. Therefore, it would not be
sufficient to comply with Article 41 and the related Articles under the RTS of CCP
requirements. In other words, there needs to be an overall sound and detailed
explanation as to what the expected results/outcome of the application of the model
would be and evidence how the model is envisaged to meet the requirements,
including the required confidence interval in the future.
Example: Where a CCP relies on the computation of initial margins on a parametric
distribution with very fat tails, calibrated to a 98% confidence interval, the model
may generate initial margins levels higher than the 98% quantile of the empirical
 However, such model could not be considered as sound where the outcome of the
model is not consistent with the input parameters. In addition, such a model
provides no indication of how future margin requirements will continue to meet the
requirements under Article 41, including confidence intervals.
A2. Where the initial margin model consists of a number of components that need to
be used together to capture the price movements of a cleared product, and where
the results of the risks covered by these components of tradable risk factors cannot
be isolated, then such individual components should not be calibrated separately to
meet a confidence interval according to Article 24 of the RTS on CCP requirements.
For the avoidance of doubt, the total assessed margin requirements shall meet the
required confidence interval set out in Article 24 of the RTS of Requirements, as
explained under Question 1.
However, where a margin model decomposes the computation of the initial margin
in a way that isolates tradable risk factors using trading strategies, each tradable
risk factor needs to be calibrated at the appropriate confidence interval.
Example: If a CCP decomposes interest rate risk in risk factors such as level and
curve, and since such risk factors can be isolated respectively by an outright 5Y
swap and a unit portfolio with long 5Y and short 10Y swaps, each of level and curve
risk factor must be calibrated at 99.5%.

Disclaimer in relation to the answers provided by the European Commission
in accordance with Article 16b(5) of the ESMA Regulation

The answers clarify provisions already contained in the applicable legislation. They
do not extend in any way the rights and obligations deriving from such legislation
nor do they introduce any additional requirements for the concerned operators and
competent authorities. The answers are merely intended to assist natural or legal
persons, including competent authorities and Union institutions and bodies in
clarifying the application or implementation of the relevant legal provisions. Only the
Court of Justice of the European Union is competent to authoritatively interpret
Union law. The views expressed in the internal Commission Decision cannot
prejudge the position that the European Commission might take before the Union

---

*This document was automatically extracted from the ESMA EMIR Q&A database.*