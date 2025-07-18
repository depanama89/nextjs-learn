import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <div className="flex flex-row items-center leading-0 text-white">
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-2xl md:text-[44px]">Acme</p>
    </div>
  );
}
