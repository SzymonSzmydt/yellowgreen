import wind from "./window.module.css";

type WindowProps = {
  children: React.ReactNode;
};

function WindowDashboardBar({ children }: WindowProps) {
  return <div className={wind.bar}>{children}</div>;
}

export default WindowDashboardBar;
