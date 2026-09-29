export function LogoStrip() {
  return (
    <div className="relative h-[202px] w-full overflow-hidden bg-[#F5F5F6]">
      <div className="absolute left-1/2 top-[80px] flex h-[42px] w-[1132px] -translate-x-1/2 items-end gap-[72px]">
        <span className="flex h-[41px] w-[167px] shrink-0 items-end">
          <img src="/logo-strip/1.svg" alt="" className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[168px] shrink-0 items-end">
          <img src="/logo-strip/2.svg" alt="" className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[170px] shrink-0 items-end">
          <img src="/logo-strip/3.svg" alt="" className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[170px] shrink-0 items-end">
          <img src="/logo-strip/4.svg" alt="" className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[42px] w-[169px] shrink-0 items-end">
          <img src="/logo-strip/5.svg" alt="" className="h-full w-full object-contain" />
        </span>
      </div>
    </div>
  )
}

export default LogoStrip
