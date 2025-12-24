import { Briefcase, Calendar, MapPin, ExternalLink, Award } from "lucide-react";

const experiences = [
    {
  id: 1,
  title: "MERN Stack Developer (Bootcamp)",
  company: "Ark-X Solutions",
  location: "Fez, Morocco",
  period: "09/2025 - 01/2026",
  description:
    "Completed an intensive MERN Stack bootcamp focused on building full-stack web applications using modern JavaScript technologies and best development practices.",
  tags: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
  ],
  highlights: [
    "Built full-stack MERN applications from scratch",
    "Used Git and GitHub for version control and collaboration",
    "Developed strong communication, teamwork, and problem-solving skills through collaborative workshops"
  ]},


  {
    id: 2,
    title: "Stack Developer | WordPress Website (Internship)",
    company: "Ryd MediaTech",
    location: "Fez, Morocco",
    period: "10/2024 - 04/2025",
    description: "Worked as a Full-Stack Developer, developing and maintaining company software applications, performing modifications and maintenance on WordPress websites.",
    tags: ["PHP", "Laravel", "React", "wordPress"],
    highlights: [
    "Developed and maintained company software applications",
    "Built and modified WordPress websites for clients",
    ]},
  {
  id: 3,
  title: "Mailer Marketing (Internship)",
  company: "Nadis",
  location: "Fez, Morocco",
  period: "07/2024 - 08/2024",
  description: "Managed mail marketing campaigns and analyzed performance to improve engagement.",
  tags: ["Mail Marketing", "Campaign Management", "Content Writing"],
  highlights: [
    "Created and managed mail marketing campaigns",
    "Improved audience engagement through targeted mailing lists",
    "Analyzed campaign performance and optimized content"
  ]
},
    {
    id: 4,
    title: "Stock Management System Developer (Internship)",
    company: "University of Medecine and Pharmacy",
    location: "Fez, Morocco",
    period: "04/2024 - 05/2024",
    description: "Built a stock management system using PHP and Laravel. Implemented real-time tracking and reporting features.",
    tags: ["PHP", "Laravel", "MySQL"],
    highlights: [
    "Implemented real-time tracking features",
    "Gained hands-on experience in stock management",
]
  },
  {
    id: 5,
    title: "Diploma in Full Stack Web Development",
    company: "IFMOTICA",
    location: "Fez, Morocco",
    period: "09/2022 - 06/2024",
    description: "Completed a full-stack web development diploma focusing on building web applications using modern front-end and back-end technologies.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "Git"],
    highlights: [
        
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className=" px-4 relative">
      <div className="container mx-auto max-w-5xl">
       <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 tracking-tight">
            Work <span className="text-primary relative">
              Experiences
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-35 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></span>
            </span>
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A timeline of my professional journey. Each role has contributed to my growth as a developer and problem-solver.
        </p>

        <div className="relative">
          {/* Timeline line - only visible on md+ screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>
          
          {/* Timeline connector dots for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>

          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* Timeline item for desktop (alternating layout) */}
              <div className="hidden md:flex items-center justify-center w-full">
                {/* Left side (even items) */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-1/2 pr-12">
                      <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 border border-border">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              <Briefcase size={20} />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{experience.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <MapPin size={14} />
                                <span>{experience.company}</span>
                                <span>•</span>
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                          {experience.demoUrl && (
                            <a
                              href={experience.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar size={14} />
                          <span>{experience.period}</span>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                          {experience.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2 text-primary mr-20">Key Achievements</h4>
                          <ul className="space-y-1">
                            {experience.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Award size={12} className="mt-0.5 flex-shrink-0 text-primary" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                    </div>

                    {/* Empty space on right */}
                    <div className="w-1/2 pl-12"></div>
                  </>
                )}

                {/* Right side (odd items) */}
                {index % 2 !== 0 && (
                  <>
                    {/* Empty space on left */}
                    <div className="w-1/2 pr-12"></div>

                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                    </div>

                    <div className="w-1/2 pl-12">
                      <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 border border-border">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              <Briefcase size={20} />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{experience.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <MapPin size={14} />
                                <span>{experience.company}</span>
                                <span>•</span>
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                          {experience.demoUrl && (
                            <a
                              href={experience.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar size={14} />
                          <span>{experience.period}</span>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                          {experience.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2 text-primary">Key Achievements</h4>
                          <ul className="space-y-1">
                            {experience.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Award size={12} className="mt-0.5 flex-shrink-0 text-primary" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile layout (simpler card stack) */}
              <div className="md:hidden flex">
                {/* Timeline dot for mobile */}
                <div className="relative flex-shrink-0">
                  <div className="absolute left-3 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>
                </div>
                
                <div className="ml-10 flex-1">
                  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 border border-border">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{experience.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin size={14} />
                            <span>{experience.company}</span>
                            <span>•</span>
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      {experience.demoUrl && (
                        <a
                          href={experience.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      <span>{experience.period}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-primary">Key Achievements</h4>
                      <ul className="space-y-1">
                        {experience.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Award size={12} className="mt-0.5 flex-shrink-0 text-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};