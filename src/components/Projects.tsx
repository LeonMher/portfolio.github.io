type TProjects = {
  name: string;
  description: string;
  image: string;
};

export const Projects = ({ name, description, image }: TProjects) => {
  return (
    <div className="flex flex-col gap-5 border border-gray-200 rounded-lg p-5">
      <p className="text-2xl font-bold md:text-4xl">{name}</p>
      <p className="text-sm text-gray-500 text-1xl md:text-2xl">
        {description}
      </p>
      <img src={image} />
    </div>
  );
};
