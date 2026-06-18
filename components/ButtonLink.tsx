import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link href={href} className="button-link">
      {children}
    </Link>
  );
}