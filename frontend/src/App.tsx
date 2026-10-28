import { LanguageProvider, LanguageSwitcher, useLanguage } from "@suite/i18n";
import en from "./i18n/en";
import it from "./i18n/it";

function Root() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold text-text">{t("app.title")}</h1>
          <p className="text-sm text-text-muted">{t("app.tagline")}</p>
        </div>
        <LanguageSwitcher />
      </header>
      <main className="px-6 py-12">
        <div className="mx-auto max-w-md rounded-lg border border-border bg-surface p-8 text-center">
          <h2 className="text-lg font-medium text-text">{t("empty.title")}</h2>
          <p className="mt-2 text-sm text-text-muted">{t("empty.description")}</p>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider translations={{ en, it }}>
      <Root />
    </LanguageProvider>
  );
}
