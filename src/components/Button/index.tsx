import { useI18n } from "solid-i18n";
import { Component, createSignal } from "solid-js";

const Button: Component = () => {
  const i18n = useI18n();

  const [lang, setLang] = createSignal('en');

  const changeLang = () => {
    setLang(lang() === "en" ? "fr" : "en");
    i18n.setLanguage(lang());
  }

  return (
    <>
      <button class="btn mx-2" onClick={changeLang}>
        lang
      </button>
      <button class="btn">
        {i18n.t('title')}
      </button>
    </>
  );
}

export default Button;
