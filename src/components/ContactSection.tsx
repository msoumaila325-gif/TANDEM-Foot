import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Instagram, Facebook, Globe } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    playerAge: '13',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Get In Touch' : 'Contactez-Nous'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Visit Our Academy In Bamako' : 'Rendez-Nous Visite À Bamako'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Our team is ready to answer parent questions and welcome young athletes for trial trials.'
              : 'Notre équipe est à votre disposition pour répondre à vos questions et accueillir vos enfants.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Maps Embed (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#153E75] text-white shadow-xl space-y-6">
              <Logo size="lg" lightText={true} />

              <div className="space-y-4 pt-4 border-t border-white/15">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4E92] flex items-center justify-center text-[#DCEBFF] flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#DCEBFF] uppercase tracking-wider">
                      {lang === 'en' ? 'Academy Headquarters' : 'Siège De L\'Académie'}
                    </h4>
                    <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                      {ACADEMY_INFO.headquarters.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4E92] flex items-center justify-center text-[#DCEBFF] flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#DCEBFF] uppercase tracking-wider">
                      {lang === 'en' ? 'Direct Phone Lines' : 'Lignes Téléphoniques'}
                    </h4>
                    <div className="mt-1 flex flex-col gap-1 text-sm text-gray-200 font-semibold">
                      {ACADEMY_INFO.contacts.phones.map((p, idx) => (
                        <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-[#60A5FA] transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4E92] flex items-center justify-center text-[#DCEBFF] flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#DCEBFF] uppercase tracking-wider">
                      {lang === 'en' ? 'Email Address' : 'Adresse E-mail'}
                    </h4>
                    <p className="text-sm text-gray-200 mt-1 font-semibold">
                      {ACADEMY_INFO.contacts.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Row */}
              <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                <span className="text-xs text-[#DCEBFF]/70 font-semibold uppercase tracking-wider">
                  {lang === 'en' ? 'Follow TFC:' : 'Suivez TFC:'}
                </span>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#1E4E92] text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#1E4E92] text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-[#1E4E92] text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder for Bamako N'Tabacoro */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative h-64 bg-gray-100">
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
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#F5F7FA] border border-gray-200 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#1E4E92] text-white mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#153E75] font-heading">
                  {lang === 'en' ? 'Message Sent Successfully!' : 'Message Envoyé Avec Succès !'}
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Thank you for contacting TANDEM FOOT CLUB. Our administrative office in Bamako will call you shortly.'
                    : 'Merci d’avoir contacté le TANDEM FOOT CLUB. Notre bureau administratif à Bamako vous recontactera très rapidement.'}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#1E4E92] text-white text-xs font-bold cursor-pointer"
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
                  <p className="text-xs text-gray-500 mt-1">
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-[#1E4E92] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Phone Number' : 'Numéro de Téléphone'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+223 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-[#1E4E92] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Email Address' : 'Adresse E-mail'}
                    </label>
                    <input
                      type="email"
                      placeholder="parent@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-[#1E4E92] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#153E75] uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Player Age' : 'Âge du Joueur'}
                    </label>
                    <select
                      value={formData.playerAge}
                      onChange={(e) => setFormData({ ...formData, playerAge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-[#1E4E92] text-sm"
                    >
                      <option value="11">11 Yrs (U11)</option>
                      <option value="13">12-13 Yrs (U13)</option>
                      <option value="15">14-15 Yrs (U15)</option>
                      <option value="17">16-17 Yrs (U17)</option>
                      <option value="20">18-20 Yrs (U20)</option>
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
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-[#1E4E92] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1E4E92] to-[#2563EB] text-white font-bold text-sm shadow-blue-glow hover:scale-[1.01] transition-transform cursor-pointer flex items-center justify-center gap-2"
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
