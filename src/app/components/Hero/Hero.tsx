import { NavBar } from "../NavBar/NavBar";
import { HeroInfo } from "../Hero/HeroInfo/HeroInfo";
import { WebAppInfo } from "./WebAppInfo/WebAppInfo";
export const Hero = () => {
  return (
    <section style={{ padding: "30px" }}>
      <WebAppInfo />
      <HeroInfo />
    </section>
  );
};
