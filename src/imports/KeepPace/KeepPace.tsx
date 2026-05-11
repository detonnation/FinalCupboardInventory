import svgPaths from "./svg-9v5puu0cj5";
import imgRectangle from "./6fddaba592350928ccd0ee0a246e1434327ca71f.png";

function Frame() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px relative size-full">
          <p className="font-['Neue_Haas_Grotesk_Display_Pro:65_Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[23.5px] text-white tracking-[-0.45px] whitespace-nowrap">Keep Pace</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ffec00} id="Vector" stroke="var(--stroke-0, #9FA4A7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #9FA4A7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="relative shrink-0 w-[358px]" data-name="Header Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <div className="content-stretch flex gap-[2.8px] h-[38px] items-center relative shrink-0 w-[150px]" data-name="KP-Logo-FINAL">
          <div className="relative shrink-0 size-[40.128px]" data-name="Rectangle">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
            </div>
          </div>
          <Frame />
        </div>
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-name="Container">
      <HeaderContent />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[844px] relative shrink-0 w-[390px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Header />
      </div>
    </div>
  );
}

export default function KeepPace() {
  return (
    <div className="bg-[#0b1d20] content-stretch flex flex-col items-start relative size-full" data-name="Keep Pace">
      <Container />
    </div>
  );
}