const init = $(() => {
  const selector = `[data-read-more]`;

  const data = [
    {
      title: `You'll never believe this weight loss trick`,
      subtitle: `LifeHacks`,
      image: `/assets/fake1.jpg`,
      link: `/project/huggies/`,
    },
    {
      title: `Exclusive! The story that Tony Abbott hid from his wife`,
      subtitle: `Unbelievable but true`,
      image: `/assets/fake2.jpg`,
      link: `/project/12wbt/`,
    },
    {
      title: `Every Australian born after 1905 should read this`,
      subtitle: `Tax for life`,
      image: `/assets/fake3.jpg`,
      link: `/project/huggies/`,
    },
    {
      title: `10 super easy ways to silence a crying child`,
      subtitle: `Parenting tips`,
      image: `/assets/fake1.jpg`,
      link: `/project/12wbt/`,
    },
    {
      title: `See who has been checking you out on Facebook`,
      subtitle: `Modern Life`,
      image: `/assets/fake2.jpg`,
      link: `/project/12wbt/`,
    },
    {
      title: `Hillary Clinton abducted my child and sacrificed it to an Alien master`,
      subtitle: `OMG`,
      image: `/assets/fake3.jpg`,
      link: `/project/`,
    },
    {
      title: `Doctors Shocked By Mum's Trick To Lose 12 Kg In 2 Weeks`,
      subtitle: `LifeHacks`,
      image: `/assets/fake1.jpg`,
      link: `/project/12wbt/`,
    },
    {
      title: `The must have spy device every car owner should have`,
      subtitle: `OMG`,
      image: `/assets/fake2.jpg`,
      link: `/project/huggies/`,
    },
    {
      title: `You'll never believe this weight loss trick`,
      subtitle: `OMG`,
      image: `/assets/fake3.jpg`,
      link: `/project/huggies/`,
    },
  ];

  function getUnique(items, count) {
    var tmp = items.slice(items);
    var ret = [];

    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      ret.push(removed[0]);
    }

    return ret;
  }

  function articlesToHTML(articles) {
    let html = ``;

    $.each(articles, (index, article) => {
      html += `
        <div class="col-md-3">
          <a href="${article.link}" class="card read-more-card">
            <div class="card-img-wrapper">
              <img class="card-img-top" src="${article.image}" alt="${article.title}" />
            </div>
            <div class="card-block p-3">
              <h4 class="card-title">${article.title}</h4>
              <p class="card-text">${article.subtitle}</p>
            </div>
          </a>
        </div>
      `;
    });

    return `
      <div class="container">
        <div class="row">
          ${html}
        </div>
      </div>
    `;
  }

  function init() {
    const $containers = $(selector);

    $containers.each((index, container) => {
      const articles = getUnique(data, 4);
      $(container).html(articlesToHTML(articles));
    });
  }

  init();
});

export default init;
