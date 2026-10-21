import Circle from "../assets/Circle";
import Luz from "../assets/Luz";
import Logo from "../assets/VectorP";

export const inputClass =
  "w-full px-6 py-4 bg-[#FFFFFF82] text-[#2C1647] placeholder:text-[#2C16478A] text-[1.5rem] font-['Josefin_Sans'] border-[0.5px] border-solid border-[#0000001f] rounded-2xl outline-none transition-shadow focus:shadow-[0_0_0_3px_#FB980F55]";

export const primaryButtonClass =
  "flex items-center justify-center gap-3 px-8 py-4 bg-[#FE7234] text-white text-[1.5rem] font-bold rounded-[3rem] border-none transition-colors hover:bg-[#5165D3] disabled:opacity-60 disabled:hover:bg-[#FE7234] focus:outline-none";

export const secondaryButtonClass =
  "flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#5EA3C0] text-[1.5rem] rounded-[3rem] border-none shadow-[0px_4px_0px_0px_#CDCDCD40,0px_4px_0px_0px_#ACACAC40_inset,0px_4px_4px_0px_#00000040] transition-colors hover:bg-[#4A82EC] hover:text-white focus:outline-none";

export function AdminBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-[#4A4A4A] font-['Josefin_Sans']">
      <div className="pointer-events-none absolute -top-4 -left-12">
        <Luz />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 w-[40rem] h-[40rem] max-md:w-[24rem] max-md:h-[24rem]">
        <Circle width="100%" height="100%" />
      </div>
      <div className="pointer-events-none fixed left-[-12%] bottom-[-25%] rotate-180 w-[55rem] h-[55rem] max-md:w-[30rem] max-md:h-[30rem]">
        <Circle color="#FB980F54" width="100%" height="100%" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GlassCard({ children, className = "", solid = false }) {
  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div className="h-[1.2rem] bg-[#EF7D13] shrink-0" />
      <div
        className={`flex-1 ${
          solid ? "bg-white" : "bg-[#FFFFFFB8] backdrop-blur-[39.75px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h1 className="m-0 text-[2.8rem] leading-tight font-bold text-[#43ADB9]">
      {children}
    </h1>
  );
}

export function AdminLogo({ size = "4.5rem" }) {
  return <Logo width={size} height={size} />;
}

export function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2 text-[1.4rem] font-semibold text-[#4A4A4A] w-full">
      {label}
      {children}
    </label>
  );
}

export function ErrorMessage({ children }) {
  return (
    <p className="m-0 bg-[#FFF1EA] text-[#C2410C] text-[1.4rem] rounded-2xl px-6 py-4">
      {children}
    </p>
  );
}
