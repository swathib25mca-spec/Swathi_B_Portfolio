import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' }
]

const frontendSkills = [
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 }
]

const backendSkills = [
    { name: 'Java', level: 60 },
    { name: 'C', level: 60 },
    { name: 'MySQL', level: 78 },
    { name: 'Git & GitHub', level: 90 }
]

const projects = [
    {
        title: 'Yummigo Online Food Ordering System',
        description: 'Online food ordering platform with restaurant listing, order tracking, and menu management.',
        tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
        github: 'https://github.com/swathiguttedar3-rgb',
        demo: '#contact'
    },
    {
        title: 'Student Management System',
        description: 'Admin dashboard for student data, CRUD operations, and academic performance tracking.',
        tech: ['Java', 'MySQL', 'JSP'],
        github: 'https://github.com/swathiguttedar3-rgb',
        demo: '#contact'
    }
]

const certificates = [
    {
        title: 'SAP Business Data Cloud',
        issuer: 'SAP',
        icon: '☁️'
    },
    {
        title: 'Data Structure using C',
        issuer: 'Coursera',
        icon: '📊'
    },
    {
        title: 'Data Analysis using Python',
        issuer: 'Coursera',
        icon: '🐍'
    }
]

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/swathib9579',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.57V24H.22V8.98zM7.98 8.98h4.38v2.07h.06c.61-1.16 2.1-2.38 4.31-2.38 4.61 0 5.46 3.03 5.46 6.97V24h-4.64v-7.93c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.2V24H7.98V8.98z" />
            </svg>
        )
    },
    {
        label: 'GitHub',
        href: 'https://github.com/swathiguttedar3-rgb',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23a11.55 11.55 0 0 1 3.02-.41c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.31 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        )
    }
]

const phrases = ['MCA Student', 'Aspiring Software Developer', 'Web & Software Enthusiast']

function App() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [showTop, setShowTop] = useState(false)
    const [typedText, setTypedText] = useState('')
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentPhrase = phrases[phraseIndex]
            if (!isDeleting) {
                setTypedText(currentPhrase.slice(0, letterIndex + 1))
                setLetterIndex(letterIndex + 1)
                if (letterIndex + 1 === currentPhrase.length) {
                    setIsDeleting(true)
                }
            } else {
                setTypedText(currentPhrase.slice(0, letterIndex - 1))
                setLetterIndex(letterIndex - 1)
                if (letterIndex - 1 === 0) {
                    setIsDeleting(false)
                    setPhraseIndex((phraseIndex + 1) % phrases.length)
                }
            }
        }, isDeleting ? 70 : 120)

        return () => clearTimeout(timeout)
    }, [letterIndex, isDeleting, phraseIndex])

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 520)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const sectionVariants = useMemo(
        () => ({
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }),
        []
    )

    return (
        <div className="min-h-screen bg-[#070b16] text-slate-100 overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-16 top-16 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="absolute right-[-120px] top-72 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
                <div className="absolute left-1/2 top-[60vh] h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <a href="#home" className="font-semibold text-white text-lg tracking-[0.18em] uppercase">
                        Swathi B B
                    </a>
                    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-200 transition hover:border-slate-500 md:hidden"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Menu</span>
                        <div className="space-y-1">
                            <span className="block h-0.5 w-6 bg-slate-200" />
                            <span className="block h-0.5 w-6 bg-slate-200" />
                            <span className="block h-0.5 w-6 bg-slate-200" />
                        </div>
                    </button>
                </div>
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden"
                        >
                            <div className="flex flex-col gap-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800/70"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-10">
                <section id="home" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl sm:p-12 lg:p-16">
                    <div className="absolute inset-0 bg-hero-gradient opacity-70" />
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-slate-950/60 via-slate-950/25 to-transparent" />
                    <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="space-y-6"
                        >
                            <p className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm uppercase tracking-[0.26em] text-violet-100 shadow-sm shadow-violet-500/10">
                                Modern Developer Portfolio
                            </p>
                            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Hi, I’m <span className="text-transparent bg-gradient-to-r from-purple-300 via-sky-300 to-white bg-clip-text">Swathi B B</span>
                            </h1>
                            <div className="max-w-2xl space-y-4 text-slate-300 sm:text-lg">
                                <p className="text-xl font-medium text-slate-100">MCA Student & Aspiring Software Developer</p>
                                <p>
                                    Passionate about crafting polished web experiences and building scalable software systems using modern tools. I enjoy turning ideas into real products with clean code and thoughtful design.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
                                    View Projects
                                </a>
                                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-200/30 hover:bg-slate-900">
                                    Contact Me
                                </a>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="glass-card bg-slate-900/80 p-5">
                                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Degree</p>
                                    <p className="mt-3 text-xl font-semibold text-white">MCA</p>
                                </div>
                                <div className="glass-card bg-slate-900/80 p-5">
                                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Focus</p>
                                    <p className="mt-3 text-xl font-semibold text-white">Web Development</p>
                                </div>
                                <div className="glass-card bg-slate-900/80 p-5">
                                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
                                    <p className="mt-3 text-xl font-semibold text-white">Bangalore, India</p>
                                </div>
                            </div>
                            <div className="mt-16 rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
                                <div className="mb-6">
                                    <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Hobbies</p>
                                    <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What I enjoy outside of coding</h3>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="glass-card rounded-[24px] border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-5 hover:shadow-glow">
                                        <p className="text-xs uppercase tracking-[0.3em] text-orange-400">Cooking</p>
                                        <p className="mt-3 text-xl font-semibold text-white">🍳 Cooking</p>
                                        <p className="mt-2 text-sm text-slate-300">Experimenting with flavors</p>
                                    </div>
                                    <div className="glass-card rounded-[24px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-5 hover:shadow-glow">
                                        <p className="text-xs uppercase tracking-[0.3em] text-blue-400">Traveling</p>
                                        <p className="mt-3 text-xl font-semibold text-white">✈️ Traveling</p>
                                        <p className="mt-2 text-sm text-slate-300">Exploring new places</p>
                                    </div>
                                    <div className="glass-card rounded-[24px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-5 hover:shadow-glow">
                                        <p className="text-xs uppercase tracking-[0.3em] text-purple-400">Music</p>
                                        <p className="mt-3 text-xl font-semibold text-white">🎵 Music</p>
                                        <p className="mt-2 text-sm text-slate-300">Staying inspired & focused</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="relative mx-auto w-full max-w-md"
                        >
                            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
                                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400 opacity-90" />
                                <div className="relative flex items-center justify-center rounded-[30px] border border-white/10 bg-slate-900/60 p-8">
                                    <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 shadow-[0_0_40px_rgba(59,130,246,0.35)]">
                                        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-4xl font-bold text-white shadow-lg shadow-cyan-500/10">
                                            SB
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 rounded-[30px] border border-white/10 bg-slate-950/80 p-6 text-slate-300">
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Profile Note</p>
                                    <p className="mt-4 text-base leading-7">
                                        Replace the avatar with your photo or branding image. The glowing border and glass layer keep the presentation premium.
                                    </p>
                                </div>
                                <div className="mt-6 grid gap-3 rounded-[30px] bg-slate-900/80 p-5 text-center text-sm text-slate-400">
                                    <span>Typing Effect:</span>
                                    <span className="inline-block rounded-full bg-slate-800/90 px-4 py-2 text-white">{typedText}|</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <motion.section
                    id="about"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">About</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
                        <p className="max-w-3xl text-slate-300">
                            I am a dedicated MCA student passionate about web development and software engineering. I enjoy working across the full stack, building elegant interfaces and reliable backend logic with a focus on performance and modern design.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                        <div className="glass-card p-8">
                            <div className="grid gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Professional Journey</h3>
                                    <p className="mt-4 text-slate-300 leading-7">
                                        Currently pursuing MCA and learning Java, Python, modern web technologies, and database systems. I love solving problems, collaborating with teams, and turning concepts into useful applications.
                                    </p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Skills</p>
                                        <p className="mt-3 text-lg font-semibold text-white">Java | Python</p>
                                    </div>
                                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Approach</p>
                                        <p className="mt-3 text-lg font-semibold text-white">Fast learner & Team player</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div className="glass-card flex flex-col gap-4 p-6">
                                <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Highlights</p>
                                <ul className="grid gap-3 text-slate-300">
                                    <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">MCA student with strong academic performance and real project experience.</li>
                                    <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">Passionate about Java, Python, HTML, CSS, JavaScript, React and databases.</li>
                                    <li className="rounded-3xl border border-white/10 bg-slate-950/80 p-4">Quick learner who enjoys collaborating and building modern interfaces.</li>
                                </ul>
                            </div>
                            <div className="glass-card rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-transparent p-6 text-slate-100">
                                <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Career Focus</p>
                                <h3 className="mt-4 text-2xl font-semibold">Software Development Internship</h3>
                                <p className="mt-3 text-slate-300 leading-7">
                                    Seeking opportunities where I can contribute to real-world software projects, strengthen my programming skills, and continue learning within a high-performing team.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="hobbies"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Hobbies</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">What I Enjoy Outside Code</h2>
                        <p className="max-w-3xl text-slate-300">
                            When I'm not building apps, I love exploring new places, cooking fresh meals, and listening to music that keeps me inspired.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Cooking</p>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Creating Flavors</h3>
                            <p className="mt-3 text-slate-300 leading-7">
                                Experimenting with recipes and cooking delicious meals is my favorite way to relax and stay creative.
                            </p>
                        </div>
                        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Traveling</p>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Exploring New Places</h3>
                            <p className="mt-3 text-slate-300 leading-7">
                                I enjoy seeing new cities, cultures, and landscapes—travel helps me gain fresh ideas and new energy.
                            </p>
                        </div>
                        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Music</p>
                            <h3 className="mt-4 text-2xl font-semibold text-white">Listening to Tunes</h3>
                            <p className="mt-3 text-slate-300 leading-7">
                                Listening to music is how I stay motivated—whether it’s chill beats for focus or upbeat tracks for energy.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="skills"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Skills</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Technical Skillset</h2>
                        <p className="max-w-3xl text-slate-300">
                            Modern skill cards with progress bars for the technologies I use most frequently in projects and learning journeys.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Frontend Skills */}
                        <div>
                            <h3 className="text-xl font-semibold text-violet-300 mb-5">Frontend</h3>
                            <div className="grid gap-5 sm:grid-cols-2">
                                {frontendSkills.map((skill) => (
                                    <motion.div key={skill.name} whileHover={{ y: -6 }} className="glass-card rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-glass">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                            <span className="text-sm text-slate-400">{skill.level}%</span>
                                        </div>
                                        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                                            <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-sky-400" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div>
                            <h3 className="text-xl font-semibold text-sky-300 mb-5">Backend</h3>
                            <div className="grid gap-5 sm:grid-cols-2">
                                {backendSkills.map((skill) => (
                                    <motion.div key={skill.name} whileHover={{ y: -6 }} className="glass-card rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-glass">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                            <span className="text-sm text-slate-400">{skill.level}%</span>
                                        </div>
                                        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                                            <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-sky-400" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Projects</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured Work</h2>
                        <p className="max-w-3xl text-slate-300">
                            Premium project cards with hover animations, well-defined tech stacks, and CTA links to GitHub and demo pathways.
                        </p>
                    </div>
                    <div className="grid gap-6 xl:grid-cols-2">
                        {projects.map((project) => (
                            <motion.article
                                key={project.title}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-glass"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-sky-400 to-cyan-400 opacity-0 transition duration-500 group-hover:opacity-100" />
                                <div className="relative z-10 grid gap-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.35em] text-violet-400">Project</p>
                                            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                                        </div>
                                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/90 text-2xl font-semibold text-white shadow-lg shadow-cyan-500/10">
                                            P
                                        </div>
                                    </div>
                                    <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-5">
                                        <p className="text-slate-300">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/85 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
                                            GitHub
                                        </a>
                                        <a href={project.demo} className="inline-flex items-center justify-center rounded-full border border-slate-900/20 bg-violet-500/15 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/25">
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="education"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Education</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Academic Timeline</h2>
                        <p className="max-w-3xl text-slate-300">
                            A strong foundation in computer applications, actively expanding knowledge in software engineering and modern web development.
                        </p>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/15 text-violet-200">
                                    MCA
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">RNS Institute of Technology</p>
                                    <p className="mt-2 text-2xl font-semibold text-white">Master of Computer Applications</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                                <div>
                                    <p className="text-sm text-slate-400">Academic Performance</p>
                                    <p className="mt-2 text-xl font-semibold text-white">84%</p>
                                </div>
                                <div className="rounded-full bg-slate-800/90 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                                    Strong GPA
                                </div>
                            </div>
                        </div>
                        <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Professional Growth</p>
                            <ul className="mt-6 space-y-4 text-slate-300">
                                <li className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">Focused on modern software development, problem solving, and collaborative engineering.</li>
                                <li className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">Experience building web applications with clean UI, responsive layouts, and premium design details.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    id="certificates"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Certifications</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Certificates</h2>
                        <p className="max-w-3xl text-slate-300">
                            Industry-recognized certifications demonstrating expertise in cloud technologies, data structures, and data analysis.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="glass-card group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/60 p-8 shadow-glass transition hover:border-violet-400/40 hover:shadow-glow"
                                whileHover={{ y: -4 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-sky-500/5 opacity-0 transition group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="text-5xl mb-4">{cert.icon}</div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Certificate</p>
                                    <h3 className="mt-3 text-xl font-semibold text-white leading-tight">{cert.title}</h3>
                                    <p className="mt-4 text-sm text-violet-300 font-medium">{cert.issuer}</p>
                                    <div className="mt-6 inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-violet-200">
                                        ✓ Verified
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    id="contact"
                    className="mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <div className="section-title">
                        <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Contact</p>
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Work With Me</h2>
                        <p className="max-w-3xl text-slate-300">
                            Send a message or connect via email, phone, or LinkedIn. I’m open to internships and collaborative opportunities.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <form className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                            <div className="grid gap-5">
                                <label className="space-y-3 text-sm text-slate-300">
                                    <span>Name</span>
                                    <input type="text" placeholder="Your name" className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60" />
                                </label>
                                <label className="space-y-3 text-sm text-slate-300">
                                    <span>Email</span>
                                    <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60" />
                                </label>
                                <label className="space-y-3 text-sm text-slate-300">
                                    <span>Message</span>
                                    <textarea rows="5" placeholder="Tell me about your project" className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400/60" />
                                </label>
                                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="grid gap-5">
                            <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Email</p>
                                <a href="mailto:swathib25mca@rnsit.ac.in" className="mt-3 block text-xl font-semibold text-white hover:text-violet-300">swathib25mca@rnsit.ac.in</a>
                            </div>
                            <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Phone</p>
                                <p className="mt-3 text-xl font-semibold text-white">9148402594</p>
                            </div>
                            <div className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
                                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Location</p>
                                <p className="mt-3 text-xl font-semibold text-white">Bangalore, India</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>

            <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-slate-500">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                    <p>© 2026 Swathi B B. Premium portfolio for internships & developer roles.</p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/75 text-slate-200 transition hover:bg-slate-800 hover:text-white">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-glow transition hover:scale-105"
                        aria-label="Scroll to top"
                    >
                        ↑
                    </motion.button>
                )}
            </AnimatePresence>
        </div >
    )
}

export default App
