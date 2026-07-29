import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Instagram, Facebook, Globe, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    athleteName: '',
    phone: '',
    email: '',
    playerAge: '13',
    position: 'Midfield',
    subject: 'Admission / Détection',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight leading-[1.1]">
              {lang === 'en' ? 'Contact Us or Visit Our Complex in Bamako' : 'Contactez-Nous ou Rendez-Nous Visite à Bamako'}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {lang === 'en'
                ? 'Our administrative team and technical staff are at your service at the N\'Tabacoro complex to answer all questions and welcome young athletes for trial passes.'
                : 'Notre équipe administrative et notre staff technique sont à votre disposition au complexe de N\'Tabacoro pour répondre à vos questions et accueillir vos enfants pour les séances de détection.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Maps Embed (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#153E75] text-white shadow-xl space-y-6">
              <Logo size="lg" lightText={true} />

              <div className="space-y-4 pt-4 border-t border-white/15">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#22C55E] flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Academy Headquarters' : 'Siège De L\'Académie'}
                    </h4>
                    <p className="text-sm text-white mt-1 leading-relaxed font-medium">
                      {ACADEMY_INFO.headquarters.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#22C55E] flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Direct Phone Lines' : 'Lignes Téléphoniques'}
                    </h4>
                    <div className="mt-1 flex flex-col gap-1 text-sm text-white font-semibold">
                      {ACADEMY_INFO.contacts.phones.map((p, idx) => (
                        <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-[#22C55E] transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#22C55E] flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Email Address' : 'Adresse E-mail'}
                    </h4>
                    <p className="text-sm text-white mt-1 font-semibold">
                      {ACADEMY_INFO.contacts.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#22C55E] flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-300 uppercase tracking-wider">
                      {lang === 'en' ? 'Complex Hours' : 'Horaires du Complexe'}
                    </h4>
                    <p className="text-sm text-white mt-1 font-semibold">
                      {lang === 'en' ? 'Mon - Sat: 7:30 AM – 6:30 PM' : 'Lundi - Samedi : 07h30 – 18h30'}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {lang === 'en' ? 'Sun: Match & Event Days' : 'Dimanche : Matchs & Tournois'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-white/15">
                <a
                  href="https://wa.me/22376129035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#22C55E] hover:bg-emerald-600 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-md group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Chat Directly on WhatsApp' : 'Discuter Directement sur WhatsApp'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Media Row */}
              <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                  {lang === 'en' ? 'Follow TFC:' : 'Suivez TFC:'}
                </span>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder for Bamako N'Tabacoro */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 relative h-64 bg-slate-100">
              <iframe
                title="Tandem Foot Club Bamako Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124564.31682335198!2d-8.038164392288321!3d12.639232338161726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51cd11b8b7e289%3A0x6b4db3b4f9810b1a!2sBamako%2C%20Mali!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#22C55E] text-white mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#153E75] font-heading">
                  {lang === 'en' ? 'Message Sent Successfully!' : 'Message Envoyé Avec Succès !'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                  {lang === 'en'
                    ? 'Thank you for contacting TANDEM FOOT CLUB. Our administrative office in Bamako will call you shortly.'
                    : 'Merci d’avoir contacté le TANDEM FOOT CLUB. Notre bureau administratif à Bamako vous recontactera très rapidement.'}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#153E75] text-white text-xs font-bold cursor-pointer hover:bg-[#1E4E92] transition-colors"
                >
                  {lang === 'en' ? 'Send Another Message' : 'Envoyer Un Autre Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#153E75] font-heading">
                    {lang === 'en' ? 'Send Us A Direct Message' : 'Envoyez-Nous Un Message'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {lang === 'en' ? 'Fill out the form below to inquire about admissions or partnerships.' : 'Remplissez le formulaire ci-dessous pour toute demande d’admission.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Parent / Guardian Name' : 'Nom du Parent / Tuteur'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'e.g. Ousmane Diallo' : 'ex. Ousmane Diallo'}
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Young Athlete Name' : 'Nom du Jeune Joueur'}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'en' ? 'e.g. Ibrahim Diallo' : 'ex. Ibrahim Diallo'}
                      value={formData.athleteName}
                      onChange={(e) => setFormData({ ...formData, athleteName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Phone / WhatsApp' : 'Téléphone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+223 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Email Address' : 'Adresse E-mail'}
                    </label>
                    <input
                      type="email"
                      placeholder="contact@domaine.ml"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Age Category' : 'Catégorie d\'Âge'}
                    </label>
                    <select
                      value={formData.playerAge}
                      onChange={(e) => setFormData({ ...formData, playerAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    >
                      <option value="11">U11 (11 ans)</option>
                      <option value="13">U13 (12-13 ans)</option>
                      <option value="15">U15 (14-15 ans)</option>
                      <option value="17">U17 (16-17 ans)</option>
                      <option value="20">U20 (18-20 ans)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Position' : 'Poste Joueur'}
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    >
                      <option value="Goalkeeper">{lang === 'en' ? 'Goalkeeper' : 'Gardien'}</option>
                      <option value="Defender">{lang === 'en' ? 'Defender' : 'Défenseur'}</option>
                      <option value="Midfield">{lang === 'en' ? 'Midfielder' : 'Milieu'}</option>
                      <option value="Attacker">{lang === 'en' ? 'Attacker / Winger' : 'Attaquant'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Purpose' : 'Objet'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                    >
                      <option value="Admission">{lang === 'en' ? 'Admission / Trial' : 'Admission / Détection'}</option>
                      <option value="General">{lang === 'en' ? 'General Inquiry' : 'Renseignement Général'}</option>
                      <option value="Sponsorship">{lang === 'en' ? 'Sponsorship / Partner' : 'Partenariat / Sponsoring'}</option>
                      <option value="Scouting">{lang === 'en' ? 'Scouting Inquiry' : 'Cellule Recrutement'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                    {lang === 'en' ? 'Your Message or Question' : 'Votre Message ou Question'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={lang === 'en' ? 'How can we help you?' : 'Comment pouvons-nous vous aider ?'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 text-sm font-medium transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Submit Inquiry' : 'Envoyer La Demande'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
