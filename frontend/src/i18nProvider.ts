// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Albums":{"name":"albums","fields":{"Albumname":"Albumname","Numberoftracks":"Numberoftracks","Totalduration":"Totalduration","Id":"Id"}},"Artists":{"name":"artists","fields":{"Artistname":"Artistname","Dateofbirth":"Dateofbirth","Gender":"Gender","Band":"Band","Id":"Id"}},"Genres":{"name":"genres","fields":{"Genrename":"Genrename","Id":"Id"}},"Tracks":{"name":"tracks","fields":{"Name":"Name","Duration":"Duration","Album":"Album","Genre":"Genre","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    