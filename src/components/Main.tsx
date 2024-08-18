import LoyalReach from "../assets/loyalreach.png";
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
    </div>
  );
};
