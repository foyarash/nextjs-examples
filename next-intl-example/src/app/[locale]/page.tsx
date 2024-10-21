import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-xl m-10 text-center text-2xl">
      {t("greeting")}
      <div className="flex justify-center gap-2">
        <Link locale="fr" href="/">
          🇫🇷
        </Link>
        <Link locale="en" href="/">
          🇬🇧
        </Link>
      </div>
    </div>
  );
}
