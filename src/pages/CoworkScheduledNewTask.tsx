import { Plus, Info, X, ChevronDown } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkScheduledNewTaskProps {
  onNavigate?: (key: string) => void
}

export function CoworkScheduledNewTask({ onNavigate }: CoworkScheduledNewTaskProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl relative">
      {/* Background (same as scheduled page) */}
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="scheduled" onNavigate={onNavigate as any} />
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-10 pt-8 w-full">
            <h1 className="text-[28px] font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">定时任务</h1>
            <button className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 py-2">
              <Plus size={16} className="text-[#fafafa]" />
              <span className="text-sm font-medium text-[#fafafa] leading-[1.4] font-['Noto_Sans_SC']">新建任务</span>
            </button>
          </div>
          <div className="px-10 pt-2 w-full">
            <p className="text-sm text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
              按计划运行任务，或在你需要时随时执行。在任意任务中输入 /schedule 即可设置。
            </p>
          </div>
          <div className="px-10 pt-4 w-full">
            <div className="flex items-center justify-between bg-[#f5f5f5] rounded-[10px] border border-[#e5e5e5] px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <Info size={16} className="text-[#737373] shrink-0" />
                <span className="text-[13px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                  定时任务将在有效期前发送邮件和弹幕提示完成进度说明。
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">自动续期</span>
                <div className="w-9 h-5 bg-[#171717] rounded-full flex justify-end items-center p-0.5">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-0 bg-black/25 rounded-2xl" />

      {/* Dialog */}
      <div
        className="absolute bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col"
        style={{ width: 700, height: 700, left: 370, top: 100 }}
      >
        {/* Dialog Header */}
        <div className="flex items-center justify-between px-8 py-6 w-full">
          <span className="text-xl font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">新建定时任务</span>
          <button
            onClick={() => onNavigate?.('scheduled')}
            className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer"
          >
            <X size={20} className="text-[#737373]" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col gap-6 px-8 pb-6 overflow-auto">
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">名称</span>
              <span className="text-sm font-medium text-[#E7000B] font-['Inter']">*</span>
            </div>
            <div className="border border-[#e5e5e5] rounded-md px-3 py-2.5 w-full">
              <span className="text-sm text-[#0a0a0a] leading-[1.4] font-['Inter']">daily-briefing</span>
            </div>
          </div>

          {/* Description Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">描述</span>
              <span className="text-sm font-medium text-[#E7000B] font-['Inter']">*</span>
            </div>
            <div className="border border-[#e5e5e5] rounded-md px-3 py-2.5 w-full">
              <span className="text-sm text-[#0a0a0a] leading-[1.4] font-['Inter']">汇总今日日历和收件箱</span>
            </div>
          </div>

          {/* Prompt Field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">提示词</span>
              <span className="text-sm font-medium text-[#E7000B] font-['Inter']">*</span>
            </div>
            <div className="border border-[#e5e5e5] rounded-md p-3 w-full h-[140px]">
              <span className="text-sm text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
                检查今天的日历会议并汇总未读邮件。标注所有紧急事项。
              </span>
            </div>
          </div>

          {/* Frequency Field */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">频率</span>
            <div className="flex items-center justify-between border border-[#e5e5e5] rounded-md px-3 py-2.5 w-full cursor-pointer">
              <span className="text-sm text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">手动</span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>
          </div>

          {/* More Options */}
          <div className="flex items-center gap-1.5 border border-[#2196F3] rounded-md px-3 py-2.5 cursor-pointer">
            <span className="text-sm text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">更多选项</span>
            <ChevronDown size={16} className="text-[#737373]" />
          </div>
        </div>

        {/* Dialog Footer */}
        <div
          className="flex items-center justify-end gap-3 px-8 py-4"
          style={{ borderTop: '1px solid #f5f5f5' }}
        >
          <button
            onClick={() => onNavigate?.('scheduled')}
            className="flex items-center justify-center border border-[#e5e5e5] rounded-md px-5 py-2 shadow-sm cursor-pointer"
          >
            <span className="text-sm text-[#0a0a0a] font-['Noto_Sans_SC']">取消</span>
          </button>
          <button className="flex items-center justify-center bg-[#0a0a0a] rounded-md px-5 py-2 cursor-pointer">
            <span className="text-sm text-white font-['Noto_Sans_SC']">保存</span>
          </button>
        </div>
      </div>
    </div>
  )
}
