"use client";

import { useEffect, useState } from "react";

const services = [
  [
    "Online Counselling",
    "Secure online counselling for clients throughout South Africa, offering meaningful support wherever you are.",
  ],
  [
    "Individual Counselling",
    "A confidential space to explore your emotions, patterns, choices and the changes you want to make in your life.",
  ],
  [
    "Couples Counselling",
    "A considered space to understand patterns of conflict, restore communication and reconnect with one another.",
  ],
  [
    "Family Counselling",
    "Support for families moving through disconnection, change or pain, helping each person feel heard while the family finds a healthier way forward.",
  ],
  [
    "Life Coaching",
    "Practical, goal-focused support to help you find direction, build confidence and move towards the life you want.",
  ],
  [
    "Workshops & Training",
    "Engaging mental-health and personal-growth workshops for schools, teams and organisations, shaped around your group's needs.",
  ],
  [
    "Group Counselling",
    "Supportive group spaces where shared experiences, guided reflection and practical tools help people grow together.",
  ],
];

const faqs = [
  [
    "Can counselling help me?",
    "Counselling can help you process difficult experiences, understand recurring patterns, develop new ways to cope and reconnect with what matters to you. We begin with a complimentary call to see whether we feel like a good fit.",
  ],
  [
    "What will sessions look like?",
    "Sessions are highly individual. They may include conversation, reflection, practical tools, coaching, journaling, creative exercises, movement or noticing thoughts and body sensations at a pace that feels safe.",
  ],
  [
    "How long will I need counselling?",
    "There is no set timeline. Some people come for a focused season, while others value longer-term support. We review your needs and goals together as the work unfolds.",
  ],
  [
    "Do you offer online sessions?",
    "Yes. Secure online sessions are available throughout South Africa, with in-person appointments available in Johannesburg.",
  ],
];

const testimonials = [
  [
    "Couples Counselling gave us the opportunity to see and understand one another again.",
    "Couples Counselling Client",
  ],
  [
    "Every session left me feeling a little lighter. Thanks Talia.",
    "Individual Counselling Client",
  ],
  [
    "I expected to sit and talk for an hour, but my sessions became so much more than that. The way Talia combines practical strategies and creative exercises helped me understand myself in ways I never had before.",
    "Individual Counselling Client",
  ],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

function Daisy({ className = "" }: { className?: string }) {
  return (
    <span className={`daisy-bloom ${className}`} aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <b></b>
    </span>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);

  useEffect(() => {
    const flowers = [...document.querySelectorAll(".daisy-bloom")];
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("bloom");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.2 },
    );

    flowers.forEach((flower) => observer.observe(flower));
    const timers = new Map<HTMLElement, number>();
    const moveSeeds = (event: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(".seed-body").forEach((seed) => {
        const rect = seed.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - event.clientX;
        const dy = rect.top + rect.height / 2 - event.clientY;
        const distance = Math.hypot(dx, dy);

        if (distance < 105) {
          const force = (105 - distance) / 105;
          const angle = Math.atan2(dy, dx);
          seed.style.transform = `translate(${Math.cos(angle) * 48 * force}px, ${Math.sin(angle) * 48 * force}px) rotate(${Math.cos(angle) * 10}deg)`;
          const old = timers.get(seed);
          if (old) window.clearTimeout(old);
          timers.set(
            seed,
            window.setTimeout(() => {
              seed.style.transform = "translate(0, 0) rotate(0deg)";
            }, 650),
          );
        }
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("pointermove", moveSeeds, { passive: true });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", moveSeeds);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <main>
      <div className="dandelion-drift" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span className={`seed seed-${i + 1}`} key={i}>
            <span className="seed-body">
              <i></i>
              <b></b>
            </span>
          </span>
        ))}
      </div>

      <div className="notice">
        INSYNC Wellness is welcoming new clients. Book a complimentary
        15-minute consultation <a href="#contact">here</a>
      </div>

      <header>
        <a className="logo insync-logo" href="#home">
          <span>INSYNC</span>
          <small>WELLNESS</small>
        </a>
        <nav className={menu ? "show" : ""}>
          <a href="#about">MEET TALIA</a>
          <a href="#services">WORK WITH ME</a>
          <a href="#approach">APPROACH</a>
          <a href="#questions">QUESTIONS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <button onClick={() => setMenu(!menu)}>{menu ? "CLOSE" : "MENU"}</button>
      </header>

      <section className="hero insync-hero" id="home">
        <div className="paper left-paper">
          <h1>
            WELCOME TO
            <br />
            <em>INSYNC WELLNESS</em>
          </h1>
          <p>
            Counselling and coaching for people who want more than just coping.
          </p>
        </div>
        <div className="hero-photo">
          <img src={assetPath("/images/hero-therapist.png")} alt="Talia Santos" />
        </div>
        <div className="hero-quote">
          THROUGH MEANINGFUL CONVERSATIONS, PRACTICAL TOOLS & A WHOLE-PERSON
          APPROACH, INSYNC HELPS YOU RECONNECT WITH YOURSELF, NAVIGATE LIFE'S
          CHALLENGES & MOVE WITH CONFIDENCE.
        </div>
        <img
          className="hero-botanical"
          src={assetPath("/images/botanical.png")}
          alt="Soft dried flowers"
        />
        <span className="tape t1"></span>
      </section>

      <section id="about" className="intro textured">
        <Daisy className="daisy-intro" />
        <img src={assetPath("/images/about-talia.png")} alt="Talia Santos smiling among plants" />
        <div className="intro-copy">
          <span className="section-kicker">MEET TALIA</span>
          <h2>Hi, I'm Talia Santos</h2>
          <p>
            I'm a Specialist Wellness Counsellor, Life Coach and the Founder of
            INSYNC Wellness.
          </p>
          <p>
            Over the years, I've realised that people rarely need someone to
            "fix" them. More often, they need someone who will truly listen,
            help them understand themselves, and gently guide them towards
            lasting change.
          </p>
          <p>
            That's why I created INSYNC. A space where counselling feels human.
            Where growth is practical. And where every person is met with
            compassion, curiosity and care.
          </p>
          <strong>
            Whether you're feeling overwhelmed, stuck, disconnected, or simply
            ready for something different, you're welcome here.
          </strong>
          <a className="soft-btn" href="#contact">
            BEGIN THE CONVERSATION
          </a>
        </div>
      </section>

      <section className="help" id="services">
        <div className="help-title">
          <span>Support for your whole story</span>
          <h2>
            Counselling
            <br />
            can help
            <br />
            <em>you...</em>
          </h2>
          <figure className="help-photo">
            <span className="photo-tape"></span>
            <img
              src={assetPath("/images/smiley-planter.png")}
              alt="Hands holding a cheerful yellow flower pot"
            />
            <figcaption>Small moments of hope can grow.</figcaption>
          </figure>
        </div>
        <ul>
          <li>Move from overwhelm and anxiety towards steadiness and safety.</li>
          <li>Navigate life changes.</li>
          <li>Replace people-pleasing with clear, compassionate boundaries.</li>
          <li>Understand old patterns instead of feeling controlled by them.</li>
          <li>Support goal setting.</li>
          <li>Speak honestly, reconnect and build healthier relationships.</li>
          <li>Reconnect with energy, meaning, joy and the life you want.</li>
        </ul>
      </section>

      <section className="touchstones textured">
        <Daisy className="daisy-touch-one" />
        <Daisy className="daisy-touch-two" />
        <p>WHILE EVERY JOURNEY IS UNIQUE, THESE ARE THE</p>
        <h2>touchstones</h2>
        <h3>of our work together</h3>
        <div className="touch-grid">
          <article>
            <b>01</b>
            <h4>SAFETY</h4>
            <p>A confidential space where you can simply be yourself.</p>
          </article>
          <article>
            <b>02</b>
            <h4>CONNECTION</h4>
            <p>
              We make space for your inner experience, relationships, needs and
              the wisdom of your body.
            </p>
          </article>
          <article>
            <b>03</b>
            <h4>EMPOWERMENT</h4>
            <p>
              You are not here to be fixed. Our work helps you hear, trust and
              choose for yourself again.
            </p>
          </article>
          <article>
            <b>04</b>
            <h4>SELF-COMPASSION</h4>
            <p>
              Healing grows when the hurt parts of us are met with curiosity
              rather than criticism.
            </p>
          </article>
        </div>
      </section>

      <section className="approach textured" id="approach">
        <Daisy className="daisy-journey" />
        <div className="approach-layout">
          <div>
            <span>EVERY AGE, STAGE & STORY</span>
            <h2>
              The INSYNC
              <br />
              <em>Approach</em>
            </h2>
          </div>
          <figure className="approach-photo">
            <img
              src={assetPath("/images/hands.png")}
              alt="A grounding hand over the heart"
            />
            <figcaption>Practical, human and whole-person support.</figcaption>
          </figure>
        </div>
        <div className="approach-copy">
          <p>
            Healing looks different for everyone. That's why no two sessions are
            the same. At INSYNC, I don't believe in ticking boxes or following a
            script.
          </p>
          <p>
            Instead, I draw from counselling psychology, life coaching, creative
            techniques & mind-body practices to meet you exactly where you are.
            Some conversations look like deep conversations. Others involve
            practice coaching. Sometimes we'll use reflection exercises,
            journaling, creative activities or movement to help you explore what
            words can't always express.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="service-heading">
          <small>WAYS TO WORK WITH INSYNC</small>
          <h2>
            Counselling
            <br />
            <em>& coaching,
            <br />
            shaped around you.</em>
          </h2>
        </div>
        <div className="service-list">
          {services.map(([name, description], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <a href="#contact">LEARN MORE&nbsp; -&gt;</a>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <img src={assetPath("/images/botanical.png")} alt="Dried flowers in soft light" />
        <blockquote>
          "You do not have to
          <br />
          walk through this
          <br />
          alone."
          <small>INSYNC WELLNESS</small>
        </blockquote>
      </section>

      <section className="journey textured" id="journey">
        <Daisy className="daisy-journey" />
        <div className="journey-head">
          <span>A HUMAN, PRACTICAL PROCESS</span>
          <h2>
            Our
            <br />
            <em>Journey</em>
          </h2>
          <p>
            We work with your thoughts, emotions, relationships and lived
            experience, not simply a list of symptoms.
          </p>
        </div>
        <div className="steps">
          <article>
            <b>1.</b>
            <h3>RECONNECTION</h3>
            <p>
              We begin by building trust and listening closely to what your
              inner world has been trying to say.
            </p>
          </article>
          <article>
            <b>2.</b>
            <h3>UNDERSTANDING</h3>
            <p>
              Together we explore the patterns, experiences and needs beneath
              what has kept you feeling stuck.
            </p>
          </article>
          <article>
            <b>3.</b>
            <h3>INTEGRATION</h3>
            <p>
              Insight becomes practical change as you build a life and
              relationships that feel more authentically yours.
            </p>
          </article>
        </div>
      </section>

      <section className="questions" id="questions">
        <div>
          <small>BEFORE WE BEGIN</small>
          <h2>Questions</h2>
          <p>
            It is natural to wonder what counselling will feel like. Here are a
            few answers to help you take the first step.
          </p>
        </div>
        <div>
          {faqs.map(([question, answer], i) => (
            <article key={question}>
              <button onClick={() => setFaq(faq === i ? null : i)}>
                <span>0{i + 1}</span>
                {question}
                <b>{faq === i ? "-" : "+"}</b>
              </button>
              {faq === i && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials textured" id="testimonials">
        <small>CLIENT WORDS</small>
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map(([quote, client]) => (
            <article key={quote}>
              <p>"{quote}"</p>
              <span>- {client}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact textured" id="contact">
        <Daisy className="daisy-contact-one" />
        <Daisy className="daisy-contact-two" />
        <p>WHEN YOU ARE READY</p>
        <h2>
          Come home
          <br />
          <em>to yourself.</em>
        </h2>
        <span>Begin with a complimentary, no-pressure 15-minute call.</span>
        <div className="contact-actions">
          <a href="mailto:insync.rsa@gmail.com">EMAIL INSYNC&nbsp;&nbsp; -&gt;</a>
          <a href="https://wa.me/27762054661">WHATSAPP&nbsp;&nbsp; -&gt;</a>
        </div>
      </section>

      <footer>
        <a className="logo footer-logo insync-logo" href="#home">
          <span>INSYNC</span>
          <small>WELLNESS</small>
        </a>
        <div>
          <a href="#about">MEET TALIA</a>
          <a href="#services">SERVICES</a>
          <a href="#approach">APPROACH</a>
          <a href="#contact">CONTACT</a>
        </div>
        <p>
          Johannesburg. In-person & online
          <br />
          insync.rsa@gmail.com
          <br />
          WhatsApp: 076 205 4661
        </p>
        <small>© 2026 INSYNC WELLNESS</small>
      </footer>
    </main>
  );
}
