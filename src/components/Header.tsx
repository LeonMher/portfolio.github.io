import { Hero } from "./Hero";

export const Header = () => {
  return (
    <>
      <div className="flex justify-start">
        <h1 className="md:text-2xl  border-b-2 border-gray-600">
          Mher Tsatinyan
        </h1>
      </div>
      <Hero />;
    </>
  );
};
