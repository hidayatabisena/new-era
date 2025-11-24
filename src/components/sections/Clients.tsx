import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

const logos = [
    {
        name: 'Google',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/google.svg',
    },
    {
        name: 'Microsoft',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/microsoft.svg',
    },
    {
        name: 'Nvidia',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/nvidia-text.svg',
    },
    {
        name: 'OpenAI',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai-text.svg',
    },
    {
        name: 'GitHub',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/github.svg',
    },
    {
        name: 'Hugging Face',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/huggingface.svg',
    },
    {
        name: 'Midjourney',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/midjourney.svg',
    },
    {
        name: 'Vercel',
        url: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/vercel.svg',
    },
];

export default function Clients() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6 mb-8 md:mb-0">
                        <p className="text-end text-sm font-medium text-muted-foreground">
                            Powering the best teams
                        </p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
                        <InfiniteSlider speedOnHover={20} speed={40} gap={60}>
                            {logos.map((logo) => (
                                <div
                                    key={logo.name}
                                    className="flex items-center justify-center w-auto shrink-0"
                                >
                                    <img
                                        className="mx-auto h-20 w-auto dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                        src={logo.url}
                                        alt={`${logo.name} Logo`}
                                        style={{ height: '40px' }}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-background to-transparent absolute inset-y-0 left-0 w-20 z-10"></div>
                        <div className="bg-gradient-to-l from-background to-transparent absolute inset-y-0 right-0 w-20 z-10"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
