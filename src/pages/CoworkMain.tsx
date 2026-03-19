import { Bot, Folder, ChevronDown, Plus, Mic } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkMainProps {
  onNavigate?: (key: string) => void
}

export function CoworkMain({ onNavigate }: CoworkMainProps) {
  return (
    <div className="w-[1440px] h-[899px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeItem="new" onNavigate={onNavigate as any} />

        {/* Right Area */}
        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-10 gap-10 py-15 overflow-auto">
            {/* Hero */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 bg-[#0a0a0a] rounded-[14px] flex items-center justify-center">
                <Bot size={28} className="text-[#fafafa]" />
              </div>
              <h1 className="text-4xl font-bold text-[#0a0a0a] leading-[1.3] font-['Noto_Sans_SC']">
                不止聊天，搞定任务
              </h1>
              <p className="text-[15px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                安全、可靠、随时的 AI 工作伙伴
              </p>
            </div>

            {/* Capability Cards */}
            <div className="flex flex-col gap-3.5 w-[780px]">
              {/* Row 1 */}
              <div className="flex gap-3.5">
                <div className="flex-1 bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] leading-none">📁</span>
                    <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                      文件整理
                    </span>
                  </div>
                  <p className="text-[13px] text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
                    智能分类、归档和整理各类文档文件
                  </p>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] leading-none">✍️</span>
                    <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                      内容创作
                    </span>
                  </div>
                  <p className="text-[13px] text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
                    撰写报告、邮件、文案等文字内容
                  </p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex gap-3.5">
                <div className="flex-1 bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] leading-none">📅</span>
                    <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                      会议日程
                    </span>
                  </div>
                  <p className="text-[13px] text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
                    安排会议、管理日程、生成会议纪要
                  </p>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] leading-none">📱</span>
                    <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                      远程办公
                    </span>
                  </div>
                  <p className="text-[13px] text-[#737373] leading-[1.6] font-['Noto_Sans_SC']">
                    手机远程操控，随时随地处理工作
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="flex items-center justify-center px-10 pt-[30px] pb-8">
            <div className="w-[780px] h-[140px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] p-[20px_22px] flex flex-col justify-between">
              <p className="text-base text-[#737373] leading-[1.2] font-['Noto_Sans_SC']">有什么可以帮你的？</p>
              <div className="flex items-center justify-between">
                {/* Left Controls */}
                <div className="flex items-center gap-[18px]">
                  <div className="flex items-center gap-2.5 bg-[#f5f5f5] rounded-lg px-2.5 py-1.5 cursor-pointer">
                    <Folder size={16} className="text-[#737373]" />
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.2]">工作区</span>
                    <ChevronDown size={14} className="text-[#737373]" />
                  </div>
                  <Plus size={20} className="text-[#737373] cursor-pointer" />
                </div>
                {/* Right Controls */}
                <div className="flex items-center gap-[18px]">
                  <div className="flex items-center gap-1.5 bg-[#f5f5f5] rounded-lg px-2.5 py-1.5 cursor-pointer">
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC'] leading-[1.2]">
                      DeepSeek 3.1
                    </span>
                    <ChevronDown size={14} className="text-[#737373]" />
                  </div>
                  <Mic size={20} className="text-[#737373] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
