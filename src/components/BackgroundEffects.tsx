
import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const BackgroundEffects = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [leaves, setLeaves] = useState<Array<{ id: number; left: number; top: number; speed: number; size: number; rotation: number; color: string }>>([]);

  useEffect(() => {
    // Create initial leaves
    const initialLeaves = Array.from({ length: 12 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random position (0-100%)
      top: 110, // Start below the screen
      speed: 0.05 + Math.random() * 0.08, // Slower random speed between 0.05-0.13
      size: 20 + Math.random() * 30, // Random size between 20-50px
      rotation: Math.random() * 360, // Random rotation
      color: `hsl(${Math.random() * 60 + 100}, 70%, 50%)`, // Green hues
    }));
    
    setLeaves(initialLeaves);
    
    // Hide fireworks after 5 seconds
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 5000);
    
    // Animation frame for leaf movement
    let animationId: number;
    const animateLeaves = () => {
      setLeaves(prev => 
        prev.map(leaf => ({
          ...leaf,
          // Move leaves upward, reset when they go off-screen
          top: leaf.top - leaf.speed < -leaf.size ? 110 : leaf.top - leaf.speed,
          // Gently rotate leaves as they float
          rotation: leaf.rotation + 0.1,
        }))
      );
      animationId = requestAnimationFrame(animateLeaves);
    };
    
    animationId = requestAnimationFrame(animateLeaves);
    
    return () => {
      clearTimeout(fireworksTimer);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.left}%`,
            top: `${leaf.top}%`,
            opacity: '0.6', // Make leaves more subtle
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <Leaf 
            size={leaf.size} 
            color={leaf.color}
            strokeWidth={1}
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
             style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/011/173/755/non_2x/golden-realistic-wedding-rings-with-reflection-anniversary-romantic-surprise-free-vector.jpg)' }}></div>
        <div className="absolute bottom-0 right-[10%] w-40 h-48 bg-contain bg-no-repeat bg-bottom" 
             style={{ backgroundImage: 'url(https://www.pngall.com/wp-content/uploads/11/Wedding-Flower-PNG-File.png)' }}></div>
      </div>
    </div>
  );
};

export default BackgroundEffects;
