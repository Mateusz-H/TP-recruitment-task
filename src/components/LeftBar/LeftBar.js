import { leftBar } from "../../styles/LeftBarStyles/LeftBarMain.module.scss";
import { LeftBarLogo } from "./LeftBarLogo";

export const LeftBar = () => {
  return (
    <div className={leftBar}>
      <LeftBarLogo />
    </div>
  );
};
