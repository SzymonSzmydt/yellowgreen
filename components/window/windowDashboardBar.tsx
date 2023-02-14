import wind from "./window.module.css";

type WindowProps = {
  children: React.ReactNode;
};

function WindowDashboardBar({ children }: WindowProps) {
  return <div className={wind.top}>{children}</div>;
}

export default WindowDashboardBar;
