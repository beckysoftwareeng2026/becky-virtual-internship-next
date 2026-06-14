type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps) {
  return (
    <button className="app-button">
      {children}
    </button>
  );
}