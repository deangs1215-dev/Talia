"use client";
import { useEffect, useState } from "react";

const services=[
 ["Individual therapy","A safe, confidential relationship where you can explore emotions, beliefs, behaviours, memories and the changes you want to make in your life."],
 ["Couples therapy","A considered space to understand patterns of conflict, restore communication and build a more connected, satisfying relationship."],
 ["Family therapy","Support for families moving through disconnection, change or pain—helping each person feel heard while the family finds a healthier way forward."],
 ["Psychological assessments","Comprehensive career, personality and psychoeducational assessments that bring clarity to a person’s needs, strengths and capabilities."],
 ["Workshops & training","Practical, engaging mental-health workshops for schools, teams and organisations, developed around your group’s needs."],
 ["Online therapy","Private virtual sessions for clients throughout South Africa, making meaningful psychological care more accessible and flexible."],
];
const faqs=[["Can therapy help me?","Therapy can help you process difficult experiences, understand recurring patterns, develop new ways to cope and reconnect with what matters to you. We begin with a complimentary call to see whether we feel like a good fit."],["What will sessions look like?","Therapy is highly individual. Sessions may include conversation, reflection, learning practical skills, noticing thoughts and body sensations, and gently working through experiences at a pace that feels safe."],["How long will I need therapy?","There is no set timeline. Some people come for a focused season, while others value longer-term support. We review your needs and goals together as the work unfolds."],["Do you offer online sessions?","Yes. Secure online sessions are available throughout South Africa, with in-person appointments available in Johannesburg."]];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path:string) => `${basePath}${path}`;

function Daisy({className=""}:{className?:string}){return <span className={`daisy-bloom ${className}`} aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><b></b></span>}

export default function Home(){const[menu,setMenu]=useState(false);const[faq,setFaq]=useState<number|null>(0);useEffect(()=>{const flowers=[...document.querySelectorAll('.daisy-bloom')];const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('bloom');observer.unobserve(entry.target)}}),{threshold:.2});flowers.forEach(f=>observer.observe(f));const timers=new Map<HTMLElement,number>();const moveSeeds=(event:PointerEvent)=>{document.querySelectorAll<HTMLElement>('.seed-body').forEach(seed=>{const rect=seed.getBoundingClientRect();const dx=rect.left+rect.width/2-event.clientX;const dy=rect.top+rect.height/2-event.clientY;const distance=Math.hypot(dx,dy);if(distance<105){const force=(105-distance)/105;const angle=Math.atan2(dy,dx);seed.style.transform=`translate(${Math.cos(angle)*48*force}px, ${Math.sin(angle)*48*force}px) rotate(${Math.cos(angle)*10}deg)`;const old=timers.get(seed);if(old)window.clearTimeout(old);timers.set(seed,window.setTimeout(()=>{seed.style.transform='translate(0, 0) rotate(0deg)'},650))}})};if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)window.addEventListener('pointermove',moveSeeds,{passive:true});return()=>{observer.disconnect();window.removeEventListener('pointermove',moveSeeds);timers.forEach(t=>window.clearTimeout(t))}},[]);return <main>
 <div className="dandelion-drift" aria-hidden="true">{Array.from({length:14},(_,i)=><span className={`seed seed-${i+1}`} key={i}><span className="seed-body"><i></i><b></b></span></span>)}</div>
 <div className="notice">Talia is welcoming new clients · Book a complimentary 15-minute consultation <a href="#contact">here</a></div>
 <header><a className="logo logo-image" href="#home"><img src={assetPath("/images/talia-logo.png")} alt="Talia Psychologist Services — A softer place to land"/></a><nav className={menu?"show":""}><a href="#about">ABOUT</a><a href="#services">WORK WITH ME</a><a href="#journey">OUR APPROACH</a><a href="#questions">QUESTIONS</a><a href="#contact">CONTACT</a></nav><button onClick={()=>setMenu(!menu)}>{menu?"CLOSE":"MENU"}</button></header>

 <section className="hero" id="home">
   <div className="paper left-paper"><h1>A GENTLE PLACE<br/><em>TO BEGIN</em></h1></div>
   <div className="hero-photo"><img src={assetPath("/images/hero-therapist.png")} alt="Talia, psychologist"/></div>
   <div className="hero-quote">“HEALING DOESN’T MEAN<br/>THE DAMAGE NEVER EXISTED.<br/>IT MEANS IT NO LONGER<br/>CONTROLS YOUR LIFE.”<small>— AKSHAY DUBEY</small></div>
   <img className="hero-botanical" src={assetPath("/images/botanical.png")} alt="Soft dried flowers"/>
   <span className="tape t1"></span>
 </section>

 <section id="about" className="intro textured"><Daisy className="daisy-intro"/>
   <img src={assetPath("/images/hands.png")} alt="A grounding hand over the heart"/>
   <div className="intro-copy"><h2>Sometimes, surviving<br/>means leaving parts<br/>of ourselves behind.</h2><p>We learn to stay busy, stay strong, keep the peace and carry on. These ways of coping protect us—until they begin to feel like a life we can no longer breathe inside.</p><p>Therapy is an invitation to return. Slowly. Safely. Without judgement.</p><strong>I am here to gently walk beside you as you find your way home to yourself.</strong><a className="soft-btn" href="#contact">BEGIN THE CONVERSATION</a></div>
 </section>

 <section className="help" id="services"><div className="help-title"><span>Support for your whole story</span><h2>Therapy<br/>can help<br/><em>you...</em></h2><figure className="help-photo"><span className="photo-tape"></span><img src={assetPath("/images/smiley-planter.png")} alt="Hands holding a cheerful yellow flower pot"/><figcaption>Small moments of hope can grow.</figcaption></figure></div><ul><li>Move from overwhelm and anxiety towards steadiness and safety.</li><li>Replace people-pleasing with clear, compassionate boundaries.</li><li>Understand old patterns instead of feeling controlled by them.</li><li>Speak honestly, reconnect and build healthier relationships.</li><li>Meet shame and self-doubt with acceptance and self-trust.</li><li>Reconnect with energy, meaning, joy and the life you want.</li></ul></section>

 <section className="touchstones textured"><Daisy className="daisy-touch-one"/><Daisy className="daisy-touch-two"/><p>WHILE EVERY JOURNEY IS UNIQUE, THESE ARE THE</p><h2>touchstones</h2><h3>of our work together</h3><div className="touch-grid"><article><b>01</b><h4>SAFETY</h4><p>Your story is met with compassion and without judgement. Nothing you bring is “too much”.</p></article><article><b>02</b><h4>CONNECTION</h4><p>We make space for your inner experience, relationships, needs and the wisdom of your body.</p></article><article><b>03</b><h4>EMPOWERMENT</h4><p>You are not here to be fixed. Our work helps you hear, trust and choose for yourself again.</p></article><article><b>04</b><h4>SELF-COMPASSION</h4><p>Healing grows when the hurt parts of us are met with curiosity rather than criticism.</p></article></div></section>

 <section className="services"><div className="service-heading"><small>WAYS TO WORK WITH TALIA</small><h2>Psychological<br/><em>care, shaped<br/>around you.</em></h2></div><div className="service-list">{services.map(([n,d],i)=><article key={n}><span>0{i+1}</span><h3>{n}</h3><p>{d}</p><a href="#contact">LEARN MORE&nbsp; →</a></article>)}</div></section>

 <section className="quote-band"><img src={assetPath("/images/botanical.png")} alt="Dried flowers in soft light"/><blockquote>“You do not have to<br/>walk through this<br/>alone.”<small>TALIA PSYCHOLOGIST SERVICES</small></blockquote></section>

 <section className="journey textured" id="journey"><Daisy className="daisy-journey"/><div className="journey-head"><span>AN INTEGRATIVE, HUMAN APPROACH</span><h2>Our<br/><em>Journey</em></h2><p>We work with your thoughts, emotions, relationships and lived experience—not simply a list of symptoms.</p></div><div className="steps"><article><b>1.</b><h3>RECONNECTION</h3><p>We begin by building trust and listening closely to what your inner world has been trying to say.</p></article><article><b>2.</b><h3>UNDERSTANDING</h3><p>Together we explore the patterns, experiences and needs beneath what has kept you feeling stuck.</p></article><article><b>3.</b><h3>INTEGRATION</h3><p>Insight becomes practical change as you build a life and relationships that feel more authentically yours.</p></article></div></section>

 <section className="questions" id="questions"><div><small>BEFORE WE BEGIN</small><h2>Questions</h2><p>It is natural to wonder what therapy will feel like. Here are a few answers to help you take the first step.</p></div><div>{faqs.map(([q,a],i)=><article key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span>{q}<b>{faq===i?"−":"+"}</b></button>{faq===i&&<p>{a}</p>}</article>)}</div></section>

 <section className="contact textured" id="contact"><Daisy className="daisy-contact-one"/><Daisy className="daisy-contact-two"/><p>WHEN YOU ARE READY</p><h2>Come home<br/><em>to yourself.</em></h2><span>Begin with a complimentary, no-pressure 15-minute call.</span><a href="mailto:hello@taliapsychology.co.za">GET IN TOUCH&nbsp;&nbsp; →</a></section>
 <footer><a className="logo footer-logo" href="#home"><img src={assetPath("/images/talia-logo.png")} alt="Talia Psychologist Services"/></a><div><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#journey">APPROACH</a><a href="#contact">CONTACT</a></div><p>Johannesburg · In-person & online<br/>hello@taliapsychology.co.za</p><small>© 2026 TALIA PSYCHOLOGIST SERVICES · DEMONSTRATION CONTENT</small></footer>
 </main>}
