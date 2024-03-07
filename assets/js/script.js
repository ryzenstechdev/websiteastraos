window.addEventListener('scroll', function() {
    var heroSection = document.getElementById('hero');
    var otherSection = document.getElementById('features');
    var blob1 = document.querySelector('.blob-1');
    var blob2 = document.querySelector('.blob-2');
    var blob3 = document.querySelector('.blob-3');
    var petalContainer = document.querySelector('.petal-container');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    var heroOpacity = 1 - (scrollPosition / windowHeight);
    heroOpacity = heroOpacity >= 0 ? heroOpacity : 0;
    var otherPosition = otherSection.getBoundingClientRect().top;

    // Calculate opacity for the other section (increasing)
    var otherOpacity = (windowHeight - otherPosition) / windowHeight;
    otherOpacity = otherOpacity >= 0 ? otherOpacity : 0;

    // Set opacity for the hero and other sections
    heroSection.style.opacity = heroOpacity;
    blob1.style.opacity = heroOpacity;
    blob2.style.opacity = heroOpacity;
    blob3.style.opacity = heroOpacity;
    petalContainer.style.filter = `blur(${otherOpacity*24}px)`;
    otherSection.style.opacity = otherOpacity;
});