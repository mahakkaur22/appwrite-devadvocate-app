export default function Link() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Link" style={{ backgroundImage: "linear-gradient(135.078deg, rgb(253, 53, 110) 0%, rgb(253, 53, 110) 61%, rgb(254, 82, 108) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[15px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.999px] text-center text-nowrap text-white">
            <p className="leading-[24px]">Start building for free</p>
          </div>
        </div>
      </div>
    </div>
  );
}