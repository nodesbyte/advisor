// // src/services/seedFirestore.js

// import { db } from "./firebaseConfig"; // adjust path if needed
// import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";

// // Your updated services JSON
// const services = [
//         {
//             label: "Advisory",
//             sublinks: [
//                 {
//                     title: "Business Restructuring",
//                     slug: "business-restructuring",
//                     details:
//                         "The IRTH team advises distressed or underperforming entities on turnaround strategies and help in building sustainable organizational structure. We provide:\n• Developing strategy to achieve optimized financial leverage; restructuring/rescheduling debt financing, issuing sub-ordinated debt and public offering. Post-merger integration, amalgamation and carve-out support\n• Strategic workforce and governance realignment; developing and implementing agile organization structure"
//                 },
//                 {
//                     title: "Cybersecurity & Data Privacy",
//                     slug: "cybersecurity-data-privacy",
//                     details:
//                         "The need for cybersecurity resilience and privacy assurance is paramount in today’s digital-first economy. Our advisory ensures:\n• Cyber risk and vulnerability assessments\n• Data protection compliance (GDPR, PDPA, etc.)\n• Development of cybersecurity policies and protocols\n• Incident response planning and simulation"
//                 },
//                 {
//                     title: "Developing Corporate",
//                     slug: "developing-corporate",
//                     details:
//                         "IRTH enables businesses to identify, formulate, and execute growth-centric strategies. We support:\n• Market entry feasibility and opportunity analysis\n• Customer acquisition and retention planning\n• Business model innovation and scenario mapping\n• Strategic planning workshops and execution roadmaps"
//                 },
//                 {
//                     title: "Forensic & Investigations Advisory",
//                     slug: "forensic-investigations-advisory",
//                     details:
//                         "The forensic services team supports legal counsel and boards during internal investigations and complex disputes. We offer:\n• Financial fraud detection and asset tracing\n• Corporate misconduct and whistleblower case reviews\n• Litigation support and expert testimony\n• Regulatory and anti-corruption compliance reviews"
//                 },
//                 {
//                     title: "Legal Analytics & Transaction Advisory",
//                     slug: "legal-analytics-transaction-advisory",
//                     details:
//                         "From deal origination to post-transaction compliance, we provide:\n• Transactional due diligence and legal risk profiling\n• Contract structuring and compliance analytics\n• Valuation and regulatory approval guidance\n• Joint venture governance design"
//                 },
//                 {
//                     title: "Risk Management & Regulatory Compliance",
//                     slug: "risk-management-regulatory-compliance",
//                     details:
//                         "We work with organizations to develop integrated risk and compliance frameworks that meet evolving domestic and international standards. Our services include:\n• Enterprise Risk Management (ERM) design\n• AML / CFT program development\n• FATCA, CRS, and KYC compliance readiness\n• Regulatory health checks and internal audits"
//                 }
//             ]
//         },
//         {
//             label: "Technology Transformation",
//             sublinks: [
//                 {
//                     title: "Core Banking Solution Migration Strategy",
//                     slug: "core-banking-solution-migration-strategy",
//                     details:
//                         "We assist financial institutions with:\n• End-to-end core banking system migration planning, including development of Functional Design Document\n• Data cleansing, mapping, migration, testing, and go-live coordination\n• Regulatory compliance readiness"
//                 },
//                 {
//                     title: "Digital Transformation",
//                     slug: "digital-transformation",
//                     details:
//                         "IRTH enables organizations to modernize operating models and customer journeys through:\n• Help in devising Omnichannel strategy, to provide a consistent and integrated customer experience across all touchpoints\n• Process digitization and back-office automation\n• Cloud migration services and IT governance"
//                 },
//                 {
//                     title: "Financial Analytics Services",
//                     slug: "financial-analytics-services",
//                     details:
//                         "We unlock business intelligence through:\n• Real-time KPI dashboards and scorecards\n• Predictive analytics and scenario planning\n• Profitability, variance, and liquidity analysis"
//                 },
//                 {
//                     title: "Financial & Budget Planning Automation",
//                     slug: "financial-budget-planning-automation",
//                     details:
//                         "• Budget, forecasts planning automation solutions implementation Developing Medium to Long-term strategic financial modeling\n• CAPEX and OPEX optimization roadmaps"
//                 },
//                 {
//                     title: "Blockchain & Digital Assets",
//                     slug: "blockchain-digital-assets",
//                     details:
//                         "We support Web3 readiness and regulatory alignment through:\n• Blockchain use-case assessment and tokenomics\n• Smart contract design and audit readiness\n• Virtual asset compliance (Travel Rule, VASP registration)"
//                 },
//                 {
//                     title: "Business Transformation",
//                     slug: "business-transformation",
//                     details:
//                         "We help clients reinvent their operating models by:\n• Conducting process diagnostics and redesign\n• Process re-engineering to rationalize cost to achieve performance excellence\n• Deploying ERP and BPM tools\n• Introducing Robotic Process Automation (RPA)"
//                 },
//                 {
//                     title: "Business Process Outsourcing (BPO) Services",
//                     slug: "business-process-outsourcing-bpo-services",
//                     details:
//                         "Our managed services model supports:\n• Finance & Accounting, Payroll, and HR outsourcing\n• SLA-based service delivery and operational oversight\n• Customer service and procurement back-office models"
//                 }
//             ]
//         },
//         {
//             label: "ESG Strategy",
//             sublinks: [
//                 {
//                     title: "ESG Strategy Development Services",
//                     slug: "esg-strategy-development-services",
//                     details:
//                         "Our ESG services deliver:\n• ESG baseline maturity assessments\n• Stakeholder and materiality analysis\n• ESG goal setting and KPI framework\n• Climate risk scenario analysis and TCFD reporting\n• ESG-linked governance integration"
//                 }
//             ]
//         },
//         {
//             label: "Tax Advisory",
//             sublinks: [
//                 {
//                     title: "Local & International Tax Advisory",
//                     slug: "local-international-tax-advisory",
//                     details:
//                         "IRTH helps clients manage their tax exposure through:\n• Domestic tax planning and compliance management\n• Sector-specific tax structuring\n• Global mobility and expatriate taxation\n• Double Tax Treaty and BEPS compliance analysis"
//                 },
//                 {
//                     title: "Payroll Tax Compliance",
//                     slug: "payroll-tax-compliance",
//                     details:
//                         "We enable employers to remain audit-ready by:\n• Ensuring accurate withholding and social security treatment\n• Managing benefits-in-kind and tax statements\n• Automating payroll tax calculations and filings"
//                 },
//                 {
//                     title: "Transaction-specific Tax Advisory",
//                     slug: "transaction-specific-tax-advisory",
//                     details:
//                         "For corporate deals, we offer:\n• Tax due diligence and integration planning\n• Reorganization tax mapping and relief claims\n• Cross-border M&A tax optimization"
//                 }
//             ]
//         },
//         {
//             label: "Training & Capacity Building",
//             sublinks: [
//                 {
//                     title: "Customized Corporate Training",
//                     slug: "customized-corporate-training",
//                     details:
//                         "We deliver bespoke learning solutions for:\n• Regulatory compliance and financial reporting\n• Leadership and organizational development\n• Risk management and internal audit proficiency"
//                 },
//                 {
//                     title: "Professional Certification Courses",
//                     slug: "professional-certification-courses",
//                     details:
//                         "Our learning tracks prepare professionals for:\n• Certified AML/CFT compliance credentials\n• ESG and sustainability leadership certifications\n• Financial modeling and data analytics diplomas"
//                 },
//                 {
//                     title: "Workshops, Bootcamps & Seminars",
//                     slug: "workshops-bootcamps-seminars",
//                     details:
//                         "These interactive sessions include:\n• Regulatory updates and market trend briefings\n• Tech enablement and digital transformation seminars\n• Audit, ESG, and data governance bootcamps"
//                 },
//                 {
//                     title: "Train-the-Trainer Programs",
//                     slug: "train-the-trainer-programs",
//                     details:
//                         "We support internal L&D teams by:\n• Training delivery method refinement\n• Content development and learner engagement\n• LMS integration and evaluation models"
//                 }
//             ]
//         }
//     ];
// // Function to clear existing services
// const clearServices = async () => {
//   const servicesCollection = collection(db, "services");
//   const snapshot = await getDocs(servicesCollection);

//   for (const document of snapshot.docs) {
//     await deleteDoc(doc(db, "services", document.id));
//   }

//   console.log("All old services deleted!");
// };

// // Function to seed new services
// const seedServices = async () => {
//   try {
//     // First, clear old data
//     await clearServices();

//     // Then, add new data
//     for (const category of services) {
//       await setDoc(doc(db, "services", category.label), {
//         label: category.label,
//         sublinks: category.sublinks
//       });
//     }

//     console.log("New services seeded successfully!");
//   } catch (error) {
//     console.error("Error seeding services:", error);
//   }
// };

// // Run the seed function once
// seedServices();

// training----------------------------------------------------------------------

// import { collection, doc, setDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // your firebase config file

// const trainings = [
//   {
//     slug: "training-needs-analysis",
//     title: "Training Needs Analysis",
//     description: "Assess employee training needs for skill gaps.",
//     objectives: [
//       "Identify skill gaps in teams",
//       "Align training with organizational goals",
//       "Develop an action plan for employee development",
//     ],
//     targetAudience: "HR professionals, team leads, training managers",
//     duration: "2 days",
//     mode: "On-site / Virtual",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528561/tna_rnbwx4.jpg",
//   },
//   {
//     slug: "training-manuals",
//     title: "Training Manuals",
//     description: "Prepare manuals tailored to company needs.",
//     objectives: [
//       "Understand components of effective manuals",
//       "Design user-friendly content and layouts",
//       "Ensure alignment with SOPs and compliance standards",
//     ],
//     targetAudience: "Instructional designers, trainers, HR teams",
//     duration: "1 day",
//     mode: "Virtual",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528559/trainingm_c5vvup.png",
//   },
//   {
//     slug: "customized-training-syllabi",
//     title: "Customized Training Syllabi",
//     description: "Develop training syllabi tailored to department goals.",
//     objectives: [
//       "Collaborate with departments for relevant content",
//       "Align syllabus with KPIs and goals",
//       "Structure content for optimal learning paths",
//     ],
//     targetAudience: "Learning & Development, Team Leads",
//     duration: "2 days",
//     mode: "Hybrid",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528560/Customized-Training-Syllabi_mgsv9t.jpg",
//   },
//   {
//     slug: "practical-workshops",
//     title: "Practical Application Workshops",
//     description: "Hands-on workshops to implement training concepts.",
//     objectives: [
//       "Apply theoretical knowledge through case studies",
//       "Use simulations and role-playing",
//       "Measure real-time performance and feedback",
//     ],
//     targetAudience: "All staff levels",
//     duration: "1.5 days",
//     mode: "On-site",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528559/practical_ljqu74.jpg",
//   },
//   {
//     slug: "compliance-training",
//     title: "Compliance & Policy Training",
//     description: "Ensure employees understand compliance requirements.",
//     objectives: [
//       "Understand local and global compliance laws",
//       "Follow ethical codes of conduct",
//       "Prevent violations through awareness",
//     ],
//     targetAudience: "All employees",
//     duration: "1 day",
//     mode: "Virtual / On-site",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528560/compliance_ugynjc.jpg",
//   },
//   {
//     slug: "ongoing-support",
//     title: "Ongoing Support",
//     description: "Continuous training support post-deployment.",
//     objectives: [
//       "Track training progress over time",
//       "Provide feedback and refreshers",
//       "Support long-term learning goals",
//     ],
//     targetAudience: "All teams",
//     duration: "Monthly or Quarterly",
//     mode: "Virtual",
//     image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528559/ongoing_bqi6po.jpg",
//   },
// ];

// // ✅ Helper: slugify function (for safety)
// const createDocId = (title) => {
//   return title
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "") // remove special chars
//     .replace(/\s+/g, "-") // spaces → hyphens
//     .replace(/-+/g, "-") // multiple hyphens → single
//     .replace(/^-|-$/g, ""); // trim hyphens
// };

// const uploadTrainings = async () => {
//   try {
//     for (const training of trainings) {
//       const docId = createDocId(training.title); // use title as ID
//       const docRef = doc(collection(db, "trainings"), docId);

//       await setDoc(docRef, training);
//       console.log(`Uploaded: ${training.title}`);
//     }
//     console.log("✅ All trainings uploaded successfully!");
//   } catch (error) {
//     console.error("❌ Error uploading trainings: ", error);
//   }
// };

// uploadTrainings();


// // team----------------------------------------------------------------------
// import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
// import { db } from "./firebaseConfig"; // your firebase config file

// const team=[
//   {
//     "name": "Huzaima Bukhari",
//     "title": "Chief Partner",
//     "email": "huzaima@irthadvisors.com",
//     "image": "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528644/team3_vbyxgk.jpg",
//     "bio": "Ms. Huzaima Bukhari, MA, LLB, Advocate High Court, Visiting Faculty at LUMS, member Advisory Board and Visiting Senior Fellow at PIDE. Recent publication (with Abdul Rauf Shakoori and Ikram Ul Haq): Pakistan Tackling FATF: Challenges & Solutions.",
//     "experience": "Ms. Huzaima Bukhari is the author of numerous books and articles on Pakistani tax laws. Editor of Taxation, partner in Huzaima & Ikram, and Huzaima, Ikram & Ijaz. Served Civil Services of Pakistan (1984–2003). Teaching tax laws since 1987 at institutions including government-run training centers and LUMS. Specializes in international tax, ML/CFT laws, and corporate laws. Co-authored many books with Ikram Ul Haq. Written 1800+ articles on public finance, taxation, economy, and social issues in national and international journals.",
//     "links": [
//       {
//         "label": "Amazon",
//         "url": "https://www.amazon.com/dp/B08RXH8W46"
//       },
//       {
//         "label": "AACP Pakistan",
//         "url": "https://aacp.com.pk/"
//       }
//     ]
//   },
//   {
//     "name": "Dr. Ikram Ul Haq",
//     "title": "Managing Partner",
//     "email": "ikram@huzaimaikram.com",
//     "image": "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528651/team4_apbmwk.jpg",
//     "bio": "Dr. Ikramul Haq, Advocate Supreme Court, specializes in constitutional, corporate, media, cyber laws, ML/CFT, IT, IP, arbitration, and international taxation. Holds LLD in tax laws with specialization in transfer pricing. Recent publication (with Abdul Rauf Shakoori and Huzaima Bukhari): Pakistan Tackling FATF: Challenges & Solutions.",
//     "experience": "Advocate Supreme Court, journalist (Viewpoint & Dawn, 1979–1984), Civil Services of Pakistan (1984–1996). Established Huzaima & Ikram in 1996. Chief Editor of Taxation, correspondent of IBFD, member of IFA, visiting faculty at LUMS, and Senior Fellow at PIDE. Co-authored numerous tax law books with Huzaima Bukhari. Author of Commentary on Avoidance of Double Taxation Agreements, Pakistan: From Hash to Heroin, Pakistan: Drug-trap to Debt-trap, and Practical Handbook of Income Tax. Written 2500+ articles on law, economy, and policy.",
//     "links": [
//       {
//         "label": "Amazon",
//         "url": "https://www.amazon.com/dp/B08RXH8W46"
//       },
//       {
//         "label": "AACP Pakistan",
//         "url": "https://aacp.com.pk/"
//       }
//     ]
//   },
//   {
//     "name": "Tahir Hassan Qureshi",
//     "title": "Senior Partner",
//     "email": "thqabl1@gmail.com",
//     "image": "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528641/team1_sm4o8h.jpg",
//     "bio": "Mr. Tahir Hassan Qureshi, FCA, CPFA-UK, Certified Director, with 36+ years of experience (31 in senior executive roles) in listed banks and financial institutions in Pakistan and UK. Served as CEO, COO, and CFO. Held positions on AML/CFT Supervisory Board for DNFBPs, Appellate Board for Chartered Accountants, and Audit Oversight Board.",
//     "experience": "Extensive executive and non-executive leadership, advisory services, mental health volunteer work in UK, and NHS governance. Expertise in customer franchise growth, ERM, compliance, AML/CFT, cost management, automation, people management, HR digitization, and financial strategy. Led major projects including bank restructuring, privatization, and shared KYC platform. Served on boards including Pakistan Security Printing Corporation and Akhuwat Housing Finance. Skills: Leadership, Risk, Strategy, Compliance, ESG, Banking, Taxation, Audit Oversight.",
//     "links": [
//       {
//         "label": "LinkedIn",
//         "url": "https://www.linkedin.com/in/tahir-hassan-qureshi-8976b5185"
//       }
//     ]
//   },
//   {
//     "name": "Abdul Rauf Shakoori",
//     "title": "Senior Partner",
//     "email": "rauf@irthadvisors.com",
//     "image": "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528641/team2_qk0mtc.jpg",
//     "bio": "Advocate High Court, subject-matter expert on AML-CFT, Compliance, Cyber Crime, and Risk Management. Advisory and training for banks, DNFBPs, investment firms, MSBs, insurance, securities, and law enforcement in USA, Canada, Middle East, and Pakistan. Recent publication (with Huzaima Bukhari & Dr. Ikramul Haq): Pakistan Tackling FATF: Challenges & Solutions.",
//     "experience": "Expertise: strategic planning, cross-border transactions, JVs, M&A, privatization, US Patriot Act, BSA, OFAC. Delivered AML/CFT, Compliance, Fraud, Cybercrime, and Financial Crime training worldwide. Publications include Rauf’s Compilation of Corporate Laws of Pakistan, Rauf’s Company Law and Practice of Pakistan, and Rauf’s Research on Labour Laws and Income Tax. Authored numerous articles on taxation, FATF, compliance, and governance.",
//     "links": [
//       {
//         "label": "Amazon",
//         "url": "https://www.amazon.com/dp/B08RXH8W46"
//       },
//       {
//         "label": "AACP Pakistan",
//         "url": "https://aacp.com.pk/"
//       }
//     ]
//   },
//   {
//     "name": "Syed Nayyar Uddin Ahmad",
//     "title": "Head - Strategic & Global Affairs",
//     "email": "nayyar@irth.advisors.com",
//     "image": "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758528652/team5_sxuynj.jpg",
//     "bio": "Syed Nayyar Uddin Ahmad is a senior corporate executive with 50+ years of leadership in strategic analysis and policy advocacy. His writings and insights have influenced global policymakers and contributed to shaping foreign policy. Phone: +92 321 9402157.",
//     "experience": "Five decades of leadership and policy influence in international strategic affairs. Contributions to policy formulation, diplomacy, and global collaboration. Renowned thought leader and influential commentator in international relations.",
//     "links": []
//   }
// ]
// const createDocId = (name) => {
//   return name
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "") // remove special chars
//     .replace(/\s+/g, "-") // spaces → hyphens
//     .replace(/-+/g, "-") // multiple hyphens → single
//     .replace(/^-|-$/g, ""); // trim hyphens
// };

// const uploadTeam = async () => {
//   try {
//     for (let i = 0; i < team.length; i++) {
//       const member = team[i];
      
//       // Option 1: Use email (most reliable if emails are unique)
//     //   const docId = member.email.split('@')[0].replace(/[^a-z0-9]/g, '-');
      
//       // Option 2: Combine name + index (guaranteed unique)
//       const docId = createDocId(member.name) + `-${i + 1}`;
      
//       // Option 3: Use Firestore auto-generated ID (completely unique)
//       // const docRef = doc(collection(db, "team"));
      
//       // Option 4: Combine name + title
//       // const docId = createDocId(`${member.name}-${member.title}`);
      
//       const docRef = doc(collection(db, "team"), docId);

//       await setDoc(docRef, member);
//       console.log(`Uploaded: ${member.name} (${member.title}) with ID: ${docId}`);
//     }
//     console.log("✅ All team members uploaded successfully!");
//   } catch (error) {
//     console.error("❌ Error uploading team members: ", error);
//   }
// };

// uploadTeam();


// insights-----------------------------------------------------------

// src/seedInsights.js

// import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
// import { firebaseApp } from "./firebaseConfig"; 
// // import data from "./insights"; // your array file

// const firestore = getFirestore(firebaseApp);
// const data = [
//     // magizines
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758868628/magzine1_kg21il.jpg",
//         title: "IRTH Regulatory Updates – Jan 2025 Edition",
//         time: "Posted on 21 Feb at 1:08 pm",
//         category: "magzine",
//         label: "Economy & Policy",
//         slug: "irth-regulary-udpated-Jan-2025",
//         content:
//             "Download PDF: IRTH Regulatory Updates – Jan 2025 Edition. In this edition, we cover regulatory changes impacting the economy and industry. Stay updated on the latest reforms.",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758868631/magzine2_kupuxw.png",
//         title: "E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)",
//         time: "Posted on 23 Apr at 5:48 pm",
//         category: "magzine",
//         label: "Magzine",
//         slug: "e-magazine-april-2025",
//         content:
//             "Download PDF: Pakistan’s Roadmap to Crypto Legalization. This issue highlights key legal developments and policy shifts surrounding the adoption of cryptocurrency in Pakistan.",
//     },
//     // articles
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890133/recent1_awxtnh.png",
//         title: "Transforming FBR",
//         time: "Posted on May 31, 2024",
//         category: "Article",
//         label: "Transforming FBR",
//         slug: "transforming-fbr",
//         description: `
//     Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori
// In the light of dynamic shifts in business and advancements in technology, it is opportune for the Federal Board of Revenue (FBR) to get on a transformation journey. This entails updating its tax administration framework to enhance efficiency and tackle challenges like evasion and counterfeiting. Embracing digital solutions can be important in overcoming these hurdles and promoting transparency in tax processes. By harnessing modern technology, the FBR can streamline operations and fortify its revenue collection efforts. This evolution is essential for aligning with the evolving business environment and unlocking maximum revenue potential. In order to achieve these objectives, proactive steps must be taken to implement innovative solutions and optimize tax management practices. Through such endeavours, the FBR can position itself as a forward-thinking, people-friendly and service-oriented institution adept at meeting the demands of the modern economy.

// An exemplary endeavour by the FBR is the Track & Trace system (TTS), aimed at monitoring goods’ supply at all points and tax compliance. Initially implemented in key sectors like sugar, tobacco, fertilizer, and cement, TTS ensures accurate tax payments. This system meticulously tracks the production and distribution of goods, ensuring tax adherence at every stage. With TTS, the FBR aims to enhance transparency and combat tax evasion effectively.

// The implementation of the TTS by the FBR represents a significant step towards modernizing tax administration. Through this system, taxable goods are endowed with Unique Identification Markings such as barcodes and QR codes, embedding crucial data like origin, manufacturer, and tax information. Furthermore, the system incorporates high-security physical tax stamps on unit packets to bolster tax verification and product authentication efforts.

// Data from the markings and stamps are meticulously recorded into databases, facilitating monitoring and verification procedures. For ensuring effective real-time monitoring, monitoring devices are strategically installed at various checkpoints, manufacturing facilities, and retail outlets. This proactive approach enables the prompt detection of irregularities and unauthorized diversions in the supply chain, ultimately fortifying tax compliance and transparency efforts.

// According to FBR, comprehensive coverage has been attained across the sugar sector since November 2021, ensuring that all products leaving manufacturing sites are duly stamped and labeled. Similarly, industry-wide coverage has been realized in the fertilizer and tobacco sectors since June 2023 and March 2024, respectively.

// As for the cement sector, full industry-wide coverage is slated for completion in the second quarter of 2024. This achievement marks a significant milestone in the implementation of the TTS improving tax compliance and ensuring regulatory oversight across these vital industries.

// The FBR must persist in expanding the scope of TTS to encompass additional sectors, aligning tax collection with the revenue potential of each sector. Pakistan’s revenue generation has consistently fallen short of its expenditure profile, a challenge exacerbated by ineffective tax administration and financial misconduct. Addressing this chronic issue demands a multifaceted approach, with digitization and technological integration playing a pivotal role. By embracing digital solutions, the FBR can streamline tax administration processes, mitigate human error, and combat corruption more effectively.

// The strategic shift towards modernization holds promise for fostering greater transparency, efficiency, and accountability within the tax system, thereby facilitating sustainable economic growth. Expanding the tax net to encompass the retail and informal sectors stands as a fundamental challenge for the FBR, necessitating a holistic approach and leveraging modern technology.

// With the help of data scientist and by harnessing technological tools, such as data from banks, withholding statements, and tax returns of compliant entities, the FBR can effectively assess the tax potential of businesses within these sectors. This strategic utilization of technology enables the identification of potential taxpayers and facilitates the issuance of compliance notices to encourage tax adherence. Adopting innovative solutions empowers the FBR to enhance its outreach and engagement with previously untapped segments of the economy, thereby fostering broader tax compliance and revenue generation.

// The FBR’s recent endeavour, the ‘Tajir Dost Scheme, 2024’ [Traders’ Friendly], is designed to outline the tax scope, filing procedures, and assessment criteria for small traders and shopkeepers with fixed business premises. These establishments, including shops, stores, warehouses, and offices, situated within specified territorial limits, such as Karachi, Lahore, Islamabad, Rawalpindi, Quetta, and Peshawar, fall under the scheme’s purview. Under this initiative, every eligible individual is mandated to remit a monthly advance tax, constituting the minimum tax liability for business income covered by the Tajir Dost scheme. The computation of this monthly advance tax is prescribed in accordance with specified guidelines.

// In cases where the advance tax obligation amounts to zero, a minimum annual payment of Rs. 1200 remains applicable as advance tax. This scheme aims to streamline tax compliance procedures for small traders and foster a culture of regular tax payments within this sector. By providing clear guidelines and standardized procedures, the Tajir Dost Scheme seeks to facilitate ease of tax compliance and contribute to enhanced revenue collection for the government.

// FBR’s focus extends to enhancing efficiency in its litigation and appellate processes, essential for resolving high-stakes tax disputes. The government’s recent enactment of the Tax Laws (Amendment) Act, 2024, marks a significant step in this direction. This legislation introduces amendments to key tax statutes, including the Income Tax Ordinance of 2001, Sales Tax Act of 1990, and Federal Excise Act of 2005. These amendments aim to address complexities and streamline procedures, fostering a more expeditious resolution of tax-related disputes. Such reforms are essential in reposing confidence in the tax regime and promoting fairness and transparency in the adjudication of tax matters.

// The Sales Tax Act has been amended to delineate the appellate process more clearly. Under the revised framework, appeals to the Commissioner (Appeals) are permissible for tax assessments or refunds valued up to Rs. 10 million. Conversely, matters exceeding this threshold fall under the purview of the Appellate Tribunal Inland Revenue. This amendment introduces a tiered approach to appeals, aligning the adjudicative process with the magnitude of the tax assessment or refund in question. By providing distinct avenues for resolution based on the financial stakes involved, the amendment aims to enhance efficiency and expedite the resolution of tax disputes.

// The above measures would contribute to instilling confidence in the tax regime and ensuring equitable access to justice for taxpayers across different scales of financial engagement. The amendment is made in the Income Tax Ordinance 2001, defining the pecuniary jurisdiction for appeals. It specifies that income tax appeals shall be directed to the Commissioner (Appeals) if the tax assessment or refund value does not exceed Rs. 20 million. Appeals surpassing this threshold are to be lodged with the Appellate Tribunal Inland Revenue. The amending law also reduces the appeal period to the High Court from 90 days to 30 days, expediting the adjudication process.

// From FBR’s historical performance, a recurrent pattern emerges, where a tendency to implement uniform solutions. The inclination leans towards modifying withholding rates or instituting fixed rates to augment revenue streams. However, this approach often exacerbates the financial strain on businesses, particularly when coupled with provincial sales taxes. To mitigate this strain, a comprehensive strategy leveraging technology and data on potential taxpayers is important. Such an approach can bolster revenue generation while alleviating the burden on segments subjected to excessive taxation.

// Since the imperative reforms within the FBR are being taken, it is important to acknowledge the legislative responsibility in this regard. Comprehensive laws are indispensable for effective tax administration, and the lack thereof often hampers the FBR’s efforts. The absence of coordination mechanisms among various institutions, including the State Bank of Pakistan (SBP) and Securities and Exchange Commission of Pakistan (SECP), exacerbates the challenges faced by the FBR.

// For moving forward, Pakistan must prioritize financial inclusion and the documentation of the economy to enhance revenue generation. Preferential treatments to specific sectors should cease, and a uniform application of the law is essential for fostering a fair and equitable tax regime. By addressing these fundamental issues and embracing modern technological solutions, the FBR can truly evolve into a forward-looking institution capable of meeting the demands of the contemporary economic environment.
    
    
    
//     `,
//         reference: " Huzaima Bukhari & Dr. Ikramul Haq, lawyers and partners of Huzaima & Ikram, are Adjunct Faculty at Lahore University of Management Sciences (LUMS), members Advisory Board and Visiting Senior Fellows of Pakistan Institute of Development Economics (PIDE). Abdul Rauf Shakoori is a corporate lawyer based in the USA and an expert in ‘White Collar Crimes and Sanctions Compliance’. They have coauthored a book, Pakistan Tackling FATF: Challenges and Solutions",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890134/recent2_py5r3u.png",
//         title: "Taxes for growth & prosperity",
//         time: "Posted on May 31, 2024",
//         category: "Article",
//         label: "Transforming FBR",
//         slug: "taxes-for-growth-&-prosperity",
//         description: `
//      Dr. Ikramul Haq and Abdul Rauf Shakoori
// Fiscal balances improved on the back of strong budget execution and revenue performance. The general government achieved a primary surplus of 1.8 percent of GDP in FY24H1, exceeding projections by 0.4 percent of GDP, driven by strong PDL, excise, and direct tax revenues, which offset lower-than-expected import-related revenues and SBP profits. Federal current spending matched program forecasts, but federal PSDP was significantly under-executed. Provincial overspending was only PRs 136 billion in FY24H1, as Punjab’s total expenditures in FY24Q2 were curtailed to partially offset an earlier overrun. 4 Other provinces’ PSDP is anticipated to remain close to SBA projections given the government’s constraints and the time required for the new government to develop new schemes—IMF Country Report No. 24/105 – May 10, 2024

// In Pakistan, the federal revenue collection process overseen by the Federal Board of Revenue (FBR) encompasses a diverse array of revenue streams. These include general sales tax (GST) on goods, which extends to services in Islamabad Capital Territory (ICT), as well as customs duties and registration fees. Additionally, excise duties on both imported and domestically produced goods, along with levies on oil derivatives and various other fees, contribute to the revenue pool. Within this framework, sales tax, and unclassified revenues, which incorporate income tax and other sources, are key components.

// The calculation of net revenues collected is performed regularly, with cumulative sums tallied from the fiscal year’s outset. Quarterly assessments of FBR’s performance are benchmarked against predefined thresholds derived from cumulative end-of-quarter data. It is noteworthy that the responsibility for levying and collecting sales tax on services was devolved to the provinces under the Eighteenth Constitutional (Amendment) Act, 2010 [“18th Constitutional Amendment]. Consequently, the administration of this tax falls within the provincial domain, except in ICT, targeting services rendered within their respective jurisdictions.

// Pakistan’s tax structure, rather than evolving into a simplified and progressive framework, has grown increasingly convoluted and regressive over time. Businesses now contend with a plethora of taxes, originally hampering their growth prospects, and the continual escalation of rates exacerbates sustainability challenges. This intricate taxation landscape imposes significant burdens on businesses at various stages of the supply chain, adversely impacting cash flow and bloating cost structures. Consequently, consumers face higher prices, contributing to inflationary pressures. It is imperative for taxation experts to recognize these complexities and work towards streamlining policies. By addressing these challenges, Pakistan can create a more conducive environment for business growth and economic stability.

// The elevated cost structure significantly inflates the cost of doing business, thereby compromising returns on investment. Consequently, consumer goods experience price hikes, particularly non-essential items, leading to decreased consumer demand. This phenomenon is particularly pronounced in economies like Pakistan, where parallel challenges such as rampant smuggling and the prevalence of undocumented economic activities exacerbate the situation. As a result, businesses grapple with reduced profitability, hindering their growth potential and contributing to economic instability. Addressing these intertwined issues is paramount for fostering sustainable economic development and mitigating the adverse impact on consumers and businesses alike.

// Incompetence and administrative failures within enforcement agencies significantly impede the growth prospects of compliant sectors, undermining their competitiveness. Moreover, a pervasive issue persists throughout the supply chain, with manufacturers, distributors, and retailers operating outside the tax net, granting them a pricing advantage over compliant counterparts. This discrepancy not only distorts market dynamics but also undermines the viability of tax-compliant businesses. Furthermore, the influx of goods imported through unofficial channels poses a formidable challenge, spanning various categories such as beverages, tobacco, petroleum products, and consumer goods like solar panels.

// The illicit imports not only evade taxation but also disrupt market equilibrium, perpetuating an environment of unfair competition and economic distortion. Addressing these systemic challenges demands concerted efforts to enhance enforcement mechanisms, fortify regulatory frameworks, and promote transparency across all levels of the supply chain. Only through collaborative action can Pakistan foster a business environment conducive to sustainable growth and equitable market participation.

// The widespread availability of these goods throughout Pakistan, spanning urban, rural, and local government jurisdictions, as well as cantonment areas, casts doubt on the effectiveness and commitment of enforcement agencies in addressing this pressing issue. Consequently, the government foregoes substantial revenue streams, resorting instead to costly borrowings or imposing higher tax burdens on compliant taxpayers to offset these losses. This not only exacerbates the financial strain on law-abiding citizens and businesses but also undermines the integrity of the tax system.

// Urgent measures are imperative to curb the proliferation of illicit goods and enhance revenue mobilization efforts. Strengthening enforcement mechanisms, bolstering interagency cooperation, and implementing stringent penalties for offenders are critical steps toward combating this pervasive challenge. Moreover, fostering public awareness and engagement can empower communities to identify and report instances of illicit trade, thereby augmenting enforcement capabilities and safeguarding government revenues. Through concerted action and collective responsibility, Pakistan can mitigate the adverse impacts of illicit trade and foster a more equitable and sustainable economic landscape for all stakeholders.

// Local businesses, typically reliant on financial institutions to support their growth and working capital needs, face significant challenges when borrowing costs are compounded by a policy rate as high as 22 percent. Moreover, the imposition of regressive and anti-growth taxes, such as the super tax, further burdens companies, erodes their capacity to reinvest surplus funds. The application of a one to ten percent tax rate, in addition to the standard 29% corporate tax rate, kicks in once taxable income surpasses Rs. 150 million. This tax burden escalates progressively, reaching up to 10 percent when taxable income exceeds Rs. 500 million, resulting in an overall tax rate of 39 percent.

// The imposition of a 20% Federal Excise Duty (FED) on fruit juices in June 2023 in addition to sales tax of 18 percent led to a significant 40 percent decline in volumes for the formal packaged juice industry. This decline starkly contrasts with its projected growth trajectory. With over 100,000 individuals engaged in its value chain, the fruit-based beverage industry now faces increased unemployment and underutilization of production capacity. Moreover, consumers are turning to cheaper, lower-quality alternatives from the undocumented sector due to the FED, posing health risks and hampering revenue collection efforts. Addressing this issue is necessary in the fortcoming Budget for fiscal year 2024-25 for economic stability and public health, emphasizing the need to maintain access to healthier beverage options.

// Additionally, the decline in fruit procurement has negatively impacted rural economies, emphasizing the importance of supportive policies to safeguard farmers’ livelihoods. Progressive taxation measures and regulatory interventions are essential for promoting sustainable economic development and ensuring the formal juice industry’s long-term viability through collaborative efforts among stakeholders.

// Such punitive tax measures not only stifle entrepreneurial endeavors and discourage investment but also undermine the competitiveness of local businesses in the global market. Addressing these structural impediments is essential for fostering a conducive business environment to ensure sustainable growth and prosperity. Collaborative efforts between policymakers, businesses, and financial institutions are imperative to devise tax policies that incentivize innovation, spur economic activity, and promote inclusive development. Through targeted reforms and strategic interventions, Pakistan can unlock the full potential of its entrepreneurial ecosystem and drive long-term socioeconomic progress.
// ______________________________________________________

// Dr. Ikramul Haq, Advocate Supreme Court, specialises in constitutional, corporate, media, ML/CFT related laws, IT, intellectual property, arbitration and international tax laws. He was full-time journalist from 1979 to 1984 with Viewpoint and Dawn. He served Civil Services of Pakistan from 1984 to 1996. He established Huzaima & Ikram in 1996 and is presently its chief partner. He studied journalism, English literature and law. He is Chief Editor of Taxation. He is country editor and correspondent of International Bureau of Fiscal Documentation (IBFD) and member of International Fiscal Association (IFA). He is Visiting Faculty at Lahore University of Management Sciences (LUMS) and member Advisory Board and Visiting Senior Fellow of Pakistan Institute of Development Economics (PIDE).

// He has coauthored with Huzaima Bukhari many books that include Tax Reforms in Pakistan: Historic & Critical Review, Towards Flat, Low-rate, Broad and Predictable Taxes (revised & Expanded Edition, Pakistan: Enigma of Taxation, Towards Flat, Low-rate, Broad and Predictable Taxes (revised/enlarged edition of December 2020), Law & Practice of Income Tax, Law , Practice of Sales Tax, Law and Practice of Corporate Law, Law & Practice of Federal Excise, Law & Practice of Sales Tax on Services, Federal Tax Laws of Pakistan, Provincial Tax Laws, Practical Handbook of Income Tax, Tax Laws of Pakistan, Principles of Income Tax with Glossary and Master Tax Guide, Income Tax Digest 1886-2011 (with judicial analysis).

// He is author of Commentary on Avoidance of Double Taxation Agreements, Pakistan: From Hash to Heroin, its sequel Pakistan: Drug-trap to Debt-trap and Practical Handbook of Income Tax. Two books of poetry are Phull Kikkaran De (Punjabi 2023) and Nai Ufaq (Urdu 1979 with Siraj Munir and Shahid Jamal).

// He regularly writes columns/article/papers for many Pakistani newspapers and international journals and has contributed over 2500 articles on a variety of issues of public interest, printed in various journals, magazines and newspapers at home and abroad.

// X (formerly Twitter): DrIkramulHaq
// _______________________________________________________________

// Abdul Rauf Shakoori, Advocate High Court, is a subject-matter expert on AML-CFT, Compliance, Cyber Crime and Risk Management. He has been providing AML-CFT advisory and training services to financial institutions (banks, DNFBPs, Investment companies, Money Service Businesses, insurance companies and securities), government institutions including law enforcement agencies located in North America (USA & CANADA), Middle East and Pakistan. His areas of expertise include legal, strategic planning, cross border transactions including but not limited to joint ventures (JVs), mergers & acquisitions (M&A), takeovers, privatizations, overseas expansions, USA Patriot Act, Banking Secrecy Act, Office of Foreign Assets Control (OFAC).

// Over his career he has demonstrated excellent leadership, communication, analytical, and problem-solving skills and have also developed and delivered training courses in the areas of AML/CFT, Compliance, Fraud & Financial Crime Risk Management, Bank Secrecy, Cyber Crimes & Internet Threats against Banks, E–Channels Fraud Prevention, Security and Investigation of Financial Crimes. The courses have been delivered as practical workshops with case study driven scenarios and exams to insure knowledge transfer.

// His notable publications are: Rauf’s Compilation of Corporate Laws of Pakistan, Rauf’s Company Law and Practice of Pakistan and Rauf’s Research on Labour Laws and Income Tax and others.

// His articles include: Revenue collection: Contemporary targets vs. orthodox approach, It is time to say goodbye to our past, US double standards, Was Due Process Flouted While Convicting Nawaz Sharif?, FATF and unjustly grey listed Pakistan, Corruption is no excuse for Incompetence, Next step for Pakistan, Pakistan’s compliance with FATF mandates, a work in progress, Pakistan’s strategy to address FATF Mandates was Inadequate, Pakistan’s Evolving FATF Compliance, Transparency Curtails Corruption, Pakistan’s Long Road towards FATF Compliance, Pakistan’s Archaic Approach to Addressing FATF Mandates, FATF: Challenges for June deadline, Pakistan: Combating the illicit flow of money, Regulating Crypto: An uphill task for Pakistan. Pakistan’s economy – Chicanery of numbers. Pakistan: Reclaiming its space on FATF whitelist. Sacred Games: Kulbhushan Jadhav Case. National FATF secretariat and Financial Monitoring Unit. The FATF challenge. Pakistan: Crucial FATF hearing. Pakistan: Dissecting FATF Failure, Environmental crimes: An emerging challenge, Countering corrupt practices .
//      `,
//         reference: "The recent publication, coauthored by these writes with Huzaima Bukhari, is Pakistan Tackling FATF: Challenges & Solutions, available",
//         link: "https://www.amazon.com/dp/B08RXH8W46",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890133/recent3_ps0ttz.jpg",
//         title: "Reform agenda for 2024 budget",
//         time: "Posted on Apr 10, 2024",
//         category: "Article",
//         label: "Reform agenda",
//         slug: "reform-agenda-for-2024-budget",
//         description: `
//     Dr. Ikramul Haq & Abdul Rauf Shakoori
// The federal government is expected to present budget 2024 for the fiscal year (FY) 2024-25 on June 7, 2024. This will be the first budget of the government of Pakistan Muslim League Nawaz (PMLN) after coming into power in the wake of general elections of February 8, 2024. It is led by the second time elect Prime Minister, Shehbaz Sharif, who earlier served under 16-month tenure of Pakistan Democratic Movement (PDM) that began after ousting Prime Minister Imran Khan through a first time successful vote of no confidence in Pakistan’s history on April 9, 2022.

// The significance of this budget cannot be overstated, as Pakistan is currently grappling with formidable economic challenges. The country is struggling to meet its balance of payment needs and is negotiating a new bailout package from the International Monetary Fund (IMF). This new package is important for stabilizing economy, which is facing historically low GDP growth of just around 3%. Additionally, the policy rate of 22%, coupled with stagflation, poses a challenging scenario, both for consumers and businesses. Despite the government’s claims of achieving the lowest inflation rate in the last 23 months, it remains alarmingly high at 17.3%.

// The upcoming budget is therefore critical, as it will not only have to address perpetual economic woes, but also show a pathway to recovery. The government’s focus will likely be on measures to control inflation, stimulate economic growth, provide relief to the common people and to balance fiscal responsibility with necessary expenditure to support the economy. Pakistan’s negotiations with the IMF are particularly important in this context. Securing a new package will not only help stabilize the economy but also build investors’ confidence. The government thus needs to demonstrate a commitment to introduce economic reforms with prudent fiscal management to secure IMF’s support.

// However, the critical aspect that could provide relief to both the common people and businesses hinges on measures announced in the budget for revenue mobilization and deficit reduction. Effective steps in this direction would not only reduce reliance on global lenders like the IMF but also facilitate the initiation of essential infrastructure and social sector development projects. This dual approach could stimulate economic growth, create jobs, and improve public services, thereby enhancing overall economic stability.

// Undoubtedly, the daunting challenge ahead for the government is to reduce the fiscal deficit, which was recorded at around 7% of the GDP for the fiscal year 2023-24 and expected to further widen this year. The upcoming budget will reveal the government’s strategy to address this issue, whether through effective revenue generation measures or by cutting crucial development expenditures. Balancing these priorities will be critical in determining the country’s economic trajectory.

// The federal and provincial governments must recognize that with rapidly growing population, delaying long-overdue structural reforms is not an option. Comprehensive tax reforms are essential to bring the tax-to-GDP ratio in line with the country’s economic profile otherwise the government’s struggle to generate sufficient revenue to support essential public services and development projects will continue. Moreover, reducing the fiscal deficit is not just a matter of economic policy but a necessity to ensure long-term financial stability.

// Achieving prudent and consistent revenue targets is contingent upon documenting the economy. The Small and Medium Enterprises Development Authority (SMEDA) estimates that the informal sector constitutes around 40% of the economy. Similarly, the World Bank reported an informal economy size of approximately $457 billion in 2022. Implementing measures to formalize this substantial portion of the economy will not only enhance monitoring of economic activities but also significantly boost tax-to-GDP ratio. Formalization will lead to better compliance, increased transparency, and ultimately, a more robust and equitable economic framework.

// While documenting the economy, the government needs to simplify taxation laws and address the concerns of businesses. The upcoming budget should address issues related to capital gains tax (CGT), super tax etc. Introducing conducive tax system is essential to attract local and foreign investors.

// The government must settle the issue of inter-corporate dividends, minimum tax requirements for listed companies, and jurisdictional conflicts over sales tax on services. Additionally, issues like the minimum advance tax on turnover, determining market value of properties, and the use of fake retailer profiles need to be resolved. This would create a business-friendly environment and foster economic growth.

// Pakistan has experienced substantial investment inflows exceeding US$60 billion through China-Pakistan Economic Corridor (CPEC), marking the completion of its initial phase. However, there is ongoing debate regarding whether this influx constitutes investments or loans regardless of which, Pakistan has yet to realize significant benefits from these investments. The anticipated revenue generation potential of CPEC projects has not materialized, resulting in adverse consequences due to project delays.

// On the one hand, Pakistan bears a considerable portion of its loans to China, posing a significant burden on its treasury, and on the other, the imposition of capacity charges has exacerbated the hardships faced by the nation. Despite substantial investments in infrastructure, key projects such as the Gawader port remain non-operational, casting doubt on the efficacy of funds allocated. Furthermore, Pakistan’s efforts to establish economic zones to attract investments have fallen short of expectations outlined in the CPEC agreement.

// Foreign investment in economic zones has been minimal, with China itself refraining from investing, as a result, these have yet to achieve full operational capacity, leading to a shortfall in anticipated investments, hindering revenue generation efforts. Consequently, Pakistan faces challenges in both revenue generation and debt servicing. The forthcoming budget is important in addressing these critical challenges by presenting comprehensive strategies to make these zones operational, stimulating investment, and fostering job creation opportunities for its citizens.

// Additionally, the upcoming budget should prioritize addressing the concerns of exporters and provide incentives to augment local manufacturing. Despite Pakistan’s strategic location amid a region with population exceeding three billion, its textile sector is struggling to expand its export share, due to non-competitive energy tariff in the region making it imperative for the government to thoroughly consider this matter and provide policy guidelines accordingly.

// This may involve amending existing laws related to income tax, sales tax, federal excise duty and customs duties to facilitate a conducive environment for export growth. Additionally, our foreign office should explore offering incentives to investors from neighboring countries to encourage their participation in cross-border trade and investment activities for revitalizing the export sector.

// While Pakistan’s dependence on foreign remittances is undeniable, the country has yet to fully leverage its skilled human capital to enhance remittance inflows and bolster its foreign policy objectives. By prioritizing export of skilled labour, Pakistan could achieve dual benefits i.e, increased remittances and foreign investment.

// A proactive approach entails empowering Pakistan’s foreign offices to engage with local private sectors and incentivize them to accommodate skilled Pakistani workers. This initiative holds the potential for substantial long-term gains, including generation of foreign exchange and attracting foreign investment. Moreover, it serves as a strategic driver for advancing Pakistan’s foreign policy objectives on the global stage. Pakistan faces significant challenges posed by trade-based money laundering, largely stemming from a large informal economy. This phenomenon exacts a considerable toll on our economic stability for which, the forthcoming budget must delineate clear directives for the comprehensive registration of all businesses and digitization of their operations.

// Comprehensive measures in budget 2024 hold the promise of mitigating various illicit practices, including the proliferation of fictitious invoices, instances of under and over-invoicing, and misclassification of manufacturers. By formalizing business activities and transitioning to digital platforms, Pakistan stands to fortify its financial integrity framework and foster a more transparent and conducive business environment.
//     `,
//         reference: "Dr. Ikramul Haq, an advocate of the Supreme Court and writer is an adjunct faculty at Lahore University of Management Sciences (LUMS). Abdul Rauf Shakoori is a corporate lawyer based in the USA.",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890133/recent4_e3qh19.jpg",
//         title: "NAB & Judiciary",
//         time: "Posted on Apr 12, 2024",
//         category: "Article",
//         label: "NAB & Judiciary",
//         slug: "nab-&-judiciary",
//         description: `
//     Who will mind the minders?
// Dr. Ikramul Haq & Abdul Rauf Shakoori
// A fair and effective accountability mechanism is essential for ensuring progress and stability, serving as the foundation for any governance system. Such mechanisms are vital for rooting out corruption, fostering transparency, and building trust in public institutions. However, in Pakistan, the accountability system is mostly compromised, failing to deliver its intended objectives. Unlike other state institutions designed to aid in governance and service delivery, the National Accountability Bureau (NAB) was established with an agenda that deviated from these principles. Instead of focusing solely on promoting accountability and integrity, NAB is perceived as a tool for political gerrymandering, and victimization of public office holders. This has undermined its credibility and effectiveness.

// Addressing corruption is important for the country’s progress as it directly impacts economic growth, social equity, and public trust. Effective accountability not only deters corrupt practices but also ensures that resources are used efficiently and for the public good. For Pakistan to achieve sustainable development, it is imperative to reform accountability mechanisms to be unbiased, transparent, and focused on genuine anti-corruption efforts. Only then can the nation move towards a future where governance is truly effective and serves interests of all its citizens.

// NAB was formed by late General Pervez Musharraf, a military dictator and usurper who was convicted for high treason under Article 6 of the Constitution of Islamic Republic of Pakistan [“the Constitution”]. The National Accountability Ordinance of 1999 [NAO, 1999], made effective retrospectively from Janaury 1, 1985, was in violation of Article 12 of the Constitution.

// Following the October 12, 1999 military coup and seizure of power by General Pervez Musharraf, NAB was handed over to a retired general, Lt General Mohammad Amjad. From 1999 to 2007, the institution was dominated by retired army personnel who manipulated the so-called accountability bureau as a tool for political victimization and advancing their own agenda. Those who aligned with General Musharraf’s political designs were shielded from NAB’s scrutiny, while those who refused to cooperate faced severe repercussions.

// This abuse of NAB not only compromised its credibility but also undermined the very essence of accountability and justice. For Pakistan to move forward, it is critical to reform NAB and similar institutions to ensure they operate transparently and impartially. Reformation of these institutions is essential for restoring public trust and ensuring that justice is served uniformly and fairly. This will pave the way for sustainable development and true democracy in Pakistan. An accountable and transparent system is necessary for eradicating corruption and promoting national progress, highlighting the importance of robust action and unwavering commitment to justice and integrity.

// The institution’s capability has never been sufficient to achieve the objectives of accountability and combat corruption. This is evident from the fact that the heads of these institutions have consistently been retired generals or judges with no expertise or experience in financial crimes investigation and even the department’s key position holder’s qualification is compromised with the Supreme Court of Pakistan inquisitive about their appointments although it is not their field.

// NAO 1999 grants NAB unbridled, unjust and arbitrary powers, allowing them to initiate inquiries and arrest politicians and bureaucrats based on anonymous applications, even in the absence of evidence to substantiate such accusations. People were detained during inquiry stage and jailed for prolonged periods without sufficient evidence to prove their case. These detentions extended beyond regular public officials; even the former prime ministers were convicted on false charges, which were later overturned by High Courts and Supreme Court of Pakistan. Recently, a former prime minister who endured incarceration faced cases of fake corruption charges until recently when NAB withdrew the case against him.

// On the other hand, courts have also thoughtlessly disregarded fundamental breaches of human rights. Politicians were unjustly denied bail, with their cases not even being listed for months while they remained in jail in the name of investigation. Many cases were ultimately dismissed in higher courts due to inadequate investigation and lack of evidence, yet NAB failed to rectify its approach, instead continuing onto aligning with the specific agenda. It is disappointing that our military establishment and judiciary are eager to hold politicians and bureaucrats “accountable,” yet when it comes to their own peers, they rely on internal “self-accountability” mechanisms.

// The case in point is of a judge of Islamabad High Court (IHC) allegedly holding American Green Card that has drawn significant attention. Upon this revelation, criticisms were leveled against the judge, particularly through social media channels. In response to public scrutiny, the hounourable judge issued clarification that he had disclosed this fact to the Chief Justice of IHC prior to his elevation to the bench. However, significant concerns arise from the absence of any written reference in the release, specifying the Chief Justice of High Court as the competent authority for such declarations or submissions.

// Controversy surrounding judges allegedly having a green card has ignited a debate regarding the ethical conduct of judges of higher judiciary. Many believe this campaign in social media took place after exposure of certain agencies of meddling in judicial affairs. The case is presently before the Supreme Court in the wake of a letter by six judges of the IHC written to Supreme Judicial Council.

// Under normal circumstances, foreign affiliations of a judge, would certainly raise serious questions about adherence to moral standards, but in the prevailing circumstances it appears part of a nefarious campaign to undermine the higher judiciary. While dual citizenship poses no obstacle under the law for a judge’s selection, transparency and public disclosure are essential criteria for holding such a prestigious position.

// This incident also highlights the judiciary’s handling of conflicts of interest and the disclosure of such matters, emphasizing the necessity for clear legal guidelines to govern these situations. Moreover, it highlights the pressing need for enhanced transparency and accountability within the judiciary to uphold public confidence in the judicial system. In the recent past the same judiciary, handled a highly publicised case where the sitting prime minister had to face disqualification solely due to his failure to declare affiliation in a foreign company and non-declaration of receivable salary. Discrepancy in the application of law illustrates double standards wherein judges and politicians are treated with different legal standards.

// The fact that a judge deemed it adequate to merely inform a colleague about the matter, without further repercussions, is concerning. Ideally, the court should have elaborated on why it did not allow the former prime minister or any of his fellow parliamentarians to rectify and to include it in their nomination papers. This situation emphasizes the need for greater transparency and consistency in application of legal principles, ensuring fairness and accountability across all levels of governance and the judiciary.

// The age-old maxim quis custodiet ipsos custodes (who will guard the guardians themselves?) remains persistent Concern arises as to whether the custodians of justice will continue to function without public disclosures of their assets and liabilities and dual citizenships. When it comes to accountability, it appears that fellow judges convene to determine the fate of each other. Even within the Supreme Judicial Council, instances have occurred where no further action was taken, particularly when a judge opted for resignation. This approach seems even more lenient than the “plea bargain” model employed by NAB, wherein an accused individual must surrender certain financial proceeds before the case is closed.

// Accountability stands as one of the most crucial pillars of governance. However, its effectiveness is compromised unless it is applied fairly and uniformly across the board. No individual should be considered untouchable or exempt from the law’s reach, regardless of their position or authority. Thus, ensuring accountability within the judiciary requires a comprehensive and impartial approach that holds all accountable, and without exception.

// Surprisingly, the present NAB Chairman has begun personally apologizing to people wronged by the Bureau, including politicians, bureaucrats, and businessmen, acknowledging past mistreatment in the name of accountability. Lt Gen (R) Nazir Butt’s initiative involves visiting victims and their families to offer apologies, aiming to redress the wounds inflicted by NAB’s actions.

// Additionally, the media reported that NAB’s standard operating procedures (SOPs) regarding the arrest and interrogation of parliamentarians indicate a significant change in protocol. It is reported that under the new procedures, any complaints against a member of parliament will prompt notification to the Speaker National Assembly and Chairman Senate. Particularly, parliamentarians will not be detained during inquiries based solely on allegations. Violations of these SOPs by officials may result in imprisonment for up to one year and a fine of one million rupees. NAB has requested the Speaker National Assembly’s assistance in enacting these revised SOPs, reflecting a collaborative effort towards procedural reform.

// This proactive step is truly commendable. It is necessary for the NAB to revise its SOPs ensuring strict confidentiality regarding all corruption-related inquiries until a case is officially filed in court. Furthermore, arrests should only occur after a court’s verdict, affirming the individual’s guilt. This approach not only safeguards the institution’s integrity and shields it from undue political interference but also preserves fundamental rights like privacy, liberty, and fair trial.
// ______________________________________________________

// Dr. Ikramul Haq, Advocate Supreme Court, specializes in constitutional, corporate, media, and cyber laws, ML/CFT, IT, intellectual property, arbitration, and international taxation. He holds an LLD in tax laws with a specialization in transfer pricing. He was a full-time journalist from 1979 to 1984 with Viewpoint and Dawn. He served Civil Services of Pakistan from 1984 to 1996. He established Huzaima & Ikram in 1996 and is presently its chief partner. He studied journalism, English literature, and law. He is Chief Editor of Taxation. He is the country editor and correspondent of the International Bureau of Fiscal Documentation (IBFD) and a member of the International Fiscal Association (IFA). He is a Visiting Faculty at Lahore University of Management Sciences (LUMS) and member Advisory Board and a Visiting Senior Fellow of Pakistan Institute of Development Economics (PIDE).

// He has coauthored with Huzaima Bukhari many books that include Tax Reforms in Pakistan: Historic & Critical Review, Towards Flat, Low-rate, Broad and Predictable Taxes (revised & Expanded Edition, Pakistan: Enigma of Taxation, Towards Flat, Low-rate, Broad and Predictable Taxes (revised/enlarged edition of December 2020), Law & Practice of Income Tax, Law , Practice of Sales Tax, Law and Practice of Corporate Law, Law & Practice of Federal Excise, Law & Practice of Sales Tax on Services, Federal Tax Laws of Pakistan, Provincial Tax Laws, Practical Handbook of Income Tax, Tax Laws of Pakistan, Principles of Income Tax with Glossary and Master Tax Guide, Income Tax Digest 1886-2011 (with judicial analysis).

// He is author of Commentary on Avoidance of Double Taxation Agreements, Pakistan: From Hash to Heroin, its sequel Pakistan: Drug-trap to Debt-trap and Practical Handbook of Income Tax. Two books of poetry are Phull Kikkaran De (Punjabi 2023) and Nai Ufaq (Urdu 1979 with Siraj Munir and Shahid Jamal). He regularly writes columns for many Pakistani newspapers and international journals and has contributed over 2500 articles on a variety of issues of public interest, printed in various journals, magazines and newspapers at home and abroad.

// X (formerly Twitter): DrIkramulHaq
// ____________________________________________

// Abdul Rauf Shakoori, Advocate High Court, is a subject-matter expert on AML-CFT, Compliance, Cyber Crime and Risk Management. He has been providing AML-CFT advisory and training services to financial institutions (banks, DNFBPs, Investment companies, Money Service Businesses, insurance companies and securities), government institutions including law enforcement agencies located in North America (USA & CANADA), Middle East and Pakistan. His areas of expertise include legal, strategic planning, cross border transactions including but not limited to joint ventures (JVs), mergers & acquisitions (M&A), takeovers, privatizations, overseas expansions, USA Patriot Act, Banking Secrecy Act, Office of Foreign Assets Control (OFAC).

// Over his career he has demonstrated excellent leadership, communication, analytical, and problem-solving skills and have also developed and delivered training courses in the areas of AML/CFT, Compliance, Fraud & Financial Crime Risk Management, Bank Secrecy, Cyber Crimes & Internet Threats against Banks, E–Channels Fraud Prevention, Security and Investigation of Financial Crimes. The courses have been delivered as practical workshops with case study driven scenarios and exams to insure knowledge transfer.

// His notable publications are: Rauf’s Compilation of Corporate Laws of Pakistan, Rauf’s Company Law and Practice of Pakistan and Rauf’s Research on Labour Laws and Income Tax and others.

// His articles include: Revenue collection: Contemporary targets vs. orthodox approach, It is time to say goodbye to our past, US double standards, Was Due Process Flouted While Convicting Nawaz Sharif?, FATF and unjustly grey listed Pakistan, Corruption is no excuse for Incompetence, Next step for Pakistan, Pakistan’s compliance with FATF mandates, a work in progress, Pakistan’s strategy to address FATF Mandates was Inadequate, Pakistan’s Evolving FATF Compliance, Transparency Curtails Corruption, Pakistan’s Long Road towards FATF Compliance, Pakistan’s Archaic Approach to Addressing FATF Mandates, FATF: Challenges for June deadline, Pakistan: Combating the illicit flow of money, Regulating Crypto: An uphill task for Pakistan. Pakistan’s economy – Chicanery of numbers. Pakistan: Reclaiming its space on FATF whitelist. Sacred Games: Kulbhushan Jadhav Case. National FATF secretariat and Financial Monitoring Unit. The FATF challenge. Pakistan: Crucial FATF hearing. Pakistan: Dissecting FATF Failure, Environmental crimes: An emerging challenge, Countering corrupt practices .
//     `,
//         reference: "The recent publication, coauthored with Huzaima Bukhari, is.Pakistan Tackling FATF: Challenges & Solutions available at:",
//         link: "https://www.amazon.com/dp/B08RXH8W46"
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890133/recent5_xf45p1.jpg",
//         title: "Inevitable tax reforms",
//         time: "Posted on Apr 14, 2024",
//         category: "Article",
//         label: "Inevitable tax reforms",
//         slug: "inevitable-tax-reforms",
//         description: `
//     Dr. Ikramul Haq & Abdul Rauf Shakoori
// The signs of economic stabilization are strengthening, with gradual disinflation underway and external pressures easing further since the first review on the back of improved fiscal balances. However, the outlook remains challenging, with downside risks remaining exceptionally high—IMF Country Report No. 2024/105, Executive Summary of Second and Final Review of Stand-by Arrangement, May 10, 2024

// Pakistan’s engagement with the International Monetary Fund (IMF) under the 9-month US$3 billion Stand-By agreement (SBA) has yielded satisfactory results, confirming the government’s steadfast commitment to economic reform and stability. Through diligent implementation of the SBA, both elected and interim governments have successfully steered the country towards financial resilience. Enhanced revenue mobilization and prudent spending have led to a primary surplus during the first nine months of the current fiscal year. The surplus amount of Rs. 1.615 trillion (1.5% of GDP), is significant improvement compared to Rs. 503.774 billion (0.6% of GDP) in the corresponding period of last fiscal year. This shows that Pakistan is on the path to recovery with better fiscal management and sustainable growth strategies.

// An encouraging trend that emerged in tax collection is now fading. The data released by the Ministry of Finance revealed 30 percent growth in revenue collection by the Federal Board of Revenue (FBR) in the first nine months of the ongoing fiscal year as tax collection reached Rs. 6.71 trillion, up from Rs. 5.15 trillion in the corresponding period of preceding year. Notably, federal excise duty registered 64.2 percent increase, while direct taxes 41.4 percent. Sales tax and customs duty also registered healthy growth, rising by 17.7 percent and 15.2 percent respectively.

// However, amidst this robust performance, there are reports of shortfall of Rs. 163 billion to Rs. 183 billion on the part of FBR in meeting annual target of Rs. 9.415 trillion. It is worrisome that FBR missed its 10-month target by Rs. 52 billion—it collected Rs. 7.362 trillion against the target of Rs. 7.414 trillion. The collection of April 2024 at Rs. 650 billion was short of target by Rs. 57 billion.

// It is a fact that Pakistan continues to grapple with serious challenges on fiscal front. The repercussions of imprudent borrowing and extravagant spending, spanning both developmental and non-developmental domains, have exacerbated our fiscal predicament. Although there has been an increase in the absolute number of taxpayers, the growth in real terms, when juxtaposed with GDP, remains disappointingly sluggish.

// The tax-to-GDP ratio emerges as a pivotal gauge, shedding light on tax compliance, capacity, and efficacy within the national taxation framework. Improving this ratio, which remained at 6.9 percent in the first nine months of the current fiscal year, has now assumed paramount importance in fortifying fiscal sustainability and fostering economic resilience. Addressing these challenges demands strategic reforms in FBR and prudent fiscal management, steering Pakistan towards a path of enduring fiscal health and prosperity.

// Enhanced tax collection, coupled with a higher tax-to-GDP ratio, expands the fiscal leeway for the government, enabling organic revenue generation domestically, thereby reducing reliance on borrowing. However, Pakistan’s tax-to-GDP ratio has persistently remained low over the years. Examining recent data yields intriguing observations: the ratio stood at 8.8% in FY-2009, rose to 9.8% by FY 2018, but subsequently witnessed a decline, plummeting to 8.5% in FY-2021 following a peak of 9.2% in FY 2022. This trend underlines the need for concerted efforts to bolster tax compliance and broaden the tax base, ensuring sustainable fiscal growth and reducing dependency on external financing. Achieving a higher and stable tax-to-GDP ratio is imperative for fortifying the country’s fiscal resilience and fostering long-term economic stability.

// During a pre-budget conference, Federal Minister for Finance and Revenue, Muhammad Aurangzeb, emphasized the necessity of enhancing the tax-to-GDP ratio, highlighting a commitment to comprehensive reform. Achieving this goal demands a multifaceted strategy encompassing digitalization of the tax infrastructure, improved collection methods, broadening the tax base, and fostering transparency in operations. Despite this acknowledgment, insufficient attention has been directed towards addressing the issue of a narrow tax base. Major sectors such as agriculture, retail, and real estate either evade taxation altogether or face disproportionately lower tax rates relative to their potential contributions.

// The proliferation of exemptions and concessions exacerbates distortions within the tax framework, fostering an environment of unequal treatment among taxpayers and sectors. This inequity undermines the integrity of the tax system and perpetuates disparities in fiscal obligations. In order to rectify these shortcomings, concerted efforts must be undertaken to streamline taxation policies, eliminate preferential treatment, and incentivize compliance across all sectors of the economy. By fostering a fair and equitable tax regime, Pakistan can unlock untapped revenue streams, fortify fiscal sustainability, and propel economic growth.

// In addition to addressing current fiscal challenges, the Pakistani government has also made significant strides in implementing SBA. This includes the introduction of a scheme aimed at registering retailers and enforcing tax filing to bolster revenue collection. Initially scheduled for launch at the beginning of the calendar year, the scheme has been recently rolled out, albeit with some delay.

// As outlined in SRO 457(I) /2024, which delineates a special procedure for small traders and shopkeepers in key urban centers such as Karachi, Lahore, Islamabad, Rawalpindi, Quetta, and Peshawar, these entities are mandated to pay monthly advance taxes effective from July 1, 2024, for the relevant tax year. The first payment is due on July 15, 2024, followed by subsequent payments on the 15th day of each month thereafter. This initiative aims to enhance tax compliance among retailers, ensuring the government receives its rightful revenue share and thereby contributing to fiscal stability and economic development.

// FBR’s transition into a semi-autonomous body is essential to its ability to strategize, plan, and execute revenue mobilization efforts independently, devoid of political interference. It is imperative that amidst its operations, FBR undertakes this transformation. Additionally, FBR must proactively tackle challenges like tax evasion, the informal economy, smuggling of goods, lack of automation, and litigation. By granting FBR greater autonomy and authority, Pakistan can bolster its capacity to effectively combat these issues and optimize revenue collection. Moreover, investing in advanced technological solutions and streamlining legal processes will further strengthen FBR’s capabilities. Ultimately, these initiatives will foster fiscal transparency, fortify the economy, and facilitate sustainable development.

// Pakistan needs to improve its legal framework for expeditious resolution of tax disputes, as delays inflict significant losses on the national exchequer. Recent news reports reveal a staggering backlog of 145,036 cases across various courts, involving disputed sum of Rs. 4.23 trillion. Specifically, at the Supreme Court level, 3,455 tax-related cases with a total sum of Rs. 1.40 trillion remain unresolved, while at the High Court levels, 19,528 cases involving Rs. 740 billion await adjudication. This pressing issue requires focused attention to streamline processes and ensure timely and enhanced revenue collection to expedite tax dispute resolution, thus paving the way for a conducive business environment. By doing so, we can mitigate financial losses, stimulate economic growth, and attract foreign investment. Consequently, this will fortify GDP growth, maintain fiscal equilibrium, and drive overall development, leading to heightened per capita income and reduced inflation rates.
    
//     `,
//         reference: "Dr. Ikramul Haq, an advocate of the Supreme Court and writer is an adjunct faculty at Lahore University of Management Sciences (LUMS). Abdul Rauf Shakoori is a corporate lawyer based in the USA.",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890135/recent6_r7sq3g.jpg",
//         title: "Fundamental reforms for survival",
//         time: "Posted on Apr 16, 2024",
//         category: "Article",
//         label: "Fundamental reforms for survival",
//         slug: "fundamental-reforms-for-survival",
//         description: `
//    Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori
// Pakistan is persistently confronting economic challenges, the resolution of which hinge on IMF’s new program, future conditions and Pakistan’s adherence to them with the hope of regaining the path to economic prosperity. If secured, this would mark Pakistan’s third IMF program since 2019. The Extended Fund Facility (EFF) worth $6 billion later extended to $7 billion ended prematurely in June 2023. Subsequently, on Prime Minister Mian Muhammad Shahbaz Sharif’s request, Pakistan signed a $3 billion standby arrangement (SBA) in July 2023. Now, negotiations are underway for a new agreement with the IMF.

// While this prospective program is critical for Pakistan’s economic development and survival, concerns have emerged regarding IMF team’s inaccurate estimates of Pakistan’s current account deficit and potential loan payments. These discrepancies have sparked debate within Pakistan.

// Despite completing the 9th review process, delays in signing staff-level agreements and disbursing payments have resulted in a premature lapse of the Extended Fund Facility (EFF) forcing the government to impose stringent conditions in a bid to stabilize the economy, triggering inflation and policy rate hikes, which have caused overall business climate to become gloomy. Furthermore, adherence to harsh conditions has bred uncertainty, particularly impacting importers who incurred significant losses due to strict import restrictions. Moreover, the looming threat of default has negatively affected foreign investments, among many other sectors.

// Implications of these rigorous measures, rooted in erroneous calculations, have rippled across the economy, impacting SMEs, exports, and the populace at large. Pakistan has borne significant losses and remains entrenched in financial struggles as a result. Now, questions emerge regarding IMF’s revised estimates for current account deficit and disbursements of liabilities. Should IMF’s managing director hold her team accountable for this gross negligence?

// In addition, concerns arise regarding competence of the IMF team and the necessity for investigations into potential political motives behind these miscalculations. Clarity and accountability are essential to restoring trust and stability for Pakistan’s economic growth. IMF’s latest report acknowledges emerging signs of economic stability marked by a gradual decline in inflation and ongoing relief from external pressures noted at the initial review yet the overall economic outlook remains challenging, with significant downside risks.

// In this context, Pakistan must take proactive measures that include, fostering political stability and handling judicial crises. While our articles have emphasized the need to revamp judicial system to ensure transparency and accountability, replacing the current self-accountability system envisaged under article 209 of the Constitution of Pakistan giving unfettered powers to one person as chairman of the Supreme Judicial Council for judge’s accountability is highly advocated. Besides, appointment of judges in superior courts have raised numerous questions. Due to lack of a transparent and merit-based selection process, there is no way to ensure that candidates are evaluated solely on their competence, qualifications, and relevant experience. Judges are being labelled as driving political agenda and a few are complaining in writing regarding interference in their affairs, which is strange as they have unfettered, powers. The government must implement proper system for appointment of judges with rigorous screening mechanisms to assess candidates’ legal acumen, integrity, and ethical standards, including thorough background checks and vetting procedures. It may be appreciated that since its establishment, the judiciary’s performance has been a subject of scrutiny, influencing Pakistan’s present economic and political health.

// For economic growth, Pakistan must address fundamental governance issues. Pervasive interference by both judiciary and military in matters of Executive have adversely impacted not just the economy but also, Pakistan’s political and democratic values. It is critical for Pakistan to confront these challenges and streamline governance. In its 10 May 2024 report, IMF lauded Pakistan’s policies, citing them as pathways to economic stability. Furthermore, recent data on Consumer Price Index (CPI) indicates a decline in inflation, signaling positive economic trends. Pakistan should leverage these commendations in its best interest.

// The IMF country report also acknowledges that overall, Pakistan’s external position in FY23 aligns well with medium-term fundamentals and favorable policies. Current account deficit notably narrowed to 0.7 percent of GDP from 4.7 percent in FY22. Importantly, import payment restrictions prevented a larger deficit, indicating the necessity for real exchange rate adjustments. In FY24Q2, the current account achieved a modest surplus of around US$200 million, primarily due to export growth. Projections indicate imports will rise in the remaining quarters, leading to a FY24 CA balance of approximately -0.8 percent of GDP, compared to -0.7 in FY23. The cyclically adjusted CA in FY23 was estimated at -0.6 percent of GDP, slightly below the EBA CA norm of -0.7 percent. Staff suggests the norm should be closer to -0.5 percent to bolster NIIP, resulting in a CA gap of -0.1. Import payment restrictions in FY23, not factored into the EBA model, may worsen the external position, and overvalue the REER.

// IMF also highlighted that Pakistan’s Net International Investment Position (NIIP) remained stable at US$-131 billion in 2023, comparable to 2022 but lower than the FY2019-2022 average of US$-116 billion. Net direct investment was US$-28.8 billion, while net portfolio investment amounted to US$-9.3 billion. Pakistan’s International Investment Position (IIP) lacks significant holdings in financial derivatives.

// The report also highlighted that the gross reserves saw a significant decline in FY23, dropping to US$4.5 billion, but have since seen a gradual recovery, reaching US$8.2 billion by December 2023. Additionally, SBP has reduced its negative net forward position. However, Pakistan’s gross reserves in 2023 only reached 18.2 percent of the IMF’s adequacy metric, well below the normative range. The report suggested that to sustain ongoing reserve accumulation efforts, it is important to avoid actions that could trigger excessive real appreciation.

// IMF report also explained that FBR maintains annual revenue targets, but potential shortfalls are anticipated in April and May 2024 due to holiday-related port closures. Contingency plans are in place to address any revenue collection gaps, with a focus on meeting SBA’s revenue administration objectives. Delays are there in efforts to increase revenue from retailers, while challenges persist in curbing smuggling and clandestine production in the tobacco sector despite implementation of track-and-trace system that FBR intends to extend to other sectors like sugar, fertilizer, and cement aims to enhance control over informal markets, with 1.1 million new filers registered, including 170,999 through enforcement actions.

// Reforms initiated by the caretaker government face delays, necessitating renewed efforts for swift implementation. Launch of a retailer registration and tax enforcement scheme, slated for January 1, 2024, with the legal framework established through an SRO on March 30, 2024, has been postponed. Registration is underway, with tax collection scheduled to commence by July 1, 2024. Plans to transform FBR into a semi-autonomous body are deferred for engagement with a consulting firm. Despite setbacks, progress is made in areas such as enactment of documentation law and collaboration with NADRA. The Compliance Risk Management team has identified 39 high-risk cases, auditing 31, with projected additional revenues of Rs. 40 billion. Expansion of risk management training and digital invoicing system framework are underway, addressing implementation challenges by June 30, 2024.

// In order to improve governance and economic stability, the government should introduce a mechanism to implement the principle of trichotomy of powers to restrict each organ of the state within its domain. Additionally, leveraging positive assessments from the IMF, Pakistan should prioritize economic policies conducive to growth, focusing on revenue collection, GDP expansion, and attracting foreign direct investments. Moreover, swift implementation of reforms, particularly in tax enforcement and digital invoicing, will bolster economic resilience and pave the way for sustained growth and stability.
    
//     `,
//         reference: "Huzaima Bukhari & Dr. Ikramul Haq, lawyers and partners of Huzaima, Ikram & Ijaz, are Adjunct Faculty at Lahore University of Management Sciences (LUMS), members Advisory Board and Visiting Senior Fellows of Pakistan Institute of Development Economics (PIDE). Abdul Rauf Shakoori is a corporate lawyer based in the USA and an expert in ‘White Collar Crimes and Sanctions Compliance’. They have coauthored a book, Pakistan Tackling FATF: Challenges and Solutions",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890135/recent7_vpcyoe.jpg",
//         title: "Budgets 2024: thinking a fresh",
//         time: "Posted on Apr 18, 2024",
//         category: "Article",
//         label: "Budgets 2024",
//         slug: "budgets-2024:-thinking-a-fresh",
//         description: `
//     Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori
// Simplify taxes, reduce the cost of excessive documentation, open the economy for higher growth and employment, taxes too will increase—Pakistan Institute of Development Economics (PIDE) Policy Viewpoint [16:2020] Doing Taxes Better: Simplify, Open & Grow Economy

// The biggest challenge on the tax mobilization front faced by the Federal Board of Revenue (FBR) and provincial tax authorities, namely, the Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), Khyber Pakhtunkhwa Revenue Authority (KPRA) and Balochistan Revenue Authority (BRA) is bridging the monstrous tax gap through automation, the introduction of the tax intelligence system and levying taxes on the rich, rather than enhancing the rates of existing ones, especially indirect taxes—have already made us uncompetitive in the world.

// Budgets 2024 for fiscal year 2024-25 by federal and provincial governments are in the making amid very difficult times when we are faced with economic meltdown and stagflation. The federal budget is expected to be presented on June 7, 2024. The traditional approach adopted for decades in Pakistan for balancing the books, levying irrational taxes, containing fiscal deficit, and other number games will have to be reconsidered in totality under the prevalent exceptional circumstances as a paradigm shift is needed in our economic policy to come out of perpetual fiscal mess.

// In these columns, we have been presenting concrete measures to increase revenues (tax and non-tax) without hampering the already collapsing economy, incentives and stimuli to revive the businesses fast, and proposals for better fiscal management in the post-Constitution (Eighteenth Amendment) Act of 2010 [18th Amendment] and finally using integrated new city model to achieve desired growth of over 8% for a sustainable period of at least a decade by tapping rich natural and human resources.

// The efficient and enhanced collection of revenues (tax and non-tax) is very important to meet the needs of a fast-growing population and run the State effectively. These are urgently required to help millions living below the poverty line identified in the latest United Nations Human Development Report [2023-24] and bring them out of the charity-dependent trap.

// The central theme of all budgets of 2024—federal and provincial—should be achieving the long-delayed and much-needed goal of simplification of the tax system, ensuring the welfare of the common people and providing universal entitlements [free education and health, decent living, affordable public transport, universal pension, income support, civic amenities etc] to all citizens through a comprehensive social security system. This would only be possible by following a rational tax system proposed in 2016 and updated in 2020 [Towards Flat, Low-rate, Broad and Predictable Taxes] and some concrete measures suggested below.

// We will have to strive hard in the coming at least five years to ensure survival and revival of businesses adversely affected first by Covid-19 pandemic and later by political debacle started on April 10, 2022. Overwhelming majority of industries are now struggling to survive. The industries and businesses in Pakistan have been suffering due to sluggish economic activities, high utility bills and markup rate even prior to Covid-19 outbreak that further accentuated the challenges after harsh conditions imposed by the International Monetary Fund (IMF) for its two bailout packages of July 2019 [abandoned] and July 2023 [completed]. Since 2020, no one, except PIDE and few writers, have suggested some out of box measures to come out of persistent fiscal mess and stagflation.

// In these columns, it has been repeatedly emphasized that the iniquitous prescription of erratic and oppressive taxes and austerity in the federal and provincial budgets by the IMF and local economic wizards (sic) will not solve our problems especially in the prevalent circumstances. The federal and provincial governments need to generate and spend more money for infrastructure improvement and human resource development to create more employments and ensure higher growth, engaging private sector to take part in public projects to revive and grow. This would kick-start the economy. Simultaneously, the governments need to reduce wasteful expenditure, right-size the monstrous size of their inefficient machinery, monetize all the perquisites of bureaucracy and make taxes simple and low-rate.

// State lands, occupied unproductively by elites, owned by the federation and provinces should be leased out for industrial, business and commercial ventures. It will generate substantial funds, revenue (at public auction 10% as full and final tax can be collected amounting to billions and thereafter on development and construction of various housing and commercial projects huge amount of taxes, both direct and indirect, for the FBR and provincial tax agencies) and facilitate rapid economic growth and substantial employment opportunities.

// The dire need in today’s Pakistan is to undertake fundamental institutional and structural reforms. Our biggest burden on the economy is the huge unproductive workforce comprising nearly four million people, in various governments (federal, provincial, local, and corporations) and Public Sector Enterprises (PSEs), who waste time and money and mostly create hurdles for citizens and businesses rather than serving them. Right-sizing of monstrous administrative machinery and improving the quality of public services should be at the top of the agenda of reforms. This can be done by transferring much of the work to Local Governments, which should be installed from the lowest level up. Local elected authorities should handle all health, education, water and sanitation, local roads, local policing, local property transfer, property and income tax etc.

// To make Pakistan a self-reliant economy, we need to stop wasteful, unproductive expenses, cut the size of cabinet and government machinery, the government-owned corporations should be run with private-public partnerships giving stock shares to the employees and introduce other steps to make these profitable through complete restructuring, increasing productivity through better technology and trained human resource, improving agricultural sector to meet local needs and creating exportable surplus; and reducing economic inequalities through redistribution of income and wealth using rational tax policy.

// The following are some measures to generate revenues (tax & non-tax) for both federal and provincial governments to become self-reliant as well as steps for providing relief to all, especially the weaker sections of society. In the present difficult economic situation, we have a great opportunity to create nationwide data of all persons, showing their earning/expenditure levels and ownership of assets, in order to provide a comprehensive social security system. The political parties having governments in the centre and provinces can easily implement these through negotiations with the opposition under a democratic process. They will certainly extend their consent as for pro-people changes none would like to face the wrath of voters.

// Till the time, the governments complete the process of digitization and automation, the actual quantification of income of non-corporate businesses and professions should be deferred and taxation may be moved to gross basis at fixed rate (after determining the fair rate for each class of business/profession). There will be no audit/raids. The taxpayers in their books shall be allowed to take credit of imputable income.
// Presently, barring a few, income tax is levied on net income with minimum tax to the extent of amounts collected through over 50 withholding provisions. It is patently unconstitutional as held by Supreme Court in Elahi Cotton Mills & others v Federation of Pakistan & others [PLD 1997 Supreme Court 582]. The Supreme Court held that the National Assembly through Money Bill can impose taxes on income under Entry 47, Part I, Fourth Schedule to the Constitution or impose the same under Entry 52 on the basis of capacity to earn, but “it cannot adopt both the methods in respect of one particular tax”. Since the Finance Act 2019, this blatant violation persists.
// For ease of doing business and waiving off lengthy disclosures in exceptional circumstances, if presumptive tax is imposed on turnover/receipts under Entry 52 as was done in 1991-92, the collection will be around Rs. 3000 billion from all businesses and professions, other than companies, and employees that will keep on paying taxes under the existing tax rates and system. Its working and enforcement will be discussed in the next week’s column elaborating efficacy of tax intelligence system developed by some top experts to capture turnovers/receipts for all businesses and professions.
// The total collection, if we add corporate sector’s contribution, after levying excess profit tax to counter monopolies and cartels, under the head income tax for fiscal year 2024-25 alone will be Rs. 9000 billion. The revenue under one head alone will be a great achievement without hampering economic revival and, in fact, giving businesses and professions a stimulant to grow. FBR will get much more tax than what it is presently collecting after giving share to provinces under the 7th National Finance Commission (NFC) Award.
// The federal government should also amend the definition of “agricultural income” to bring into its ambit receipts from the sale of orchards, lease of lands, nurseries, and in this way, the rich absentee landowners and those engaged in businesses of nurseries will come under the Income Tax Ordinance, 2001. The additional revenue of Rs. 400 billion can be obtained from this source, if taxation is based on Entry 52 as discussed above.
// The historic decision to tax “agricultural income” by the federal government was passed by the Federal Parliament in the shape of the Finance Act, of 1977, but was thwarted by the military regime of General Ziaul Haq.
// Through the Finance Act, 1977, the Parliament amended the definition of “agricultural income” to tax big absentee landlords under federal income tax law. This was a revolutionary step to impose tax on agricultural income at federal level for the first time in the history of Pakistan, but was unfortunately foiled by a military dictator. It needs to be revived. The small farmers having holdings up to 15 acres are already exempt from income taxation and will remain so. There is no need to amend the 18th Amendment or disturb NFC Award if this measure is adopted in Finance Bill 2024.
// During Zia’s 11 years rule and that of General Pervez Musharraf for nearly 9 years, absentee landowners (including mighty generals who received state lands as gallantry awards or otherwise!) did not pay a single penny as agricultural income tax, capital gain tax or wealth tax.
// Taxation of “agricultural income”, at present, is the sole prerogative of provincial governments under the 1973 Constitution under Entry 47. All the four provinces have enacted laws to this effect, but total collection during the last five years never reached even Rs. 2 billion cumulatively (share of agriculture in GDP on average was about 20% for this period). Therefore, there is need to impose income tax on the rich absentee landowners as suggested above.
// Military rulers abolished all progressive taxes e.g. Estate Duty, Gift Tax, Capital Gain Tax etc. Now these are with provincial governments after the 18th Amendment, but they are least interested in taxing the rich and mighty. If these taxes are imposed additional revenue of Rs. 300 billion can be generated.
//  Multi-national Companies (MNCs) through abusive transfer pricing mechanism, deprive Pakistan of taxes of over Rs. 500 billion every year and this can easily be recouped with advance transfer pricing agreements, present no provision exists to this effect.
// The wealth Tax Act, 1963 was abolished through the Finance Act 2003 on specific demand of Shaukat Aziz before he took charge as Finance Minister of Pakistan. He was fully aware of the fact that by virtue of his status as resident in Pakistan, his global assets would attract provisions of the Wealth Tax Act culminating into substantial tax liability on annual basis. The repeal of this progressive law, especially suitable to Pakistan where enormous assets are created without disclosing income, was shown to be justified despite substantial revenue losses, and the resultant misery inflicted on the majority of the people of Pakistan.
// Successive governments through amnesties and asset-whitening schemes caused loss of billions of rupees to the national exchequer. Levy of 1% tax on those having net moveable assets exceeding Rs. 10 million by the Federal Government and at the same rate on immovable assets by the provincial governments will bring equity as the rich will be forced to contribute at least Rs. 500 billion to help economically distressed.
// The total collection by imposing a unified sales tax on goods and services (as done by India in 2017) can reach Rs. 7000 billion This will not only give fiscal space to the federal government to narrow down the fiscal deficit but also enhance distribution amount to the provinces. Distribution will be strictly as per the Constitution. The collection under the new law will be by FBR as provincial assemblies need to pass only resolutions under Article 144 of the Constitution empowering the National Assembly to enact integrated sales tax on goods and services.
// There is no need to enter into any controversial amendment in the Constitution disturbing the 18th Amendment. The slogan of ‘One nation, One Tax’, adopted by India in 2017, and Harmonized Sales Tax (HST) by Canadian federal and provincial governments is the way forward as taxpayers operating on the transprovincial level are facing many difficulties. If provinces do not agree, then for transprovincial entities, FBR can include in Finance Bill 2024, sales tax on services, following the command of the Supreme Court in the case of Messers Sui Southern Gas Ltd & Others v Federation of Pakistan & Other 2018 SCMR 802. It extensively elucidates that the post-Eighteenth Amendment position vis-à-vis legislative competence of federation and federating units as under:
// We are in agreement with the observation made by the learned High Court that though in a Federal system, provincial autonomy means capacity of a province to govern itself without interference from the Federal Government or the Federal legislature, but as the Provincial legislature does not possess extra-territorial legislative authority i.e. it cannot legislate regarding the establishments operating beyond the territorial boundaries of that province.

// The above pronouncement of the Supreme Court is not restricted to any particular law and covers tax laws as well. It is binding under Article 189 of the Constitution and provinces that do not agree for an integrated sales tax of goods and services will suffer.
// In Customs, massive evasion takes place due to under-invoicing and wrong declarations. If revenue leakages are plugged as suggested in Dismantle Containers’ mafia, Business Recorder, September 14, 2018, it can be Rs. 2000 billion.
// The loss in Federal Excise Duty (FED) due to the illicit and smuggled cigarette sector alone is about Rs. 200 billion a year. It can be plugged by a trace and track (T&T) system [see the detailed study by Huzaima & Ikram, Flourishing illicit tobacco industry & “soft state”, 2020].
// As evident from above, the additional revenue generation of at least Rs. 9000 billion is possible at the federal and provincial level, improving the tax-to-GDP ratio substantially and reducing the fiscal deficit in fiscal year 2024-25 if measures as suggested above are taken.

// In the next column, we will discuss the paradigm shift required in various areas of the tax system and fundamental structural reforms to improve tax collection at federal and provincial levels making Pakistan a self-reliant and truly welfare state and paying off internal and external debts.
//     `,
//         reference: "Huzaima Bukhari & Dr. Ikramul Haq, lawyers and partners of Huzaima & Ikram, are Adjunct Faculty at Lahore University of Management Sciences (LUMS), members Advisory Board, and Visiting Senior Fellows of the Pakistan Institute of Development Economics (PIDE). Abdul Rauf Shakoori is a corporate lawyer based in the USA and an expert in ‘White Collar Crimes and Sanctions Compliance’. They have co-authored a book, Pakistan Tackling FATF: Challenges and Solutions",
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890134/recent8_spqavz.jpg",
//         title: "Budget, taxes & growth",
//         time: "Posted on Apr 20, 2024",
//         category: "Article",
//         label: "Budget, taxes & growth",
//         slug: "budget,-taxes-&-growth",
//         description: `
//     Dr. Ikramul Haq & Abdul Rauf Shakoori
// Pakistan, while in the grip of severe fiscal challenges, is making preparations, under the tight control of the International Monetary Fund (IMF), for presenting the federal budget 2024 in the National Assembly on June 7, 2024. The government is apprehending a huge budget deficit leaving it with little financial room to offer much-needed relief to its citizens and businesses. Consequently, there is a pervasive sense of pessimism surrounding the upcoming federal budget in which many preconditions of IMF are to be incorporated. The only expected silver lining might be avoiding additional burdens on the existing taxpayers by widening the tax net and identifying new sources of revenue.

// The economic crisis, which hit critical levels in 2022 and 2023, has somewhat eased, but the situation remains far from stable. IMF has imposed stringent conditions on Pakistan to ensure the release of much-needed yet another bailout—the 25th extended fund facility (EFF) program. These conditions include measures for increasing tax revenue, such as broadening the tax base, reducing subsidies, and implementing structural reforms to improve fiscal discipline. IMF’s demands are seen as necessary for stabilizing the economy but are also likely to be unpopular among the people, who are already struggling with high inflation and unemployment. On May 24, 2024, the IMF team left Pakistan without any staff-level agreement for a new package.

// One of the most pressing issues is Pakistan’s dwindling foreign exchange reserves, which have been under severe pressure due to a large trade deficit and debt repayments. This has led to a sharp depreciation of the Pakistani rupee, further exacerbating inflation, and eroding purchasing power of the average citizen. The government is in a tight spot, trying to balance between meeting IMF’s requirements and providing some form of relief to the public.

// The upcoming budget will need to address these complex issues, finding a delicate balance between fiscal consolidation and public welfare. The government’s ability to steer these challenges will be necessary in determining the country’s economic trajectory in the coming months. While the reduction in economic turbulence is a positive sign, Pakistan has a long way to go before it can achieve economic stability and growth. The government’s approach to the budget will play a decisive role in shaping the nation’s financial future and restoring confidence among investors and the public.

// The severity of Pakistan’s fiscal situation is evident from the financial statistics of the first nine months of the ongoing fiscal year. During this period, tax revenues have surged by 29%, and non-tax revenues have skyrocketed by 91%. These increases have contributed to achieving a primary balance of Rs. 1.61 trillion, which is remarkable being 221% higher than the same period in the previous year. However, despite these improvements in revenue collection, the overall fiscal imbalance has deteriorated. The fiscal deficit has ballooned to Rs. 3.9 trillion, representing a 27% increase compared to the first nine months of the last financial year.

// The forthcoming budget will prioritize revenue mobilization and fiscal improvement, while also aiming to preserve financial support for lower-income groups. The government faces a critical challenge unless it can effectively reduce its debt burden, any gains from increased revenue will be primarily consumed by debt servicing. This means that instead of channeling funds into social protection initiatives and development projects, the government will continue to allocate a significant portion of its budget to managing its debt obligations.

// Recently, the government has implemented several revenue mobilization measures, such as introducing the Tajir Dost [traders’ friendly] tax scheme and blocking mobile SIMs for certain non-filer individuals. In line with these efforts, the Federal Board of Revenue (FBR) has issued Income Tax General Order No. 01 of 2024 that aims to enforce the filing of income tax returns by individuals who are not listed as active taxpayers but are required to file for the tax year 2023 under the Income Tax Ordinance, 2001.

// As part of this initiative, FBR has ordered the blocking of the mobile phone SIMs of 506,671 individuals identified as non-compliant. The objective of these measures is to broaden the tax base and ensure that more people contribute to the national revenue. By targeting those who evade taxes, the government hopes to increase its fiscal resources, which can then be used for essential public services and infrastructure development. These steps are crucial for improving overall tax compliance and enhancing the government’s ability to fund social and economic programs.

// Similarly, the Tajir Dost scheme aims to generate additional revenue and broaden tax base through policy reforms. The retail sector, often criticized for being either untaxed or undertaxed, is a primary target of this initiative. Launched in six major urban centers, the scheme mandates the collection of the minimum due advance income tax starting from July 1, 2024. This effort seeks to ensure that more retailers are brought into the tax net, enhancing overall tax compliance and revenue generation.

// The government has already imposed heavy taxes on corporations, a 29% corporate tax rate with an additional super tax of up to 10%. This regressive measure has negatively affected corporate cash flows, limiting their ability to grow, expand, or build reserves. Simultaneously, bank lending rates are around 25%, leaving businesses with little room to leverage growth or meet their working capital needs. This combination creates a natural recipe for economic slowdown, forcing both corporations and the broader economy into a period of stagnation.

// In case the prevalent situation continues, corporate profitability will be compromised, ultimately eroding their ability to pay taxes. This creates a vicious cycle, where reduced tax revenue forces the government to rely on borrowed funds to meet its financial needs. Over-reliance on borrowing can further strain the economy, increasing debt and interest obligations. Therefore, the government must strike a careful balance between its revenue requirements and the financial health of businesses. By ensuring that tax policies do not overly burden corporations, the government can foster a more sustainable economic environment, promoting growth and stability while maintaining adequate revenue streams.

// The shortsightedness and lack of vision among our policymakers and authorities are evident. These are the primary reasons behind the current economic predicaments. Disparities in the taxation system and the preferential treatment given to certain segments or sectors, at the expense of the entire economy, have stunted the growth potential of otherwise thriving sectors. As a result, the nation bears the cost of this incompetence, hindering overall economic progress.

// In the budget for fiscal year 2024-25, the government should consider the removal of the unjust and harsh super tax, along with efforts to reduce the tax burden on petroleum products, currently standing at approximately Rs. 60 for motor gasoline (MOGAS), constituting about 30% of the fuel cost inclusive of the Integrated Foreign Exchange Margin (IFEM). Despite attempts to address shortcomings by adding new taxpayers to the list and removing unwarranted tax benefits and concessions, the government has opted for regressive measures without fully considering their repercussions on businesses and individuals.

// Such actions risk further stifling economic growth and exacerbating the financial burdens faced by both corporations and citizens. As budgetary decisions loom large, policymakers must prioritize measures that foster economic vitality and equitable taxation. By striking a balance between revenue generation and fostering an environment conducive to growth, the government can pave the way for a more prosperous future for all stakeholders.
// _____________________________________________________________

// Dr. Ikramul Haq, Advocate Supreme Court, specializes in constitutional, corporate, media, ML/CFT-related laws, IT, intellectual property, arbitration, and international tax laws. He holds an LLD in tax law with a specialization in transfer pricing. He was a full-time journalist from 1979 to 1984 with Viewpoint and Dawn. He served Civil Services of Pakistan from 1984 to 1996. He established Huzaima & Ikram in 1996 and is presently its chief partner. He studied journalism, English literature, and law. He is the Chief Editor of Taxation. He is the country editor and correspondent of the International Bureau of Fiscal Documentation (IBFD) and a member of the International Fiscal Association (IFA). He is a Visiting Faculty at the Lahore University of Management Sciences (LUMS) and member Advisory Board and a Visiting Senior Fellow of the Pakistan Institute of Development Economics (PIDE).

// He has co-authored with Huzaima Bukhari many books that include Tax Reforms in Pakistan: Historic & Critical Review, Towards Flat, Low-rate, Broad and Predictable Taxes (Revised & Expanded Edition, Pakistan: Enigma of Taxation, Towards Flat, Low-rate, Broad and Predictable Taxes (revised/enlarged edition of December 2020), Law & Practice of Income Tax, Law, Practice of Sales Tax, Law and Practice of Corporate Law, Law & Practice of Federal Excise, Law & Practice of Sales Tax on Services, Federal Tax Laws of Pakistan, Provincial Tax Laws, Practical Handbook of Income Tax, Tax Laws of Pakistan, Principles of Income Tax with Glossary and Master Tax Guide, Income Tax Digest 1886-2011 (with judicial analysis).

// He is the author of Commentary on Avoidance of Double Taxation Agreements, Pakistan: From Hash to Heroin, its sequel Pakistan: Drug-trap to Debt-trap and Practical Handbook of Income Tax. Two books of poetry are Phull Kikkaran De (Punjabi 2023) and Nai Ufaq (Urdu 1979 with Siraj Munir and Shahid Jamal).

// He regularly writes columns/articles/papers for many Pakistani newspapers and international journals and has contributed over 2500 articles on a variety of issues of public interest, printed in various journals, magazines, and newspapers at home and abroad.

// X (formerly Twitter): DrIkramulHaq
// _______________________________________________________________

// Abdul Rauf Shakoori, Advocate High Court, is a subject-matter expert on AML-CFT, Compliance, Cyber Crime, and Risk Management. He has been providing AML-CFT advisory and training services to financial institutions (banks, DNFBPs, Investment companies, Money Service Businesses, insurance companies, and securities), government institutions including law enforcement agencies located in North America (USA & CANADA), Middle East and Pakistan. His areas of expertise include legal, strategic planning, cross border transactions including but not limited to joint ventures (JVs), mergers & acquisitions (M&A), takeovers, privatizations, overseas expansions, USA Patriot Act, Banking Secrecy Act, Office of Foreign Assets Control (OFAC).

// Over his career, he has demonstrated excellent leadership, communication, analytical, and problem-solving skills and has also developed and delivered training courses in the areas of AML/CFT, Compliance, Fraud & Financial Crime Risk Management, Bank Secrecy, Cyber Crimes & Internet Threats against Banks, E–Channels Fraud Prevention, Security and Investigation of Financial Crimes. The courses have been delivered as practical workshops with case study-driven scenarios and exams to ensure knowledge transfer.

// His notable publications are: Rauf’s Compilation of Corporate Laws of Pakistan, Rauf’s Company Law and Practice of Pakistan Rauf’s Research on Labour Laws and Income Tax, and others.

// His articles include Revenue Collection: Contemporary Targets vs. Orthodox Approach, It is Time to say goodbye to Our Past, US Double Standards, Was Due Process Flouted While Convicting Nawaz Sharif?, FATF and Unjustly Grey Listed Pakistan, Corruption is no excuse for Incompetence, Next step for Pakistan, Pakistan’s compliance with FATF mandates, a work in progress, Pakistan’s strategy to address FATF Mandates was Inadequate, Pakistan’s Evolving FATF Compliance, Transparency Curtails Corruption, Pakistan’s Long Road towards FATF Compliance, Pakistan’s Archaic Approach to Addressing FATF Mandates, FATF: Challenges for June deadline, Pakistan: Combating the illicit flow of money, Regulating Crypto: An uphill task for Pakistan. Pakistan’s economy – Chicanery of numbers. Pakistan: Reclaiming its space on FATF whitelist. Sacred Games: Kulbhushan Jadhav Case. National FATF Secretariat and Financial Monitoring Unit. The FATF challenge. Pakistan: Crucial FATF hearing. Pakistan: Dissecting FATF Failure, Environmental crimes: An emerging challenge, Countering corrupt practices.
//     `,
//         reference: "The recent publication, coauthored by these writes with Huzaima Bukhari, is Pakistan Tackling FATF: Challenges & Solutions, available at:",
//         link: "https://www.amazon.com/dp/B08RXH8W46"
//     },
//     {
//         image: "https://res.cloudinary.com/dnyiq1pbt/image/upload/v1758890134/recent9_ijgilr.jpg",
//         title: "Budget & tax policy",
//         time: "Posted on Apr 22, 2024",
//         category: "Article",
//         label: "Budget & tax policy",
//         slug: "budget-&-tax-policy",
//         description: `
//     Huzaima Bukhari, Dr. Ikramul Haq, Abdul Rauf Shakoori
// The impact of economic growth on the lives of people is partly a matter of income distribution, but it also depends greatly on the use that is made of the public revenue generated by economic expansion’—An uncertain glory-‐India and its contradictions by Jean Dreze and Amartya Sen

// This is in continuation of last week’s column [Budgets 2024: think afresh, Business Recorder, May 24, 2024]. Achievement of the cherished goal of self-reliance is impossible with the existing outdated, oppressive, and unjust tax policy and antiquated tax machinery coupled with unproductive expenditure, burgeoning debt burden, and massive debt servicing.

// It is high time a paradigm shift in the prevalent tax policy is undertaken. Our revenue potential at federal and provincial levels is not less than Rs. 34 trillion provided the tax base is broadened, the informal economy is documented, and pro-growth, equitable, and rational policies are devised with the backing of stakeholders.

// We need to overhaul the existing ineffective and incompetent tax machinery completely. There is an urgent need to withdraw all exemptions and concessions available to the privileged sections of society. Our most important consideration should be export-led growth and tapping optimum tax potential. Once these are done, there will be no need for any internal or external borrowing. Implementation of a rational tax policy can convert our current fiscal deficit into surplus within a short span of time for which we need inclusive and sustainable export-led growth.

// Rational ‘National Tax Policy’ is essential to increase government revenues and to improve citizens’ lives. When taxes are fair and government spending prioritizes essential public services, growth becomes a reality resulting in a reduction of both poverty and inequality. This was emphasized in a paper titled, Fair Taxation for Poverty Reduction & Equality (Huzaima & Ikram 2015)—available at http://maketaxfair.net/assets/Fair-Taxation-for-Poverty-by-Dr-Ikram.pdf.

// The above paper and suggestions made in various columns, especially in Budgets 2024: think afresh, Business Recorder, May 24, 2024, can be treated as “proposals”, the Federal Board of Revenue (FBR) is seeking the budget 2024-25, though it was mentioned in earlier columns that “it is the constitutional obligation of Legislature and not Executive” under the Constitution of Islamic Republic [“the Constitution”].

// Pakistan Tehreek-i-Insaf (PTI) had coalition governments in the center and in three provinces during its tenure [18 August 2018 to April 9, 2022], could not even start a meaningful country-wide debate on devising a pro-growth National Tax Policy what to speak of presenting the blueprint that it claimed during the election campaign was ready and awaiting implementation. The position of the alliance government of the Pakistan Democratic Movement (PDM) was equally pathetic.

// PDM was more concerned with eliminating PTI, rather than holding elections as per the time frame given in the Constitution. Tax policy reforms were never on its agenda, which even otherwise was not possible as the 5-year tenure of the National Assembly was until August 12, 2023, but was dissolved three days earlier by Shehbaz Sharif, now second-time prime minister of Pakistan.

// PDM came to power just to save the skin of its top leadership from the National Accountability Bureau (NAB), which was being used by those who matter in the land to eliminate “undesirable” political figures or to force them to change camps or the time being saying goodbye to constituency politics.

// It is an incontrovertible fact that onerous tax policies of successive governments, military and civilian alike, have widened the rich-poor gap. In the wake of the COVID-19 endemic and even before, millions were pushed below the poverty line, courtesy of anti-growth and pro-rich policies. The state, as defined in Article 7 of the Constitution, must act quickly for a paradigm shift in all spheres of governance—both at structural and operational levels.

// As regards taxation for ensuring substantial revenues as well as social equity and economic expansion, a workable pragmatic roadmap is available in Tax Reforms in Pakistan: Historic & Critical View, published by Pakistan Institute of Development (PIDE) (available free at: https://file.pide.org.pk/pdf/Books/Tax-Reforms-in-Pakistan-Historic-and-Critical-View.pdf and in Towards flat, low-rate broad and predictable taxes-revised and expanded edition (2020) [available free at: https://primeinstitute.org/wp-content/uploads/2022/04/TOWARDS-FLAT-LOW-RATE-BROAD-AND-PREDICTABLE-TAXES-Second-Ed..pdf ].

// OUR MAIN DILEMMA
// High taxes and lower yields have resulted in a lack of funds for industrial and business growth and public benefits, but colossal unaccounted/untaxed cash is circulating in the economy in search of further “undercover” gains. Our political culture supports rent-seeking and racketeering.

// Tragically, this social evil is doubly compounded as it necessitates a greater and greater tax burden on law-abiders. The most crucial problem faced by Pakistan is devising measures to curb tax evasion and distributing the burden of taxes fairly and justly—the rich enjoying tax exemptions and amnesty. Honest taxpayers are disillusioned by the fact that elites not only get amnesties for concealed assets but also abuse taxpayers’ money for unprecedented luxuries.

// For a meaningful change, the federal and provincial governments should abolish all regressive taxes forthwith and concentrate mainly on growth. Tax amnesty schemes must be dispensed with once and for all and unexplained assets must be confiscated by the State for the benefit of the poor.

// FUNDAMENTALS OF TAX POLICY
// There is a national consensus that existing tax policy needs to be reformulated providing an equitable, pragmatic, investment-oriented tax system, integrating good tax administration with simplified tax laws that are easily understood and hassle-free from an implementation perspective.

// Past efforts to reform the tax system, through foreign loans/grants, have not yielded desirable results. The bureaucratic, closed-door meetings and lack of any meaningful dialogue with stakeholders and tax experts are the root causes of the failure of a research-based, pragmatic tax policy—foreign-funded tax reforms will never succeed. The Executive should have no power to issue Statutory Regulatory Orders (SROs) in blatant violation of Article 77 read with Article 162 of the Constitution.

// EQUITY PRINCIPLE
// The existing tax system as a whole—at national and provincial levels—is highly unjust. It protects those having a monopoly over economic resources. There is no political will to tax the privileged classes. The poor are paying exorbitant sales tax and even advance income tax.

// On the contrary, the mighty get tax waivers and concessions. Predatory segments even indulge in benami [name-lender) transactions and invest heavily in real estate through frontmen to whiten proceeds of crime. This culture must end. Transparency should be in all areas. At the same time, tax rates should be brought down to promote the industrialisation and growth of small and medium enterprises (SMEs).

// BENEFIT PRINCIPLE
// Successive governments have failed to convince the people to volunteer payment of taxes on their real incomes. Since rulers indulging in wasteful expenditure have never bothered to live within their means and failed to protect the life and property of the people and provide them with basic needs like health, education, and civic amenities, massive tax non-compliance has become a rule and not an exception.

// Things will never improve unless citizens are convinced by actions and not mere words by rulers that taxes are meant for public welfare, not for the luxuries of rulers and state functionaries. The Government should launch programs, financed mainly through taxes, to solve the twin problems of unemployment and poverty. These welfare-oriented schemes may also include free medical and educational facilities, low-cost housing, and drinking water, uplifting of rural areas, land improvement schemes, and employment guarantee programs. Once people see the tangible benefits of their taxes, there will be better tax compliance.

// Our tragedy is that even after numerous oppressive and high-rate taxes fiscal gap is increasing every year bringing more misery to the common people of Pakistan. Taxation is a potent instrument to shape and influence the socio-economic policies of a country. It is therefore imperative for us to formulate a rational tax policy beneficial for all and not by following blindly, prescriptions given by lenders/donors. Its main features are available in the above-mentioned books.

// The governments in the coming budget, expected to be announced on June 7, 2024, must bring fundamental structural and operational changes and not mere amendments here and there in tax codes that instead of serving some useful purpose, further complicate matters. The government must work for National Tax Policy taking all stakeholders on board for achieving rapid industrial and economic growth that will automatically take care of revenue mobilisation without putting any undue burden on the masses.
//     `,
//         reference: "Huzaima Bukhari & Dr. Ikramul Haq, lawyers and partners of Huzaima & Ikram, are Adjunct Faculty at Lahore University of Management Sciences (LUMS), members Advisory Board, and Visiting Senior Fellows of the Pakistan Institute of Development Economics (PIDE). Abdul Rauf Shakoori is a corporate lawyer based in the USA and an expert in ‘White Collar Crimes and Sanctions Compliance’. They have co-authored a book, Pakistan Tackling FATF: Challenges and Solutions",
//     },

// ]


// async function seedInsights() {
//   try {
//     const insightsCollection = collection(firestore, "insights");

//     for (const item of data) {
//       // Use title as document ID
//       const docRef = doc(insightsCollection, item.title);

//       await setDoc(docRef, {
//         ...item,
//         createdAt: new Date(), // optional
//       });

//       console.log(`✅ Added with ID "${item.title}"`);
//     }

//     console.log("🎉 Seeding completed.");
//   } catch (err) {
//     console.error("❌ Error seeding insights:", err);
//   }
// }

// seedInsights();
