import LoyalReach from "../assets/loyalreach.png";
import Medstaf from "../assets/medstaf.png";
import DigitAi from "../assets/digitai.png";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>My projects</p>
      <Projects
        name="Loyal Reach"
        description={
          "LoyalReach is an SMS sending product and I used to develop the front end logic of this app"
        }
        image={LoyalReach}
      />
      <Projects
        name="Medstaf"
        description={
          "It's a job looking app. I developed reusable components of this app making it pixel perfect and implemented storybook"
        }
        image={Medstaf}
      />
      <Projects
        name="DigitAi"
        description={
          "Implemented microfrontend architechture using Module Federation. This allowed me to optimize the application in many ways"
        }
        image={DigitAi}
      />
    </div>
  );
};
