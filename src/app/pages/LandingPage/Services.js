import face1 from '../../assets/images/img/team/2.jpg'
const Services = () => {
  return (
    <div id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-heading"
            
            >
              <h6>Our Services</h6>
              <h4>
                What Our Agency <em>Provides</em>
              </h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="naccs">
              <div className="grid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="menu">
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Apartments
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-02.png"
                              alt=""
                            />
                          </span>
                          Food &amp; Life
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-03.png"
                              alt=""
                            />
                          </span>
                          Cars
                        </div>
                      </div>
                      <div>
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Shopping
                        </div>
                      </div>
                      <div className="last-thumb">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Traveling
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center text-xl font-semibold">Testimonials</h1>
                  <section id="testimonials" class="flex flex-col lg:flex-row">
                  <figure class=" bg-slate-100 rounded-xl p-8 mt-10  dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={face1} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                          “Tailwind CSS is the only framework that I've seen scale
                          on large teams. It’s easy to customize, adapts to any design,
                          and the build size is tiny.”
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div>
                      </figcaption>
                    </div>
                    </figure>
                    <figure class=" bg-slate-100 rounded-xl p-8 mt-10  dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={face1} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                          “Tailwind CSS is the only framework that I've seen scale
                          on large teams. It’s easy to customize, adapts to any design,
                          and the build size is tiny.”
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div>
                      </figcaption>
                    </div>
                    </figure>
                    <figure class=" bg-slate-100 rounded-xl p-8 mt-10 dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={face1} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                          “Tailwind CSS is the only framework that I've seen scale
                          on large teams. It’s easy to customize, adapts to any design,
                          and the build size is tiny.”
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div>
                      </figcaption>
                    </div>
                    </figure>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Services;