import HeroNameBackground from './HeroNameBackground';
import HeroBeam from './HeroBeam';
import HeroPortrait from './HeroPortrait';
import HeroTextBlock from './HeroTextBlock';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex flex-col md:block items-center justify-center overflow-hidden bg-background pt-24 md:pt-0"
        >
            <HeroNameBackground />
            <HeroBeam />
            <div className="relative z-10 w-full md:h-full flex items-center justify-center md:pt-20 order-2 md:order-none">
                <HeroPortrait />
            </div>
            <HeroTextBlock />
        </section>
    );
}