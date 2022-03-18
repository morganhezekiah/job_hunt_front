import man2 from '../../assets/images/man2.png';
import woman1 from '../../assets/images/woman3.jpeg';
import woman2 from '../../assets/images/woman2.jpeg';

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
                      <h1 className="text-2xl">Digital Skill Traning</h1>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Ms word/Google Docs
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Ms Excel/Google Sheets
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Ms Access
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-01.png"
                              alt=""
                            />
                          </span>
                          Graphic Design/Branding
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-02.png"
                              alt=""
                            />
                          </span>
                          Content Writing
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-03.png"
                              alt=""
                            />
                          </span>
                          Blogging
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Digital File Management
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Digital Office Management
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Mobile App Development
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Web Development
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Digital Markerting
                        </div>
                      </div>
                      <div className="first-thumb active">
                        <div className="thumb">
                          <span className="icon">
                            <img
                              src="assets/images/service-icon-04.png"
                              alt=""
                            />
                          </span>
                          Businessess Branding
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center text-3xl font-bold">Testimonials</h1>
                  <section id="testimonials" class="flex flex-col lg:flex-row">
                  <figure class=" bg-slate-100 rounded-xl p-8 mt-10  dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={man2} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                        I'm glad to have been a participant During the Grassroot Digital Skill training, that took place at Adazi Nnukwu ICT Center Anaocha, Anambra state.
                        Upskill team has been very intentional in transferring knowledge and the classes have been intensive. I learnt a lot on digital marketing and now I can proudly state that I have began earning from this digital Skill.
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                        </div>
                        {/* <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div> */}
                      </figcaption>
                    </div>
                    </figure>
                    <figure class=" bg-slate-100 rounded-xl p-8 mt-10  dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={woman1} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                        Upskill Network has a team of dedicated instructors, trainers and a very organized team. Enrolling into their program have been one of the best decisions I've made. After interning, I have been able to secure jobs and work from home. I'm glad to have found this tech institute.
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Chineye Ann
                        </div>
                        {/* <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div> */}
                      </figcaption>
                    </div>
                    </figure>
                    <figure class=" bg-slate-100 rounded-xl p-8 mt-10 dark:bg-slate-800 mx-4">
                    <img class="w-24 h-24  rounded-full mx-auto" src={woman2} alt="" width="384" height="512"/>
                    <div class="pt-6  text-center  space-y-4">
                      <blockquote>
                        <p class="text-lg font-medium">
                        I began my tech journey 2017, however, I made little or nothing out of the knowledge I had. A radio jingle performed the magic and I got connected with the biggest vocational Technology Institution in
                        the south east region of Nigeria, Upskill Network. And today, I enjoy profits from this one in a life time connection.
                        </p>
                      </blockquote>
                      <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                          Queen Davidson
                        </div>
                        {/* <div class="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div> */}
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