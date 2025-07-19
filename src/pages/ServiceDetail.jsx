    import React from "react";
    import { useParams } from "react-router-dom";

    const services = [
        {
            label: "Advisory",
            sublinks: [
                {
                    title: "Business Restructuring",
                    slug: "business-restructuring",
                    details:
                        "The IRTH team advises distressed or underperforming entities on turnaround strategies and help in building sustainable organizational structure. We provide:\n• Developing strategy to achieve optimized financial leverage; restructuring/rescheduling debt financing, issuing sub-ordinated debt and public offering. Post-merger integration, amalgamation and carve-out support\n• Strategic workforce and governance realignment; developing and implementing agile organization structure"
                },
                {
                    title: "Cybersecurity & Data Privacy",
                    slug: "cybersecurity-data-privacy",
                    details:
                        "The need for cybersecurity resilience and privacy assurance is paramount in today’s digital-first economy. Our advisory ensures:\n• Cyber risk and vulnerability assessments\n• Data protection compliance (GDPR, PDPA, etc.)\n• Development of cybersecurity policies and protocols\n• Incident response planning and simulation"
                },
                {
                    title: "Developing Corporate",
                    slug: "developing-corporate",
                    details:
                        "IRTH enables businesses to identify, formulate, and execute growth-centric strategies. We support:\n• Market entry feasibility and opportunity analysis\n• Customer acquisition and retention planning\n• Business model innovation and scenario mapping\n• Strategic planning workshops and execution roadmaps"
                },
                {
                    title: "Forensic & Investigations Advisory",
                    slug: "forensic-investigations-advisory",
                    details:
                        "The forensic services team supports legal counsel and boards during internal investigations and complex disputes. We offer:\n• Financial fraud detection and asset tracing\n• Corporate misconduct and whistleblower case reviews\n• Litigation support and expert testimony\n• Regulatory and anti-corruption compliance reviews"
                },
                {
                    title: "Legal Analytics & Transaction Advisory",
                    slug: "legal-analytics-transaction-advisory",
                    details:
                        "From deal origination to post-transaction compliance, we provide:\n• Transactional due diligence and legal risk profiling\n• Contract structuring and compliance analytics\n• Valuation and regulatory approval guidance\n• Joint venture governance design"
                },
                {
                    title: "Risk Management & Regulatory Compliance",
                    slug: "risk-management-regulatory-compliance",
                    details:
                        "We work with organizations to develop integrated risk and compliance frameworks that meet evolving domestic and international standards. Our services include:\n• Enterprise Risk Management (ERM) design\n• AML / CFT program development\n• FATCA, CRS, and KYC compliance readiness\n• Regulatory health checks and internal audits"
                }
            ]
        },
        {
            label: "Technology Transformation",
            sublinks: [
                {
                    title: "Core Banking Solution Migration Strategy",
                    slug: "core-banking-solution-migration-strategy",
                    details:
                        "We assist financial institutions with:\n• End-to-end core banking system migration planning, including development of Functional Design Document\n• Data cleansing, mapping, migration, testing, and go-live coordination\n• Regulatory compliance readiness"
                },
                {
                    title: "Digital Transformation",
                    slug: "digital-transformation",
                    details:
                        "IRTH enables organizations to modernize operating models and customer journeys through:\n• Help in devising Omnichannel strategy, to provide a consistent and integrated customer experience across all touchpoints\n• Process digitization and back-office automation\n• Cloud migration services and IT governance"
                },
                {
                    title: "Financial Analytics Services",
                    slug: "financial-analytics-services",
                    details:
                        "We unlock business intelligence through:\n• Real-time KPI dashboards and scorecards\n• Predictive analytics and scenario planning\n• Profitability, variance, and liquidity analysis"
                },
                {
                    title: "Financial & Budget Planning Automation",
                    slug: "financial-budget-planning-automation",
                    details:
                        "• Budget, forecasts planning automation solutions implementation Developing Medium to Long-term strategic financial modeling\n• CAPEX and OPEX optimization roadmaps"
                },
                {
                    title: "Blockchain & Digital Assets",
                    slug: "blockchain-digital-assets",
                    details:
                        "We support Web3 readiness and regulatory alignment through:\n• Blockchain use-case assessment and tokenomics\n• Smart contract design and audit readiness\n• Virtual asset compliance (Travel Rule, VASP registration)"
                },
                {
                    title: "Business Transformation",
                    slug: "business-transformation",
                    details:
                        "We help clients reinvent their operating models by:\n• Conducting process diagnostics and redesign\n• Process re-engineering to rationalize cost to achieve performance excellence\n• Deploying ERP and BPM tools\n• Introducing Robotic Process Automation (RPA)"
                },
                {
                    title: "Business Process Outsourcing (BPO) Services",
                    slug: "business-process-outsourcing-bpo-services",
                    details:
                        "Our managed services model supports:\n• Finance & Accounting, Payroll, and HR outsourcing\n• SLA-based service delivery and operational oversight\n• Customer service and procurement back-office models"
                }
            ]
        },
        {
            label: "ESG Strategy",
            sublinks: [
                {
                    title: "ESG Strategy Development Services",
                    slug: "esg-strategy-development-services",
                    details:
                        "Our ESG services deliver:\n• ESG baseline maturity assessments\n• Stakeholder and materiality analysis\n• ESG goal setting and KPI framework\n• Climate risk scenario analysis and TCFD reporting\n• ESG-linked governance integration"
                }
            ]
        },
        {
            label: "Tax Advisory",
            sublinks: [
                {
                    title: "Local & International Tax Advisory",
                    slug: "local-international-tax-advisory",
                    details:
                        "IRTH helps clients manage their tax exposure through:\n• Domestic tax planning and compliance management\n• Sector-specific tax structuring\n• Global mobility and expatriate taxation\n• Double Tax Treaty and BEPS compliance analysis"
                },
                {
                    title: "Payroll Tax Compliance",
                    slug: "payroll-tax-compliance",
                    details:
                        "We enable employers to remain audit-ready by:\n• Ensuring accurate withholding and social security treatment\n• Managing benefits-in-kind and tax statements\n• Automating payroll tax calculations and filings"
                },
                {
                    title: "Transaction-specific Tax Advisory",
                    slug: "transaction-specific-tax-advisory",
                    details:
                        "For corporate deals, we offer:\n• Tax due diligence and integration planning\n• Reorganization tax mapping and relief claims\n• Cross-border M&A tax optimization"
                }
            ]
        },
        {
            label: "Training & Capacity Building",
            sublinks: [
                {
                    title: "Customized Corporate Training",
                    slug: "customized-corporate-training",
                    details:
                        "We deliver bespoke learning solutions for:\n• Regulatory compliance and financial reporting\n• Leadership and organizational development\n• Risk management and internal audit proficiency"
                },
                {
                    title: "Professional Certification Courses",
                    slug: "professional-certification-courses",
                    details:
                        "Our learning tracks prepare professionals for:\n• Certified AML/CFT compliance credentials\n• ESG and sustainability leadership certifications\n• Financial modeling and data analytics diplomas"
                },
                {
                    title: "Workshops, Bootcamps & Seminars",
                    slug: "workshops-bootcamps-seminars",
                    details:
                        "These interactive sessions include:\n• Regulatory updates and market trend briefings\n• Tech enablement and digital transformation seminars\n• Audit, ESG, and data governance bootcamps"
                },
                {
                    title: "Train-the-Trainer Programs",
                    slug: "train-the-trainer-programs",
                    details:
                        "We support internal L&D teams by:\n• Training delivery method refinement\n• Content development and learner engagement\n• LMS integration and evaluation models"
                }
            ]
        }
    ];
const ServiceDetail = () => {
    const { slug } = useParams();

    let matchedService = null;
    for (const service of services) {
        const sublink = service.sublinks.find(s => s.slug === slug);
        if (sublink) {
            matchedService = { ...sublink, category: service.label };
            break;
        }
    }

    if (!matchedService) {
        return <div className="p-10 text-center text-xl text-red-500">Service not found</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                {/* Header Section */}
                <div className="bg-[#814d35] px-8 py-6">
                    <h1 className="text-3xl font-bold text-white mb-1">
                        {matchedService.title}
                    </h1>
                    <p className="text-sm text-orange-100">
                        Category: {matchedService.category}
                    </p>
                </div>

                {/* Details Section */}
                <div className="px-8 py-6 text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                    <p>{matchedService.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
