import { leftBar } from "../../styles/LeftBarStyles/LeftBarMain.module.scss";
import { LeftBarLogo } from "./LeftBarLogo";

export const LeftBar = () => (
  <div className={leftBar}>
    <LeftBarLogo />
  </div>
);
