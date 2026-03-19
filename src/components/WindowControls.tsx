import { PanelLeftClose } from 'lucide-react'

export function WindowControls() {
  return (
    <div className="flex items-center justify-between w-full px-2 pt-1.5 pb-2.5">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <PanelLeftClose size={18} className="text-[#737373]" />
    </div>
  )
}
