const questions = [
  "What’s your best food?",
  "Are you still in a relationship?",
  "When is the registration starting?",
  "What’s your favorite hobby?",
  "Do you have any pets?",
  "What’s your dream vacation?",
  "What’s your favorite movie?",
  "Who’s your idol?",
  "What’s your biggest fear?",
  "What inspires you?",
  "What’s your favorite book?",
  "Are you a morning person or night owl?",
  "What’s your favorite sport?",
  "Do you play any musical instruments?",
  "What’s your go-to comfort food?",
  "What’s a skill you want to learn?",
  "If you could have any superpower, what would it be?",
  "What’s your favorite season?",
  "What’s your biggest achievement?",
  "What would you do if you won the lottery?",
  "What’s your favorite type of music?",
  "Where do you see yourself in five years?",
  "What’s your favorite childhood memory?",
  "What’s one thing on your bucket list?",
  "What’s your favorite way to relax?",
  "What’s your go-to karaoke song?",
  "What’s a place you want to visit?",
  "What motivates you to work hard?",
  "What’s your favorite ice cream flavor?",
  "If you could meet anyone, dead or alive, who would it be?",
  "What’s your biggest pet peeve?",
  "What’s your favorite type of cuisine?",
  "What’s a fun fact about yourself?",
  "What are you most passionate about?"
];

const MessageAnim = () => {

  return (
    <div className="text-white w-full py-4 my-4 overflow-hidden marquee">
      <div>

        <marquee className="inline-flex items-center">
          {questions.map((question, index) => (
            <span key={index}>
              {question} <span className="px-4">•</span>
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default MessageAnim;
