import Button from "./Button";

type Props = {
  buttonText: string;
};

export default function AuthForm({
  buttonText,
}: Props) {
  return (
    <form className="auth-form">
      <input
        type="email"
        placeholder="Email Address"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <Button>
        {buttonText}
      </Button>
    </form>
  );
}