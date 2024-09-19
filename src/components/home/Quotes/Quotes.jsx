import { useEffect, useState } from "react";
import bg from "../../../assets/images/quotes-bg.jpeg";

const Quotes = () => {
  const famousQuotes = [
    {
      author: "Albert Einstein",
      quote:
        "Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand. The greatest discoveries and advancements have not come from following the known, but from venturing into the unknown, exploring the endless possibilities of what could be. Imagination pushes the boundaries of human potential, giving rise to new ideas, inventions, and solutions that once seemed impossible. Knowledge, in its essence, is finite, but imagination is boundless. It allows us to dream beyond our current reality and bring to life things that have never been seen before. It is the spark of innovation, the catalyst for progress, and the force that propels humanity forward.",
    },
    {
      author: "Gabriel García Márquez",
      quote:
        "It is not true that people stop pursuing dreams because they grow old; they grow old because they stop pursuing dreams. Life is nothing without a purpose, and dreams are the embodiment of our aspirations and desires. They give us direction, fuel our ambition, and keep the spirit alive even in the darkest of times. The moment we stop dreaming is the moment we begin to decay, for dreams are the driving force behind every achievement, every innovation, and every breakthrough. To abandon dreams is to abandon the future, and the future is a place where anything is possible. Dream, and you will find your way through life, for dreams are the compass that guides us through our journey.",
    },
    {
      author: "Haruki Murakami",
      quote:
        "Pain is inevitable. Suffering is optional. How we respond to life’s hardships defines who we become, and in accepting pain, we find strength. Life is filled with obstacles and struggles, but it is our perspective that shapes our experience. We can choose to resist and suffer, or we can embrace the pain, learn from it, and grow. The resilience of the human spirit is remarkable, and the capacity for healing is endless. Suffering, while painful, can be a transformative experience, leading us to greater wisdom, deeper compassion, and an unshakable strength that allows us to persevere through life’s challenges.",
    },
    {
      author: "John Steinbeck",
      quote:
        "And now that you don’t have to be perfect, you can be good. The pursuit of perfection can weigh us down, but allowing ourselves to be imperfect frees us to be our best selves. Perfection is an illusion, a goal that can never truly be attained, but goodness is within reach. It is through kindness, empathy, and integrity that we achieve greatness, not through flawless execution. To embrace our imperfections is to accept our humanity, and in that acceptance, we find peace. True goodness comes not from striving for an unattainable ideal, but from living authentically and doing what is right in the moment.",
    },
    {
      author: "Sylvia Plath",
      quote:
        "I took a deep breath and listened to the old bray of my heart. I am. I am. I am. A reminder that our existence is precious, and the very act of being is profound in itself. We often overlook the miracle of life in our rush to achieve and accumulate, but in moments of stillness, we can hear the steady rhythm of our own existence. This is life – the simple, beautiful pulse of being alive. It is enough to simply be, to feel the warmth of the sun, to hear the song of a bird, to love and to be loved. Our hearts remind us of this truth with every beat. I am. I am. I am.",
    },
    {
      author: "Maya Angelou",
      quote:
        "You will face many defeats in life, but never let yourself be defeated. Each setback, each obstacle is not the end, but an opportunity for growth. Life’s challenges do not define us, but our response to them does. It is in rising after each fall that we find our strength and our resilience. To give up is to accept defeat, but to keep going, even when the road is hard, is the essence of victory. Our defeats are lessons in disguise, and with each one, we grow wiser, stronger, and more prepared for the next challenge that comes our way.",
    },
    {
      author: "Nelson Mandela",
      quote:
        "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. Fear is a natural human emotion, one that we all experience, but it is not fear that defines us. It is how we confront it. Courage is not about being fearless, but about feeling the fear and moving forward anyway. It is in those moments of courage, when we face our fears head-on, that we discover our true strength. Fear can be a powerful motivator, pushing us to act in ways we never thought possible.",
    },
    {
      author: "Leonardo da Vinci",
      quote:
        "Simplicity is the ultimate sophistication. In a world full of complexity, we often overlook the beauty of simplicity. Yet, it is in the simple things that we find the most profound truths. Simplicity is not about lack or deprivation, but about clarity and focus. It is about stripping away the unnecessary to reveal the essential. In art, in design, in life, the most elegant solutions are often the simplest. To live simply is to live fully, to appreciate the beauty in everyday moments, and to understand that less is often more. Simplicity allows us to see the world with fresh eyes, unburdened by distractions.",
    },
    {
      author: "Martin Luther King Jr.",
      quote:
        "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. It is easy to stand tall when the waters are calm, but it is in the storm that our true character is revealed. In moments of difficulty, we are called to act with courage, integrity, and resilience. It is not enough to speak of justice and equality when it is easy; we must stand for these principles when it is hard, when the cost is high, and when the opposition is strong. This is the true test of our humanity.",
    },
    {
      author: "Mahatma Gandhi",
      quote:
        "You must be the change you wish to see in the world. We often look to others to lead the way, to make the changes we believe are necessary, but true change begins within each of us. It is in our daily actions, in our choices, and in our attitudes that we have the power to shape the world around us. If we want a world of kindness, we must be kind. If we want a world of peace, we must be peaceful. If we want a world of justice, we must act justly. Change does not come from waiting for others to act; it comes from our own hands and hearts.",
    },
    {
      author: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts. In the pursuit of our goals, we will face both success and failure, but neither defines us. What matters is our determination to keep going, to learn from our failures and build upon our successes. Success can be fleeting, and failure can be devastating, but it is in our ability to persevere that we find true strength. The journey is long, and the road is often hard, but as long as we continue to put one foot in front of the other, we are moving forward, and that is what truly matters.",
    },
    {
      author: "Ralph Waldo Emerson",
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. We spend so much time worrying about our past mistakes and future challenges that we often overlook the strength and potential that resides within us. The true source of power is not in external circumstances, but in our own hearts and minds. The courage to face adversity, the wisdom to learn from our experiences, and the resilience to keep moving forward – these are the qualities that define us. When we tap into our inner strength, we realize that we are capable of far more than we ever imagined.",
    },
    {
      author: "Mother Teresa",
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. In a world often filled with pain and suffering, each of us has the power to make a difference through simple acts of kindness. A smile, a kind word, a helping hand – these are the things that can brighten someone’s day, and they cost nothing. Love is the most powerful force in the world, and when we choose to give it freely, we create ripples that can change the world. Let your life be a beacon of light, and let your actions spread love wherever you go.",
    },
    {
      author: "Oscar Wilde",
      quote:
        "Be yourself; everyone else is already taken. In a world that constantly tries to mold us into something we are not, the greatest act of rebellion is to be unapologetically yourself. Each of us is unique, with our own gifts, talents, and perspectives, and it is in embracing our individuality that we find true freedom. To conform is to deny our true selves, and in doing so, we lose the very essence of who we are. The world does not need more copies; it needs more originals. So be yourself, boldly and without apology, for that is the only way to truly live.",
    },
    {
      author: "Friedrich Nietzsche",
      quote:
        "He who has a why to live can bear almost any how. Life is full of struggles, pain, and hardship, but it is our purpose that gives us the strength to endure. When we have a clear sense of why we are here and what we are striving for, no obstacle is too great, no challenge too daunting. Purpose gives our lives meaning, and meaning gives us the resilience to persevere through even the darkest of times. It is in knowing our why that we find the courage to face whatever life throws our way, for we know that we are moving toward something greater.",
    },
    {
      author: "Buddha",
      quote:
        "The mind is everything. What you think you become. Our thoughts shape our reality, and the beliefs we hold about ourselves and the world around us determine the quality of our lives. If we fill our minds with negativity, doubt, and fear, that is the life we will experience. But if we cultivate thoughts of love, compassion, and possibility, we open ourselves to a life of joy and abundance. The power of the mind is limitless, and when we learn to control our thoughts, we gain control over our lives. It is through mindful awareness that we can create the life we desire.",
    },
    {
      author: "Mark Twain",
      quote:
        "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. Life is too short to live in fear of failure, and the greatest regrets we carry are not the mistakes we made, but the opportunities we let slip away. Take risks, follow your heart, and chase your dreams, for it is only by stepping out of our comfort zones that we truly discover what we are capable of.",
    },
    {
      author: "Confucius",
      quote:
        "Our greatest glory is not in never falling, but in rising every time we fall. Failure is an inevitable part of life, but it is not the fall that defines us – it is how we rise after the fall. Every setback is an opportunity to learn, to grow, and to become stronger. The road to success is paved with failures, but each one brings us closer to our goal. What matters most is our ability to persevere, to keep getting up no matter how many times we are knocked down. That is the true measure of success, and the true test of character.",
    },
    {
      author: "Helen Keller",
      quote:
        "Alone we can do so little; together we can do so much. The power of collaboration, of coming together with others to achieve a common goal, is immense. No great achievement has ever been accomplished by one person alone. It is through cooperation, teamwork, and shared vision that we can create something far greater than ourselves. When we work together, we amplify our strengths and overcome our weaknesses. Together, we are capable of achieving extraordinary things. The world is full of challenges, but with unity, there is no limit to what we can accomplish.",
    },
    {
      author: "Stephen Hawking",
      quote:
        "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious. And however difficult life may seem, there is always something you can do and succeed at. It matters that you don’t just give up. The universe is vast, full of mysteries and wonders that we are only just beginning to understand. In the face of such immensity, it is easy to feel small and insignificant, but each of us has the power to contribute something unique to the world. Keep looking up, and keep striving for greatness.",
    },
    // Add more quotes following the same pattern...
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === famousQuotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // change every 3 seconds for better readability

    return () => clearInterval(interval); // clean up interval on unmount
  }, [famousQuotes.length]);
  console.log("🚀 ~ Quotes ~ currentQuoteIndex:", currentQuoteIndex);

  return (
    <div
      className="md:h-screen py-10 my-10 flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* Purple overlay */}
      <div
        className="absolute inset-0 bg-purple-800 opacity-50 rounded-md"
        style={{ zIndex: 1 }}
      ></div>

      {/* Quote content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto text-white">
          <div className="text-center px-3">
            <h3 className="font-semibold text-center mb-4 text-xl">Quotes</h3>
            <div>
              <p className="mb-4 text-md text-start ">
                {famousQuotes[currentQuoteIndex]?.quote}
              </p>
              <p className="text-right italic">
                - {famousQuotes[currentQuoteIndex]?.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
