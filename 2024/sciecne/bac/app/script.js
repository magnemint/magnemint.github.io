$(document).ready(function () {
    var originalSize;

    function calculateOriginalSize() {
        originalSize = parseFloat($("#intro-text").css("font-size")) / 16;
    }

    calculateOriginalSize();

    $(window).scroll(function () {
        
        var scrollPosition = $(this).scrollTop();

        var newSize = originalSize - scrollPosition * 0.001;
        newSize = Math.max(Math.min(newSize, originalSize), 1);

        $("#intro-text").css("font-size", newSize + "rem");

        var scaleFactor = newSize / originalSize;

        $("#intro-text").css("transform", "scale(" + scaleFactor + ")");

        var imageScale = 0.375 + scrollPosition * 0.000075;

        $("#cerebellum, #brain-cerebellum").css({
            "scale": `${imageScale}`,
            "transition": "transform 0.2s ease"
        });
    });

    const subtitles = document.querySelectorAll('.card-subtitle');

    const createWord = (text, index) => {
      const word = document.createElement('span');
      word.innerHTML = `${text} `;
      word.classList.add('card-subtitle-word');
      word.style.transitionDelay = `${index * 40}ms`;
      return word;
    };

    const createSubtitle = (text, subtitleElement) => {
      text.split(' ').map((word, index) => subtitleElement.appendChild(createWord(word, index)));
    };

    const texts = [
      "The corpus callosum is responsible for acting as a crucial bridge between your left and right hemisphere. It is basically a highway of information, being made of the largest bundle of nerve fibres (myelinated axons in their full form of nerves) in the brain and consisting of mostly white matter. The corpus callosum facilitates communication, ensuring both hemispheres contribute to complex tasks.",
      "During adolescence, the corpus callosum nonlinearly thickens. This growth is likely due to an increase in the amount of white matter and changes in its microstructural properties. MRIs have proven this. Different portions of the corpus callosum (e.g. the splenum) tend to show greater growth compared to other regions during adolescence. Myelination and synpatic pruning still occur in this part of the brain. It has also been seen that as the corpus callosum develops, stronger links also devlop between the hippocampus and frontal areas that set goals and weigh different agendas. This development is likely to underlie the maturation of cognitive skills and ablities druing the transiion to adulthood.",
      "Studies have also investigated potential sex differences in corpus callosum development during adolescence. While findings have been somewhat inconsistent, some research suggests that males and females may exhibit differences in the rate and pattern of corpus callosum growth during this period. These differences may reflect underlying differences in brain organization and functional connectivity between males and females."
    ];

    subtitles.forEach((subtitle, index) => {
      createSubtitle(texts[index], subtitle);
    });
});