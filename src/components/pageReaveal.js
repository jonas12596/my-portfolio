export default function PageReveal({revealRef, skills, setSkillIndex}){
    setTimeout(() => {
        const pageReveal = revealRef.current.style;
  
        pageReveal.transform = "translateY(10000px)";
  
        document.body.style.overflowY = "visible";
      }, 600 * skills.length);
  
      // // Function to cycle through skills
      const cycleSkills = () => {
        setTimeout(() => {
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 100); // Wait 1 second before displaying the next skill
      };
  
      // Start cycling through skills on component mount
      const interval = setInterval(cycleSkills, 100 * skills.length); // Repeat every full cycle
  
      // Clean up interval on component unmount
      return () => clearInterval(interval);
}