const nightModeButton = document.getElementById("nightModeButton");
const nightModeDiv = document.getElementById("nightModeDiv");

// Dark Mode Handler => switch theme on button click.

const darkModeHandler = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.classList.remove("dark-theme");
    localStorage.setItem("darkMode", "0");
  } else {
    nightModeDiv.classList.add("dark-theme");
    localStorage.setItem("darkMode", "1");
  }
};

// Dark Moda State Handler => check if a 'darkMode' local store exist. 
// If true, activate darkMode, else create a localStorage called 'darkMode'

const darkModeState = () => {
  if (localStorage.getItem("darkMode") == "1") {
    nightModeDiv.classList.add("dark-theme");
  } else {
    localStorage.setItem("darkMode", "0");
  }
};

nightModeButton.addEventListener("click", darkModeHandler);
nightModeDiv.addEventListener("load", darkModeState());



const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});

