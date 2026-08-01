"use client";

import { useEffect, useState } from "react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const places = [
    {
      id: 0,
      company: "Chevron Nigeria Limited",
      period: "October 2008 - Present",
      location: "Nigeria",
      positions: [
        {
          title: "Senior Lead Counsel, Dispute Resolution & Shelf Operations",
          years: "2024 - Present",
          details: [
            "Provide strategic leadership to Chevron Nigeria's Dispute Resolution team overseeing 400+ active lawsuits across the country",
            "Manage case evaluation, development of litigation management strategies, and review of court processes",
            "Facilitate dispute resolution to protect company interests through negotiation and strategic representation",
            "Oversee external counsel engaged in litigation and operational support with performance monitoring and budgetary control",
            "Lead legal team supporting Chevron's joint venture operations addressing complex legal issues across multiple fields",
            "Navigate critical operational incidents including facility invasions and host community protests",
            "Collaborate with company management on implementation of Host Community Development Trusts and oil spill allegations",
            "Mentor multiple professionals in career development and leadership growth initiatives",
          ],
        },
        {
          title: "Company Secretary & Legal Advisor",
          years: "2020 - 2024",
          details: [
            "Served as Company Secretary for all 12 Chevron entities in Nigeria ensuring full compliance with governance requirements",
            "Coordinated and documented all Board Committee proceedings guaranteeing accurate records and seamless resolution implementation",
            "Liaised with external counsel on timely statutory filings and regulatory returns maintaining strong compliance posture",
            "Provided cross-functional legal support to Finance, IT, HR, Security, and HSE groups on regulatory and corporate governance matters",
            "Advised Finance Group on tax inquiries and investigations by revenue services across Nigerian states",
            "Delivered IT legal guidance on data transfer, data residency, and regulatory compliance with evolving data governance requirements",
            "Advised HR on corporate policy, internal investigations, recruitment processes, and labor regulations",
            "Supported security initiatives including management of oil theft cases and EFCC inquiries",
            "Provided HSE legal guidance on environmental reports and regulatory inquiries strengthening compliance and risk management",
          ],
        },
        {
          title: "Head, Joint Venture & Litigation Unit, Warri Office",
          years: "2018 - 2020",
          details: [
            "Supervised and managed over 300 active cases with total claims valued at approximately ₦1 Trillion Naira",
            "Managed performance of external counsel ensuring excellent service delivery aligned with Chevron objectives",
            "Managed diverse legal issues from joint venture operations across Delta, Ondo, Imo, and Bayelsa States",
            "Collaborated with internal stakeholders to effectively manage agitations from host communities",
            "Liaised with regulatory bodies including Department of Petroleum Resources, Nigerian Content Development Monitoring Board, and National Oil Spill Detection and Response Authority",
            "Mentored over 20 graduate and undergraduate interns in CNL internship programs",
          ],
        },
        {
          title: "Gas and Contracts Unit",
          years: "2008 - 2018",
          details: [
            "Drafted, reviewed, and negotiated various oil, gas and power contracts including Gas Sale Agreements, Farmout Agreements, and Gas Transportation Agreements",
            "Collaborated with internal stakeholders ensuring appropriate contracts for diverse transactions between CNL and multiple contractors",
            "Provided support to West African Gas Pipeline Company, N-Gas Limited, and Sotogaz on legal and contracting issues",
            "Provided legal guidance on foundation agreements including GSA, GPA, GTA, WAGP Treaty, and associated amendments",
            "Managed legal and operational issues arising from WAPCo Shareholders Agreement",
            "Provided legal support on domestic gas supply obligations and national gas policies including GACN formation and development",
            "Advised on regulatory issues affecting gas businesses including permits, environmental requirements, and divestment matters",
            "Advised on major projects including Brass LNG gas development and commercialization, gas processing facilities, and Agura Independent Power Plant",
          ],
        },
      ],
      achievements:
        "Nominated as one of three finalists for Chevron NMA Chairman and Managing Director's Distinctive Leader Award 2019 • Awarded Chevron Nigeria Mid-Africa Recognition Award • Multiple Chevron Human Energy Awards for team achievement, everyday excellence, and measurable value creation • Co-Champion for Career Development and Mentoring • Lead attorney in successful dispute resolution resulting in recovery of 2.5MM barrels of crude oil • Lead negotiator of foundation Gas Sale and Aggregation Agreement now in use across Nigerian gas sector",
    },
    {
      id: 1,
      company: "Oando Plc",
      period: "August 2007 - September 2008",
      location: "Nigeria",
      position: "Manager, Legal Services",
      details: [
        "Drafted and reviewed various oil, gas and power contracts including Gas Sale Agreements, Farmout Agreements, Gas Transportation Agreements, and Gas Handling Agreements",
        "Direct responsibility for all legal issues relating to Oando Gas and Power Limited, East Horizon Gas Co, Gaslink Nigeria Limited, and Akute Power Limited",
        "Advised Oando Group office and subsidiaries on diverse legal issues including gas pipeline development projects, finance syndication, and oil and gas interest acquisition",
        "Successfully negotiated gas sale and purchase agreements including Akute Power Purchase Agreement with Lagos State Water Corporation",
        "Lead legal counsel in successful negotiation of finance documents and loan syndication packaged to finance Akute power project",
        "Mentored younger colleagues in legal department",
      ],
    },
    {
      id: 2,
      company: "Ecobank Nigeria Plc",
      period: "January 2007 - July 2007",
      location: "Nigeria",
      position: "Deputy Manager, Legal & Regulatory Unit",
      details: [
        "Performed supervisory role on credit review, documentation and availment processes",
        "Managed general legal operations issues including perfection of securities and letters of administration",
        "Advised bank on various contractual and investment transactions ensuring protected interests",
        "Advised bank on regulatory and statutory compliance requirements",
        "Advised on packaging and delivery of various banking products",
        "Prepared and reviewed commercial contracts and agreements including Technical Agreements and Software Agreements",
        "Assisted in formulating and developing corporate policies to enhance bank profitability and international viability",
      ],
    },
    {
      id: 3,
      company: "Bank PHB",
      period: "November 2003 - December 2006",
      location: "Nigeria",
      position: "Assistant Manager, Legal Services",
      details: [
        "Supervised all legal operations of the bank across southern Nigeria",
        "Advised bank in property acquisition and branch development documentation initiatives",
        "Prepared, reviewed, and advised bank on various commercial contracts",
        "Advised bank on new business relationships and investment opportunities",
        "Reviewed Legal Department processes and made recommendations for improvement in service delivery",
        "Assisted in formulating sustainable IT Procurement Policy for the bank",
        "Conducted training sessions for new bank staff on legal and regulatory issues in banking",
        "Note: Study Leave from September 2004 - May 2006",
      ],
    },
    {
      id: 4,
      company: "T.A. Solicitors",
      period: "October 2005 - May 2006",
      location: "London, UK",
      position: "Legal Counsel",
      details: [
        "Drafted, reviewed, and advised clients on various aspects of law including commercial contracts, franchise agreements, and loan agreements",
        "Advised on legal structures including debentures, guarantees, and indemnities",
        "Prepared legal bundles and other documents used in court trials",
        "Conducted legal research into various aspects of commercial law and contractual matters",
        "Performed general administrative duties including filing of documents in court and handling court appearance logistics",
        "Participated in mediation on commercial contracts facilitating dispute resolution",
      ],
    },
    {
      id: 5,
      company: "Platinum Bank Limited",
      period: "November 2003 - August 2004",
      location: "Nigeria",
      position: "Legal Services Role",
      details: [
        "Supervised legal operations of the bank",
        "Advised bank on property acquisition and branch development documentation",
        "Prepared and reviewed commercial contracts",
        "Advised bank on new business relationships and investments",
        "Reviewed Legal Department processes and made recommendations for improvement",
      ],
    },
    {
      id: 6,
      company: "FBN (Merchant Bankers) Limited",
      period: "August 2001 - November 2003",
      location: "Lagos, Nigeria",
      position: "Legal Officer",
      details: [
        "Advised bank on various legal and regulatory issues affecting operations",
        "Drafted and reviewed legal documents and agreements including loan agreements, lease agreements, guarantees, and bonds",
        "Served as secretary to the bank's Board Audit Committee",
        "Managed the bank's litigation portfolio and dispute resolution matters",
      ],
    },
    {
      id: 7,
      company: "Leadway Assurance Company Limited",
      period: "July 1999 - August 2001",
      location: "Lagos, Nigeria",
      position: "Legal Assistant",
      details: [
        "Drafted and reviewed legal agreements including bonds, guarantees, hire purchase agreements, service contracts, and insurance contracts",
        "Advised company on various aspects of commercial and business law",
        "Participated in review, drafting, and negotiation of new business agreements",
        "Conducted legal research and provided legal opinions on government policies affecting the insurance sector",
        "Successfully intervened in resolving numerous insurance claims through relationship building and negotiation skills",
        "Investigated fraudulent insurance claims and helped foil such claims protecting company interests",
      ],
    },
    {
      id: 8,
      company: "Sardauna Local Government",
      period: "1997 - 1998",
      location: "Taraba State, Nigeria",
      position: "Youth Corper",
      details: [
        "Wrote legal advice and opinions on various legal issues for government administration",
        "Assisted Local Government in dispute mediation involving different parties",
        "Conducted legal research on various aspects of commercial law, family law, and land law",
        "Provided legal guidance to government administration on multiple matters",
      ],
    },
  ];

  const selectedPlace = places[selectedPlaceId];

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            PROFESSIONAL JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Extensive career in legal services spanning oil & gas, corporate
            governance, and dispute resolution.
          </p>
        </div>

        {/* Master-Detail Split Pane */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Master: Places List */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-20space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {places.map((place) => (
                <button
                  key={place.id}
                  onClick={() => setSelectedPlaceId(place.id)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedPlaceId === place.id
                      ? "bg-accent/10 border-accent"
                      : "bg-card border-border hover:border-accent/50"
                  }`}
                >
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1">
                    {place.company}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {place.location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {place.period}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Detail: Selected Place Information */}
          <div className="lg:col-span-2">
            {selectedPlace && (
              <div className="bg-card rounded-xl border border-border p-8 max-h-[600px] overflow-y-auto">
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                    {selectedPlace.period}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                    {selectedPlace.company}
                  </h2>
                  <p className="text-accent font-semibold mb-4">
                    {selectedPlace.location}
                  </p>
                </div>

                {/* Multiple Positions (for Chevron) */}
                {selectedPlace.positions &&
                selectedPlace.positions.length > 0 ? (
                  <div className="space-y-8">
                    {selectedPlace.positions.map((pos, posIdx) => (
                      <div
                        key={posIdx}
                        className="border-l-2 border-accent/30 pl-6"
                      >
                        <div className="inline-block px-2.5 py-1 bg-accent/10 text-accent rounded text-xs font-semibold mb-2">
                          {pos.years}
                        </div>
                        <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-3">
                          {pos.title}
                        </h3>
                        <ul className="space-y-2.5">
                          {pos.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="text-accent mt-0.5 flex-shrink-0 text-xs">
                                ▪
                              </span>
                              <span className="leading-relaxed text-xs md:text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {selectedPlace.achievements && (
                      <div className="pt-6 border-t border-border/50 mt-8">
                        <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wide">
                          Key Achievements
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {selectedPlace.achievements}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="inline-block px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-semibold mb-4">
                      {selectedPlace.position}
                    </div>

                    {/* Details list */}
                    <ul className="space-y-3">
                      {selectedPlace.details &&
                        selectedPlace.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-accent mt-1 flex-shrink-0">
                              •
                            </span>
                            <span className="leading-relaxed text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
