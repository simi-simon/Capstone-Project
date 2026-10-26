import { useEffect, useState } from 'react';
import { getProjects, sendContact } from '../services/api.js';
const fallbackProjects = [
 { title:'AI Governance Portal', category:'CIVIC TECH', description:'A concept for making public-service information easier to find through guided instructions and an AI-assisted help interface.', tags:['React','Accessibility','Information design'] },
 { title:'SOS Emergency Response', category:'SMART CITY', description:'A concept interface for raising emergency alerts and helping responders understand incident details and status.', tags:['React','Responsive UI','Workflow design'] },
 { title:'FPGA MAC for Edge AI', category:'HARDWARE / AI', description:'A research-oriented project concept exploring power-aware multiply-accumulate datapaths for edge inference.', tags:['FPGA','Low power','Edge AI'] }
];
export default function Home() {
 const [projects,setProjects] = useState(fallbackProjects);
 const [form,setForm] = useState({name:'',email:'',message:''});
 const [status,setStatus] = useState('');
 useEffect(()=>{ getProjects().then(setProjects).catch(()=>{}); },[]);
 async function submit(e){ e.preventDefault(); setStatus('Sending…'); try { const result=await sendContact(form); setStatus(result.message || 'Message submitted.'); setForm({name:'',email:'',message:''}); } catch(err) { setStatus(err.message || 'API unavailable. Start the server and configure the database.'); } }
 return <main>
  <section className="hero"><p className="eyebrow">PORTFOLIO / FULL STACK DEVELOPMENT</p><h1>Ideas into<br/><span>working systems.</span></h1><p className="intro">A retro-arcade inspired developer portfolio showcasing software concepts across civic technology, emergency response, and edge AI.</p><a className="pixel-button" href="#projects">EXPLORE PROJECTS ↘</a><div className="hero-stats"><div><b>03</b><small>PROJECT CONCEPTS</small></div><div><b>01</b><small>REACT INTERFACE</small></div><div><b>∞</b><small>IDEAS TO BUILD</small></div></div></section>
  <section id="about" className="section"><p className="eyebrow">01 / ABOUT</p><h2>PLAYER PROFILE</h2><p className="body-copy">This portfolio is a single-page, responsive showcase built with React. It uses reusable interface components, project cards, and a contact form connected to an Express API. The visual system takes inspiration from retro arcade screens while keeping navigation and text readable.</p></section>
  <section id="projects" className="section"><p className="eyebrow">02 / SELECT YOUR QUEST</p><h2>FEATURED PROJECTS</h2><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="card-top"><span>0{i+1}</span><span>{p.category}</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{(p.tags||[]).map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
  <section id="contact" className="section contact-section"><p className="eyebrow">03 / SEND A TRANSMISSION</p><h2>LET'S CONNECT</h2><form onSubmit={submit} className="contact-form"><label>Name<input required maxLength="80" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email<input required type="email" maxLength="160" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Message<textarea required maxLength="2000" rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="pixel-button" type="submit">SUBMIT MESSAGE ↗</button>{status && <p role="status" className="status">{status}</p>}</form></section>
 </main>;
}
