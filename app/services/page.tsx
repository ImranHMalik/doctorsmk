import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h1">Our Services</div>
        <p className="p1">
          Explore our comprehensive range of services, including private
          appointments, occupational health assessments, travel clinic
          expertise, sexual health consultations, and thorough family medicine.
          Our offerings extend to health screenings and well-man/woman health
          checks.
        </p>{" "}
        <div>
          <div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/gp.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Private GP Consultations</p>
                <p className=" font-light text-lg">
                  We offer personalized one-on-one consultations, focusing on
                  comprehensive healthcare, timely diagnosis, and tailored
                  treatment plans to address individual patient needs and
                  concerns.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/sexhealth.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Sexual Health Checks</p>
                <p className=" font-light text-lg">
                  Specializing in sexual health, we provide confidential
                  examinations and testing services to assess and address
                  various aspects of sexual well-being, ensuring a proactive
                  approach to prevention and early detection of sexually
                  transmitted infections.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/diagnostics.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>
                  Private diagnostics including MRI, CT scans, X-rays and blood
                  tests
                </p>
                <p className=" font-light text-lg">
                  Offering advanced diagnostic services, including
                  state-of-the-art imaging techniques and blood tests, to
                  facilitate accurate and timely assessments, aiding in the
                  precise diagnosis of medical conditions.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/referral.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Specialist Referrals</p>
                <p className=" font-light text-lg">
                  When necessary, we facilitate referrals to specialists,
                  ensuring that patients have access to expert medical opinions
                  and specialized care for specific health concerns beyond the
                  scope of general practice.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/travel.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Travel Health Checks</p>
                <p className=" font-light text-lg">
                  Providing comprehensive health assessments and vaccinations
                  tailored to the specific needs of travelers, ensuring they are
                  well-prepared and protected against potential health risks
                  associated with their destinations.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/fitnesstofly.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Fitness to Fly</p>
                <p className=" font-light text-lg">
                  Conducting evaluations to determine individuals' fitness to
                  travel by air, considering medical conditions and ensuring
                  adherence to aviation health standards for a safe and
                  comfortable journey.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/occupation.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Occupational Health Consultations</p>
                <p className=" font-light text-lg">
                  Offering consultations focused on the health and well-being of
                  individuals within the workplace, addressing occupational
                  health concerns, promoting a healthy work environment, and
                  facilitating preventive measures.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/immune.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Immunisations</p>
                <p className=" font-light text-lg">
                  Administering a range of vaccinations to protect against
                  infectious diseases, following recommended immunization
                  schedules and providing expert guidance on vaccine choices.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/check.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Wellness checks for peace of mind</p>
                <p className=" font-light text-lg">
                  Comprehensive health assessments aimed at promoting overall
                  well-being, identifying potential health risks, and offering
                  personalized advice to encourage a healthy lifestyle.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/report.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Reports</p>
                <p className=" font-light text-lg">
                  Providing detailed medical reports for various purposes,
                  including insurance claims, legal requirements, or
                  documentation needed for employer-related health assessments.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/note2.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Sick Notes</p>
                <p className=" font-light text-lg">
                  Offering medical documentation to validate and communicate the
                  need for sick leave, ensuring that patients receive the
                  necessary support during periods of illness.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/note.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Prescription Services</p>
                <p className=" font-light text-lg">
                  Prescribing medications as needed, with careful consideration
                  of individual health conditions and in adherence to best
                  practices and guidelines.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/visa.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Visa Medicals</p>
                <p className=" font-light text-lg">
                  Conducting medical examinations required for visa
                  applications, ensuring that individuals meet the health
                  standards set by immigration authorities.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/employee.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Pre-employment Screenings</p>
                <p className=" font-light text-lg">
                  Evaluating the health status of individuals in the context of
                  employment, helping employers make informed decisions and
                  ensuring the well-being of the workforce.
                </p>
              </div>
            </div>
            <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
              <Image
                width={60}
                height={60}
                src="/assets/icons/smear.svg"
                alt=""
                className="mr-4"
              />
              <div className="flex flex-col">
                <p>Cervical Smears</p>
                <p className=" font-light text-lg">
                  Performing cervical smears as part of routine screenings to
                  detect early signs of cervical abnormalities, promoting
                  women's health and facilitating timely interventions when
                  necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
