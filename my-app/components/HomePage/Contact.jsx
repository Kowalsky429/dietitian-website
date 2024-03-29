import React from 'react';

function Contact() {
  return (
    <section id="kontakt" className="py-6 px-5 max-w-[1400px] mx-auto">
      <h3>
        Kontakt
        <div className="w-[70px] lg:w-[100px]" />
      </h3>
      <h4>Masz pytanie? Pisz śmiało!</h4>
      <p className="mb-12">
        Nie przejmuj się, o to zestaw najczęstszych pytań do dietetyków ktorzy
        zadają pacjenci zazwyczaj przed pierwsza wizytą. Jeśli masz inne pytanie
        śmiało zadaj je w formularzu kontaktowym poniżej!
      </p>
      <form
        method="post"
        action="https://formsubmit.co/kowalsky429@gmail.com"
        className="flex flex-col"
      >
        <h5 className="mb-6">Twoje imię*</h5>
        <input
          type="text"
          name="imie"
          placeholder="Imię"
          className="p-4 md:px-6 text-sm sm:text-base lg:text-lg"
        />
        <span className="my-8 lg:my-16 flex flex-col">
          <h5 className="mb-6">Adres e-mail*</h5>
          <input
            type="email"
            name="email"
            placeholder="przykładowy@email.com"
            className="p-4 md:px-6 text-sm sm:text-base lg:text-lg"
          />
        </span>
        <h5 className="mb-6">Treść wiadomości*</h5>
        <textarea
          name="wiadomosc"
          placeholder="Witam..."
          className="mb-8 h-[200px] lg:h-[260px] p-4 md:p-6 text-sm sm:text-base lg:text-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-black bg-opacity-50 hover:text-white text-white dark:bg-opacity-20 border-none py-3 mb-12 lg:mb-40 dark:hover:bg-opacity-50 dark:hover:text-light"
        >
          <p>Wyślij wiadomość</p>
        </button>
        <input
          type="hidden"
          name="_subject"
          value="Nowe zgłoszenie! patkadietetycznie.pl"
        />
        <input
          type="hidden"
          name="_autoresponse"
          value="Dziękuje za wiadomość! (autoresponse patkadietetycznie.pl)"
        />
      </form>
    </section>
  );
}

export default Contact;
