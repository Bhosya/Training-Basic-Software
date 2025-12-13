import { useState, useMemo, useCallback } from 'react'
import { projectSlides } from "../data/projectSlides";
import { Copy, ChevronLeft, ChevronRight } from "lucide-react"

const ProjectApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  const slidesData = projectSlides

  const slide = useMemo(() => slidesData[currentSlide], [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((c) => (c < slidesData.length - 1 ? c + 1 : c));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((c) => (c > 0 ? c - 1 : c));
  }, []);

  const goToSlide = useCallback((idx) => {
    setCurrentSlide(idx);
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex bg-slate-900 h-screen sm:h-[74vh]">
      <div className="w-64 bg-slate-800 border-r border-white/10 p-4 hidden md:flex flex-col gap-1 overflow-y-auto">
        <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 px-2">
          Daftar Langkah
        </h3>
        {slidesData.map((s, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
              idx === currentSlide
                ? "bg-blue-900/60 text-blue-300 border border-blue-700/50"
                : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
            }`}
          >
            {idx === currentSlide && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
            <span className="truncate">{idx + 1}. {s.title}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 mb-1 overflow-y-auto overflow-x-visible md:overflow-x-auto p-2 md:p-8 lg:p-12 pb-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              {slide.title && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  {slide.title && (
                    <p className="text-lg text-slate-400">{slide.subtitle}</p>
                  )}
                </div>
              )}
            </div>

            {slide.step && (
                <ul className='my-8 flex flex-col gap-6'>
                  {slide.step?.map((step, i) => (
                    <li key={i} className=' text-white gap-2 flex flex-col'>
                        {step.cover && (<div className="relative">
                          <img src={step.cover} className="max-w-md mx-auto shadow-xl rounded-xl" />
                        </div>)}
                        {step.text && (<div>{i+1}. {step.text}</div>)}
                        {step.code && (
                            <div className="relative">
                                <button
                                    onClick={() => handleCopy(step.code)}
                                    className="absolute right-4 top-4 z-20 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition backdrop-blur-sm flex items-center gap-2 text-sm font-medium shadow-lg border border-white/10"
                                >
                                    <Copy size={16} />
                                    {copied ? "Copied!" : "Copy"}
                                </button>

                                <pre className="bg-gray-950 text-gray-100 p-6 md:p-8 rounded-2xl overflow-x-auto text-sm md:text-base leading-relaxed border border-white/10 shadow-2xl scrollbar-thin scrollbar-thumb-white/20">
                                    <code className="block min-w-full">{step.code}</code>
                                </pre>
                            </div>
                        )}
                        {step.img && (
                            <div className="relative">
                              <img src={step.img} className="rounded-2xl border border-white/10 shadow-2xl md:max-w-150 md:max-h-50 object-cover" />
                            </div>
                        )}
                        {step.link && (
                          <button onClick={() => window.location.href=`${step.link}`} href={step.link} class="cursor-pointer bg-blue-600 text-white max-w-50 text-center py-4 px-5 rounded-xl hover:bg-blue-900">
                            Tekan di sini
                          </button>
                        )}
                    </li>
                  )) }
                </ul>
            )}

            
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 md:left-64 right-0 h-20 bg-slate-800/95 backdrop-blur border-t border-white/10 flex items-center justify-between px-6 z-50 shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300 relative z-10"
        >
          <ChevronLeft size={20} />{" "}
          <span className="hidden md:inline">Sebelumnya</span>
        </button>

        <div className="flex gap-2">
          {slidesData.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "w-10 bg-blue-500" : "w-3 bg-slate-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slidesData.length - 1}
          className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300 relative z-10"
        >
          <span className="hidden md:inline">{currentSlide === slidesData.length - 1 ? "Selesai" : "Selanjutnya"}</span>{" "}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProjectApp
