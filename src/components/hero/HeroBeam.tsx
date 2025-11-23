import { ShootingStars } from "../ui/shooting-stars";

export default function HeroBeam() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)] opacity-0" />
            </div>

            <ShootingStars
                starColor="#000000"
                trailColor="#000000"
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
                starWidth={20}
                starHeight={2}
            />
            <ShootingStars
                starColor="#333333"
                trailColor="#333333"
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4000}
                starWidth={25}
                starHeight={2}
            />
            <ShootingStars
                starColor="#1a1a1a"
                trailColor="#1a1a1a"
                minSpeed={20}
                maxSpeed={40}
                minDelay={1500}
                maxDelay={3500}
                starWidth={20}
                starHeight={2}
            />
        </div>
    );
}
