/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  ExternalLink,
  Award,
  Globe,
  Camera,
  Ship,
  Briefcase,
  Plane
} from "lucide-react";
import React, { useState } from "react";

const Section = ({ children, title, id }: { children: React.ReactNode, title?: string, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="py-16 px-6 max-w-5xl mx-auto"
  >
    {title && (
      <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-brand-primary"></span>
        {title}
      </h2>
    )}
    {children}
  </motion.section>
);

const ExperienceCard = ({ company, role, description, period, type }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 mb-6"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
      <div>
        <span className="text-xs font-mono font-medium text-brand-primary uppercase tracking-wider bg-brand-secondary px-3 py-1 rounded-full mb-2 inline-block">
          {type}
        </span>
        <h3 className="text-xl font-display font-bold text-gray-800">{company}</h3>
      </div>
      <span className="text-sm font-mono text-gray-500 whitespace-nowrap">{period}</span>
    </div>
    <p className="text-brand-primary font-medium mb-3">{role}</p>
    <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{description}</p>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display font-bold text-xl tracking-tight"
          >
            YUNG.LU
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {["關於", "經驗", "計畫", "作品", "聯絡"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-brand-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 relative overflow-hidden bg-brand-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6">
              呂文詠 <span className="text-gray-400">YUNG</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["航運技術", "社群吃播高級燈光師", "專案執行"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-gray-100">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col items-center space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-brand-primary" />
                <span>馬桶座 | O型 | 2007-02-11</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="text-brand-primary" />
                <a href="mailto:luw373786@gmail.com" className="hover:underline">luw373786@gmail.com</a>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section id="關於" title="個人簡介">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              您好，我是呂文詠，目前就讀於 <span className="font-bold text-gray-900 underline decoration-brand-accent/30">國立高雄科技大學</span>。受到父親從事航運事業相關工作的影響，我自小便對此領域產生濃厚興趣與好奇。
            </p>
            <p>
              成長過程中，各項教育資源多元，使我具備良好的適應能力與寬廣的視野。在學期間我曾擔任班級幹部，並組織參與划船社，從中培養了溝通、跨團隊與領導能力。
            </p>
            <p>
              未來期望能進入航運產業發展，運用所學專業持續精進自我，同時為航運領域創造價值。
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-brand-primary">
            <h4 className="font-display font-bold mb-4 flex items-center gap-2">
               <Ship size={20} /> 核心專業
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2 font-mono">
                <ChevronRight size={14} className="text-brand-primary" />
                航運技術專業 knowledge
              </li>
              <li className="flex items-center gap-2 font-mono">
                <ChevronRight size={14} className="text-brand-primary" />
                社群媒體影視製作
              </li>
              <li className="flex items-center gap-2 font-mono">
                <ChevronRight size={14} className="text-brand-primary" />
                專案執行與領導力
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="經驗" title="打工、旅遊與實習">
        <div className="space-y-6">
          <ExperienceCard 
            type="打工經歷"
            company="綜合業務處"
            period="近期"
            role="負責洗槽、清洗、擺放，並重新制定杯子清潔流程與放置效率。"
            description="導入模組化植裝流程，增加裝飾的多樣性，顯著提升整體質感與美感度。
            規劃點粘貼作業。並在3個月內完成15萬張點粘貼紙處理，達成94%的覆蓋率。
            制定每日音效時段與播放清單管理，達到平均3.8小時的聆聽時長，提升16%的情緒愉悅度。"
          />
          <ExperienceCard 
            type="旅遊經驗"
            company="廣島周防大島町"
            period="旅行專案"
            role="在地文化體驗與行程規劃"
            description="早上起床享用在地特色早餐，體驗當地飲食文化，為一天的行程充滿能量。
            前往山區進行登山活動，沿途欣賞自然景觀與山林美景，感受大自然的療癒與挑戰。
            安排市區觀光行程，走訪知名景點與特色街區，深入了解當地歷史與人文風情。"
          />
          <ExperienceCard 
            type="實習經驗"
            company="御風號 高雄-東京"
            period="專業實務"
            role="航海運作觀測與支援"
            description="於航貿台助值班期間進行航行、初次長時間海上航行出現暈船情況，仍努力適應海況並完成實習任務。
            適應海域環境，在船上與同學一同慶祝節慶氣氛，發展良好的團隊關係與生活適應能力，並成功在一份吃肉五顆粽子漢堡沒便秘。"
          />
        </div>
      </Section>

      {/* Itinerary Section */}
      <Section id="計畫" title="清明酒精路跑規劃">
        <div className="relative border-l-2 border-brand-primary/20 ml-4 pl-10 space-y-12">
          {[
            {
              day: "Day 1: 旗津出發 -> 高雄市中心",
              title: "酒精啟程",
              location: "在地酒吧: Cin Sunset Bar (旗津沙灘)",
              description: "先在港邊喝一杯，為跑跑節奏注入清爽活力。",
              highlight: "路線: 從旗津搭渡輪往駁二，沿路跑向城市中心。"
            },
            {
              day: "Day 2: 屏東原鄉 -> 知本/台東",
              title: "南迴之醉",
              location: "在地酒莊: 原鄉酒廠 (台東)",
              description: "探索部落風味小米酒, 體會山地文化的獨特甘醇。",
              highlight: "亮點: 沿著台9線海岸線, 享受大自然的美景與酒精的結合。"
            },
            {
              day: "Day 3: 南迴山線 -> 達仁大武",
              title: "山線挑戰",
              location: "在地酒館: 山中秘境 (台東達仁)",
              description: "融入當地生活, 尋找深山中隱藏的好味道。",
              highlight: "體驗: 深入了解當地的排灣族文化。"
            }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[51px] top-0 w-5 h-5 bg-white border-4 border-brand-primary rounded-full z-10" />
              <span className="text-sm font-mono font-bold text-brand-primary mb-2 block">{step.day}</span>
              <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{step.location}</p>
              <p className="text-gray-600 text-sm mb-4">{step.description}</p>
              <div className="inline-flex items-center gap-2 py-2 px-4 bg-brand-secondary rounded-lg text-sm font-medium text-brand-primary">
                <Plane size={14} />
                {step.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="作品" title="設計與創作">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1506784919141-935266223610?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Project"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs font-mono uppercase tracking-widest mb-2 text-brand-accent">Design Project</span>
              <h3 className="text-2xl font-display font-bold mb-2">製作手帳日曆</h3>
              <p className="text-sm opacity-80 mb-4 line-clamp-2">上市前進行預熱宣傳, 發布神秘預告片, 引起消費者興趣。繪製產品展示與互動, 包含品牌故事。</p>
              <button className="flex items-center gap-2 text-sm font-bold group/btn">
                查看詳情 <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold">旅遊影片紀錄</h3>
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-inner relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1530789253488-8df3c94c1f8f?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover opacity-80"
                alt="Video Thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-brand-primary border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">"透過鏡頭紀錄每一趟珍貴的旅程，分享視角與感動。"</p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="能力" title="語言能力與專長">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { lang: "英文", level: "流利", detail: "TOEIC" },
            { lang: "日文", level: "N2", detail: "進階溝通" },
            { lang: "韓文", level: "TOPIK III", detail: "日常交流" },
            { lang: "台語", level: "精通", detail: "在地連結" }
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm"
            >
              <Globe className="mx-auto mb-4 text-brand-primary" size={32} />
              <h4 className="font-display font-bold text-lg mb-1">{skill.lang}</h4>
              <p className="text-brand-accent font-bold text-sm mb-2">{skill.level}</p>
              <p className="text-xs text-gray-400 font-mono italic">{skill.detail}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <footer id="聯絡" className="bg-brand-primary pt-24 pb-12 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <Ship size={300} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">準備好一起創造價值了嗎？</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg mb-12">
              無論是航運技術的專業交流，還是影視製作的創意合作，都歡迎與我聯繫。
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-brand-primary rounded-full font-bold text-lg shadow-xl inline-flex items-center gap-3 active:bg-gray-100 transition-colors"
            >
              <Mail size={20} /> 與我聯絡
            </motion.button>
          </motion.div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm font-mono uppercase tracking-widest">
            <span>© 2024 YUNG LU. All Rights Reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="flex gap-4">
              <Instagram size={18} className="hover:text-white transition-colors cursor-pointer" />
              <Linkedin size={18} className="hover:text-white transition-colors cursor-pointer" />
              <Youtube size={18} className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
