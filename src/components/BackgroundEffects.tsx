
import { useEffect, useState } from 'react';
import { Flower2, Sparkles } from 'lucide-react';

const BackgroundEffects = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [flowers, setFlowers] = useState<Array<{ id: number; left: number; top: number; speed: number; size: number; rotation: number; color: string }>>([]);

  useEffect(() => {
    // Create initial flowers
    const initialFlowers = Array.from({ length: 12 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position (0-100%)
      top: 110, // Start below the screen
      speed: 0.05 + Math.random() * 0.08, // Slower random speed between 0.05-0.13
      size: 20 + Math.random() * 30, // Random size between 20-50px
      rotation: Math.random() * 360, // Random rotation
      color: `hsl(${Math.random() * 60 + 300}, 70%, 70%)`, // Pink/purple hues for flowers
    }));
    
    setFlowers(initialFlowers);
    
    // Hide fireworks after 5 seconds
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 8000);
    
    // Animation frame for flower movement
    let animationId: number;
    const animateFlowers = () => {
      setFlowers(prev => 
        prev.map(flower => ({
          ...flower,
          // Move flowers upward, reset when they go off-screen
          top: flower.top - flower.speed < -flower.size ? 110 : flower.top - flower.speed,
          // Gently rotate flowers as they float
          rotation: flower.rotation + 0.1,
        }))
      );
      animationId = requestAnimationFrame(animateFlowers);
    };
    
    animationId = requestAnimationFrame(animateFlowers);
    
    return () => {
      clearTimeout(fireworksTimer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Flowers */}
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.left}%`,
            top: `${flower.top}%`,
            opacity: '0.6', // Make flowers more subtle
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <Flower2 
            size={flower.size} 
            color={flower.color}
            strokeWidth={1}
          />
        </div>
      ))}
      
      {/* Firecrackers (shown for longer) */}
      {showFireworks && (
        <div className="absolute inset-0 fireworks-container">
          <div className="firework" style={{ top: '30%', left: '20%' }}></div>
          <div className="firework" style={{ top: '40%', left: '70%', animationDelay: '0.5s' }}></div>
          <div className="firework" style={{ top: '20%', left: '50%', animationDelay: '1s' }}></div>
          <div className="firework" style={{ top: '50%', left: '30%', animationDelay: '1.5s' }}></div>
          <div className="firework" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
          
          {/* Additional firecrackers/sparkles */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                opacity: 0.8,
                animation: `sparkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`
              }}
            >
              <Sparkles 
                size={20 + Math.random() * 20} 
                color={`hsl(${Math.random() * 60 + 40}, 100%, 60%)`} // Gold/yellow colors
                strokeWidth={1.5}
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Wedding Elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-30 dark:opacity-10">
        <div className="absolute bottom-0 left-[5%] w-32 h-40 bg-contain bg-no-repeat bg-bottom" 
             style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/011/173/755/non_2x/golden-realistic-wedding-rings-with-reflection-anniversary-romantic-surprise-free-vector.jpg)' }}></div>
        <div className="absolute bottom-0 right-[10%] w-40 h-48 bg-contain bg-no-repeat bg-bottom" 
             style={{ backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/11/Wedding-Flower-PNG-File.png)' }}></div>
      </div>
    </div>
  );
};

export default BackgroundEffects;
