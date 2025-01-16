import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <main className="h-full flex flex-col justify-center container">
        <LoginForm />
      </main>
    </div>
  );
}
