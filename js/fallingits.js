// js/fallingits.js

// Data for falling items
const data = {
  "seasons": {
    "spring": {
      "falling_items": [
        {
          "item": "flower_petal",
          "speed": 1,
          "direction": "down",
          "frequency": 0.01,
          "color": "none",
          "size": "small"
        },
        {
          "item": "butterfly",
          "speed": 0.25,
          "direction": "down",
          "frequency": 0.0015,
          "color": "none",
          "size": "small"
        }
      ]
    },
    "summer": {
      "falling_items": [
        {
          "item": "sunbeam",
          "speed": 3,
          "direction": "none",
          "frequency": 0.0003,
          "color": "yellow",
          "size": "large"
        },
        {
          "item": "leaf",
          "speed": 1,
          "direction": "down",
          "frequency": 0.009,
          "color": "none",
          "size": "medium"
        }
      ]
    },
    "fall": {
      "falling_items": [
        {
          "item": "autumn_leaf",
          "speed": 1.5,
          "direction": "down",
          "frequency": 0.009,
          "color": "none",
          "size": "small"
        },
        {
          "item": "maple_leaf",
          "speed": 1.5,
          "direction": "down",
          "frequency": 0.006,
          "color": "none",
          "size": "small"
        },
        {
          "item": "acorn",
          "speed": 2,
          "direction": "down",
          "frequency": 0.003,
          "color": "none",
          "size": "small"
        }
      ]
    },
    "winter": {
      "falling_items": [
        {
          "item": "snowflake",
          "speed": 0.7,
          "direction": "down",
          "frequency": 0.024,
          "color": "none",
          "size": "small"
        },
        {
          "item": "ice_crystal",
          "speed": 2.5,
          "direction": "down",
          "frequency": 0.004,
          "color": "none",
          "size": "small"
        }
      ]
    }
  },
  "global_settings": {
    "loop": true,
    "start_on_load": true,
    "duration": 600000
  }
};


//Determine season (Augest - november = fall, december - febuary = winter, March - may = spring, june - july = summer)
const currentSeason = 'spring';  // Set current season here (change as needed)
const seasonData = data.seasons[currentSeason];
const globalSettings = data.global_settings;

// Determine time of day (6 AM - 6 PM = day, 6 PM - 6 AM = night)
function getTimeOfDay() {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? 'day' : 'night';
}

// Apply season theme and time of day to body
document.body.classList.add(`season-${currentSeason}`);
document.body.classList.add(`time-${getTimeOfDay()}`);

// Function to create a falling item element
function createFallingItem(itemData) {
  const element = document.createElement('div');
  element.classList.add('falling-item', itemData.item);
  
  // Randomize speed with ±30% variation
  const speedVariation = 0.7 + Math.random() * 0.6; // Random between 0.7 and 1.3 (70% to 130% of base speed)
  const randomSpeed = itemData.speed * speedVariation;
  element.style.animationDuration = `${(10 / randomSpeed)}s`;
  const sizeValue = itemData.size === 'small' ? '20px' :
                    itemData.size === 'medium' ? '40px' : '60px';
  element.style.width = sizeValue;
  element.style.height = sizeValue;
  
  // Set font-size for emoji items (flower_petal, butterfly, leaf, autumn_leaf, maple_leaf, acorn)
  if (itemData.item === 'flower_petal' || itemData.item === 'butterfly' || 
      itemData.item === 'leaf' || itemData.item === 'autumn_leaf' || 
      itemData.item === 'maple_leaf' || itemData.item === 'acorn') {
    element.style.fontSize = sizeValue;
    element.style.backgroundColor = 'transparent';
  } else {
    element.style.backgroundColor = itemData.color;
  }

  // Apply random rotation for orientation
  const randomRotation = Math.random() * 360; // Random angle between 0-360 degrees
  element.style.transform = `rotate(${randomRotation}deg)`;

  // Set the direction of the fall
  const startPosition = Math.random() * 100;  // Random horizontal start position
  const direction = itemData.direction;
  
  // Determine if this item should spin (about 40% chance, but exclude acorns and ice_crystal)
  const shouldSpin = itemData.item !== 'acorn' && itemData.item !== 'ice_crystal' && Math.random() < 0.4;
  // Determine if this item should sway (about 50% chance, but exclude acorns)
  const shouldSway = itemData.item !== 'acorn' && itemData.item !== 'ice_crystal' && Math.random() < 0.5;
  let animationName = '';
  const animationDuration = element.style.animationDuration;

  // Apply direction-based animation and positioning
  if (direction === 'down') {
    element.style.left = `${startPosition}%`;
    animationName = 'fall-down';
  } else if (direction === 'horizontal') {
    element.style.top = `${startPosition}%`;
    animationName = 'fall-horizontal';
  } else if (direction === 'diagonal') {
    element.style.left = `${startPosition}%`;
    element.style.top = `${startPosition}%`;
    animationName = 'fall-diagonal';
  }

  // Build animation string with multiple animations if needed
  const animations = [];
  animations.push(`${animationName} ${animationDuration} linear`);
  
  // Add shimmer animation for sunbeams
  if (itemData.item === 'sunbeam') {
    animations.push(`shimmer 1.5s ease-in-out infinite`);
  }
  
  // Add flutter animation for butterflies
  if (itemData.item === 'butterfly') {
    const flutterSpeed = 0.6 + Math.random() * 0.4; // Random flutter speed between 0.6-1.0 seconds per cycle
    animations.push(`flutter ${flutterSpeed}s ease-in-out infinite`);
  }
  
  if (shouldSpin) {
    const spinSpeed = 1 + Math.random() * 2; // Random spin speed between 1-3 seconds per rotation
    animations.push(`spin ${spinSpeed}s linear infinite`);
  }
  
  if (shouldSway) {
    const swaySpeed = 0.8 + Math.random() * 0.8; // Random sway speed between 0.8-1.6 seconds per cycle
    animations.push(`sway ${swaySpeed}s ease-in-out infinite`);
  }

  // Set all animations
  element.style.animation = animations.join(', ');
  
  // If no additional animations, just set the fall animation
  if (!shouldSpin && !shouldSway && itemData.item !== 'sunbeam' && itemData.item !== 'butterfly') {
    element.style.animationName = animationName;
  }

  document.body.appendChild(element);
}

// Function to start creating falling items
function startFallingItems() {
  seasonData.falling_items.forEach(item => {
    const frequency = item.frequency * 80;  // Convert to percentage
    const interval = setInterval(() => createFallingItem(item), 800 / frequency);

    // Stop creating items after the specified duration
    setTimeout(() => clearInterval(interval), globalSettings.duration);
  });
}

// Start the falling items based on global setting
if (globalSettings.start_on_load) {
  startFallingItems();
}