"use client";

import BuildCrestHeader from "@/components/BuildCrestHeader";

import Link from "next/link";

const services = [
  {
    title: "Commercial Construction",
    description: "Purpose-built spaces for businesses, institutions, and communities.",
    image: "photo-1486406146926-c627a92ad1ab",
    number: "01"
  },
  {
    title: "Residential Construction",
    description: "Thoughtfully planned homes and residential developments.",
    image: "photo-1600585154340-be6161a56a0c",
    number: "02"
  },
  {
    title: "Civil & Infrastructure",
    description: "Roadways, site infrastructure, and essential public works.",
    image: "photo-1519003722824-194d4455a60c",
    number: "03"
  }
];

function photo(id: string, width = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Home() {

  return (
    <main className="bc-home">
      <BuildCrestHeader />

      <section className="bc-hero">
        <div className="bc-hero-overlay">
          <div className="bc-hero-content">
            <p className="bc-eyebrow">
              BUILDCREST CONSTRUCTION GROUP
            </p>

            <h1>
              Building Your Vision
              <span>With Precision.</span>
            </h1>

            <p className="bc-hero-description">
              Construction solutions for commercial, residential,
              and infrastructure projects. Explore our capabilities
              and discover what we can build together.
            </p>

            <div className="bc-hero-actions">
              <Link href="/quote" className="bc-button bc-button-primary">
                Request a Quote <span aria-hidden="true">→</span>
              </Link>

              <Link href="/services" className="bc-button bc-button-outline">
                Explore Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bc-intro">
        <div className="bc-container bc-intro-grid">
          <div>
            <p className="bc-section-kicker">WHO WE ARE</p>
            <h2>Built on Planning. Driven by Quality.</h2>
          </div>

          <div className="bc-intro-copy">
            <p>
              Grandeur BuildCrest Construction Group presents a broad range of
              construction capabilities, from new building projects to
              infrastructure and site development.
            </p>
            <Link href="/about" className="bc-text-link">
              Learn About Grandeur BuildCrest <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bc-services">
        <div className="bc-container">
          <div className="bc-section-heading">
            <div>
              <p className="bc-section-kicker">OUR EXPERTISE</p>
              <h2>Construction Services</h2>
              <p>
                Explore the building solutions and construction
                disciplines represented across our services.
              </p>
            </div>

            <Link href="/services" className="bc-text-link">
              View All Services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="bc-service-grid">
            {services.map(service => (
              <Link
                href="/services"
                className="bc-service-card"
                key={service.title}
              >
                <div
                  className="bc-service-photo"
                  style={{
                    backgroundImage: `url("${photo(service.image)}")`
                  }}
                  role="img"
                  aria-label={`${service.title} illustrative photograph`}
                >
                  <span className="bc-service-number">
                    {service.number}
                  </span>
                </div>

                <div className="bc-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="bc-service-explore">
                    Explore Service <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bc-discover">
        <div className="bc-container bc-discover-inner">
          <div>
            <p className="bc-section-kicker">EXPLORE BUILDCREST</p>
            <h2>Discover Our Projects and Opportunities</h2>
            <p>
              Browse our project portfolio, explore illustrative
              ongoing developments, or visit the Careers page.
            </p>
          </div>

          <div className="bc-discover-actions">
            <Link href="/projects" className="bc-button bc-button-primary">
              View Projects <span aria-hidden="true">→</span>
            </Link>
            <Link href="/ongoing-projects" className="bc-button bc-button-outline">
              Ongoing Projects <span aria-hidden="true">→</span>
            </Link>
            <Link href="/careers" className="bc-button bc-button-outline">
              Explore Careers <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bc-cta">
        <div className="bc-container bc-cta-inner">
          <div>
            <p className="bc-section-kicker">START YOUR PROJECT</p>
            <h2>Let&apos;s Build Something Great.</h2>
            <p>
              Tell us about your construction plans and the
              services you&apos;re looking for.
            </p>
          </div>

          <Link href="/quote" className="bc-button bc-button-primary">
            Request a Construction Quote <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="bc-footer">
        <div className="bc-container bc-footer-grid">
          <div className="bc-footer-about">
            <strong>Grandeur BuildCrest</strong>
            <span>Construction Group</span>
            <p>
              Building ideas into lasting spaces and infrastructure.
            </p>
          </div>

          <div>
            <h3>Company</h3>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h3>Projects</h3>
            <Link href="/projects">Project Portfolio</Link>
            <Link href="/ongoing-projects">Ongoing Projects</Link>
          </div>

          <div>
            <h3>Opportunities</h3>
            <Link href="/careers">Careers</Link>
            <Link href="/quote">Request a Quote</Link>
          </div>
        </div>

        <div className="bc-container bc-footer-bottom">
          <span>© {2026} Grandeur BuildCrest Construction Group</span>
          <span>Construction · Projects · Careers</span>
        </div>
      </footer>
    </main>
  );
}