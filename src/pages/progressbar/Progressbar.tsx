import { FC } from "react";
import "./progressbar.css";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
