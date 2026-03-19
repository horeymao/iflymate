import { Plus, Info } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkScheduledProps {
  onNavigate?: (key: string) => void
}

export function CoworkScheduled({ onNavigate }: CoworkScheduledProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeItem="scheduled" onNavigate={onNavigate as any} />

        {/* Right Area */}
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-10 pt-8 w-full">
            <h1 className="text-[28px] font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">定时任务</h1>
            <button
              onClick={() => onNavigate?.('scheduled-new')}
              className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 py-2 cursor-pointer"
            >
              <Plus size={16} className="text-[#fafafa]" />
              <span className="text-sm font-medium text-[#fafafa] leading-[1.4] font-['Noto_Sans_SC']">新建任务</span>
            </button>
          </div>

          {/* Description */}
          <div className="px-10 pt-2 w-full">
            <p className="text-sm text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
              按计划运行任务，或在你需要时随时执行。在任意任务中输入 /schedule 即可设置。
            </p>
          </div>

          {/* Info Banner */}
          <div className="px-10 pt-4 w-full">
            <div className="flex items-center justify-between bg-[#f5f5f5] rounded-[10px] border border-[#e5e5e5] px-5 py-3.5 w-full">
              <div className="flex items-center gap-2.5">
                <Info size={16} className="text-[#737373] shrink-0" />
                <span className="text-[13px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                  定时任务将在有效期前发送邮件和弹幕提示完成进度说明。
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">自动续期</span>
                {/* Toggle Switch (ON) */}
                <div className="w-9 h-5 bg-[#171717] rounded-full flex justify-end items-center p-0.5 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            {/* Clock Illustration */}
            <div className="relative w-[100px] h-[100px]">
              {/* Clock circle */}
              <div className="absolute w-[72px] h-[72px] rounded-full border-[2.5px] border-[#e5e5e5]" style={{ left: 14, top: 18 }} />
              {/* Hour hand */}
              <div className="absolute w-[2.5px] h-[18px] bg-[#e5e5e5] rounded-sm" style={{ left: 49, top: 32 }} />
              {/* Minute hand */}
              <div className="absolute w-4 h-[2.5px] bg-[#e5e5e5] rounded-sm" style={{ left: 50, top: 48 }} />
              {/* Top bar */}
              <div className="absolute w-6 h-1.5 bg-[#e5e5e5] rounded-[3px]" style={{ left: 38, top: 8 }} />
              {/* Left leg */}
              <div className="absolute w-[2.5px] h-3 bg-[#e5e5e5] rounded-sm rotate-[30deg]" style={{ left: 22, top: 82 }} />
              {/* Right leg */}
              <div className="absolute w-[2.5px] h-3 bg-[#e5e5e5] rounded-sm -rotate-[30deg]" style={{ left: 76, top: 82 }} />
            </div>
            <span className="text-base text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">暂无定时任务</span>
          </div>
        </div>
      </div>
    </div>
  )
}
