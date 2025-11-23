import HeroNameBackground from './HeroNameBackground';
import HeroBeam from './HeroBeam';
import HeroPortrait from './HeroPortrait';
import HeroTextBlock from './HeroTextBlock';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
        >
            <HeroNameBackground />
            <HeroBeam />
            <div className="relative z-10 w-full h-full flex items-center justify-center pt-20">
                <HeroPortrait />
            </div>
            <HeroTextBlock />
        </section>
    );
}