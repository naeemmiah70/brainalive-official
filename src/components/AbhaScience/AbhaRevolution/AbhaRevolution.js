import React from "react";
import "./AbhaRevolution.css";
import Typewriter from "typewriter-effect";

const AbhaRevolution = () => {
  return (
    <section className="focci-sdk-bg">
      <div className="focci-sdk-container">
        <div>
          <h2 className="remolution-header text-center">
            ABHA's revolutionary technology uses
          </h2>
          <div className="text-center text-white">
            <div className="text-center type-writter my-4">
              <Typewriter
                options={{
                  strings: [
                    "Electroencephalography(EEG)",
                    "Artificial Intelligence",
                    "assistive exoskeleton",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p class="writter-bottom-text">
              ABHA monitors your brain signals using EEG to capture the
              imagination of your motor movement.
            </p>
            <p class="writter-bottom-text">
              ABHA knows to identify if the right zone of the brain is used for
              imagining the mobility.
            </p>
            <p class="writter-bottom-text">
              ABHA uses an upper limb exoskeleton to assist the mobility when
              the mental imagination is right.
            </p>
          </div>
        </div>

        <section className="my-5">
          <h1 className="scientific mb-4">Scientific Publications</h1>
          <div className="row">
            <div className="col-md-6">
              <div>
                <strong className="publication-heading mt-3">
                  "Brain Machine interface facilitates neuroplasticity"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.sciencedirect.com/science/article/pii/S0969996114003714#bb0150"
                  target="_blank"
                >
                  Brain–machine interfaces in neurorehabilitation of stroke
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Surjo R.Soekadar, Niels Birbaumer, Marc W.Slutzky, Leonardo
                  G.Cohene
                </small>
              </div>

              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Synchronizing stroke rehabilitation with voluntary neural
                  and/or muscle activity can lead to motor recovery by targeting
                  Hebbian plasticity. This reinforces the neural connections
                  between paretic muscles and the residual motor area"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4477170/"
                  target="_blank"
                >
                  Combinations of stroke neurorehabilitation to facilitate motor
                  recovery: perspectives on Hebbian plasticity and homeostatic
                  metaplasticity
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Naoyuki Takeuch, Shin-Ichi Izumi
                </small>
              </div>

              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Findings provide strong support for the reliability and
                  potential rehabilitative application of MI-BCI in a stroke
                  population, particularly in patients with mild to moderate
                  motor impairments"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://onlinelibrary.wiley.com/doi/abs/10.1016/j.pmrj.2014.01.006"
                  target="_blank"
                >
                  Is Motor-Imagery Brain-Computer Interface Feasible in Stroke
                  Rehabilitation?
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Wei-Peng Teo, PhD, Effie Chew
                </small>
              </div>

              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "This systematic review suggests that BCI interventions may be
                  a promising rehabilitation approach in subjects with stroke"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://pubmed.ncbi.nlm.nih.gov/28512066/"
                  target="_blank"
                >
                  Use of Electroencephalography Brain-Computer Interface Systems
                  as a Rehabilitative Approach for Upper Limb Function After a
                  Stroke: A Systematic Review
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Esther Monge-Pereira, Jaime Ibañez-Pereda, Isabel M
                  Alguacil-Diego, Jose I Serrano, María P Spottorno-Rubio,
                  Francisco Molina-Rueda
                </small>
              </div>
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "This proof-of-principle study suggests that the combination
                  of BCI training with goal-directed, active physical therapy
                  may improve the motor abilities of chronic stroke patients
                  despite apparent initial paralysis"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0003999308003249"
                  target="_blank"
                >
                  Combination of Brain-Computer Interface Training and
                  Goal-Directed Physical Therapy in Chronic Stroke: A Case
                  Report
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Doris Broetz, Christoph Braun, Cornelia Weber, Surjo R.
                  Soekadar, Andrea Caria, Niels Birbaumer
                </small>
              </div>
            </div>
            <div className="col-md-6">
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Current evidence suggests that Motor imagery provides
                  additional benefits to conventional physiotherapy or
                  occupational therapy"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://link.springer.com/article/10.1186/1743-0003-5-8"
                  target="_blank"
                >
                  Efficacy of motor imagery in post-stroke rehabilitation: a
                  systematic review
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Andrea Zimmermann-Schlatter, Corina Schuster, Milo A Puhan,
                  Ewa Siekierka & Johann Steurer
                </small>
              </div>
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Majority of stroke patients could use EEG-based motor imagery
                  BCI"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://journals.sagepub.com/doi/10.1177/155005941104200411"
                  target="_blank"
                >
                  A Large Clinical Study on the Ability of Stroke Patients to
                  Use an EEG-based Motor Imagery Brain-Computer Interface
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Kai Keng Ang, Cuntai Guan, Karen Sui Geok Chua, Beng Ti Ang,
                  Christopher Wee Keong Kuah, Chuanchu Wang, Kok Soon Phua,
                  Zheng Yang Chin, Haihong Zhang
                </small>
              </div>
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Rehabilitation paradigms that pair cortically-based intent
                  with activation of affected circuits and positive
                  neurofeedback appear to be required"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.researchgate.net/publication/311919389_Enhancing_Nervous_System_Recovery_through_Neurobiologics_Neural_Interface_Training_and_Neurorehabilitation"
                  target="_blank"
                >
                  Enhancing Nervous System Recovery through Neurobiologics,
                  Neural Interface Training, and Neurorehabilitation
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Max O Krucoff, Shervin Rahimpour, Marc Slutzky, Dennis A.
                  Turner, Victor Edgerton
                </small>
              </div>
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "Targeted Neuroplasticity Induced Through Operant
                  Conditioning-modification of a behavior is induced by the
                  consequence of that behavior"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3579496/"
                  target="_blank"
                >
                  Operant Conditioning of a Spinal Reflex Can Improve Locomotion
                  after Spinal Cord Injury in Humans
                </a>{" "}
                <br />
                <small className="publication-writter">
                  Aiko K. Thompson, Ferne R. Pomerantz, Jonathan R. Wolpaw
                </small>
              </div>
              {/* section */}
              <div className="mt-4">
                <strong className="publication-heading">
                  "The findings support the feasibility and justify the
                  incorporation of home-based motor imagery exercises to improve
                  walking skills for poststroke hemiparesis"
                </strong>{" "}
                <br />
                <a
                  className="publication-link"
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0003999308003249"
                  target="_blank"
                >
                  Home-Based Motor Imagery Training for Gait Rehabilitation of
                  People With Chronic Poststroke Hemiparesis
                </a>{" "}
                <br />
                <small className="publication-writter">
                  AyeletDunsky, RuthDickstein, Emanuel Marcovitz, SandraLevy,
                  JudithDeutschPT
                </small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AbhaRevolution;
