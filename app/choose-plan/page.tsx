export default function ChoosePlanPage() {
  return (
    <div className="choose-plan">
      <h1>Choose Your Plan</h1>

      <div className="plan-card">
        <h2>Basic</h2>
        <p>$0/month</p>
        <button>Select Plan</button>
      </div>

      <div className="plan-card">
        <h2>Premium</h2>
        <p>$9.99/month</p>
        <button>Select Plan</button>
      </div>
    </div>
  );
}