import {
  ArrowRight,
  BarChart3,
  Code2,
  Layers,
  Globe,
  Search,
  LineChart,
  MessageSquareQuote,
  MapPin,
  Phone,
  Database,
  Building2,
  Mail,
} from "lucide-react"
import Link from "next/link"
// import Head from "next/head"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
// import LanguageSwitcher from "./components/language-switcher"
import ChatBot from "./components/chat-bot"
import ContactForm from "./components/contact-form"
import ClientLogos from "./components/client-logos"
import Footer from "./components/footer"
import WhatsAppChat from "./components/whatsapp-chat"

export default function Home() {
  return (
    // <Head>
    //   <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    // </Head>
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between margin-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">
              <img src="/images/header/maft-project-logo.png" alt="maft-project-logo" />
            </span>
            <span className="text-primary">MAFT</span> Technology
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#partners" className="text-sm font-medium hover:text-primary transition-colors">
              Partners
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-primary transition-colors">
              Clients
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            <Button asChild>
              <a href="#contact">
                <MessageSquareQuote className="mr-2 h-4 w-4" />
                Request Quote
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    MAFT PROJECT 2025
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At MAFT Technology, we don't just deliver projects — we build partnerships that foster innovation,
                    solve complex problems, and power future-ready industries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <a href="#services">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </div>
              </div>
              <img
                alt="MAFT Technology Solutions"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                src="/images/hero/maft-professional.png"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide end-to-end technology solutions to help businesses transform, innovate, and grow.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">Core Services</h3>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/project-management.png"
                      alt="Project Management"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Layers className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>Agile & Waterfall methodologies</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Baseline scheduling & cost control</li>
                    <li>Claim analysis (EOT and variation claims)</li>
                    <li>Contract advisory services</li>
                    <li>Client representation</li>
                    <li>Expert witness services</li>
                    <li>Application development sprint planning</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/application-engineering.png"
                      alt="Application Engineering"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Code2 className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Application Engineering</CardTitle>
                  <CardDescription>Custom software solutions</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Design, selection, and integration of customized software</li>
                    <li>Certified business applications with Primavera P6</li>
                    <li>End-to-end application development</li>
                    <li>System integration services</li>
                    <li>Software architecture consulting</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/business-intelligence.png"
                      alt="Business Intelligence"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <BarChart3 className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Business Intelligence</CardTitle>
                  <CardDescription>Data-driven decision making</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Development of cost management software</li>
                    <li>Data mining, analytics, and visualization</li>
                    <li>Advanced BI solutions with Power BI, Tableau, Azure</li>
                    <li>SQL Server implementation and optimization</li>
                    <li>Custom reporting and dashboards</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">Enterprise Solutions</h3>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-2">
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/erp-implementation.jpeg"
                      alt="ERP Implementation"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Database className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>ERP System Implementation</CardTitle>
                  <CardDescription>End-to-end enterprise solutions</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>ERP system selection and implementation</li>
                    <li>Business process optimization</li>
                    <li>Data migration and integration</li>
                    <li>Custom module development</li>
                    <li>User training and change management</li>
                    <li>Post-implementation support and maintenance</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/enterprise-integration.jpeg"
                      alt="Enterprise Integration"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Building2 className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Enterprise Integration</CardTitle>
                  <CardDescription>Seamless system connectivity</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>API development and management</li>
                    <li>Legacy system integration</li>
                    <li>Cloud migration strategies</li>
                    <li>Middleware implementation</li>
                    <li>Enterprise application integration (EAI)</li>
                    <li>Service-oriented architecture (SOA)</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">Communication Solutions</h3>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-2">
              {/* WhatsApp Business API Card */}
              <Card className="overflow-hidden border-green-100">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/services/whatsapp-business.jpeg"
                        alt="WhatsApp Business API"
                        className="rounded-lg h-32 object-cover"
                      />
                    </div>
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-2">
                      Featured Service
                    </div>
                    <CardTitle>WhatsApp Business API</CardTitle>
                    <CardDescription>Enhanced customer communication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      Connect with customers on their preferred messaging platform and deliver exceptional service.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Verified Badge</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Template Messages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Interactive Messages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Account Management</span>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                      <a href="#contact">
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Request Quote
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* SMS Marketing Card */}
              <Card className="overflow-hidden border-blue-100">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/services/bulk-sms.png"
                        alt="SMS Marketing"
                        className="rounded-lg h-32 object-cover"
                      />
                    </div>
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
                      Fast & Effective
                    </div>
                    <CardTitle>SMS Marketing & Bulk SMS</CardTitle>
                    <CardDescription>Instant customer engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      Reach your customers instantly with our SMS marketing solutions with messages delivered in
                      minutes.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Instant Delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">High Response Rates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Competitive Pricing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <span className="text-sm">Campaign Management</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="#contact">
                        <MessageSquareQuote className="mr-2 h-4 w-4" />
                        Request Quote
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">Digital Services</h3>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-6 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/web-development.jpeg"
                      alt="Web Development"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Globe className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>Custom websites and web applications</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Responsive website design and development</li>
                    <li>E-commerce solutions</li>
                    <li>Content management systems</li>
                    <li>Progressive web applications</li>
                    <li>Web portal development</li>
                    <li>API development and integration</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/digital-marketing.jpeg"
                      alt="Digital Marketing"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <LineChart className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Digital Marketing</CardTitle>
                  <CardDescription>Comprehensive marketing strategies</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Social media marketing and management</li>
                    <li>Email marketing campaigns</li>
                    <li>Content marketing strategy</li>
                    <li>PPC advertising</li>
                    <li>Marketing automation</li>
                    <li>Analytics and performance tracking</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/images/services/seo-services.png"
                      alt="SEO Services"
                      className="rounded-lg h-32 object-cover"
                    />
                  </div>
                  <Search className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>SEO Services</CardTitle>
                  <CardDescription>Improve visibility and rankings</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comprehensive SEO audits</li>
                    <li>On-page and off-page optimization</li>
                    <li>Keyword research and strategy</li>
                    <li>Technical SEO improvements</li>
                    <li>Local SEO for businesses</li>
                    <li>SEO reporting and analytics</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button className="w-full" size="sm" asChild>
                    <a href="#contact">
                      <MessageSquareQuote className="mr-2 h-4 w-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" asChild>
                <a href="#contact">
                  <MessageSquareQuote className="mr-2 h-4 w-4" />
                  Request a Service Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Strategic Alliances</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Technology Partners</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We collaborate with industry-leading technology providers to deliver the best solutions for our
                  clients.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="flex flex-col items-center">
                <img src="/images/partners/microsoft.png" alt="Microsoft" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">Microsoft</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/oracle.png" alt="Oracle" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">Oracle</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/tableau.png" alt="Tableau" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">Tableau</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/sap.png" alt="SAP" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">SAP</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/ibm.jpeg" alt="IBM" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">IBM</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/google.png" alt="Google" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">Google</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/aws.png" alt="Amazon Web Services" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">AWS</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/partners/salesforce.png" alt="Salesforce" className="h-16 object-contain" />
                <p className="mt-2 text-sm font-medium">Salesforce</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Our partnerships enable us to provide certified, cutting-edge solutions tailored to your business needs.
              </p>
              <Button className="mt-4" variant="outline">
                Learn About Our Partnership Program
              </Button>
            </div>
          </div>
        </section>

        <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Trusted By</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Clients</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're proud to work with leading organizations across North America and beyond.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-8">
              <div className="bg-muted rounded-lg p-8">
                <ClientLogos />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">View Client Success Stories</Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About MAFT Technology</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're a team of experts dedicated to delivering innovative solutions for complex business
                    challenges. Our approach combines technical expertise with industry knowledge to create lasting
                    partnerships with our clients.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline">Our Team</Button>
                  <Button variant="outline">Our Process</Button>
                </div>
              </div>
              <img
                alt="MAFT Technology Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                src="/images/about/team-meeting.png"
              />
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              <div className="flex flex-col gap-1 items-center text-center p-4 bg-background rounded-lg shadow-sm">
                <img
                  alt="Innovation Icon"
                  className="w-16 h-16 mb-2"
                  src="/placeholder.svg?height=64&width=64&text=Innovation"
                />
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center text-center p-4 bg-background rounded-lg shadow-sm">
                <img
                  alt="Expertise Icon"
                  className="w-16 h-16 mb-2"
                  src="/placeholder.svg?height=64&width=64&text=Expertise"
                />
                <h3 className="text-xl font-bold">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings decades of combined experience across multiple industries and technologies.
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center text-center p-4 bg-background rounded-lg shadow-sm">
                <img
                  alt="Partnership Icon"
                  className="w-16 h-16 mb-2"
                  src="/placeholder.svg?height=64&width=64&text=Partnership"
                />
                <h3 className="text-xl font-bold">Partnership</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients to understand their unique challenges and goals.
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center text-center p-4 bg-background rounded-lg shadow-sm">
                <img
                  alt="Results Icon"
                  className="w-16 h-16 mb-2"
                  src="/placeholder.svg?height=64&width=64&text=Results"
                />
                <h3 className="text-xl font-bold">Results</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering measurable outcomes that drive business success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your business with innovative technology solutions? Contact us today.
                </p>
              </div>
              <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Our Office</h3>
                      <p className="text-muted-foreground">Qatar Freezone Business Innovation Park</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14.5 4.5C15.9 4.9 17.1 5.8 18 7c.9 1.2 1.5 2.6 1.5 4"></path>
                        <path d="M14 8c.5.3 1 .8 1.3 1.3.3.5.5 1.1.7 1.7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">WhatsApp</h3>
                      <p className="text-muted-foreground">+974 5503 2892</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M15 6h6M18 3v6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Call & Text</h3>
                      <p className="text-muted-foreground">+1 204 599 4873</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Call Only</h3>
                      <p className="text-muted-foreground">+974 4418 4929</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">Email Us</h3>
                      <p className="text-muted-foreground">service@maft-project.com</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <ChatBot />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
