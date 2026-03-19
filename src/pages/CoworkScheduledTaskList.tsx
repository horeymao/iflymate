import { Plus, Info, Timer } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkScheduledTaskListProps {
  onNavigate?: (key: string) => void
}

interface ScheduledCard {
  title: string
  desc: string
  schedule: string
}

const cards: ScheduledCard[] = [
  {
    title: '每日工作总结',
    desc: '自动汇总当天关键进展、风险与待办，生成结构化日报，便于复盘和同步。',
    schedule: 'Hourly at :01',
  },
  {
    title: '每日资讯检索',
    desc: '按你的关注主题抓取行业动态与重要公告，提炼要点并附上可追溯来源链接。',
    schedule: 'Hourly at :04',
  },
  {
    title: '当日待办整理',
    desc: '整合分散任务并自动去重，按优先级与截止时间排序，输出可直接执行的清单。',
    schedule: 'Every day at 9:03',
  },
  {
    title: '每周复盘周报',
    desc: '汇总本周目标完成度、关键成果与问题项，自动生成周报草稿并给出下周计划建议。',
    schedule: 'Every 星期一 at 9:09',
  },
]

export function CoworkScheduledTaskList({ onNavigate }: CoworkScheduledTaskListProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="scheduled" onNavigate={onNavigate as any} />

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
            <div className="flex items-center justify-between bg-[#f5f5f5] rounded-[10px] border border-[#e5e5e5] px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <Info size={16} className="text-[#737373] shrink-0" />
                <span className="text-[13px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">
                  定时任务将在有效期前发送邮件和弹幕提示完成进度说明。
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">自动续期</span>
                <div className="w-9 h-5 bg-[#171717] rounded-full flex justify-end items-center p-0.5 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Task Cards */}
          <div className="flex-1 overflow-auto px-10 pb-8 pt-6">
            <div className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="flex gap-4">
                {cards.slice(0, 3).map((card) => (
                  <div
                    key={card.title}
                    className="flex-1 h-[160px] border border-[#e5e5e5] rounded-xl p-[20px_24px] flex flex-col justify-between"
                  >
                    <div className="flex flex-col gap-1.5">
                      <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                        {card.title}
                      </span>
                      <p className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{card.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#F0F7F0] rounded-xl px-2 py-1 w-fit">
                      <Timer size={14} className="text-[#4CAF50]" />
                      <span className="text-xs font-medium text-[#4CAF50] leading-[1.4] font-['Noto_Sans_SC']">
                        {card.schedule}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-4">
                <div className="flex-1 h-[160px] border border-[#e5e5e5] rounded-xl p-[20px_24px] flex flex-col justify-between">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-base font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                      {cards[3].title}
                    </span>
                    <p className="text-sm text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{cards[3].desc}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#F0F7F0] rounded-xl px-2 py-1 w-fit">
                    <Timer size={14} className="text-[#4CAF50]" />
                    <span className="text-xs font-medium text-[#4CAF50] leading-[1.4] font-['Noto_Sans_SC']">
                      {cards[3].schedule}
                    </span>
                  </div>
                </div>
                <div className="flex-1 h-[160px]" />
                <div className="flex-1 h-[160px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
