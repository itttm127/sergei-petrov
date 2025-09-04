var projects = [
  {
    name: "Blockchain EXCHANGE",
    desc: "Blockchain Swap Site Using DEFI & Smart Contract & Web3 & MERN & Typescript",
    image: "novation-swap.vercel.app/1",
    category: "blockchain, mern, frontend, bet",
    links: {
      view: "https://novation-swap.vercel.app/",
    },
  },
  {
    name: "Ethereum DAPP",
    desc: "Anything Is Possible Within Ethereum Vniverse.",
    image: "ether.site/2",
    category: "blockchain, frontend, bet",
    links: {
      view: "https://ether.site/",
    },
  },
  {
    name: "Galaxy Fight Club",
    desc: "The Galaxy Fight Club (GFC) is not just an avatar project, it is a real-time PvP game to bring together all the other different NFT collections onto one single platform, this means you can 'log-in' with a NFT you have already bought and battle with that character.",
    image: "galaxyfightclub.com/1",
    category: "blockchain, frontend, bet, game, mern",
    links: {
      view: "https://galaxyfightclub.com/",
    },
  },
  {
    name: "Web3 Gaming Ecosystem",
    desc: "Revolution Land is a leading Web3 game ecosystem developed by Chain X Game, a well-known game company in the Middle East.",
    image: "revoland/1",
    category: "blockchain, frontend, bet, mern",
    links: {
      view: "https://revoland.com/",
    },
  },
  {
    name: "Crypto Casino",
    desc: "Crypto Casino & Sports Betting Site Using MERN & Web3.",
    image: "owl.games/1",
    category: "blockchain, casino, frontend, bet",
    links: {
      view: "https://owl.games/",
    },
  },
  {
    name: "Wide Casino Provider",
    desc: "Casino Game Provider With Many Games Using AWS & API Integration",
    image: "net.ng-demo/1",
    category: "casino, frontend, bet",
    links: {
      view: "https://net.ng-demo.com",
    },
  },
  {
    name: "Casino Platform",
    desc: "PlayZap games is competitive skill-based gaming app built on blockchain technology where you can play your favorite game, compete against other players and win rewards.",
    image: "playzap.games/1",
    category: "blockchain, casino, frontend, bet, mern",
    links: {
      view: "https://www.playzap.games/",
    },
  },
  {
    name: "NFT Game Platform",
    desc: "Players understood that the one who controls Cells - controls the Hive itself. Will you become the one who will challenge huge corporations in a fight for Hive’s essence?",
    image: "project-hive.io/1",
    category: "blockchain, nft, game, frontend, bet, mern",
    links: {
      view: "https://project-hive.io",
    },
  },
  {
    name: "Blockchain Bet",
    desc: "Blockchain Bet Platform With Own Token & Serveral Tokens",
    image: "blockchainbets.club/1",
    category: "blockchain , casino, sportsbook, mern",
    links: {
      view: "https://blockchainbets.club",
    },
  },
  {
    name: "Tiny Game Platform",
    desc: "Check latest WHOIS data, Whois History & Reverse Whois of growroll.co, all in one page. Try now, it's 100% FREE!",
    image: "growroll.co/1",
    category: "frontend, bet, game, laravel",
    links: {
      view: "https://growroll.co/",
    },
  },
  {
    name: "E-Shop",
    desc: "The story of Be Young is very simple and holds the essence of vision, hard work, and perseverance. Beyoung runs with the idea of providing the best to the customers because there is no feeling better than customer satisfaction. The prime focus of Be Young is to create products that represent the young souls by acting as a replica of their thoughts, personality, and choices.",
    image: "beyoung.in/1",
    category: "frontend, shop",
    links: {
      view: "https://beyoung.in",
    },
  },
  {
    name: "Business Management",
    desc: "We create demonstrable business value through the use of technology. By assisting the enterprise to develop and execute on focused strategies to reduce operating costs or drive critical competitive advantage, Cooperative Computing ensures your business will obtain the desired benefit from your technology investments or can exit a project quickly with little risk.",
    image: "cooperativecomputing.com/1",
    category: "frontend, laravel, project",
    links: {
      view: "https://cooperativecomputing.com",
    },
  },
  {
    name: "KLEINE KRONE",
    desc: "The Kleine provides many games for free & can play the game",
    image: "kleinekrone.de/1",
    category: "frontend, game, laravel",
    links: {
      view: "https://kleinekrone.de",
    },
  },
  {
    name: "Loto188",
    desc: "LOTO188 betting website operates legally in the Philippines (PAGCOR License No. OGL16-0023) and is supervised by Gaming Associates.",
    image: "loto288.com/1",
    category: "frontend, bet, game, mern",
    links: {
      view: "https://loto288.com",
    },
  },
  {
    name: "Link Outdoor Lighting",
    desc: "Link Outdoor Lighting is committed to providing quality outdoor lighting suitable for all your residential and commercial projects.",
    image: "linkoutdoorlighting.com/1",
    category: "frontend, hotel",
    links: {
      view: "https://www.linkoutdoorlighting.com/",
    },
  },
  {
    name: "Build My Ski Trip",
    desc: "Overwhelmed with choice? Not sure where to start? Let us help you find your perfect holiday in just a few simple steps.",
    image: "buildmyskitrip.com/1",
    category: "frontend, trip",
    links: {
      view: "https://www.buildmyskitrip.com/",
    },
  },
  {
    name: "UGMONK",
    desc: "A design studio in Downingtown, PA, creating and curating products that combine form & function.",
    image: "ugmonk.com/1",
    category: "frontend, shop",
    links: {
      view: "https://ugmonk.com/",
    },
  },
];

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  });
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Projects | Portfolio Sergei Petrov";
    $("#favicon").attr("href", "/assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "/assets/images/favhand.png");
  }
});

function showProjects() {
  let projectsContainer = document.querySelector(".work .box-container");
  let projectsHTML = "";
  projects.forEach((project) => {
    let categories = "";
    project.category.split(",").filter((item) => (categories += item + " "));
    projectsHTML += `
        <div class="grid-item ${categories}">
        <div class="box tilt" style="width: 480px; margin: 1rem">
      <img draggable="false" src="./../assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p style='height:80px; overflow:auto;'>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          </div>
        </div>
      </div>
    </div>
    </div>`;
  });
  projectsContainer.innerHTML = projectsHTML;
  // vanilla tilt.js
  // VanillaTilt.init(document.querySelectorAll(".tilt"), {
  //     max: 20,
  // });
  // // vanilla tilt.js

  // /* ===== SCROLL REVEAL ANIMATION ===== */
  // const srtop = ScrollReveal({
  //     origin: 'bottom',
  //     distance: '80px',
  //     duration: 1000,
  //     reset: true
  // });

  // /* SCROLL PROJECTS */
  // srtop.reveal('.work .box', { interval: 200 });

  // isotope filter products
  var $grid = $(".box-container").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: 200,
    },
  });

  // filter items on button click
  $(".button-group").on("click", "button", function () {
    $(".button-group").find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
}

showProjects();
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
