import { Search, Plus, FolderOpen, Presentation, Search as SearchIcon, Table, FileText, Palette, Image, Cloud, FileCheck } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkSkillsProps {
  onNavigate?: (key: string) => void
}

const tabs = ['全部', '办公提效', '内容创作', '数据分析', '研究学习', '设计开发']

interface SkillCard {
  icon: React.ReactNode
  iconBg: string
  title: string
  desc: string
}

const skillRows: SkillCard[][] = [
  [
    { icon: <FolderOpen size={22} className="text-[#4285F4]" />, iconBg: '#E8F0FE', title: '文件整理', desc: '智能整理和归类你的文件' },
    { icon: <Presentation size={22} className="text-[#FB8C00]" />, iconBg: '#FFF3E0', title: 'PPT演示专家', desc: '快速创建精美的演示文稿' },
    { icon: <SearchIcon size={22} className="text-[#4CAF50]" />, iconBg: '#E8F5E9', title: '深度研究助手', desc: '深入研究任何主题并生成报告' },
  ],
  [
    { icon: <Table size={22} className="text-[#43A047]" />, iconBg: '#E8F5E9', title: 'Excel表格专家', desc: '处理和分析Excel数据' },
    { icon: <FileText size={22} className="text-[#E53935]" />, iconBg: '#FFEBEE', title: 'PDF处理专家', desc: 'PDF转换、合并和编辑' },
    { icon: <Palette size={22} className="text-[#7E57C2]" />, iconBg: '#EDE7F6', title: '前端设计大师', desc: '快速设计精美的前端界面' },
  ],
  [
    { icon: <Image size={22} className="text-[#E91E63]" />, iconBg: '#FCE4EC', title: '小红书卡片生成', desc: '一键生成精美小红书图文' },
    { icon: <Cloud size={22} className="text-[#F9A825]" />, iconBg: '#FFF8E1', title: 'Cloudflare部署', desc: '快速部署应用到Cloudflare' },
    { icon: <FileCheck size={22} className="text-[#1976D2]" />, iconBg: '#E3F2FD', title: 'Word文档专家', desc: '专业的Word文档编辑和排版' },
  ],
]

export function CoworkSkills({ onNavigate }: CoworkSkillsProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="skills" onNavigate={onNavigate as any} />

        <div className="flex-1 bg-white rounded-2xl flex flex-col overflow-hidden h-full p-8 gap-5">
          {/* Header Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']">技能</h1>
              <p className="text-sm text-[#737373] font-['Noto_Sans_SC']">浏览和安装AI技能，提升你的工作效率</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-3 h-9 w-[220px]">
                <Search size={16} className="text-[#737373]" />
                <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">搜索技能...</span>
              </div>
              {/* Install Button */}
              <button className="flex items-center gap-1.5 bg-[#0a0a0a] rounded-lg px-4 h-9 cursor-pointer">
                <Plus size={14} className="text-white" />
                <span className="text-[13px] font-medium text-white font-['Noto_Sans_SC']">安装技能</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 w-full">
            {tabs.map((tab, i) => (
              <div
                key={tab}
                className={`flex items-center rounded-md px-3.5 py-1.5 cursor-pointer ${i === 0 ? 'bg-[#f5f5f5]' : ''}`}
              >
                <span
                  className={`text-[13px] font-['Noto_Sans_SC'] ${
                    i === 0 ? 'text-[#0a0a0a] font-medium' : 'text-[#737373] font-normal'
                  }`}
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll Area */}
          <div className="flex-1 flex flex-col gap-5 overflow-auto">
            {/* Banners */}
            <div className="flex gap-4 w-full">
              <div
                className="rounded-xl overflow-hidden relative"
                style={{
                  width: 546,
                  height: 160,
                  background: 'linear-gradient(180deg, #E8F4FD 0%, #D6ECFA 100%)',
                  flexShrink: 0,
                }}
              >
                <span
                  className="absolute text-xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']"
                  style={{ left: 31, top: 50 }}
                >
                  为你精选的职场技能
                </span>
                <span
                  className="absolute text-[13px] text-[#737373] font-['Noto_Sans_SC']"
                  style={{ left: 31, top: 91 }}
                >
                  AI驱动的智能助手，提升你的工作效率
                </span>
              </div>
              <div
                className="flex-1 rounded-xl overflow-hidden relative"
                style={{ height: 160, background: 'linear-gradient(180deg, #FFF3E0 0%, #FFE8CC 100%)' }}
              >
                <span
                  className="absolute text-xl font-bold text-[#0a0a0a] font-['Noto_Sans_SC']"
                  style={{ left: 27, top: 50 }}
                >
                  自定义你的工作流
                </span>
                <span
                  className="absolute text-[13px] text-[#737373] font-['Noto_Sans_SC']"
                  style={{ left: 27, top: 91 }}
                >
                  组合多个技能，打造专属工作流程
                </span>
              </div>
            </div>

            {/* Skill Cards */}
            {skillRows.map((row, ri) => (
              <div key={ri} className="flex gap-4 w-full">
                {row.map((card) => (
                  <div
                    key={card.title}
                    className="flex-1 h-20 bg-[#f5f5f5] rounded-[10px] px-4 flex items-center gap-3.5 cursor-pointer"
                  >
                    <div
                      className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-[#0a0a0a] font-['Noto_Sans_SC']">{card.title}</span>
                      <span className="text-xs text-[#737373] font-['Noto_Sans_SC']">{card.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
