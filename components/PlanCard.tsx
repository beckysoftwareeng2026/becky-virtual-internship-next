import Button from "./Button";

type Props = {
  title: string;
  price: string;
};

export default function PlanCard({
  title,
  price,
}: Props) {
  return (
    <div className="plan-card">
      <h2>{title}</h2>

      <p>{price}</p>

      <Button>
        Select Plan
      </Button>
    </div>
  );
}