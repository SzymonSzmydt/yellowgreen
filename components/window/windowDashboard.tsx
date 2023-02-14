import wind from "./window.module.css";

type WindowProps = {
  children: React.ReactNode;
};

function WindowDashboard({ children }: WindowProps) {
  return (
    <div className={wind.general}>
      <main className={wind.main}>{children}</main>
    </div>
  );
}

export default WindowDashboard;
