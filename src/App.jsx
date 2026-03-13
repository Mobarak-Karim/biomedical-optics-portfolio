import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Camera,
  ChevronRight,
  Download,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const SCHOLAR_URL = "https://scholar.google.com/citations?user=pQwQspwAAAAJ&hl=en";
const LINKEDIN_URL = "https://www.linkedin.com/in/md-mobarak-karim-259ab9124/";

const portfolioImages = {
  hero: "/images/hero-octls.jpg",
  tile1: "/images/publication-jbo.jpg",
  tile2: "/images/publication-jbio.png",
  tile3: "/images/project-conference-talk.jpeg",

  project1: "/images/publication-jbo.jpg",
  project2: "/images/publication-jbio.png",
  project3: "/images/publication-spie2026.jpeg",

  gallery1: "/images/gallery-vascular.jpeg",
  gallery2: "/images/gallery-oac.png",
  gallery3: "/images/project-conference-talk.jpeg",

  headshot: "/images/project-headshot.jpg",
  spieGroup: "/images/spie.jpeg",
  spiePresident: "/images/spie-president.jpeg",
  bolGroup: "/images/bol-g.jpeg",
};
const featuredPublications = [
  {
    id: "project1",
    number: "01",
    image: portfolioImages.project1,
    authors:
      "Karim MM, Sun R, Khajavi B, Singh M, Ambekar YS, Schill AW, Aglyamov SR, Mayerich D, Larin KV",
    title:
      "Multimodal optical coherence tomography and two-photon light sheet fluorescence microscopy for embryo imaging",
    journal: "Journal of Biomedical Optics",
    year: "2025",
    volume: "30(6)",
    pages: "060501",
    doiLabel: "10.1117/1.JBO.30.6.060501",
    summary:
      "A multimodal platform integrating OCT with two-photon LSFM for co-registered structural and molecular embryo imaging.",
    contribution:
      "Led multimodal system integration, imaging workflow development, co-registration strategy, and figure preparation for embryo imaging studies.",
    links: {
      pdf: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12152587/",
      doi: "https://doi.org/10.1117/1.JBO.30.6.060501",
    },
    tags: ["OCT", "Two-photon LSFM", "Embryo Imaging", "Multimodal Imaging"],
  },
  {
    id: "project2",
    number: "02",
    image: portfolioImages.project2,
    authors: "Karim MM, Nair A, Singh M, Hatami M, Aglyamov SR, Larin KV",
    title:
      "Depth-Resolved Attenuation Coefficient Quantification During Murine Embryonic Brain Development",
    journal: "Journal of Biophotonics",
    year: "2025",
    volume: "18(10)",
    pages: "e202500212",
    doiLabel: "10.1002/jbio.202500212",
    summary:
      "Quantitative OCT analysis of murine brain development using depth-resolved attenuation coefficient mapping.",
    contribution:
      "Developed and validated depth-resolved optical attenuation analysis for embryonic brain characterization and quantitative developmental assessment.",
    links: {
      pdf: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jbio.202500212",
      doi: "https://doi.org/10.1002/jbio.202500212",
    },
    tags: ["Quantitative OCT", "Attenuation Mapping", "Mouse Embryo", "Brain Development"],
  },
  {
    id: "project3",
    number: "03",
    image: portfolioImages.project3,
    authors:
      "Karim MM, Lewis LA, Madamanchi G, Singh M, Schill AW, Aglyamov SR, Mayerich D, Lekven AC, Larin KV",
    title:
      "OCT-LS: a co-registered OCT and LSFM platform for simultaneous structural and molecular imaging of embryonic development",
    journal: "Proceedings of SPIE 13841, Multimodal Biomedical Imaging XXI",
    year: "2026",
    volume: "13841",
    pages: "1384104",
    doiLabel: "10.1117/12.3080842",
    summary:
      "Conference paper presenting the OCT-LS platform for simultaneous structural and molecular imaging in embryonic development.",
    contribution:
      "Presented the co-registered OCT-LS framework and its developmental imaging applications at SPIE Photonics West.",
    links: {
      pdf: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13841/1384104/OCT-LS--a-co-registered-OCT-and-LSFM-platform/10.1117/12.3080842.full",
      doi: "https://doi.org/10.1117/12.3080842",
    },
    tags: ["SPIE", "OCT-LS", "Embryogenesis", "Conference Proceeding"],
  },
];

const journalArticles = [
  {
    status: "Published",
    citation:
      "Md Mobarak Karim, Ruijiao Sun, Behzad Khajavi, Manmohan Singh, Yogeshwari S. Ambekar, Alexander W. Schill, Salavat R. Aglyamov, David Mayerich, and Kirill V. Larin. “Multimodal optical coherence tomography and two-photon light sheet fluorescence microscopy for embryo imaging.” Journal of Biomedical Optics 30(6), 060501 (2025).",
    doi: "10.1117/1.JBO.30.6.060501",
    link: "https://doi.org/10.1117/1.JBO.30.6.060501",
  },
  {
    status: "Published",
    citation:
      "Md Mobarak Karim, Achuth Nair, Manmohan Singh, Maryam Hatami, Salavat R. Aglyamov, and Kirill V. Larin. “Depth-Resolved Attenuation Coefficient Quantification During Murine Embryonic Brain Development.” Journal of Biophotonics 18(10), e202500212 (2025).",
    doi: "10.1002/jbio.202500212",
    link: "https://doi.org/10.1002/jbio.202500212",
  },
  {
    status: "In preparation",
    citation:
      "Md Mobarak Karim, et al. “Long-term imaging of zebrafish embryonic development with multimodal optical coherence tomography and light-sheet fluorescence microscopy.” In preparation for OPTICA.",
    doi: "",
    link: "#",
  },
  {
    status: "Submitted",
    citation:
      "Leah A. Lewis, Md Mobarak Karim, et al. “Multimodal Optical Imaging for the Assessment of the Teratogenic Effects of Embryonic Ethanol Exposure on Zebrafish Development.” Submitted to JBO.",
    doi: "",
    link: "#",
  },
  {
    status: "In preparation",
    citation:
      "James Klein, Md Mobarak Karim, et al. “A novel tissue clearing method for deep tissue embryonic imaging.” In preparation for Optics Letters.",
    doi: "",
    link: "#",
  },
  {
    status: "Published",
    citation:
      "Abu Montakim Tareq, Md Mohotasin Hossain, Main Uddin, Farhanul Islam, Zidan Khan, Md Mobarak Karim, Chadni Lyzu, Duygu Ağagündüz, A. S. M. Ali Reza, Talha Bin Emran, and Raffaele Capasso. “Chemical profiles and pharmacological attributes of Apis cerana indica beehives using combined experimental and computer-aided studies.” Heliyon 9(4), e15016 (2023).",
    doi: "10.1016/j.heliyon.2023.e15016",
    link: "https://doi.org/10.1016/j.heliyon.2023.e15016",
  },
  {
    status: "Published",
    citation:
      "Mumtaza Mumu, Ayan Das, Talha Bin Emran, Saikat Mitra, Fahadul Islam, Arpita Roy, Md Mobarak Karim, Rajib Das, Moon Nyeo Park, Deepak Chandran, Rohit Sharma, Mayeen Uddin Khandaker, Abubakr M. Idris, and Bonglee Kim. “Fucoxanthin: A promising phytochemical on diverse pharmacological targets.” Frontiers in Pharmacology 13, 929442 (2022).",
    doi: "10.3389/fphar.2022.929442",
    link: "https://doi.org/10.3389/fphar.2022.929442",
  },
];

const conferenceProceedings = [
  {
    year: "2026",
    citation:
      "Md Mobarak Karim, Leah A. Lewis, Geethangili Madamanchi, Manmohan Singh, Alexander W. Schill, Salavat R. Aglyamov, David Mayerich, Arne C. Lekven, and Kirill V. Larin. “OCT-LS: a co-registered OCT and LSFM platform for simultaneous structural and molecular imaging of embryonic development.” Proceedings of SPIE 13841, Multimodal Biomedical Imaging XXI (2026).",
    doi: "10.1117/12.3080842",
    link: "https://doi.org/10.1117/12.3080842",
  },
  {
    year: "2025",
    citation:
      "Md Mobarak Karim, Leah A. Lewis, Christian Zevallos-Delgado, Oscar E. Ruiz, Geethangili Madamanchi, Alexander W. Schill, Salavat R. Aglyamov, Arne C. Lekven, and Kirill V. Larin. “Combined structural and molecular zebrafish embryonic imaging on ethanol exposure effects during vasculature development.” Proceedings of SPIE 13327, Multiscale Imaging and Spectroscopy VI (2025).",
    doi: "10.1117/12.3043312",
    link: "https://doi.org/10.1117/12.3043312",
  },
  {
    year: "2024",
    citation:
      "Md Mobarak Karim, Ruijiao Sun, Oscar E. Ruiz, Leah A. Lewis, Manmohan Singh, Alexander W. Schill, Salavat R. Aglyamov, David Mayerich, and Kirill V. Larin. “Imaging zebrafish embryonic development with multimodal optical coherence tomography and light-sheet fluorescence microscopy.” Proceedings of SPIE 12834, Multimodal Biomedical Imaging XIX (2024).",
    doi: "10.1117/12.3001234",
    link: "https://doi.org/10.1117/12.3001234",
  },
  {
    year: "2023",
    citation:
      "Md Mobarak Karim, Ruijiao Sun, Behzad Khajavi, Manmohan Singh, Harshdeep S. Chawla, Yogeshwari S. Ambekar, Alexander W. Schill, David Mayerich, Mary E. Dickinson, and Kirill V. Larin. “Multimodal optical coherence tomography and two-photon selective-plane illumination microscopy for embryonic imaging.” Proceedings of SPIE 12371, Multimodal Biomedical Imaging XVIII (2023).",
    doi: "10.1117/12.2649508",
    link: "https://doi.org/10.1117/12.2649508",
  },
  {
    year: "2022",
    citation:
      "Md Mobarak Karim, Ruijiao Sun, Behzad Khajavi, Manmohan Singh, Harshdeep S. Chawla, David Mayerich, Mary E. Dickinson, and Kirill V. Larin. “Combined optical coherence tomography and light sheet fluorescence microscopy for embryonic imaging.” Proceedings of SPIE 11952, Multimodal Biomedical Imaging XVII (2022).",
    doi: "10.1117/12.2610091",
    link: "https://doi.org/10.1117/12.2610091",
  },
];

const researchAreas = [
  {
    title: "Multimodal Optical Imaging",
    text: "Developing co-registered OCT and LSFM systems for simultaneous structural and molecular imaging of embryonic development.",
  },
  {
    title: "Quantitative OCT",
    text: "Depth-resolved attenuation coefficient mapping and computational analysis for tissue characterization in developmental models.",
  },
  {
  title: "Optical Design & Simulation",
  text: "Optical analysis experience using Zemax for laser scanning microscopy system design, with work in achromatic doublet based scan-lens evaluation, aberration analysis, and performance optimization across imaging conditions.",
  },
  {
    title: "Image Analysis and Translation",
    text: "End-to-end pipelines for image processing, registration, visualization, and biologically meaningful quantification.",
  },
];

const education = [
  {
    degree: "PhD in Biomedical Engineering",
    school: "University of Houston",
    location: "Houston, Texas, USA",
    dates: "Jan 2021 – May 2026",
    supervisor: "Dr. Kirill V. Larin",
    thesis:
      "Development of multimodal combined optical coherence tomography and light-sheet microscopy for embryonic imaging",
  },
  {
    degree: "MSc in Biomedical Science and Engineering",
    school: "Gwangju Institute of Science and Technology",
    location: "Gwangju, South Korea",
    dates: "Aug 2018 – Dec 2020",
    supervisor: "Hyuk-Sang Kwon",
    thesis: "Analysis of achromatic doublet as a scan lens for laser scanning microscopy",
  },
  {
    degree: "BSc in Electrical and Electronic Engineering",
    school: "International Islamic University Chittagong",
    location: "Chittagong, Bangladesh",
    dates: "Aug 2013 – Aug 2017",
    supervisor: "Khandakar Abdullah Al Mamun",
    thesis:
      "Feasibility analysis and a proposal for a 1.3 MW hybrid renewable power plant for Saint Martins Island, Bangladesh",
  },
];

const trainingPrograms = [
  {
    year: "2024",
    title: "Multiscale Biophotonics Training Program",
    place: "Beckman Laser Institute, University of California, Irvine",
    note: "Supported by NIH",
  },
  {
    year: "2023",
    title: "CLIMB Biophotonics Summer School",
    place: "Beckman Institute, University of Illinois Urbana-Champaign",
    note: "Supported by NIH",
  },
  {
    year: "2022",
    title: "Siegman International School on Lasers",
    place: "Poland",
    note: "Organized by OPTICA",
  },
];

const toolProjects = [
  {
    title: "OCT-LS Data Processing Pipelines",
    text: "Custom Python workflows for co-registration, MIP generation, ROI analysis, volume rendering, and research figure preparation.",
  },
  {
    title: "Incubator and Instrument Control",
    text: "Arduino and LabVIEW based control for temperature, CO2 regulation, and integrated imaging support for live embryo studies.",
  },
  {
    title: "Quantitative Imaging Workflows",
    text: "Fiji, MATLAB, and Python based analysis for attenuation mapping, vascular quantification, and multimodal data interpretation.",
  },

];

const quickStats = [
  { value: "7+ years", label: "Biomedical optics and imaging research" },
  { value: "Optical Imaging", label: "OCT, OCE, OCM, OCTA, LSFM, Multiphoton, SGH" },
  { value: "Zebrafish & Mouse", label: "Embryogenesis imaging models" },
  { value: "Zemax OpticStudio", label: "Optical design and performance analysis" },
  { value: "Python / MATLAB / LabVIEW", label: "Analysis, automation, and visualization" },
  { value: "Quantitative Imaging", label: "Attenuation and vascular workflows" },
]

const galleryItems = [
  {
    id: "gallery1",
    image: portfolioImages.gallery1,
    label: "Gallery 01",
    title: "Co-registered vascular and structural embryo imaging",
    description:
      "Representative multimodal OCT-LSFM visualization showing registered morphology and vascular architecture in embryonic models.",
  },
  {
    id: "gallery2",
    image: portfolioImages.gallery2,
    label: "Gallery 02",
    title: "Quantitative attenuation mapping in developmental imaging",
    description:
      "Depth-resolved attenuation coefficient analysis used for quantitative OCT characterization during embryonic brain development.",
  },
  {
    id: "gallery3",
    image: portfolioImages.gallery3,
    label: "Gallery 03",
    title: "Scientific presentation and conference dissemination",
    description:
      "Conference presentation and research communication highlighting multimodal biomedical imaging, instrumentation, and translational optics.",
  },
];

const engagementItems = [
  {
    title: "SPIE and conference engagement",
    image: portfolioImages.spieGroup,
    text: "Presenting research and engaging with the biomedical optics community through conferences, posters, and networking.",
  },
  {
    title: "Professional networking",
    image: portfolioImages.spiePresident,
    text: "Building collaborations across optics, microscopy, translational imaging, and photonics communities.",
  },
  {
    title: "Biomedical Optics Laboratory community",
    image: portfolioImages.bolGroup,
    text: "Collaborative research environment spanning imaging system design, biological applications, and scientific communication.",
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#gallery", label: "Gallery" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.55, delay },
  };
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
      {children}
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(2,12,27,0.45)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function StatusTag({ children }) {
  return (
    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-300">
      {children}
    </span>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300";

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={cn(base, className)}
        target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
        rel={external && !href.startsWith("mailto:") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={cn(base, className)}>{children}</button>;
}

function SecondaryButton({ href, children, className = "" }) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.06]";

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={cn(base, className)}
        target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
        rel={external && !href.startsWith("mailto:") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return <button className={cn(base, className)}>{children}</button>;
}

function MobileNav({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.24 }}
          className="mt-4 lg:hidden"
        >
          <GlassCard className="overflow-hidden p-2">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.24, delay: index * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CitationCard({ item }) {
  return (
    <motion.article {...fadeUp()}>
      <GlassCard className="overflow-hidden">
        <div className="grid gap-0 xl:grid-cols-[1.25fr_0.85fr]">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Featured publication {item.number}
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                {item.year}
              </div>
            </div>

            <div className="mt-5 rounded-[24px] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-sm leading-7 text-slate-300">
                <span className="font-medium text-white">[{item.number}]</span>{" "}
                {item.authors}. <span className="font-medium text-white">{item.title}</span>.{" "}
                <span className="italic">{item.journal}</span>. {item.year}; {item.volume}: {item.pages}.
              </div>
              <div className="mt-3 text-sm text-cyan-300">DOI: {item.doiLabel}</div>
            </div>

            <p className="mt-5 text-base leading-8 text-slate-300">{item.summary}</p>

            <div className="mt-5 rounded-[22px] border border-cyan-400/15 bg-cyan-400/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Contribution
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.contribution}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <SecondaryButton href={item.links.pdf}>
                <BookOpen className="h-4 w-4" />
                PDF
              </SecondaryButton>
              <SecondaryButton href={item.links.doi}>
                <ExternalLink className="h-4 w-4" />
                DOI
              </SecondaryButton>
            </div>
          </div>

          <div className="relative min-h-[300px] border-t border-white/8 xl:border-l xl:border-t-0">
            {item.image ? (
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_42%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))] p-8 text-center">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300">
                  <Camera className="h-8 w-8" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white">Representative publication figure</h4>
                <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">
                  Key visual summary of the publication and its imaging contribution.
                </p>
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

function FullCitationItem({ item, index, showStatus = false }) {
  return (
    <motion.div {...fadeUp(index * 0.04)}>
      <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
        <div className="flex flex-wrap items-center gap-3">
          {showStatus ? <StatusTag>{item.status}</StatusTag> : <StatusTag>{item.year}</StatusTag>}
          {item.doi ? <span className="text-xs text-slate-500">DOI available</span> : null}
        </div>
        <p className="mt-4 text-sm leading-8 text-slate-300">{item.citation}</p>
        {item.doi ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            <ExternalLink className="h-4 w-4" />
            {item.doi}
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

function GalleryCard({ item }) {
  return (
    <motion.div {...fadeUp()}>
      <GlassCard className="h-full overflow-hidden">
        <div className="relative">
          {item.image ? (
            <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
          ) : (
            <div className="flex h-72 items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_30%),linear-gradient(135deg,#06101f,#030712)]">
              <div className="px-6 text-center">
                <div className="mx-auto inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-300">
                  <Camera className="h-7 w-7" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Research figure, montage, or instrument image.
                </p>
              </div>
            </div>
          )}
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-sm">
            {item.label}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function EducationCard({ item, index }) {
  return (
    <motion.div {...fadeUp(index * 0.06)}>
      <GlassCard className="h-full p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.dates}</div>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 text-sm font-medium text-slate-200">{item.school}</p>
            <p className="mt-1 text-sm text-slate-400">{item.location}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              <span className="font-medium text-white">Supervisor:</span> {item.supervisor}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              <span className="font-medium text-white">Thesis:</span> {item.thesis}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function TrainingCard({ item, index }) {
  return (
    <motion.div {...fadeUp(index * 0.06)}>
      <GlassCard className="h-full p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.year}</div>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.place}</p>
            <p className="mt-2 text-sm text-slate-400">{item.note}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function ToolCard({ item, index }) {
  return (
    <motion.div {...fadeUp(index * 0.06)}>
      <GlassCard className="h-full p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
            <Briefcase className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              Built for research workflows
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function EngagementCard({ item, index }) {
  return (
    <motion.div {...fadeUp(index * 0.06)}>
      <GlassCard className="h-full overflow-hidden">
        <div className="h-56 overflow-hidden">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-cyan-400 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.10),_transparent_25%),radial-gradient(circle_at_50%_100%,_rgba(8,145,178,0.08),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-12 top-[16%] rotate-[-90deg] text-[10px] font-semibold uppercase tracking-[0.9em] text-white/8">
            OCT • LSFM • Biomedical Optics • Embryogenesis • Quantitative Imaging
          </div>
          <div className="absolute right-[-140px] top-[30%] text-[80px] font-semibold uppercase tracking-[0.28em] text-white/[0.03] sm:text-[120px]">
            OCT LSFM
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8 lg:pb-24">
        <header className="sticky top-4 z-50 mb-8">
          <GlassCard className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  MD MOBARAK KARIM
                </div>
                <div className="mt-1 text-xl font-semibold text-slate-100 sm:text-2xl">
                  Md. Mobarak Karim
                </div>
              </div>

              <nav className="hidden flex-wrap gap-2 text-sm text-slate-300 lg:flex">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-xl px-3 py-2 transition hover:bg-white/[0.05]">
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-slate-200 transition hover:bg-white/[0.06] lg:hidden"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            <MobileNav open={mobileOpen} setOpen={setMobileOpen} />
          </GlassCard>
        </header>

        <section className="grid gap-8 pb-16 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:pb-20 lg:pt-10">
          <div className="lg:pr-4">
            <SectionLabel>PhD Candidate in Biomedical Engineering</SectionLabel>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="hero-balance max-w-4xl text-3xl font-semibold leading-[1.02] text-white sm:text-4xl lg:text-6xl"            >
              Multimodal optical imaging for embryonic development and translational biomedical optics
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-7 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl"
            >
               I developed very first co-registered multimodal imaging platforms based on optical coherence tomography and light-sheet fluorescence microscopy (OCT-LS) for simultaneous structural and molecular imaging. My work spans optical system development, quantitative tissue and image analysis, and custom software workflows for embryonic imaging in zebrafish and mouse models.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.14 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <PrimaryButton href="#publications">
                View Publications
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href={SCHOLAR_URL}>
                <BookOpen className="h-4 w-4" />
                Google Scholar
              </SecondaryButton>
              <SecondaryButton href="/Md_Mobarak_Karim_CV.pdf">
                <Download className="h-4 w-4" />
                Download CV
              </SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.74, delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Tag>University of Houston</Tag>
              <Tag>OCT, OCE, OCTA, OCM</Tag>
              <Tag> One-photon and Two-photon LSFM</Tag>
              <Tag>Two-photon imaging</Tag>
              <Tag>Biomedical Optics</Tag>
              <Tag>Zemax OpticStudio</Tag>
              <Tag>Embryonic Imaging</Tag>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <GlassCard className="overflow-hidden p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Featured collage
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    Research highlights and representative figures
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
                <div className="relative min-h-[320px] overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70 sm:min-h-[420px]">
                  <img src={portfolioImages.hero} alt="Featured research collage" className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-sm">
                    Lead figure
                  </div>
                </div>

                <div className="grid gap-3">
                  {[portfolioImages.tile1, portfolioImages.tile2, portfolioImages.tile3].map((src, index) => (
                    <div key={index} className="relative min-h-[132px] overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/70">
                      <img src={src} alt={`Collage tile ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <GlassCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <FlaskConical className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Embryogenesis</div>
                      <div className="text-xs text-slate-400">Zebrafish and murine models</div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Quantitative Imaging</div>
                      <div className="text-xs text-slate-400">OAC, registration, analysis</div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Instrumentation</div>
                      <div className="text-xs text-slate-400">Optical design and integration</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section id="about" className="pb-14 lg:pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp()}>
              <GlassCard className="p-7 sm:p-8">
                <SectionLabel>About</SectionLabel>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Biomedical Optics Researcher and Multimodal Imaging Systems Developer
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  PhD candidate in Biomedical Engineering at the University of Houston with over six years of research experience in biomedical optics, photonics, and multimodal imaging. My research centers on the development of co-registered optical coherence tomography and light-sheet fluorescence microscopy platforms for embryonic imaging, with additional expertise in two-photon microscopy, quantitative image analysis, and custom software development for imaging workflows.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  I work across zebrafish and mouse embryo imaging, system integration, quantitative tissue optics, and image-analysis pipelines that support both methodological development and biological discovery.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  My background also includes Zemax based optical analysis for laser scanning microscopy, including scan-lens evaluation, achromatic doublet optimization, aberration assessment, and imaging performance tradeoff analysis. Across research projects, I have contributed to system validation, multimodal co-registration, quantitative attenuation mapping, and publication-ready imaging workflows that support both methodological innovation and biological discovery.
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {quickStats.map((stat, index) => (
                <motion.div key={stat.label} {...fadeUp(index * 0.05)}>
                  <GlassCard className="p-6">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-400">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}

              <motion.div {...fadeUp(0.22)} className="sm:col-span-2">
                <GlassCard className="overflow-hidden">
                  <div className="grid gap-0 md:grid-cols-[0.42fr_0.58fr]">
                    <div className="min-h-[320px]">
                      <img
                        src={portfolioImages.headshot}
                        alt="Md Mobarak Karim"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                        Research Profile
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        Biomedical optics researcher focused on multimodal imaging
                      </h3>
                      <p className="mt-4 text-sm leading-8 text-slate-300">
                        My work combines optical coherence tomography, light-sheet fluorescence microscopy,
                        quantitative image analysis, and instrument development for embryonic imaging and
                        translational biomedical optics.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Tag>OCT</Tag>
                        <Tag>LSFM</Tag>
                        <Tag>Embryogenesis</Tag>
                        <Tag>Optical Design</Tag>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="research" className="pb-14 lg:pb-20">
          <GlassCard className="p-7 sm:p-8 lg:p-10">
            <SectionLabel>Research Focus</SectionLabel>
            <div className="grid gap-5 lg:grid-cols-2">
              {researchAreas.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(index * 0.06)}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Microscope className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section id="publications" className="pb-14 lg:pb-20">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Publications</SectionLabel>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                Journal articles and conference proceedings
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                Featured publications are followed by full journal and conference lists, with direct DOI links and a Google Scholar shortcut.
              </p>
            </div>
            <SecondaryButton href={SCHOLAR_URL} className="self-start lg:self-auto">
              <ExternalLink className="h-4 w-4" />
              Full list on Google Scholar
            </SecondaryButton>
          </div>

          <div className="space-y-6">
            {featuredPublications.map((item) => (
              <CitationCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <SectionLabel>Journal Articles</SectionLabel>
              </div>
              <div className="space-y-4">
                {journalArticles.map((item, index) => (
                  <FullCitationItem key={`${item.citation}-${index}`} item={item} index={index} showStatus />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <SectionLabel>Conference Proceedings</SectionLabel>
              </div>
              <div className="space-y-4">
                {conferenceProceedings.map((item, index) => (
                  <FullCitationItem key={`${item.citation}-${index}`} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="pb-14 lg:pb-20">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Research Gallery</SectionLabel>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">Dedicated visual figure gallery</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              A visual section for publication figures, supplementary panels, instrument photographs, attenuation maps, and conference visuals.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="pb-14 lg:pb-20">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Professional Engagement</SectionLabel>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">Conference presence and research community involvement</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Scientific presentations, networking, and community engagement across biomedical optics and photonics events.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {engagementItems.map((item, index) => (
              <EngagementCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="education" className="pb-14 lg:pb-20">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Education</SectionLabel>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">
              Academic training and advanced biophotonics programs
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-5">
              {education.map((item, index) => (
                <EducationCard key={item.degree} item={item} index={index} />
              ))}
            </div>

            <GlassCard className="p-6 sm:p-7">
              <SectionLabel>Advanced Training</SectionLabel>
              <div className="space-y-5">
                {trainingPrograms.map((item, index) => (
                  <TrainingCard key={`${item.title}-${item.year}`} item={item} index={index} />
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="projects" className="pb-14 lg:pb-20">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Software and Tools</SectionLabel>
            <h2 className="text-3xl font-semibold text-white sm:text-5xl">
              Research software, hardware control, and analysis workflows
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              A snapshot of the engineering and software infrastructure behind the imaging systems, quantitative pipelines, and experimental workflows.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {toolProjects.map((item, index) => (
              <ToolCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="contact" className="pb-10">
          <GlassCard className="overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.8fr]">
              <div className="p-7 sm:p-8 lg:p-10">
                <SectionLabel>Contact</SectionLabel>
                <h2 className="text-3xl font-semibold text-white sm:text-5xl">
                  Open to research collaboration, photonics roles, and biomedical imaging opportunities
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  I am interested in opportunities spanning biomedical optics, optical system design, computational imaging, multimodal microscopy, and translational instrumentation development.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <PrimaryButton href="mailto:m.k.mobarak@gmail.com">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </PrimaryButton>
                  <SecondaryButton href={LINKEDIN_URL}>
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </SecondaryButton>
                  <SecondaryButton href="/Md_Mobarak_Karim_CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </SecondaryButton>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.03] p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="space-y-5">
                  <div className="rounded-[22px] border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</div>
                        <a
                          href="mailto:m.k.mobarak@gmail.com"
                          className="mt-2 block text-sm text-slate-200 transition hover:text-cyan-300"
                        >
                          m.k.mobarak@gmail.com
                        </a>
                        <a
                          href="mailto:mkarim@cougarnet.uh.edu"
                          className="mt-1 block text-sm text-slate-400 transition hover:text-cyan-300"
                        >
                          mkarim@cougarnet.uh.edu
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Location</div>
                        <div className="mt-2 text-sm text-slate-300">Houston, Texas, USA</div>
                        <div className="mt-1 text-sm text-slate-400">
                          University of Houston • Biomedical Engineering
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Professional Profile</div>
                        <a
                          href={LINKEDIN_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-cyan-300"
                        >
                          View LinkedIn Profile
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={SCHOLAR_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 block text-sm text-slate-400 transition hover:text-cyan-300"
                        >
                          Google Scholar
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-slate-950/40 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Focus Areas</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Tag>OCT</Tag>
                          <Tag>LSFM</Tag>
                          <Tag>Embryo Imaging</Tag>
                          <Tag>Quantitative Optics</Tag>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Md. Mobarak Karim • Biomedical Optics Portfolio</div>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="transition hover:text-cyan-300">
                About
              </a>
              <a href="#publications" className="transition hover:text-cyan-300">
                Publications
              </a>
              <a href="#gallery" className="transition hover:text-cyan-300">
                Gallery
              </a>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}