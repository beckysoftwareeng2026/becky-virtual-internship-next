type Props = {
  children: React.ReactNode;
};

export default function PageTitle({
  children,
}: Props) {
  return (
    <h1 className="page-title">
      {children}
    </h1>
  );
}