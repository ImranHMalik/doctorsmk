import Image from "next/image";

const MIntro = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row pt-5">
        <div className="flex w-full flex-col  justify-center items-center">
          <div className="z-20">
            {" "}
            <Image
              src="/assets/images/Mariyam.png"
              alt="logo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="bg-lime-200 lg:h-[200px] items-center justify-center flex flex-col w-full  pt-10 relative bottom-10 ">
            <div className="lg:relative lg:bottom-6">
              <div className="flex w-full font-roboto font-semibold items-center justify-center text-2xl">
                Dr Mariyam H Malik
              </div>
              <div className="flex w-full font-roboto font-extrabold  items-center justify-center text-2xl">
                GP
              </div>
              <p className="flex w-full font-roboto font-light px-10 items-center text-center justify-center text-lg">
                MBBS, MRCGP, DRCOG, DFSRH, Pg Dip Prac Derm
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center relative bottom-5 lg:bottom-0">
          <div className="z-20">
            {" "}
            <Image
              src="/assets/images/Adil.png"
              alt="logo"
              width={165}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="bg-sky-200 lg:h-[200px] items-center justify-center flex flex-col w-full  pt-10 relative bottom-10 ">
            <div className="flex w-full font-roboto font-semibold items-center justify-center text-2xl">
              Dr Mohammad Adil U Khan
            </div>
            <div className="flex w-full font-roboto font-extrabold  items-center justify-center text-2xl">
              GP
            </div>
            <p className="flex w-full font-roboto font-light px-10 items-center text-center justify-center text-lg">
              MBBS, MRCGP, MRCP(UK), MRCP(Glasg), FFTM RCPS(Glasg), FACTM, FFTM
              ACTM, DOccMed, Travel and Occupational Health Physician
            </p>
          </div>
        </div>
      </div>
      <p className="p1 ">
        <span className="font-semibold">Dr Mariyam Malik</span> is an
        experienced private and NHS GP with over 16 years of postgraduate
        clinical experience, specializing in comprehensive family medicine for
        patients of all ages. Her compassionate approach underscores the
        importance of delivering exceptional health services to families.
      </p>
      <p className="p1 flex  pt-4">
        With a diverse background, Dr Malik has extensive experience in
        Geriatric/Stroke Medicine, having served as a Stroke Registrar. She also
        held various leadership positions in the NHS such as Cancer Lead and
        Lead GP in an NHS Practice in Greater Manchester while also practicing
        as a private GP. As a married mother of three young children, Dr Malik
        brings a personal understanding of family health dynamics to her
        practice. Her commitment to various aspects of General Practice
        demonstrates her passion for making a positive impact on the lives of
        her patients.
      </p>

      <p className="p1 pt-8">
        <span className="font-semibold">Dr Mohammad Khan</span> is a primary
        care physician/GP with extensive experience in general medicine having
        graduated from medical school in 2009. He is trained in general practice
        having achieved UK CCT. Prior to this he had extensive experience in
        hospital medicine in different medical specialties.
      </p>
      <p className="p1 flex  pt-4">
        Dr Khan has special interests in Acute Medicine and Urgent Unscheduled
        Care, Sexual Health, Joint Injections, Occupational, Travel and Aviation
        Medicine besides clinical leadership and medical education. He has
        completed Health Education England's Post Graduate Module in Medical
        Leadership from Edge Hill University and Next Generation GP Emerging
        Leaders Programme. He currently holds some leadership positions such as
        First Five Co-Chair of the Royal College of General Practitioners'
        Northwest England Faculty, Regional Advisor Northwest England and
        International Advisor, Faculty of Travel Medicine, Royal College of
        Physicians & Surgeons, Glasgow and Member of the Royal College of
        General Practitioners' IMG Working Group of the Northern Faculties.
      </p>
    </>
  );
};

export default MIntro;
