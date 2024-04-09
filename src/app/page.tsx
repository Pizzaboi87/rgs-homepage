import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Partners from "@/components/Partners";
import DemoForm from "@/components/DemoForm";

const Home = () => {
  return (
    <main className="min-h[calc(100vh-95px)]">
      <Hero />
      <Articles />
      <Partners />
      <DemoForm />
    </main>
  );
};

export default Home;
