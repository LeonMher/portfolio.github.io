import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MyImage from "../assets/profilePic.png";

export const Hero = () => {
  return (
    <div className="hero flex flex-col items-center gap-4 md:flex-row">
      <div className="flex gap-4 md:flex flex-col items-center">
        <p className="text-5xl font-bold">Building beautify web experiences.</p>
        <Button
          variant="contained"
          sx={{ height: "60px", width: "150px" }}
          className="text-white text-5xl"
        >
          <RemoveRedEyeIcon />
          My Work.
        </Button>
      </div>
      <img
        className="w-full md:w-[800px]"
        src={MyImage}
        alt="my profile picture"
      />
    </div>
  );
};
