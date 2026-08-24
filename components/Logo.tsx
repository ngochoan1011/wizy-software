import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link className="brand" href={`/${locale}`} aria-label="Wizy Software home">
      <span className="brand-mark" aria-hidden="true">
        <Image src="/wizy-mark.png" alt="" width={726} height={639} priority />
      </span>
      <span className="brand-copy">
        <strong>Wizy</strong>
        <span>Software</span>
      </span>
    </Link>
  );
}

