function skillsMember() {
  // skills
  const skills = document.querySelector('.skills');
  if (skills) {
    const skillsBtn = document.querySelector('.skills-btn');
    const skillsContent = document.querySelector('.skills-content');

    skillsBtn.addEventListener('click', () => {
      skillsContent.classList.toggle('skills-content--active');
    });
  }
}