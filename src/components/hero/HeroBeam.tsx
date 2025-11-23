import { ShootingStars } from "../ui/shooting-stars";

export default function HeroBeam() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Background with stars */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)] opacity-0" />
                {/* Removed static stars for cleaner look, or can add back if needed */}
            </div>

            {/* Multiple shooting star layers with different colors and speeds */}
            {/* Multiple shooting star layers with different colors and speeds */}
            <ShootingStars
                starColor="#FACC15" // Yellow/Gold
                trailColor="#FACC15" // Solid yellow trail for visibility
                minSpeed={15}
                maxSpeed={35}
                minDelay={1000}
                maxDelay={3000}
                starWidth={20}
                starHeight={2}
            />
            <ShootingStars
                starColor="#000000" // Black stars
                trailColor="#000000" // Solid black trail
                minSpeed={10}
                maxSpeed={25}
                minDelay={2000}
                maxDelay={4000}
                starWidth={25}
                starHeight={2}
            />
            <ShootingStars
                starColor="#FACC15"
                trailColor="#FACC15"
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
