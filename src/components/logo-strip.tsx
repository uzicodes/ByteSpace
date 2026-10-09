import Image from 'next/image'

export function LogoStrip() {
  return (
    <div className="relative h-[202px] w-full overflow-hidden bg-[#F5F5F6]">
      <div className="absolute left-1/2 top-[80px] flex h-[42px] w-[1132px] -translate-x-1/2 items-end gap-[72px]">
        <span className="flex h-[41px] w-[167px] shrink-0 items-end">
          <Image src="/logo-strip/1.svg" alt="Partner logo 1" width={167} height={41} className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[168px] shrink-0 items-end">
          <Image src="/logo-strip/2.svg" alt="Partner logo 2" width={168} height={41} className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[170px] shrink-0 items-end">
          <Image src="/logo-strip/3.svg" alt="Partner logo 3" width={170} height={41} className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[41px] w-[170px] shrink-0 items-end">
          <Image src="/logo-strip/4.svg" alt="Partner logo 4" width={170} height={41} className="h-full w-full object-contain" />
        </span>
        <span className="flex h-[42px] w-[169px] shrink-0 items-end">
          <Image src="/logo-strip/5.svg" alt="Partner logo 5" width={169} height={42} className="h-full w-full object-contain" />
        </span>
      </div>
    </div>
  )
}

export default LogoStrip
