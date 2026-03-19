import {
  ChevronDown,
  ChevronRight,
  Copy,
  ThumbsUp,
  ThumbsDown,
  ArrowDown,
  Check,
  Square,
  FileText,
  Globe,
} from 'lucide-react'
import { Sidebar } from '../components/Sidebar'

interface CoworkTaskProps {
  onNavigate?: (key: string) => void
}

const taskItems = [
  '读取邮箱未读邮件列表',
  '扫描企业微信和钉钉待办消息',
  '检索待审批的文档和合同',
  '汇总日历中今日会议安排',
  '按优先级排序并生成待办清单',
  '整理输出 Word 格式办公清单',
]

export function CoworkTask({ onNavigate }: CoworkTaskProps) {
  return (
    <div className="w-[1440px] h-[900px] bg-[#f0f0ef] flex flex-col overflow-hidden rounded-2xl">
      <div className="flex-1 flex p-2 pb-2 pl-0 overflow-hidden">
        <Sidebar activeItem="new" onNavigate={onNavigate as any} />

        {/* Right Area */}
        <div className="flex-1 bg-white rounded-2xl flex overflow-hidden h-full">
          {/* Chat Column */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Task Header */}
            <div className="flex items-center gap-2 px-6 h-[52px] border-b border-[#e5e5e5] shrink-0">
              <span className="text-[15px] font-medium text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                汇总今日办公待办清单
              </span>
              <ChevronDown size={16} className="text-[#737373]" />
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col gap-6 px-10 py-8 pb-5 overflow-auto">
              {/* User Message */}
              <div className="flex flex-col items-end w-full">
                <div className="max-w-[540px] bg-[#f5f5f5] rounded-2xl px-5 py-4">
                  <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC']">
                    帮我汇总今天待处理的邮件、文档和消息，输出一个按优先级排序的办公清单。包括未读邮件的主题和发件人、待审批的文档、以及企业微信和钉钉里的未回复消息。
                    <br />
                    <br />
                    不太明白：
                    <br />
                    1. 优先级怎么排
                    <br />
                    2. 需要包含哪些渠道的消息（顺带也列一下已读但未处理的邮件）
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[13px] font-medium text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">
                    思考过程
                  </span>
                  <ChevronRight size={14} className="text-[#737373]" />
                </div>

                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  好，用大白话解释这两个概念。
                </p>
                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  第一个问题：优先级怎么排
                  <br />
                  <br />
                  "优先级"就是"什么事情应该先做"的意思。
                  <br />
                  <br />
                  比如老板发的邮件催你今天下班前回复，那这封邮件优先级就最高。而一封通知下周团建的邮件，优先级就低一些。我会按紧急程度和重要性帮你排好。
                </p>
                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  第二个问题：包含哪些渠道
                  <br />
                  <br />
                  你目前连接了邮箱、企业微信和钉钉三个渠道。我会把这三个地方的未读消息和待办事项全部汇总到一起，同时也会把已读但未处理的邮件单独列出来，避免遗漏。
                </p>
                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  问题出在哪里呢？出在优先级判断上。
                </p>
                <p className="text-[15px] text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  假设你今天有20封未读邮件、5条钉钉待办、3个文档需要审批。如果不排序，你可能先处理了一封无关紧要的通知邮件，而忽略了老板要求今天必须回复的紧急合同审批。
                </p>
                <p className="text-[15px] font-semibold text-[#0a0a0a] leading-[1.7] font-['Noto_Sans_SC'] w-full">
                  这就是核心价值：帮你从海量信息中，快速找到最该先处理的事情，避免重要事项被淹没。
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  <Copy size={16} className="text-[#737373] cursor-pointer" />
                  <ThumbsUp size={16} className="text-[#737373] cursor-pointer" />
                  <ThumbsDown size={16} className="text-[#737373] cursor-pointer" />
                </div>
              </div>

              {/* Scroll Down */}
              <div className="flex items-center justify-center py-1 w-full">
                <div className="w-8 h-8 bg-white rounded-2xl border border-[#e5e5e5] shadow-sm flex items-center justify-center cursor-pointer">
                  <ArrowDown size={16} className="text-[#737373]" />
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div className="px-6 py-4 pb-5 flex items-center justify-center">
              <div className="w-[680px] bg-white rounded-2xl border border-[#e5e5e5] shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-5 py-4 flex flex-col gap-4 justify-between">
                <span className="text-[15px] text-[#737373] leading-[1.2] font-['Noto_Sans_SC']">回复...</span>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-[#737373]" />
                    <FileText size={16} className="text-[#737373]" />
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="text-[13px] text-[#737373] font-['Noto_Sans_SC']">DeepSeek 3.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className="w-[280px] shrink-0 bg-[#f5f5f5] flex flex-col px-4 py-5 gap-3 overflow-auto"
            style={{ borderLeft: '1px solid #e5e5e5' }}
          >
            {/* Progress Section */}
            <div className="flex flex-col gap-3 pb-4 border-b border-[#e5e5e5]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">进度</span>
                <ChevronDown size={16} className="text-[#737373]" />
              </div>
              <div className="flex flex-col gap-1.5">
                {taskItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 py-0.5">
                    <div className="w-5 h-5 rounded-[10px] bg-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-[12.5px] text-[#737373] leading-[1.5] font-['Noto_Sans_SC']">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Folder Section */}
            <div className="flex flex-col gap-3 py-1 pb-4 border-b border-[#e5e5e5]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">
                  工作文件夹
                </span>
                <div className="flex items-center gap-2">
                  <Square size={14} className="text-[#737373]" />
                  <ChevronDown size={16} className="text-[#737373]" />
                </div>
              </div>
              <div className="flex items-center gap-2 py-1">
                <FileText size={16} className="text-[#737373]" />
                <span className="text-[12.5px] text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC'] flex-1">
                  今日办公待办清单.docx
                </span>
              </div>
              <div className="flex items-center gap-1.5 py-1">
                <ChevronRight size={14} className="text-[#737373]" />
                <span className="text-[12.5px] text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">草稿本</span>
              </div>
            </div>

            {/* Context Section */}
            <div className="flex flex-col gap-3 py-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">上下文</span>
                <ChevronDown size={16} className="text-[#737373]" />
              </div>
              <span className="text-[11px] font-medium text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">连接器</span>
              <div className="flex flex-col gap-1">
                {['邮件收发', '日历同步'].map((conn) => (
                  <div key={conn} className="flex items-center gap-2 py-1">
                    <Globe size={16} className="text-[#737373]" />
                    <span className="text-[12.5px] text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">{conn}</span>
                  </div>
                ))}
              </div>
              <div className="py-1">
                <span className="text-[11px] font-medium text-[#737373] leading-[1.4] font-['Noto_Sans_SC']">技能</span>
              </div>
              <div className="flex items-center gap-2 py-1">
                <FileText size={16} className="text-[#737373]" />
                <span className="text-[12.5px] text-[#0a0a0a] leading-[1.4] font-['Noto_Sans_SC']">docx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
