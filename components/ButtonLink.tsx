import Link from "next/link";
import Button from "./Button";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({
  href,
  children,
}: Props) {
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
}