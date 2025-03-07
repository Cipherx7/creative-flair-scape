
import { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; speed: number; size: number; color: string }>>([]);

  useEffect(() => {
    // Create initial balloons
    const initialBalloons = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position (0-100%)
      speed: 0.5 + Math.random() * 1.5, // Random speed
      size: 20 + Math.random() * 30, // Random size between 20-50px
      color: `hsl(${Math.random() * 60 + 270}, 70%, 70%)`, // Purple/pink hues
    }));
    
    setBalloons(initialBalloons);
    
    // Hide fireworks after 5 seconds
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 5000);
    
    // Animation frame for balloon movement
    let animationId: number;
    const animateBalloons = () => {
      setBalloons(prev => 
        prev.map(balloon => ({
          ...balloon,
          // Move balloons upward, reset when they go off-screen
          top: balloon.top ? balloon.top - balloon.speed : (balloon.top === 0 ? 0 : 110),
        }))
      );
      animationId = requestAnimationFrame(animateBalloons);
    };
    
    animationId = requestAnimationFrame(animateBalloons);
    
    return () => {
      clearTimeout(fireworksTimer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float"
          style={{
            left: `${balloon.left}%`,
            bottom: `-${balloon.size}px`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            animation: `float ${15/balloon.speed}s linear infinite`,
            animationDelay: `${balloon.id * 0.3}s`,
          }}
        >
          <div 
            className="absolute w-full h-[85%] rounded-full"
            style={{ backgroundColor: balloon.color }}
          />
          <div 
            className="absolute bottom-0 left-[calc(50%-1px)] w-2px h-[15%]"
            style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
          />
        </div>
      ))}
      
      {/* Fireworks (only shown initially) */}
      {showFireworks && (
        <div className="absolute inset-0 fireworks-container">
          <div className="firework" style={{ top: '30%', left: '20%' }}></div>
          <div className="firework" style={{ top: '40%', left: '70%', animationDelay: '0.5s' }}></div>
          <div className="firework" style={{ top: '20%', left: '50%', animationDelay: '1s' }}></div>
          <div className="firework" style={{ top: '50%', left: '30%', animationDelay: '1.5s' }}></div>
          <div className="firework" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
        </div>
      )}
      
      {/* 3D Wedding Vectors/Elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-30 dark:opacity-10">
        <div className="absolute bottom-0 left-[5%] w-32 h-40 bg-contain bg-no-repeat bg-bottom" 
             style={{ backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/11/Wedding-Bell-Transparent.png)' }}></div>
        <div className="absolute bottom-0 right-[10%] w-40 h-48 bg-contain bg-no-repeat bg-bottom" 
             style={{ backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/11/Wedding-Flower-PNG-File.png)' }}></div>
      </div>
    </div>
  );
};

export default BackgroundEffects;
