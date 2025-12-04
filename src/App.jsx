import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const App = () => {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Endless loop - restart video when it ends
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            video.currentTime = 0;
            video.play();
        };

        video.addEventListener('ended', handleEnded);
        video.play();

        return () => {
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/20 bg-black/80 backdrop-blur-sm mix-blend-difference">
                <div className="flex justify-between items-center px-4 py-3 md:py-4 md:px-8">
                    <div className="text-lg md:text-xl font-black tracking-widest-plus">NONEXISTENT</div>
                </div>
            </nav>

            {/* Hero Section - Boomerang Video */}
            <section className="relative h-[75vh] flex flex-col items-center justify-center border-b border-white/10 overflow-hidden pt-14 md:pt-16">
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    {/* Video Container */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover object-top"
                            src="/hat-360.mp4"
                            muted
                            playsInline
                            loop={false}
                        />
                    </div>
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference z-20 px-4 pb-32">
                    <h1 className="text-[15vw] md:text-[12vw] leading-none font-black text-center opacity-20 tracking-tighter select-none">
                        I DON'T EXIST
                    </h1>
                </div>
            </section>

            {/* Product Details Marquee */}
            <div className="border-b border-white/10 py-3 md:py-4 overflow-hidden whitespace-nowrap bg-white text-black">
                <div className="inline-block animate-marquee text-xs md:text-sm font-bold tracking-widest">
                    NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT / NONEXISTENT /
                </div>
            </div>

            {/* Model Photography Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/10 max-w-7xl mx-auto">
                {/* Model 1 - Female */}
                <div className="group relative aspect-[3/4] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                    <img
                        src="/images/model-female.png"
                        alt="Model wearing hat"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-[10px] md:text-xs font-mono tracking-widest bg-black/50 backdrop-blur px-2 py-1 border border-white/10">
                        FIG. 01
                    </div>
                </div>

                {/* Model 2 - Male */}
                <div className="group relative aspect-[3/4] overflow-hidden">
                    <img
                        src="/images/model-male.png"
                        alt="Model wearing hat"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-[10px] md:text-xs font-mono tracking-widest bg-black/50 backdrop-blur px-2 py-1 border border-white/10">
                        FIG. 02
                    </div>
                </div>
            </section>

            {/* Description / Manifesto */}
            <section className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-tight mb-6 md:mb-8">
                    The Void Collection
                </h2>
                <p className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed tracking-wide max-w-2xl mx-auto font-mono">
                    Designed for those who walk unseen. The "I DON'T EXIST" trucker hat features heavy distressing, custom embroidery, and a silhouette that defies observation. You are here, but you are not.
                </p>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 md:py-12 px-6 text-center text-[10px] md:text-xs text-gray-600 font-mono uppercase tracking-widest">
                <p>&copy; 2024 NONEXISTENT. All rights reserved.</p>
            </footer>

            {/* Sticky Purchase Button */}
            <div className="fixed bottom-0 left-0 w-full p-3 md:p-4 z-40 pointer-events-none">
                <div className="max-w-md mx-auto pointer-events-auto">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-white text-black py-3 md:py-4 font-black text-sm md:text-base tracking-widest uppercase hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        <span>Purchase</span>
                        <span className="text-xs opacity-50 ml-2">/// $35.00</span>
                    </button>
                </div>
            </div>

            {/* Purchase Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-black border border-white/20 p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-6 flex justify-center">
                            <ShoppingBag className="w-12 h-12 text-white/20" />
                        </div>

                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">
                            Sold Out
                        </h3>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            Thank you for your interest. This item is currently unavailable. Please check back for the official drop.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="w-full border border-white/20 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
