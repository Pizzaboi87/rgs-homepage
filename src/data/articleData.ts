import { ArticleContentType } from "@/types/types";

export const articles: ArticleContentType = {
    "your-money-or-your-life-the-highwayman-of-medical-recalls": [
        {
            type: "title",
            title: "How dangerous products hurt in more ways than one"
        },
        {
            type: "text",
            text: [
                "To err is human, and this perhaps is the greatest justification for corporate personhood. Sometimes, mistakes are made and products are released with these mistakes. Using these products may cause harm, and therefore it becomes the moral and legal responsibility to remove these products from the market, and issue a recall.",

                "Recalls are expensive. There is the cost of tracking down and informing consumers, the cost to manufacture replacements, and the liability lawsuits for damages caused by the faulty products. Beyond that, there is the reputational risk, and the negative association of a brand. According to Allianz, the average financial cost of a recall was ~$1.65 million (2017 USD), with a fat-tailed distribution meaning the cost can often go far beyond [1].",

                "The real cost of recalls however, lies in the people hurt by them. Recalls almost universally fall far short of 100% success rates [2], and the harm that those for whom the message isn't reached can be devastating, or even fatal.",
            ]
        },
        {
            type: "title",
            title: "The Healthcare Industry is the 6th most impacted by product recalls [1]"
        },
        {
            type: "text",
            text: [
                "Whilst medical devices and pharmaceuticals have the fortunate position of being heavily monitored and tracked, so having recall effectivenesses far higher than their consumer goods counterparts, the potential for harm is so much greater, precisely because of their vulnerability and the need for them. It is a cruel case when the devices needed to save a patient's life is what causes them harm. But the form this harm takes differs between device and drug.",

                "Medical devices in the US are managed by the FDA. And they operate a 3-tiered classification system for recalls [3]. The most severe of these is Class 1. Here use of the faulty product is expected to cause death or permanent disability in over 50% of cases if used (the term used by the FDA is “Reasonable Chance”) [4]. The urgency of these recalls cannot be emphasized, as every delay to communication endangers the lives of many patients. Class 2 recalls are less severe, with the faulty product's use expected to lead to temporary or medically reversible harm in the majority of exposures, and is considered unlikely to cause the sort of life-altering harm of their Class 1 counterparts. Class 3 is less severe still - with low expectations for any harm other than the superficial. ",

                "And with the use of devices being so acute to the patient, the dominant harm done to them by faulty products is from their use. This is the “simple” and intuitive model for how harm is done by the failure of product quality control and safety checks.",

                "By comparison, whilst pharmaceuticals are similarly classified in recalls by the FDA, the reality is that (thankfully) most drugs are recalled before they reach consumers. And the typical reason for this is mislabeling or faulty storage and transport. Those drugs that are truly harmful to patients are instead withdrawn from the market. And these withdrawals, whilst infamous when they occur, are few and far between. This means that the real risk of direct harm to patients is considerably lower than for medical devices. Instead the route for the harm pharmaceuticals take is less direct, but far more widespread."
            ]
        },
        {
            type: "title",
            title: "Pharmaceuticals and Pricing Dynamics"
        },
        {
            type: "text",
            text: [
                "It is no secret that pharmaceutical companies operate with low competition. As such, the addition or removal of a single competitor in the market can have a significant impact on the price per dose. The addition of a single competitor in a previous drug monopoly leads to an average 31% decrease in wholesale price [5, 6]."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1663254522-hc_recalls_final.png",
            alt: "Recalls by Industry",
            caption: "Fig 1. The ratio between the price of a drug without competitors and with the number of additional competitors, measured with both wholesale price as well as in the average manufacturer price. Adapted from [5,6]."
        },
        {
            type: "text",
            text: [
                "Because of the low-competitor nature of the pharmaceuticals industry, prices are incredibly sensitive to the number of competitors in the market. As such, even the temporary removal of a single competitor leads to a significant price increase for the pharmaceutical. Given the majority of drugs (over 60%) in the US market have 3 or fewer competitors, we can see that the drop from 2 generic producers to 1 leads to a price hike of over 20%.",

                "It is this sudden price hike that hurts patients the most.In countries without a national health service such as the US, patients are at risk of being directly priced out from receiving the drugs they require to live.Making this an immediate accessibility concern in an industry already controversial for its unaffordability.In countries with a nationalized health care system such as the UK, whilst individual patients are shielded from the worst of these accessibility issues, the price hike instead hurts the ability for money to be invested elsewhere, gouging the budget for greater healthcare provision.",

                "Fortunately, this price hike is contested soon after - the recalling company re - enters the market.But they re - enter at a higher price point, and it takes time therefore for competition to drive the price back down to the equilibrium price it was set at before the recall took place.Time that, for some of these pharmaceuticals and the patients taking them, is simply not available.",

                "It is easy for us as people to fall into the trap that all harms are proportional.Our minds think linearly.But for us to accurately represent impacts, we must recognize that those models, whilst sometimes useful, are not universal.With recalls, we must go beyond social costs.In cases like medical devices, we can reach this by tempering our costs with probability - rewarding corporate caution and penalizing poor communication.But for pharmaceuticals, we must represent the reality of the industry.A reality where it is those who walk on the knife's edge for affordability who are cut the deepest by companies.A reality where the worst hurt are those forced to choose between their money or their life."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] Allianz Global Corporate & Specialty, 'Product Recall: Managing The Impact Of The New Risk Landscape', 2017",
                    link: "https://www.agcs.allianz.com/news-and-insights/reports/product-recall.html"
                },
                {
                    reference: "[2] Electrical Safety First, 'Consumer Voices on Product Recall', 2014",
                    link: "https://www.electricalsafetyfirst.org.uk/media/1259/product-recall-report-2014.pdf"
                },
                {
                    reference: "[3] FDA, 'Recalls Background and Definitions'",
                    link: "https://www.fda.gov/safety/industry-guidance-recalls/recalls-background-and-definitions"
                },
                {
                    reference: "[4] US Government, 'Code of Federal Regulations: Title 21', Volume 8, Chapter 1.H, Section 810.A",
                    link: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-810"
                },
                {
                    reference: "[5] US FDA Center for Drug Evaluation and Research, 'Generic Competition and Drug Prices'",
                    link: "https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/generic-competition-and-drug-prices"
                },
                {
                    reference: "[6] R.Conrad & R. Lutter, 'Generic Competition and Drug Prices: New Evidence Linking Greater Generic Competition and Lower Generic Drug Prices', 2019, US FDA Report",
                    link: "https://www.fda.gov/media/133509/download"
                }
            ]
        }
    ],
    "filling-in-the-gaps-going-from-nan-to-wham": [
        {
            type: "text",
            text: [
                "In the world of data, asset managers are pampered.",

                "Every financial metric is available in an instant, updated real time, and fully standardized - nowhere is there a debate on the definition of Gross Profit Margin, or discussing whether Return on Assets covers all assets or only some 70 % of them that has been measured.",

                "These are issues however that plague ESG metrics."
            ],
        },
        {
            type: "title",
            title: "Data Availability & Reliability Challenges"
        },
        {
            type: "text",
            text: [
                "First there is the lack of available data.",

                "Up until recently, reporting was effectively up to the good will of companies and any pressures that shareholder activism could muster.Mandatory disclosures are now beginning to catch up, but it is a long road to match the level of compliance as financial disclosures.",

                "But even for the fortunate cases of reporting, we have a reliability issue.",

                "Different companies have different competing methodologies to report the same datapoint and interpret the definition of certain metrics differently.They also may only have the capacity to report for a certain segment of their company or operations.Even with these in place though, without the proper auditing or transparency, it can be incredibly difficult to understand where these values come from.This can lead to apparently absurd situations where different ESG data providers will disagree on a company's reported impact metrics, even outside of their own estimations to fill the gaps."
            ]
        },
        {
            type: "title",
            title: "From Uncleaned Raw Data to Complete Dataset"
        },
        {
            type: "text",
            text: [
                "Data providers, however, often have the unenviable job of selling a complete dataset - something that is usable to client investors in an actionable way - and this means having to impute and fill the gaps. This goes in direct counter to the needs of other investors, who need to know how reliable the datapoint they have is to make their investment decision - be it for risk management or to drive impact.",

                "So how do we tackle these challenges at RGS, how do we go from uncleaned raw data to a complete and reliable dataset?"
            ]
        },
        {
            type: "title",
            title: "Meet the RGS Data Pipeline"
        },
        {
            type: "text",
            text: [
                "The methodology with which we estimate datapoints is a living one, and one that is continuously being improved for reliability and specificity - in this article we are giving a sneak-peek into our data pipeline and how we address quality control processes within.",
            ]
        },
        {
            type: "title",
            title: "Data Collection"
        },
        {
            type: "text",
            text: [
                "In our data pipeline the first step is Data Collection - the sourcing for the raw data from which all else is derived.",

                "There are 3 types of data sources we collect from, and every data source is given significant time with human analysts to ensure that the data is consistent, and the source reliable:"
            ]
        },
        {
            type: "list",
            list: [
                [
                    "Government Databases - for some KPIs, the data is required by law to be listed by a government agency.These databases are publicly accessible for all and are often comprehensive and complete.A good example of such a database is the FDA Medical Device Recalls database.",

                    "For these databases there is an analyst -in -the - loop for every company - year - datapoint value, and every collected datapoint has a citation associated.The collected data is converted into standardized units, ensuring the reported datapoint is comparably universal for all companies."
                ],
                [
                    "Direct Company Reporting - data that is provided by the company itself.This is usually available in separate Sustainability or Corporate Responsibility Reports, or otherwise integrated within other data sources such as SEC filings.These reports are often accompanied by an Index, explaining where each datapoint is discussed with respect to GRI or SASB or other reporting guideline's definitions."
                ],
                [
                    "Trusted External Data Providers - In some cases, we use data from 3rd - party providers.These providers have access to information that is not universally available, due to their ability to leverage privileged relationships with companies.",

                    "Here we still(where possible) rely solely on the data that is raw from a company and impute ourselves for the estimated datapoints that enables us to track and maintain a solid domain knowledge of each datapoint we utilize.",

                    "Also, a long time is spent examining and comparing the data to other sources where possible and engaging with the data provider to ensure that both the methodology and any discrepancies across data sources are understood."
                ]
            ]
        },
        {
            type: "title",
            title: "Pre-processing"
        },
        {
            type: "text",
            text: [
                "The different data sources mean that whilst we have significant control of many of the datapoints we collect, we must undergo a process to join and merge files.We must also engage in the work to hunt out the outliers in our data sets.This is our Pre - processing stage.We join the various datasets needed for a given impact or framework pipeline and standardize namings for columns and companies.From this structured form begins our Quality Control Process."
            ]
        },
        {
            type: "title",
            title: "Data Type Validation"
        },
        {
            type: "text",
            text: [
                "Within Pre-processing, our first task is Data Type Validation - this ensures that the data type is correct for the column, so numbers are represented as numbers, and not a string, and namings of companies and ISIN's are consistent throughout their use."
            ]
        },
        {
            type: "title",
            title: "Data QC"
        },
        {
            type: "text",
            text: [
                "With the data types verified, we then move to our Input Data QC, which utilizes 3 layers of “defense” against incorrect inputs:"
            ]
        },
        {
            type: "list",
            list: [
                [
                    "Clipping - this is the simple removal of unphysical numbers, or impossible values (such as percentages above 100%) from our dataset and estimating instead for the specific company-year. One may initially hope that such mistakes are not common, but when seeing reported % of women in a company as 115%, one realizes the sheer necessity of these clipping steps."
                ],
                [
                    "Automated Data Descriptive Statistics & Quality Sheets - The automated creation of a series of dataframes for both manual review and as an input into our automated outlier detection.",

                    "These sheets calculate and display information about the raw datapoint with respect to the time series it lies within, and information on where the datapoint sits within the company, and the various sector/ industry categorizations.These sheets also display a range of descriptive statistics per categorization - statistics such as the mean, median, standard deviation, minimum and maximum value.Manual review across these sheets hunts both for outliers and provides insights into reported data for different industry categorizations and any systemic behaviors in company reporting."
                ],
                [
                    "Automated Outlier Detection - Utilizing methods specifically designed to catch outliers in datasets to flag both spikes in reported impact metrics (indicative of a possible one-off reporting error) or spikes in the Year-on-Year changes in the impact metric (indicative of a change in calculation methodology by the company or reporting scope or financial behaviors like mergers). Via the resulting data descriptions, we create a cost function to automatically hunt for outliers relative to other datapoints within the company, sub-industry, Year-on-Year Growth rate, and more. A suspicion list is produced, and manually investigated to confirm if these are genuinely problematic datapoints or there is a legitimate reason for this. This is used to train a Machine Learning model to predict outliers better, leading to a self-improving outlier detection algorithm."
                ]
            ]
        },
        {
            type: "text",
            text: [
                "Using the suspicion list we develop from methods 2 and 3, we then engage in manual examination for each of these company-year-datapoints to verify the reported value and investigate the outlier behavior. From these, those that are unexplained and unexcused are marked as true outliers. This is a separate input that we then feed into the pre-processing to give us a manual list of datapoints that should be dropped and estimated instead, or otherwise corrected in the raw data where reasonable to do so."
            ]
        },
        {
            type: "title",
            title: "Imputations"
        },
        {
            type: "text",
            text: [
                "With our now cleaned data, we move onto the task of Imputations. Depending on the datapoint, we may have reporting coverage as high as 85%, or as low as 1.8%, and the task of estimating the rest must come with its challenges. We classify imputations into 2 types, depending on the statistical strength of the assumptions we can enforce with our estimations."
            ]
        },
        {
            type: "list",
            list: [
                [
                    "High-Quality Imputations are those where we estimate while imposing strict requirements such as minimum numbers of datapoints to base any estimations on, or extrapolation limits to prevent extending too far on trends without sufficient supporting evidence."
                ],
                [
                    "Other Imputations are reserved as the last line for estimation. where the fundamental methods of estimation remain the same here as well."
                ]
            ]
        },
        {
            type: "text",
            text: [
                "Information about which imputations we consider to be made with high confidence and those where we consider there to be more uncertainty is preserved throughout this process, for both internal tracking during quality control, and so we can effectively quantify our confidence in our impact calculations, and the uncertainty associated with each value we estimate.",

                "We are in the process of integrating the same automated data statistics sheets and outlier detection model as in the pre- processing stage to catch potential outliers - and mark these suspicious points for our investigation.Not only does this act as another filter for catching potentially problematic reported datapoints, but it also enables us to manage the quality of our imputations and examine the merit of different estimation methods per datapoint.",

                "Per datapoint, we calculate the percentage of datapoints that are reported, imputed with statistical rigor, and imputed under relaxed conditions, and the relative effectiveness of each imputation method.This is used to then adjust our imputation logic."
            ]
        },
        {
            type: "title",
            title: "Calculations and Results"
        },
        {
            type: "text",
            text: [
                "Now with a completed dataset of input KPIs, the next stage along the data pipeline is our impact calculations.With each calculation we engage in significant academic research, saving both the bibliography, derivations, and logic justifications for any and all calculations we utilize.",

                "This then undergoes an internal peer review of the research undergone, a viva- like defense for the logic behind the calculation, and blind rederivation of any involved mathematical formulae to prevent arithmetic errors.This research goes towards both the impact measurement and monetization calculations themselves, and to any and all social costs or other global assumptions utilized in the calculation.",

                "Once this peer review has been completed and passed, we move onto our Results QC.We begin with an examination of our automatically created Data Statistics Sheets, identical in form to those discussed before, but applied onto the monetized impacts, as well as the intermediate drivers and input KPIs we use.This is done both for the individual monetized impacts, and their aggregations(such as Total RIFT™).",

                "Manual examination not only acts to augment the calculation review described above, by contextualizing the calculation logic and enabling cross- impact comparisons, it also is the input towards our outlier detection - both manual and automated.The outlier detection behaves similar to those methods described above.",

                "Across all the parts of the data pipeline, we have collected and investigated a list of suspicious company - year - datapoints.Those that do not have a valid explanation for their unexpected behavior, or that otherwise cannot be verified, are marked into the input that goes into the preprocessing, thus leading to our self - improvement model that ensures data quality remains as high as possible for our clients."
            ]
        },
        {
            type: "title",
            title: "Transparency Scoring"
        },
        {
            type: "text",
            text: [
                "Beyond our transparency towards our process, we are also developing methods to directly communicate and quantify the transparency (or lack thereof) of the company under assessment.",

                "These Data Transparency & Reliability Scores are important augmenters to investment decisions.Understanding and quantifying impact uncertainty is fundamental for developing true impact - risk management techniques."
            ]
        }
    ],
    "plastic-packaging-intensity-the-real-performance-metric": [
        {
            type: "text",
            text: [
                "In the previous blog post, you could learn about the large societal cost of plastic waste, its devastating impact on the marine ecosystem, and single-use packaging as one of the main drivers of the plastic pandemic. As promised, this post is dedicated to giving a more in-depth view on certain industries and their contribution to the plastic problem, showcasing RGS's results on this matter for the first time publicly.",

                "Focusing on the largest cap companies of the world, within the S & P Global 1200 Index, our industry - level results reveal that the largest plastic packaging user industries are - no surprise - Hypermarkets & Super Centers, Household Products, Personal Products, Packaged Foods & Meats(PFM), and Food Retail.",

                "How does an average company in each of these industries compare in their plastic packaging use ? Sadly, the majority of these industries have actually increased their plastic packaging consumption in tonnes on average by 15 % between 2016 and 2020 - except for Food Retail and PFM where an average company managed to perform a gradual, 13% and 16% decline respectively in the use of plastic as packaging for their products."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1658414176-slide1-1.jpg"
        },
        {
            type: "title",
            title: "Wait a minute - in which industry does Coca-Cola and the like fall into then? "
        },
        {
            type: "text",
            text: [
                "Spot on - the Soft Drinks industry is deliberately missing from the previous chart. Adding it to the rest of the industries, the outlook drastically changes though.",

                "An average company in the Soft Drinks industry emitted approximately 1.4 million tonnes of plastic packaging to the world in 2020 which is 1.6 times more than the sum of other industries' average companies.Even if there was on average a 13 percentage point decline of Soft Drinks producers' plastic usage from 2016 to 2020, unfortunately a slight, 0.6% year - on - year increase can be observed from 2018 onwards.Our findings are in line with those in beach clean- up reports that claim that beverages bottles are the most common plastic packaging waste type found in our environment[1]."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1658414180-slide2.jpg"
        },
        {
            type: "title",
            title: "What is the best metric to benchmark industries' real performance?"
        },
        {
            type: "text",
            text: [
                "It is not enough to look at the volume of plastic packaging only of course. What we might be interested in is rather the industries' relative performance - meaning whether any of these industries could on average reduce their plastic packaging intensity (that is their plastic packaging in tonnes divided by their revenues). Such a metric can better indicate the real performance of industries, definitely more so when compared to each other and over time.",

                "For example, if an industry grows both its revenues and plastic packaging emission but the latter by a smaller extent from one year to the other, then the plastic intensity falls and the industry is deemed to perform better as it requires relatively less plastic packaging to generate more revenues.",

                "Let's have a look how our previous examples demonstrate this:"
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1658414183-slide3.jpg"
        },
        {
            type: "text",
            text: [
                "As our results show, the Soft Drinks industry is a laggard from both absolute and relative performance perspectives, and it has no significant relative improvement over time. Interestingly, however, an average company in the Hypermarkets & Super Centers industry is the second worst performing when we look at absolute performance (chart 1) while the best performing one in relative performance with the lowest plastic packaging intensity. Household and Personal Products both increased their plastic intensity by c. 12% over time, while PFM is a champion in reducing its intensity by 22% from 2016 and 2020.",

                "All in all, it seems that irrespective of companies' plastic related initiatives and targets, there have not been any significant improvements yet in successfully reducing plastic packaging volume or intensity over time, except for the PFM industry.Even though companies might have been focusing on replacing virgin plastic with recycled plastic content, this initiative does not solve the devastating end- of - life impact of plastics.",

                "If the above quick preview raised your interest and would like to get further insights to understand in which industries plastic pollution is the most pressing issue, how industries performance changed over time, which companies are the best and worst performers, how do companies reduce or increase their plastic packaging intensity over time - reach out to us to get more information."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] Ocean Conservancy, We Clean On, 2021 Cleanup Report, (2021)",
                    link: "https://oceanconservancy.org/wp-content/uploads/2021/09/2020-ICC-Report_Web_FINAL-0909.pdf"
                }
            ]
        }
    ],
    "double-materiality-and-sustainable-funds": [
        {
            type: "text",
            text: [
                "The recent decision of Morningstar to remove the 'sustainable' investment label from more than 1,200 European funds brought a significant challenge of ESG investing under the spotlight: many funds cannot meet customers' expectations of making a positive impact on the environment and society. While there are many reasons why, we want to focus on a key factor; impact measurement.",

                "For investors, the most important consideration when looking into ESG data has naturally been the impact of ESG issues on company value; financial materiality.ESG data providers responded to that demand by offering ESG data, scores and ratings focused on the issues relevant for a company given its sector and how its management is responding to those issues.Input type metrics such as the existence of policies and intentions in the form of future targets became important for risk management, together with insights on a company's performance relative to its peers.",

                "But is this what a client is asking for when they look for investments with positive impact? How is the existence of a policy ensuring that a company actively promotes environmental and/ or social characteristics ? Should a comparison with industry peers matter if the whole industry is doing significant harm to the environment? As one of our senior advisors rightly put it 'how can we have top 'performers' in terms of deforestation practices while forests keep disappearing?'"
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1650373931-screen-shot-2022-04-19-at-15-09-02.png"
        },
        {
            type: "text",
            text: [
                "As much as financial materiality is crucial, an understanding of the real impact a company has on the environment and the society is paramount. The concept of 'double-materiality' was first formally proposed by the European Commission, encouraging a company to judge materiality from these two perspectives.[1] It is not just climate-related impacts on the company that can be material but also impacts of a company to the climate, or any other dimension of ESG, for that matter.",

                "At RGS, measuring the real impact of a company on the environment and the society has been our focus from day one.We built our impact models utilizing only outcome metrics rather than inputs or intentions, prioritizing absolute impact rather than a relative performance against peers and aiming to eliminate opportunities for greenwashing.",

                "Regulatory frameworks, like SFDR, are also pushing the market towards a similar direction.It won't be long until further scrutiny is placed on funds labelled as article 8 or 9 that mostly follow a revenue mapping exercise rather than an assessment of real impact at the ESG metric level.Scoring better than your competitors does not mean that you have a positive impact, it only means you do less harm.",

                "If you do want to understand the real impact of your investments feel free to reach out."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] European Commission, 'Guidelines on Non-Financial Reporting', 2019",
                    link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52019XC0620(01)"
                }
            ]
        }
    ],
    "sustainable-health-is-wealth": [
        {
            type: "text",
            text: [
                "For over 52 years, Earth Day has been a day dedicated towards the drive for sustainability and restoration. Typically what comes to mind to most on this day is the ending of carbon emissions, the reestablishment of healthy ecosystems, and the drive to 'close the loop' and achieve a waste-free world. The push for a circular economy is especially strong amongst the public, with calls for the end of single-use plastics, superfluous packaging, and the legislation to enforce this. However, one sector of the economy remains generally forgotten about when it comes to its refuse - The Healthcare Sector.",

                "Medical waste simply refers to any waste produced by the healthcare industry.Most of this, around 70 - 85 %, is no different to typical household waste, and needs no special treatment.However the remaining 15 - 30 % is considered hazardous[1].The types of hazards this waste poses varies, from harmful chemicals used for sterilizing surgeries, to radioactive hazards from radiotherapy units, contaminated supplies exposed to infectious persons, or sharps such as used needles [2]."
            ]
        },
        {
            type: "title",
            title: "1-2 million metric tons of dangerous hospital waste produced annually"
        },
        {
            type: "text",
            text: [
                "On a global average, 2kg of waste is made per hospital bed per night, and approximately 60% of the hazardous medical waste produced is improperly treated [1]. This amounts to a total of around 1-2 million metric tons of dangerous hospital waste produced annually. The exact number of deaths and injuries caused by exposure to this amount of waste is not yet well studied. A proxy measure used by the WHO is cases of bloodborne diseases from needle-stick injuries and unsafe injections, which in 2008, totalled over 20 million cases (a significant proportion of which is from hospital waste exposure), whereas sharps that cause this danger make up only around 7% of hazardous medical waste [3].",

                "Whilst richer countries have the infrastructure and resources to better handle hazardous waste, hospitals in richer nations produce far more waste per patient, up to 5 times as much as the global average[2].As such, the primary harm reduction method is to significantly cut this waste where possible.This means that where safe to do so, medical equipment should be sterilized and reused, and care should be made to ensure that it is easier to dispose of the supplies that must remain single use(such as needles and PPE)."
            ]
        },
        {
            type: "title",
            title: "Beyond the health impacts, hazardous medical waste also poses financial risks "
        },
        {
            type: "text",
            text: [
                "Tackling medical waste is not only part of the moral obligations to harm-reduction that healthcare providers are bound to, but also a matter of financial prudence for clinics and hospitals. In 2019, the reprocessing of over 6900 metric tons of healthcare equipment in the US, EU, and Canada saved hospitals and surgical clinics $544 million USD, a 15% increase from the year prior [4].",

                "In our research at RGS, we have found that, when no collection or refurbishment schemes for products exist, the average impact of medical waste is - $0.17 for every dollar of revenue a company makes in medical equipment and supplies.With clear demand from health institutions, and the growing awareness of extended responsibility, Healthcare Equipment manufacturers are now more than ever under increased demand to reduce the impact of their products both by product design, and by such schemes.Having no collection schemes in place is a significant negative externality that society bears.Nevertheless our analysis also highlights how rapidly and impactfully companies in this industry can improve their impact, and unlock new financial opportunities in the process."
            ]
        },
        {
            type: "title",
            title: "Industry best-practices lead to resale revenues opportunities"
        },
        {
            type: "text",
            text: [
                "In 2017, Koninklijke Philips NV began a refurbishment trial for large diagnostic equipment such as MRIs. In the 3 years since, they have pushed this further and in 2020 achieved 100% circularity for these products, which make up 60% of their medical equipment revenue [6]. Similarly, Becton Dickinson and Co began its collection scheme for used products in 2018 [7], and our analysis again highlights the immediate and tangible outcomes to society. Using our analysis, we see that by 2020, the medical waste impact per dollar of relevant revenue improved by +$0.06 and +$0.04 for Royal Philips and Becton Dickinson and Co respectively.",

                "Not only has this refurbishment eliminated major sources of radioactive and chemical waste, but in both companies, the avenue for resale revenues have been pushed wide open.This bolsters the financials for the company.Resale also has the added knock- on effect of increasing the affordability of large medical devices for hospitals in the developing world, increasing equitable global access to quality healthcare."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1650630251-screen-shot-2022-04-22-at-14-23-21.png"
        },
        {
            type: "text",
            text: [
                "With our focus on impact over intentions at RGS, our results shed light on hidden externalities, and they don't hide performance behind a report-card grade. Using our solution, RIFT, you will be equipped with the right toolset to see the results of further healthcare companies and how their impact compares within the industry and beyond. If you want to find out more, let's talk."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] N.Singh, Y.Tang, and O.A.Ogunseitan, Medical Waste: Current Challenges and Future Opportunities for Sustainable Management, (Feb 2021), Critical Reviews in Environmental Science and Technology",
                    link: ""
                },
                {
                    reference: "[2] International Committee of the Red Cross, Medical Waste Management, 2011",
                    link: ""
                },
                {
                    reference: "[3] R.Stringer, Health Care Without Harm, Medical Waste and Human Rights - Submission to the UNHRC Special Rapporteur, (2011)",
                    link: ""
                },
                {
                    reference: "[4] Association of Medical Device Reprocessors, Reprocessing by the Numbers, (2019)",
                    link: ""
                },
                {
                    reference: "[5] C.C.Zygourakis et al., Operating room waste: disposable supply utilization in neurosurgical procedures, (2017), Journal of Neurosurgery, Vol. 126 Issue 2",
                    link: ""
                },
                {
                    reference: "[6] Koninklijke Philips NV, 2017 - 2020",
                    link: ""
                },
                {
                    reference: "[7] Becton Dickinson and Co, 2018 - 2020",
                    link: ""
                },
                {
                    reference: "Photo by Christian Lue, Unsplash",
                    link: ""
                }
            ]
        },
    ],
    "swimming-in-the-ocean-of-plastics": [
        {
            type: "text",
            text: [
                "Summer is here and sales of soft drinks are peaking [1]. As consumers, we are seeking more, refreshing and flavorful beverages to cool down ourselves and enjoy our barbeque parties with family and friends. However, there is a higher price of those cold fizzy drinks than what we pay for them at the till - and that partly boils down to the plastic bottle which comes with the product.",

                "Beverages is one of many industries using plastics as packaging or product materials due to their unique properties of being lightweight, versatile, waterproof, and cheap.I mean that it is cheap for companies to buy plastics as raw materials, but costly for society.Even if it brings compelling benefits such as food safety and convenience, its durability along with failing waste management systems pose significant challenges.",

                "In fact, the actual cost incurred over the plastic lifecycle is estimated to be at least 10x higher than its market price, and more than 85% of the cost occurs after plastic disposal [2].So what is the actual cost of plastic, who is paying for it, why does it matter and which are the most polluting industries? This series of blog posts reveals new insights for you as a consumer, investor, or executive."
            ]
        },
        {
            type: "title",
            title: "The true cost of plastics - $370 billion versus $3.7 trillion"
        },
        {
            type: "text",
            text: [
                "Based on the price primary plastic producers paid for virgin plastic, the market cost of plastic produced in 2019 was around $370 billion, just over $1,000 per tonne."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1657631646-jv_plastic1_final.png"
        },
        {
            type: "text",
            text: [
                "According to a recent paper by WWF [2], however, the actual lifetime cost of plastic was estimated as US$3.7 trillion for just the plastic produced in 2019 - more than the GDP of India. This figure includes the market cost of plastic, plus the societal lifetime costs of 1) GHG emissions from production and waste management processes, 2) formal and informal waste management, and 3) unmanaged waste in the form of marine plastic pollution. In addition to these are the yet intangible costs, such as the impact of exposure to microplastics which have already been detected in human placentas [3] and human lung tissue [4]."
            ]
        },
        {
            type: "image",
            image: "https://www.datocms-assets.com/64053/1657631652-jv_plastic3.png"
        },
        {
            type: "text",
            text: [
                "Among these societal costs, marine plastic pollution has the worst quantified impact on society and environment. Even though “only” ~ 4% of total plastic production leaks into oceans annually - which is still 12 million tonnes of plastic waste [2] -, plastics take centuries or even millennia to degrade and continue to cause harm even in their most miniscule forms, thereby contributing to the US$3.7 trillion lifetime cost by 85%. As plastic waste poses a large threat to marine life, it leads to a reduction in ecosystem services provided by oceans, a deterioration of revenues for fisheries and tourism, and clean-up activity costs - just to name those costs that can be quantified.",

                "All of these are paid directly or indirectly by governments and therefore by businesses and citizens via taxes or by the direct harm they experience.Hence, the lifetime cost of plastic is a large burden on society as a whole that should be taken into consideration by every decision maker - especially as the volume of plastic leaking into oceans is forecast to grow 3x in the upcoming 20 years[5]."
            ]
        },
        {
            type: "title",
            title: "The largest plastic polluter industries"
        },
        {
            type: "text",
            text: [
                "Fast-moving consumer goods (FMCG) industries are in the spotlight when it comes to plastic pollution as packaging is the most dominant generator of plastic waste. In 2018, 36% of all primary production of plastic was used for packaging and c. 46% of the total global plastic waste was related to packaging [5]. Major FMCG companies have already identified plastic packaging as top 3 ESG issues to tackle and have been evolving their business strategy to gain competitive advantage in circular economy practices due to pressure coming from regulations (e.g. ban on single-use plastics) and rising consumer, employee and investor demand for sustainable practices.",

                "Through the Global Commitment and the Plastics Pact Network of the Ellen MacArthur Foundation, there are already 63 brand & retail signatories committing to change their practices along the plastic lifecycle with concrete targets and yearly reporting [6].For example, all these 63 brands and retailers have pledged to decrease virgin plastics packaging by 19% from 2018 to 2025. Still, c. 80% of this reduction is driven by increasing recycled plastics content which neither addresses the issue with single - use packaging nor provides a solution to eliminate the volume of plastics [6].",

                "At RGS, we capture and quantify the real impact of companies to the world by focusing on the outcomes rather than the initiatives.Stay tuned for our next blog post of this series when we reveal our results for the first time on how the FMCG industries compare to each other in terms of annual volume of plastic packaging, what their relative performance is, how they improved(or not improved) over time, and how their impact translates into monetary terms."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] Grocery Trader, Sparkling Sales: Fizzy Drinks Bring Summer to Life, (2021)",
                    link: "https://grocerytrader.co.uk/sparkling-sales-fizzy-drinks-bring-summer-to-life/"
                },
                {
                    reference: "[2] WWF - World Wide Fund For Nature, Plastics: the costs to society, the environment and the economy, (2021)",
                    link: ""
                },
                {
                    reference: "[3] Ragusa, A.et al., Plasticenta: First evidence of microplastics in human placenta, (2021) Environment International, 146.",
                    link: ""
                },
                {
                    reference: "[4] Amato - Lourenço LF, Carvalho - Oliveira R, Júnior GR, Dos Santos Galvão L, Ando RA, Mauad T., Presence of airborne microplastics in human lung tissue, (2021) J Hazard Mater",
                    link: ""
                },
                {
                    reference: "[5] WWF, the Ellen MacArthur Foundation and BCG, The business case for a UN treaty on plastic pollution, (2020)",
                    link: ""
                },
                {
                    reference: "[6] The Ellen MacArthur Foundation, The Global Commitment 2021 Progress Report, (2021)",
                    link: ""
                },
                {
                    reference: "Image from Unsplash",
                    link: ""
                },
                {
                    reference: "Chart data sources are from WWF - World Wide Fund For Nature, Plastics: the costs to society, the environment and the economy, (2021)",
                    link: ""
                }
            ]
        }
    ],
    "impact-weighted-accounts-what-are-they-and-why-do-we-need-them": [
        {
            type: "text",
            text: [
                "The world of ESG has evolved rapidly over the last 20 years. More than 90% of S&P 500 companies published sustainability reports in 2021, compared to 45% in 2002. Alongside this trend, multiple data providers have developed offerings assessing the ESG performance of these companies.",

                "While the progress in transparency around ESG practices is substantial, certain questions remain around the applications of such information.The reason is that the plethora of ESG metrics make the assessment and comparison of real impact across companies and sectors nearly impossible.Are water withdrawals of 280 billion liters[1] significant in terms of environmental impact ? How does that compare with a data breach affecting more than 400,000 customers[2] or with a 20% reduction in plastic packaging of a key product line?",

                "One might argue that such comparisons are impossible given the vast differences across sectors and business models.But the reality is that we do have ways to compare fundamentally different businesses.The prevalent accounting frameworks have allowed standardization, irrespective of what the business model is, or how the operations of a firm are structured.Comparisons have been made possible by using revenues, market capitalization, gross margins, and other financial metrics.",

                "Similarly, one could convert ESG issues to monetized impacts, or impact- weighted accounts.Impact - weighted accounts are line items on a financial statement, such as an income statement or a balance sheet, supplementing a company's financial performance to reflect their positive and negative impacts on employees, customers, the environment and broader society[3].Impact monetization is by no means a new concept, various economic and political actors are now adopting a cost of carbon in their decision - making.",

                "Applying a similar logic to systematically monetize environmental, employment and product impacts across every industry of the economy is a very challenging endeavor.However, the ability to do this at scale would allow investors to move from the world of engineering(liters of water withdrawn) and cybersecurity(data breaches) to the world of finance(positive and negative impact per dollar of revenue).Monetized impacts could also help investors measure if companies are truly profitable or not.Research from our co- founder George Serafeim found that in the years Lufthansa and American airlines reported healthy profits, accounting for their environmental costs would have made both companies unprofitable.[4] While his research then focused on environmental impacts, we at RGS observe similar trends when looking into an extended dataset of impacts resulting from companies' products and services.",

                "I strongly believe impact transparency is the next stage in the maturity of ESG information.We now have a good understanding of the key ESG issues across industries.The next step is to calculate the real impact these issues have on society and the environment.",

                "Investors, managers, consumers, employees and other stakeholders need impact weighted accounts to benchmark companies, decide where to invest, which products to buy and where to potentially work.There will always be critics, arguing about how to accurately capture the monetary effects of these impacts(we still haven't settled on one cost of carbon!).Yet, if the goal is to bring transparency into corporate impacts and establish a generally accepted way to compare them across companies, this shouldn't be the focus.Critics also expressed skepticism at the possibility of standardizing how firms report their financial accounting in the 1930s.These generally accepted accounting principles are now used globally.When it comes to impact and ESG, perfect shouldn't be the enemy of the good."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] CocaCola Company, 2020",
                    link: ""
                },
                {
                    reference: "[2] British Airways 2018 Cyberattack",
                    link: ""
                },
                {
                    reference: "[3] Harvard Business School, Impact-Weighted Accounts Initiative",
                    link: "https://www.hbs.edu/impact-weighted-accounts/"
                },
                {
                    reference: "[4] Harvard Business Review, The Impact of a Corporate Carbon Tax on Profitability, (2018)",
                    link: "https://hbr.org/2020/09/how-to-measure-a-companys-real-impact"
                }
            ]
        }
    ],
    "every-single-drop-counts-double": [
        {
            type: "text",
            text: [
                "Showering, cooking, and washing dishes or clothes are water-intensive activities, resulting in using up an estimated 10% of Earth's water supply and up to 500 liters of water per person each day in developed countries [1]. Yet it is not only water use that causes concerns - heating and treating water requires energy, so every drop is more energy used, and more carbon emitted simultaneously.",

                "Household and personal care products' manufacturers are usually in the spotlight due to ethical sourcing practices of raw materials, plastic waste, or recalled products, while less attention is given to their carbon emission - for a reason.While traditional ESG data providers focus more on operational emissions that are only a small portion of overall greenhouse gas(GHG) footprint, they miss out on consumer use- phase carbon emissions which can account for up to 90% of GHG footprint in this industry."
            ]
        },
        {
            type: "title",
            title: "The vicious circle of water used"
        },
        {
            type: "text",
            text: [
                "In fact, a vicious circle presents itself at point of use - while water is essential to enjoy these products, hot water use affects climate change and climate change affects the availability of water. Water scarcity in return might induce changes in consumer preferences for products or reduce sales in high water stress areas, as well as impact production capacity and/or increase operational costs (that might be passed on to consumers). Whilst consumer use-phase emissions are especially challenging to reduce, they form the largest opportunity for companies in this space to retain consumers and make an impact in the fight against climate change.",

                "The two main ways manufacturers can address consumer use - phase GHG emissions come down to 1) how products are designed and 2) how consumers act when using them.Industry players have recently been developing or acquiring new brands that allow consumers to use less water, such as dry shampoos or quick - wash laundry detergents, as well as communicating better habits to consumers on product packaging, online, and via campaigns to encourage behavioral change."
            ]
        },
        {
            type: "title",
            title: "Proven industry strategies to address consumer-phase GHG emission"
        },
        {
            type: "text",
            text: [
                "RGS RIFT results show that both strategies bear fruit. For example, the biggest player in the industry, Procter & Gamble (P&G), has been optimizing detergent formulas of its brands Ariel and Tide for high efficiency in low-temperature washing, as well as promoting low-energy wash cycles in their marketing over the past 10 years [1]. Their 2020 goal to have 70% of machine loads be low-energy cycle loads has been achieved, which is reflected by RGS' impact figures as well: P&G's Product Use GHG Impact shows an impressive 25 percentage point improvement between 2016 and 2020.",

                "Another big player, Colgate - Palmolive, has been running the Save Water water conservation awareness initiative since 2016, emphasizing the power of small behavioral tweaks like turning off the tap when brushing teeth.With this campaign, the cumulative water reduction is estimated to be 206 billion gallons and the associated cumulative carbon emissions reduction is approximately 10.8 million metric tons of CO2e[2].As our analysis shows, the latter translates into a 31 percentage point improvement in RGS' Product Use GHG Impact from 2016 to 2020.",

                "Using our solution, RIFT, you will be equipped with the right toolset to see the results of further household and personal care companies and how their impact compares within the industry and beyond.If you'd like to find and learn from the best performing companies with the most positive impact, let's talk."
            ]
        },
        {
            type: "references",
            references: [
                {
                    reference: "[1] P&G Sustainability Full Report 2020",
                    link: ""
                },
                {
                    reference: "[2] Colgate - Palmolive Annual Sustainability & Social Impact Report 2021",
                    link: ""
                },
                {
                    reference: "Photo by Pixabay",
                    link: "https://www.pexels.com/photo/water-drop-220211/"
                }
            ]
        }
    ]
}